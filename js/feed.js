/**
 * 505 GET FREE — Community Feed
 * ─────────────────────────────────────────────────────────────
 * HOW TO ADD AN UPDATE:
 *
 * 1. Copy one { } block below
 * 2. Paste it at the TOP of the FEED_ITEMS array (newest first)
 * 3. Fill in: date, caption, imageUrl (or leave "" to use emoji), emoji
 * 4. Save the file — the homepage updates automatically
 *
 * FIELD GUIDE:
 *   date       — "Month DD, YYYY"  e.g. "April 18, 2026"
 *   caption    — A sentence or two. No formal title needed.
 *   imageUrl   — Full URL to a photo (https://...), OR leave ""
 *                to show the emoji placeholder instead.
 *   emoji      — Fallback icon used when no photo is provided.
 * ─────────────────────────────────────────────────────────────
 *
 * ─────────────────────────────────────────────────────────────
 * AIRTABLE INTEGRATION (future — post from your phone)
 * ─────────────────────────────────────────────────────────────
 * When you're ready to manage this feed from Airtable:
 *
 * 1. Create an Airtable base with a table called "Feed" and
 *    these columns:
 *      Date       (Date field)
 *      Caption    (Long text)
 *      Photo      (Attachment)
 *      Published  (Checkbox)
 *
 * 2. In Airtable: click your avatar → Developer hub →
 *    Personal access tokens → Create token.
 *    Scope needed: data.records:read on your base.
 *
 * 3. Replace the FEED_ITEMS array below with this fetch:
 *
 *    const AIRTABLE_BASE  = 'appXXXXXXXXXXXXXX';   // your base ID
 *    const AIRTABLE_TABLE = 'Feed';
 *    const AIRTABLE_TOKEN = 'patXXXXXXXXXXXXXX';   // your token
 *
 *    async function fetchFeedFromAirtable() {
 *      const url =
 *        `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`
 *        + `?sort[0][field]=Date&sort[0][direction]=desc`
 *        + `&filterByFormula={Published}=1`;
 *      const res = await fetch(url, {
 *        headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
 *      });
 *      const json = await res.json();
 *      return json.records.map(r => ({
 *        date:     r.fields.Date     ?? '',
 *        caption:  r.fields.Caption  ?? '',
 *        imageUrl: r.fields.Photo?.[0]?.url ?? '',
 *        emoji:    '📸'
 *      }));
 *    }
 *
 * 4. In the renderFeedHome() and renderFeedFull() functions
 *    below, replace "FEED_ITEMS" with the result of
 *    await fetchFeedFromAirtable().
 *    (Mark those functions async and await the call.)
 *
 * That's it — new posts in Airtable appear on the site
 * automatically, no code changes required.
 * ─────────────────────────────────────────────────────────────
 */

const FEED_ITEMS = [
  {
    date:     "April 15, 2026",
    caption:  "Our team joined the Albuquerque Community Health Fair — great conversations with neighbors and partners about recognizing and reporting trafficking.",
    imageUrl: "",
    emoji:    "🤝"
  },
  {
    date:     "March 28, 2026",
    caption:  "Welcoming our new advocacy coordinator to the team. We're growing to keep up with the need across New Mexico.",
    imageUrl: "",
    emoji:    "👋"
  },
  {
    date:     "March 12, 2026",
    caption:  "Training completed with dispensary staff in Santa Fe — cannabis industry workers are now better equipped to recognize and report trafficking.",
    imageUrl: "",
    emoji:    "🌿"
  },
  {
    date:     "February 28, 2026",
    caption:  "This month we welcomed international partners from six countries to learn about our model. Grateful for the exchange and the friendships made.",
    imageUrl: "",
    emoji:    "🌐"
  },
  {
    date:     "February 10, 2026",
    caption:  "Important conversation at the New Mexico Human Trafficking Task Force on the intersections of MMIP and trafficking. Community-led responses are making a real difference.",
    imageUrl: "",
    emoji:    "🤝"
  },
  {
    date:     "January 22, 2026",
    caption:  "Reminder: all NM businesses subject to minimum wage laws are required to post the 505-GET-FREE number. Updated signage is available to download free on our site.",
    imageUrl: "",
    emoji:    "📋"
  }
];

/* ─────────────────────────────────────────────────────────────
   Build a single feed card element
   ───────────────────────────────────────────────────────────── */
function buildFeedCard(item) {
  const imageBlock = item.imageUrl
    ? `<img class="feed-card-img" src="${item.imageUrl}" alt="Update from 505 GET FREE" loading="lazy">`
    : `<div class="feed-card-img-placeholder" aria-hidden="true">${item.emoji}</div>`;

  return `
    <article class="feed-card">
      ${imageBlock}
      <div class="feed-card-body">
        <time class="feed-card-date">${item.date}</time>
        <p class="feed-card-caption">${item.caption}</p>
      </div>
    </article>
  `;
}

/* ─────────────────────────────────────────────────────────────
   Homepage: show 3 most recent items
   ───────────────────────────────────────────────────────────── */
function renderFeedHome() {
  const container = document.getElementById('feed-grid-home');
  if (!container) return;
  container.innerHTML = FEED_ITEMS.slice(0, 3).map(buildFeedCard).join('');
}

/* ─────────────────────────────────────────────────────────────
   Full feed page (news.html): show all items
   ───────────────────────────────────────────────────────────── */
function renderFeedFull() {
  const container = document.getElementById('feed-grid-full');
  if (!container) return;
  container.innerHTML = FEED_ITEMS.map(buildFeedCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeedHome();
  renderFeedFull();
});
