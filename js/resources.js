/**
 * 505 GET FREE — Resource Directory Data
 * ─────────────────────────────────────────────────────────────────
 * Resources are fetched live from Airtable.
 *
 * TO ADD OR EDIT A RESOURCE:
 *   Open the Airtable base directly — changes appear on the site
 *   automatically. Check "Active Status" to publish; uncheck to hide.
 *
 * NOTE ON API TOKEN:
 *   The token below is read-only (data.records:read scope only).
 *   It cannot modify, delete, or create records. Rotating it requires
 *   updating this file and redeploying.
 * ─────────────────────────────────────────────────────────────────
 */

/* ─── Airtable configuration ─────────────────────────────────── */
// AIRTABLE_TOKEN is defined by js/airtable-config.js, which is loaded
// before this file. Locally: create js/airtable-config.js from the
// template in that file. On Netlify: set the AIRTABLE_TOKEN env variable
// and the netlify.toml build command generates the file automatically.
const AIRTABLE_BASE            = 'appQ20I7mwqYDEiMo';
const AIRTABLE_RESOURCES_TABLE = 'tblebhPFf3Yl34TcO';

/* ─── Airtable field names ───────────────────────────────────── */
// Airtable REST API returns field names (not IDs) as response keys.
const RES_FIELDS = {
  name:        'Organization Name',
  description: 'Description',
  phone:       'Phone Number',
  address:     'Address',
  website:     'Organization Website',
  categories:  'Service Tags',
  active:      'Active Status',
  city:        'City',
  lat:         'Latitude',
  lng:         'Longitude',
};

/* ─── Runtime resource store (populated by fetchResourcesFromAirtable) ── */
var RESOURCES = [];

/* ─── Static UI configuration ────────────────────────────────── */

const ALL_CATEGORIES = [
  { id: "shelter",          label: "Shelter" },
  { id: "housing",          label: "Housing" },
  { id: "food",             label: "Food" },
  { id: "mental-health",    label: "Mental Health" },
  { id: "medical",          label: "Medical" },
  { id: "legal",            label: "Legal" },
  { id: "substance-use",    label: "Substance Use" },
  { id: "domestic-violence",label: "Domestic Violence" },
  { id: "children",         label: "Children" },
  { id: "employment",       label: "Employment" },
  { id: "lgbtq",            label: "LGBTQ+" },
  { id: "sexual-assault",   label: "Sexual Assault" },
  { id: "immigration",      label: "Immigration" },
  { id: "education",        label: "Education" },
  { id: "disability",       label: "Disability" },
  { id: "faith-based",      label: "Faith-Based" },
  { id: "financial",        label: "Financial Aid" },
  { id: "advocacy",         label: "Advocacy" },
  { id: "hotline",          label: "Hotline" }
];

const CITIES = [
  { id: "all",           label: "All Locations" },
  { id: "albuquerque",   label: "Albuquerque" },
  { id: "santa-fe",      label: "Santa Fe" },
  { id: "las-cruces",    label: "Las Cruces" },
  { id: "taos",          label: "Taos" },
  { id: "farmington",    label: "Farmington" },
  { id: "hobbs",         label: "Hobbs" },
  { id: "carlsbad",      label: "Carlsbad" },
  { id: "los-lunas",     label: "Los Lunas" },
  { id: "colorado",      label: "Colorado" },
  { id: "us-national",   label: "U.S. National" },
  { id: "international", label: "International" }
];

/* City center coordinates for map view */
const CITY_CENTERS = {
  "all":           { lat: 34.5199, lng: -105.8701, zoom: 6 },
  "albuquerque":   { lat: 35.0844, lng: -106.6504, zoom: 12 },
  "santa-fe":      { lat: 35.6870, lng: -105.9378, zoom: 12 },
  "las-cruces":    { lat: 32.3199, lng: -106.7637, zoom: 12 },
  "taos":          { lat: 36.4072, lng: -105.5731, zoom: 12 },
  "farmington":    { lat: 36.7281, lng: -108.2087, zoom: 12 },
  "hobbs":         { lat: 32.7026, lng: -103.1360, zoom: 12 },
  "carlsbad":      { lat: 32.4207, lng: -104.2288, zoom: 12 },
  "los-lunas":     { lat: 34.8065, lng: -106.7322, zoom: 12 },
  "colorado":      { lat: 39.5501, lng: -105.7821, zoom: 7 },
  "us-national":   { lat: 38.9072, lng: -96.0000,  zoom: 4 },
  "international": { lat: 20.0000, lng: 0.0000,    zoom: 2 }
};

/* ─── Reverse-lookup maps (label → ID) ──────────────────────── */
function _buildReverseMaps() {
  const catMap = {};
  ALL_CATEGORIES.forEach(c => {
    catMap[c.label.toLowerCase()] = c.id;
    catMap[c.id.toLowerCase()]    = c.id; // also accept raw IDs
  });
  const cityMap = {};
  CITIES.forEach(c => {
    cityMap[c.label.toLowerCase()] = c.id;
    cityMap[c.id.toLowerCase()]    = c.id;
  });
  return { catMap, cityMap };
}

/* ─── Fetch all active resources from Airtable (with pagination) ── */
/**
 * Populates the global RESOURCES array from Airtable.
 * Only records with "Active Status" checked are included.
 * Results are sorted alphabetically by name.
 *
 * @returns {Promise<void>} Resolves when RESOURCES is ready.
 * @throws  Will rethrow on network/API errors so callers can show fallback UI.
 */
async function fetchResourcesFromAirtable() {
  const { catMap, cityMap } = _buildReverseMaps();

  const headers   = { Authorization: `Bearer ${AIRTABLE_TOKEN}` };
  const fieldQS   = Object.values(RES_FIELDS)
                      .map(id => `fields[]=${encodeURIComponent(id)}`)
                      .join('&');
  const filterQS  = `filterByFormula=${encodeURIComponent('{Active Status}=1')}`;

  const allRecords = [];
  let offset = null;

  try {
    do {
      const url =
        `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_RESOURCES_TABLE}` +
        `?${fieldQS}&${filterQS}&pageSize=100` +
        (offset ? `&offset=${encodeURIComponent(offset)}` : '');

      const res = await fetch(url, { headers });
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`Airtable API ${res.status}: ${body}`);
      }

      const json = await res.json();
      allRecords.push(...json.records);
      offset = json.offset || null;

    } while (offset);

  } catch (err) {
    console.error('[505 GET FREE] Failed to load resources from Airtable:', err);
    RESOURCES = [];
    throw err; // caller handles fallback UI
  }

  /* Map Airtable records → internal resource objects */
  RESOURCES = allRecords.map(rec => {
    const f = rec.fields;

    /* City: singleSelect returns a plain string via API */
    const rawCity = (f[RES_FIELDS.city] || '').toLowerCase().trim();
    const city    = cityMap[rawCity] || 'us-national';

    /* Categories: multipleSelects returns an array of strings */
    const rawCats  = Array.isArray(f[RES_FIELDS.categories]) ? f[RES_FIELDS.categories] : [];
    const categories = rawCats
      .map(label => catMap[(label || '').toLowerCase().trim()])
      .filter(Boolean);

    return {
      name:        (f[RES_FIELDS.name]        || '').trim(),
      description: (f[RES_FIELDS.description] || '').trim(),
      phone:       (f[RES_FIELDS.phone]       || '').trim(),
      address:     (f[RES_FIELDS.address]     || '').trim(),
      website:     (f[RES_FIELDS.website]     || '').trim(),
      city,
      categories,
      lat:  Number(f[RES_FIELDS.lat])  || 0,
      lng:  Number(f[RES_FIELDS.lng])  || 0,
    };
  });

  /* Alphabetical sort for consistent listing order */
  RESOURCES.sort((a, b) => a.name.localeCompare(b.name));
}
