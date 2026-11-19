// 505getfree.org visit counter.
//
// POST /api/visits  -> counts one visit (the browser sends this once per session)
// GET  /api/visits  -> returns { visits }: the all-time total (starting balance + counted visits)
//
// Privacy: no cookies, no IP addresses, no user agents, and no identifiers are
// stored. The database holds only one number per calendar day.
//
// Storage: Upstash Redis (free plan), reached over its REST API. Credentials come
// from environment variables set by the Vercel/Upstash integration.

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

const DAILY_KEY = 'visits:daily';
// Starting balance: Google Analytics sessions, Jan 1 - Nov 19, 2026 (1,620).
// Visits counted by this function are added on top of it.
const BASELINE = 1620;
const MAX_HITS_PER_MINUTE = 30; // flood guard; real traffic on this site is far below this
const ALLOWED_HOSTS = ['505getfree.org', 'www.505getfree.org'];
const BOT_UA = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|monitor|uptime|facebookexternalhit|curl|wget|python|axios|node-fetch|go-http|java\//i;

async function redis(command) {
  const res = await fetch(REDIS_URL, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + REDIS_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!res.ok) throw new Error('Redis HTTP ' + res.status);
  const body = await res.json();
  if (body.error) throw new Error(body.error);
  return body.result;
}

function dayString(date) {
  return date.toISOString().slice(0, 10); // UTC day, YYYY-MM-DD
}

function hostOf(value) {
  try { return new URL(value).hostname; } catch (e) { return ''; }
}

function isFromOurSite(req) {
  const h = req.headers;
  if (h['sec-fetch-site'] === 'same-origin') return ALLOWED_HOSTS.includes(hostOf(h.origin || h.referer || 'https://' + h.host));
  return ALLOWED_HOSTS.includes(hostOf(h.origin)) || ALLOWED_HOSTS.includes(hostOf(h.referer));
}

async function recordVisit(req) {
  if (!isFromOurSite(req)) return;
  if (BOT_UA.test(req.headers['user-agent'] || '')) return;

  const minuteKey = 'visits:rate:' + Math.floor(Date.now() / 60000);
  const hitsThisMinute = await redis(['INCR', minuteKey]);
  if (hitsThisMinute === 1) await redis(['EXPIRE', minuteKey, 120]);
  if (hitsThisMinute > MAX_HITS_PER_MINUTE) return;

  await redis(['HINCRBY', DAILY_KEY, dayString(new Date()), 1]);
}

async function allTimeTotal() {
  const flat = (await redis(['HGETALL', DAILY_KEY])) || []; // [day, count, day, count, ...]
  let counted = 0;
  for (let i = 1; i < flat.length; i += 2) counted += Number(flat[i]) || 0;
  return BASELINE + counted;
}

module.exports = async function handler(req, res) {
  if (!REDIS_URL || !REDIS_TOKEN) {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'POST') return res.status(204).end();
    return res.status(200).json({ visits: null });
  }

  if (req.method === 'POST') {
    try { await recordVisit(req); } catch (e) { /* never let counting affect a visitor */ }
    res.setHeader('Cache-Control', 'no-store');
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    try {
      const visits = await allTimeTotal();
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      return res.status(200).json({ visits });
    } catch (e) {
      res.setHeader('Cache-Control', 'public, s-maxage=60');
      return res.status(200).json({ visits: null });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end();
};
