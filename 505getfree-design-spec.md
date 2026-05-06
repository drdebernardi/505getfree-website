# 505 GET FREE — Design Specification
**Version 1.0 · May 2026**  
Project: 505getfree.org redesign  
Operated by: The Life Link, Santa Fe, New Mexico

---

## 1. Brand Identity

| | |
|---|---|
| **Full name** | 505 GET FREE |
| **Tagline** | New Mexico's Human Trafficking Resource Hotline |
| **Hotline** | (505) 438-3733 · also written as 505-GET-FREE |
| **Email** | 505getfree@gmail.com |
| **Parent org** | The Life Link · nonprofit · est. 1987 · Santa Fe, NM |
| **Established** | 2012 |
| **Service area** | Statewide New Mexico — all 33 counties |

### Tone & Personality
Soft, spa-like, and airy — never bold, alarming, or heavy. The site serves people in crisis and people who may be afraid. Every design decision should feel **calm, private, and trustworthy.**

- Quiet and unhurried — not urgent or alarming
- Warm but not casual — serious work done with grace
- Typography-forward: the serif carries the emotional weight
- Light backgrounds with generous white space throughout
- No bright colors, no aggressive contrast, no exclamation marks in headings

---

## 2. Color Palette

All colors are defined as CSS custom properties on `:root`.

```css
:root {
  --navy:       #1D2A8A;  /* Deep Royal Navy — primary brand, CTAs, eyebrows */
  --ink:        #0E1A66;  /* Ink Navy — headings, dark sections, hover states */
  --turquoise:  #00C8E6;  /* Turquoise ★ Accent — logo cyan, callouts, icons */
  --sky:        #8FC4DE;  /* Soft Sky — ambient accents, dark-section emphasis */
  --sky-soft:   #B9D7E6;  /* Sky Soft — button hover backgrounds */
  --porcelain:  #EAF2F6;  /* Pale Porcelain — section backgrounds, tags */
  --mist:       #DCE4E9;  /* Mist — image placeholders, subtle fills */
  --veil:       #F4F2ED;  /* Veil — primary page background (warm off-white) */
  --linen:      #ECE7DD;  /* Linen — alternate warm section background */
  --paper:      #FBFAF6;  /* Paper — card backgrounds, nav background */
  --ink-text:   #111734;  /* Ink Text — primary body copy on light backgrounds */
  --ink-muted:  #5A6180;  /* Ink Muted — secondary text, captions, labels */
  --red:        #B24840;  /* Alert Red — EXIT SITE button ONLY. Never decorative. */
}
```

### ★ Turquoise Accent Token
`--turquoise: #00C8E6` is sourced directly from the "505" digits in the logo — the most vivid, saturated color in the brand. It is **distinct from `--sky`** (which is muted and used for ambient glows). Use turquoise for:

- Icon fills and strokes on interactive elements
- Active state highlights and progress indicators
- Callout borders or badge fills
- Any moment where brand energy is needed without reaching for navy

**Avoid** using it as large background fills. It reads best as a sharp accent on white or light surfaces.

### Logo Colors (full set sampled from logo)

| Swatch | Hex | Token | Source |
|---|---|---|---|
| Turquoise ★ | `#00C8E6` | `--turquoise` | "505" digits — official accent token |
| Indigo Navy | `#1A1E80` | `--logo-indigo` | "GET FREE" text and key |
| Royal Blue | `#2A38B5` | `--logo-royal` | Primary hummingbird feathers |
| Cornflower | `#4060C8` | `--logo-cornflower` | Mid-tone wing areas |
| Periwinkle | `#6888D0` | `--logo-periwinkle` | Lighter feather highlights |
| Ice Blue | `#A8C4E4` | `--logo-ice` | Palest feather tones |
| White | `#FFFFFF` | `--logo-white` | Hummingbird chest |
| Black | `#000000` | `--logo-black` | Dark-mode / reversed lockup only |

### Color Usage Rules

| Context | Colors to Use |
|---|---|
| Page backgrounds | Alternate between `--veil`, `--paper`, `--porcelain`, `--linen`. Never pure white or black. |
| Accent / highlight | `--turquoise` — icon fills, active badges, callout borders. Not for large fills. |
| Dark sections | `linear-gradient(180deg, var(--ink) 0%, var(--navy) 100%)` |
| Sky blue | Ambient accent only — in dark contexts or as eyebrow rule on dark backgrounds |
| Red | Exclusive to the Exit Site button. Never use elsewhere. |
| Text on dark | `#fff` headings · `rgba(255,255,255,0.7–0.9)` body copy |
| Borders / dividers | `rgba(29,42,138, 0.08–0.15)` — always navy-tinted, never gray |

---

## 3. Typography

### Typeface Stack
```css
--serif: 'Cormorant Garamond', Georgia, serif;
--sans:  'Outfit', ui-sans-serif, system-ui, sans-serif;
```

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap
```

### Typeface Roles

| Font | Role |
|---|---|
| **Cormorant Garamond** | All headings (h1–h4), large numerals, pull quotes, blockquotes, hotline number, serif emphasis in body |
| **Outfit** | All body copy, UI labels, eyebrows, buttons, navigation, captions |

### Type Scale

| Element | Size | Weight | Line Height | Spacing |
|---|---|---|---|---|
| h1 Hero | `clamp(52px, 6.6vw, 92px)` | 300 | 0.98 | -0.02em |
| h1 Page hero | `clamp(50px, 6vw, 86px)` | 300 | 0.98 | -0.02em |
| h2 Section | `clamp(40px, 4.6vw, 60px)` | 300 | 1.02 | -0.012em |
| h2 CTA band | `clamp(42px, 5vw, 68px)` | 300 | 1.05 | -0.01em |
| h3 Cards | 24–32px | 400 | 1.1–1.2 | — |
| h4 Steps | 18–22px | 400 | 1.3 | — |
| Body base | 16px | 300 | 1.7 | — |
| Body lead | 17–19px | 300 | 1.8 | — |
| Captions | 13–15px | 300 | 1.65–1.75 | — |
| Eyebrow label | 11px | 400 | — | 0.32em |
| Button label | 12px | 400 | — | 0.22em |

### Eyebrow Label Pattern
```css
.eyebrow {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--navy);
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
.eyebrow::before {
  content: "";
  width: 28px; height: 1px;
  background: var(--navy);
  opacity: .55;
}
/* On centered eyebrows: .eyebrow::before { display: none; } */
/* On dark backgrounds: color: var(--sky); eyebrow::before background: var(--sky); */
```

### Italic Usage Rule
Italic Cormorant Garamond in `--navy` is used on key emotional words within headings — e.g. *"Help is one call away."* This is a core design pattern, not a decoration. In dark section headings the italic emphasis uses `--sky` instead of navy.

---

## 4. Spacing & Layout

### Container
```css
.inner { max-width: 1240px; margin: 0 auto; padding: 0 48px; }
/* ≤1100px */ padding: 0 32px;
/* ≤760px  */ padding: 0 22px;
```

### Section Padding
```css
.pad-xl { padding: 140px 0; }
.pad-lg { padding: 120px 0; }  /* most common */
.pad-md { padding: 96px 0; }
```

### Border Radius
```css
--radius-sm: 4px;   /* form inputs, small tags */
--radius:    14px;  /* cards */
--radius-lg: 28px;  /* large panels, hotline strip */
```

### Grid Patterns

| Pattern | CSS | Used In |
|---|---|---|
| Two-col content split | `1fr 1.2fr` or `1.2fr 1fr` | Promise, steps, law split |
| Three-col cards | `repeat(3, 1fr)` gap 22–28px | Services, pillars, amounts |
| Four-col | `repeat(4, 1fr)` gap 16–24px | Locations, downloads, post-grid |
| Two-col equal | `1fr 1fr` gap 0 | Two-tone split sections |
| Footer | `1.6fr 1fr 1fr 1fr` gap 56px | Footer only |

**Borders always use navy-tinted rgba — never gray:**
```css
border: 1px solid rgba(29,42,138, 0.08);   /* default */
border: 1px solid rgba(29,42,138, 0.15);   /* hover / active */
```

---

## 5. Easing & Animation

### Custom Ease
```css
--ease: cubic-bezier(.2, .7, .2, 1);
```

### Libraries
- **GSAP 3.12.2** + **ScrollTrigger** via Cloudflare CDN — loaded in `<head>` of all inner pages
- `gsap.registerPlugin(ScrollTrigger)` called once per page

### Hero Entrance (page load)
Elements start at `opacity: 0; transform: translateY(24–30px)` via inline style.
```js
const tl = gsap.timeline({ delay: 0.1 });
tl.to('.eyebrow', { opacity:1, y:0, duration:0.7, ease:'power3.out' })
  .to('h1',       { opacity:1, y:0, duration:1.0, ease:'power3.out' }, '-=0.4')
  .to('.body',    { opacity:1, y:0, duration:0.8, ease:'power2.out' }, '-=0.5')
  .to('.cta',     { opacity:1, y:0, duration:0.6, ease:'power2.out' }, '-=0.3');
```

### 3D Card Flip Reveal (primary scroll pattern)
```js
gsap.set('.card', {
  opacity: 0, y: 55, rotateX: 18,
  transformPerspective: 900, transformOrigin: 'top center'
});
gsap.to('.card', {
  scrollTrigger: { trigger: '.grid', start: 'top 68–72%', toggleActions: 'play none none reverse' },
  opacity: 1, y: 0, rotateX: 0,
  duration: 0.75, stagger: 0.10–0.15, ease: 'power2.out'
});
```

### Other Patterns
```js
/* Slide in from sides */
gsap.from('.left',  { opacity:0, x:-40, duration:1.0, ease:'power3.out' });
gsap.from('.right', { opacity:0, x:35,  duration:1.0, ease:'power3.out', delay:0.15 });

/* Staggered list */
gsap.from('.item', { opacity:0, y:30, duration:0.65, stagger:0.1, ease:'power3.out' });

/* CTA band */
gsap.from('.closing-content', { opacity:0, y:45, duration:1.0, ease:'power3.out' });
```

### CSS Keyframe Animations

| Class | Effect | Duration |
|---|---|---|
| `.dot` pulse | Box-shadow expands/fades — live hotline indicator | 2.4s infinite |
| `.float-a` | `translateY(0 → -16px) rotate(0 → 4deg)` | 7s infinite |
| `.float-b` | `translateY(0 → -11px)` | 9s infinite, 1.5s delay |
| Logo breathe | `scale(1 → 1.03)` on hero rings only | 9s infinite |

**Hover:** all use `transition: all .3s var(--ease)`. Cards lift `translateY(-4–6px)`. Nav links reveal 18px underline via width animation.

---

## 6. Components

### Buttons
```css
.btn {
  font-family: var(--sans);
  font-size: 12px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase;
  padding: 16px 30px; border-radius: 100px;
  display: inline-flex; align-items: center; gap: 10px;
  transition: all .3s var(--ease);
}
```

| Class | Background | Text | Hover |
|---|---|---|---|
| `.btn-primary` | `--navy` | White | Ink bg, lift + shadow |
| `.btn-light` | White | `--navy` | Sky-soft bg, lift |
| `.btn-secondary` | Transparent | `--navy`, navy border | Navy fill, white text |
| `.btn-ghost` | None | `--navy`, bottom border only | Letter-spacing → 0.28em |
| `.btn-outline-light` | None | White, white border | Slight white fill |

Arrow `→` inside buttons: `transform: translateX(4px)` on hover.

### Navigation

| Element | Spec |
|---|---|
| Top status bar | Navy gradient · 12px Outfit 300 · 0.14em · ALL CAPS · live pulse dot |
| Primary nav | 92px · `rgba(251,250,246,0.88)` + `backdrop-filter: blur(16px)` · sticky |
| Nav links | 11px · 0.22em · ALL CAPS · hover: navy + 18px underline reveal |
| Dropdowns | Paper bg · 4px radius · slides on hover |
| "Get Help" CTA | Pill · navy border/text · fills navy on hover |
| Exit Site button | Octagon · `--red` · 58×58px · rotates -6° hover · → weather.com |
| Mobile nav | Drops from 72px · hamburger → X toggle |

### Dark Section Panel
```css
background: linear-gradient(160deg, var(--ink) 0%, var(--navy) 100%);
border-radius: var(--radius-lg);  /* 28px */
padding: 52px 48px;
box-shadow: 0 40px 80px -40px rgba(14,26,102,.35);
/* ::before: radial sky glow overlay */
```
White text, sky-blue italic emphasis, sky-blue display numbers.

### CTA Band (closing section, every page)
```css
background: [radial gradients] + linear-gradient(180deg, var(--ink), var(--navy));
padding: 140px 48px;
text-align: center;
```
Sky eyebrow → large white serif h2 (sky italic) → muted white body → button pair.

### Page Hero (inner pages)
- Background: layered radial gradient washes over `--veil`
- Ambient glow blobs in `::before` / `::after` pseudo-elements
- Ambient shapes: small soft circle (sky, 13% opacity) + tiny 9px sky dot only
- **Diamond and rectangle shapes have been removed from all pages**
- Content: breadcrumb → eyebrow → h1 → body. Centered on About, left-aligned elsewhere.
- Padding: `110px 48px 130px`

### Footer
4-col grid (`1.6fr 1fr 1fr 1fr`). Paper background. Columns: brand (logo + tagline + hotline) · About · Resources · Take Action. Bottom bar: copyright · ⚠ danger note · Exit Site button.

### Selection Color
```css
::selection { background: var(--sky); color: var(--ink); }
```

---

## 7. Forms

```css
.f-input {
  font-family: var(--sans); font-size: 15px; font-weight: 300;
  padding: 13px 16px;
  border: 1px solid rgba(29,42,138,.18);
  border-radius: 4px;
  background: #fff; outline: none;
}
.f-input:focus {
  border-color: var(--navy);
  box-shadow: 0 0 0 3px rgba(29,42,138,.08);
}
```

| Element | Spec |
|---|---|
| Field labels | 11px · 500 weight · 0.22em · ALL CAPS · `--navy` |
| Pill radio/checkbox | `border-radius: 100px` · checked = navy fill, white text |
| Custom checkboxes | `appearance: none` · navy fill · white checkmark via `::after` |
| Section numbers | 44px Cormorant italic · sky blue · section markers in long forms |
| Submit | `.btn-primary` with arrow → |
| Form endpoint | Formspree — replace `REPLACE_WITH_YOUR_ID` in reporting.html |

---

## 8. Page Structures

### index.html — Home
Topbar → Nav → Hero (two-col: content left / logo+rings right) → Hotline Strip → Trust Ribbon (5 stats) → Promise (dark card + blockquote) → Who We Serve (3 cards) → Locations (4-col) → News Feed (3 cards) → Partners → CTA Band → Footer

### about.html
Hero (centered) → Initiative split → Stats strip → Mission quote → 3 Pillars → Reality cards → Dark promise card → Team grid → Partner tiles → CTA Band → Footer

### get-help.html
Centered hero (giant serif phone as primary CTA) → Services grid (6 cards) → Steps list → Privacy band (dark) → Two-path split → CTA Band → Footer

### reporting.html
Hero → Report methods (2×2) → Confidentiality band → Checklist → 4-step flow → FAQ accordion → 6-section victim contact form → CTA Band → Footer

### resources.html
Compact hero → Sticky filter bar (city tabs + search + category chips) → List | Leaflet map split → Footer

### news.html
Hero → Sticky section filter nav → Featured cards + media rows (local) → National / regional / investigation sub-sections → Official record list → Video grid → Footer

### get-listed.html
Hero → 3 benefit cards → Eligibility card (sticky) + Application form → CTA Band → Footer

### signage.html
Hero → Statute text + block quote → 4 poster previews (EN / ES / Navajo / Mandarin) → Where to post (4-item) → FAQ accordion → CTA Band → Footer

### donate.html
Hero → 3 impact stats → Amount cards ($25 / $100 / $250) → 3 ways to give → CTA Band → Footer

---

## 9. Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| Default | Full desktop layout |
| `≤ 1200px` | Downloads: 4-col → 2-col |
| `≤ 1100px` | Nav/inner padding: 48px → 32px · footer: 4-col → 2-col |
| `≤ 1000px` | Most 3-col grids → 1-col · two-col splits collapse · map stacks above list |
| `≤ 760px` | Desktop nav → hamburger · padding → 22px · topbar collapses · footer → 1-col |
| `≤ 600px` | Remaining form grids and card grids → 1-col |

---

## 10. Assets & Dependencies

| Asset | Path / URL |
|---|---|
| Primary logo | `images/logo-main.png` |
| Favicon | `favicon.ico` · `images/favicon-32.png` · `images/favicon-16.png` |
| Apple touch icon | `images/apple-touch-icon.png` |
| Google Fonts | Cormorant Garamond + Outfit via fonts.googleapis.com |
| GSAP | `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js` |
| ScrollTrigger | `cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js` |
| Leaflet CSS | `unpkg.com/leaflet@1.9.4/dist/leaflet.css` |
| Leaflet JS | `unpkg.com/leaflet@1.9.4/dist/leaflet.js` |
| Resource data | `js/resources.js` — CITIES, RESOURCES, ALL_CATEGORIES, CITY_CENTERS |
| Map tiles | CartoDB Light · `basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png` |
| Form endpoint | Formspree — update action URL in `reporting.html` |

---

## 11. Dos & Don'ts

### Do
- Use Cormorant Garamond italic in `--navy` for emotional emphasis within headings
- Keep backgrounds in the warm/cool neutral family: veil, paper, porcelain, linen
- Apply generous section padding — sections breathe; nothing is cramped
- Use the 3D flip reveal for card grids on scroll
- Center the eyebrow and hide its rule prefix in centered layouts
- Use `--turquoise` for icon fills, active states, callout borders, badges
- Keep all forms soft — navy on focus, never harsh red
- Maintain the Exit Site button on every page, unchanged
- Use navy-tinted `rgba` borders — never gray

### Don't
- Use pure white or pure black as section backgrounds
- Add diamond or rectangle floating shapes — removed from all pages
- Use `--red` for anything except the Exit Site button
- Apply `font-weight: 700` or above anywhere in the UI
- Use turquoise or sky as large background fills on light pages
- Create aggressive hover states — all transitions should be subtle
- Use gray for borders or dividers
- Add exclamation marks to headings
- Modify the Exit Site button's color, size, shape, or behavior

---

*505 GET FREE Design Specification · v1.0 · May 2026 · The Life Link, Santa Fe NM*
