# 505 GET FREE — Design Specification
**Version 1.0 · May 2026**
**Project:** 505getfree.org redesign
**Operated by:** The Life Link, Santa Fe, New Mexico

---

## 1. Brand Identity

**Full name:** 505 GET FREE  
**Tagline:** New Mexico's Human Trafficking Resource Hotline  
**Hotline number:** (505) 438-3733 · also written as 505-GET-FREE  
**Contact email:** 505getfree@gmail.com  
**Parent organization:** The Life Link (nonprofit, est. 1987, Santa Fe, NM)  
**Established:** 2012  
**Service area:** Statewide New Mexico, all 33 counties  

### Tone & Personality
The brand voice is **soft, spa-like, and airy** — never bold, alarming, or heavy. The site serves people in crisis and people who may be afraid. Every design decision should feel **calm, private, and trustworthy**.

- Quiet and unhurried — not urgent or alarming
- Warm but not casual — serious work done with grace
- Light backgrounds and generous white space throughout
- Typography-forward: the serif font carries the emotional weight
- No bright colors, no aggressive contrast, no exclamation marks in headings

---

## 2. Color Palette

All colors are defined as CSS custom properties on `:root`.

| Token | Hex | Name | Primary Use |
|---|---|---|---|
| `--navy` | `#1D2A8A` | Deep Royal Navy | Primary brand color, CTAs, accents, eyebrows |
| `--ink` | `#0E1A66` | Ink Navy | Headings, dark sections, hover states |
| `--sky` | `#8FC4DE` | Soft Sky | Accents, italic emphasis in dark sections, dots |
| `--sky-soft` | `#B9D7E6` | Sky Soft | Button hover states, light sky fills |
| `--porcelain` | `#EAF2F6` | Pale Porcelain | Section backgrounds, alternate rows |
| `--mist` | `#DCE4E9` | Mist | Image placeholders, subtle dividers |
| `--veil` | `#F4F2ED` | Veil | Primary page background (warm off-white) |
| `--linen` | `#ECE7DD` | Linen | Alternate warm section background |
| `--paper` | `#FBFAF6` | Paper | Card backgrounds, nav background |
| `--ink-text` | `#111734` | Ink Text | Body copy on light backgrounds |
| `--ink-muted` | `#5A6180` | Ink Muted | Secondary text, captions, labels |
| `--red` | `#B24840` | Alert Red | Exit Site button only. Never used decoratively. |

### Color Usage Rules
- **Page backgrounds** alternate between `--veil`, `--paper`, `--porcelain`, and `--linen`. Never pure white or pure black.
- **Dark sections** (CTA bands, privacy bands, hotline strip) use `linear-gradient(180deg, var(--ink) 0%, var(--navy) 100%)`.
- **Sky blue** (`--sky`) only appears as an accent in dark contexts or as the eyebrow line color on dark backgrounds. Never as a large fill on light pages.
- **Red** is reserved exclusively for the "Exit Site" safety button. Do not use it for any other purpose.
- **Text on dark backgrounds** uses `#fff` for headings and `rgba(255,255,255,0.7–0.9)` for body copy.

---

## 3. Typography

### Typeface Stack
```
--serif: 'Cormorant Garamond', Georgia, serif
--sans:  'Outfit', ui-sans-serif, system-ui, sans-serif
```

Both fonts load from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap
```

### Typeface Roles
| Font | Role |
|---|---|
| **Cormorant Garamond** | All headings (h1–h4), large numerals, pull quotes, blockquotes, hotline number in hero, serif emphasis in body |
| **Outfit** | All body copy, UI labels, eyebrows, buttons, navigation, captions |

### Type Scale & Weights

**Headings (Cormorant Garamond)**
- `h1` hero: `clamp(52px, 6.6vw, 92px)` · weight 300 · line-height 0.98 · letter-spacing -0.02em
- `h1` page hero: `clamp(50px, 6vw, 86px)` · weight 300 · line-height 0.98 · letter-spacing -0.02em
- `h2` sections: `clamp(40px, 4.6vw, 60px)` · weight 300 · line-height 1.02 · letter-spacing -0.012em
- `h2` CTA band: `clamp(42px, 5vw, 68px)` · weight 300 · line-height 1.05
- `h3` cards: 24–32px · weight 400 · line-height 1.1–1.2
- `h4` steps/items: 18–22px · weight 400

**Body (Outfit)**
- Base: 16px · weight 300 · line-height 1.7
- Lead/intro: 17–19px · weight 300 · line-height 1.8
- Captions/secondary: 13–15px · weight 300 · line-height 1.65–1.75
- Small labels: 11–12px · weight 400 · letter-spacing 0.22–0.32em · ALL CAPS

**Eyebrow label pattern (used throughout)**
```css
font-family: var(--sans);
font-size: 11px;
font-weight: 400;
letter-spacing: 0.32em;
text-transform: uppercase;
color: var(--navy);
display: inline-flex;
align-items: center;
gap: 14px;
```
The eyebrow has a short horizontal rule prefix (`::before`: 28px wide, 1px tall, navy at 55% opacity). On centered eyebrows, the rule is hidden (`display: none`).

### Italic Usage
Italic in Cormorant Garamond (`font-style: italic; color: var(--navy)`) is used on key words within headings to create warmth and emphasis. Example: "Help is *one call* away." This is a core design pattern — not a decoration.

In dark section headings, the italic emphasis uses `color: var(--sky)` instead of navy.

### Numbers
Large display numbers (stats, prices, years) use Cormorant Garamond, weight 300, in `--navy`. Example: `clamp(44px, 5vw, 68px)`. Italic styling on these numbers is common.

---

## 4. Spacing & Layout

### Container
```css
.inner { max-width: 1240px; margin: 0 auto; padding: 0 48px; }
```
On tablet (`max-width: 1100px`): `padding: 0 32px`  
On mobile (`max-width: 760px`): `padding: 0 22px`

### Section Padding
```css
.pad-xl { padding: 140px 0; }
.pad-lg { padding: 120px 0; }  /* most common */
.pad-md { padding: 96px 0; }
```
Tablet reduces each by ~20px. Mobile reduces to 72–80px.

### Border Radius
```css
--radius-sm: 4px    /* form inputs, small tags */
--radius:    14px   /* cards */
--radius-lg: 28px   /* large panels, hotline strip */
```

### Grid Patterns in Use
- **Two-column content split:** `1fr 1.2fr` or `1.2fr 1fr` (content + sidebar)
- **Three-column cards:** `repeat(3, 1fr)` gap 22–28px
- **Four-column grid:** `repeat(4, 1fr)` gap 16–24px
- **Two-column equal:** `1fr 1fr` gap 0 (used for two-tone split sections)
- **Footer:** `1.6fr 1fr 1fr 1fr` gap 56px

### Dividers & Borders
All borders use `rgba(29,42,138, 0.08–0.15)` — a very subtle navy tint. Never gray. This keeps dividers on-brand even when nearly invisible.

---

## 5. Easing & Animation

### Custom Easing
```css
--ease: cubic-bezier(.2, .7, .2, 1)
```
Used for all transitions. Slightly bouncy on exit, smooth on enter.

### Animation Library
**GSAP 3.12.2** with **ScrollTrigger** plugin, loaded from Cloudflare CDN:
```
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js
```

### Core Animation Patterns

**Hero entrance (staggered, on page load):**
```js
const tl = gsap.timeline({ delay: 0.1 });
tl.to('.eyebrow',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
  .to('h1',          { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' }, '-=0.4')
  .to('.body-text',  { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
  .to('.cta',        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
```
Hero elements start at `opacity: 0; transform: translateY(24–30px)` via inline style.

**3D card flip on scroll (primary card reveal pattern):**
```js
gsap.set('.card', {
  opacity: 0, y: 55, rotateX: 18,
  transformPerspective: 900, transformOrigin: 'top center'
});
gsap.to('.card', {
  scrollTrigger: { trigger: '.card-grid', start: 'top 68–72%', toggleActions: 'play none none reverse' },
  opacity: 1, y: 0, rotateX: 0,
  duration: 0.75–0.8, stagger: 0.10–0.15, ease: 'power2.out'
});
```

**Slide-in from sides:**
```js
gsap.from('.left-panel',  { opacity: 0, x: -40, duration: 1.0, ease: 'power3.out' });
gsap.from('.right-panel', { opacity: 0, x: 35,  duration: 1.0, ease: 'power3.out', delay: 0.15 });
```

**Staggered list items:**
```js
gsap.from('.item', { opacity: 0, y: 30, duration: 0.65, stagger: 0.1, ease: 'power3.out' });
```

**CTA band:**
```js
gsap.from('.closing-content', { opacity: 0, y: 45, duration: 1.0, ease: 'power3.out' });
```

### CSS Keyframe Animations
- **`.dot` pulse** — the live-status indicator: `box-shadow` expands from `0 0 0 4px rgba(143,196,222,.18)` to transparent, 2.4s infinite
- **`.float-a`** — gentle float: `translateY(0→-16px) rotate(0→4deg)`, 7s loop
- **`.float-b`** — gentler float: `translateY(0→-11px)`, 9s loop, 1.5s delay
- **Logo breathe** — `scale(1→1.03)`, 9s loop (hero logo rings only)

### Hover Transitions
All hover states use `transition: all .3s var(--ease)` unless specified otherwise. Cards lift `translateY(-4–6px)` with a deep box-shadow. Nav links reveal a 18px underline via width expansion.

---

## 6. Component Library

### Navigation
- **Top status bar:** Navy gradient background, 12px Outfit 300, 0.14em spacing, ALL CAPS. Contains live pulse dot (sky blue), hotline number as link, and "Free · Confidential · Statewide" text.
- **Primary nav:** 92px tall, frosted glass (`rgba(251,250,246,0.88)` + `backdrop-filter: blur(16px)`), sticky top-0. Logo 62px tall on left, links center, exit button + hamburger right.
- **Nav links:** 11px Outfit, 0.22em spacing, ALL CAPS. Hover: navy color + 18px underline reveal.
- **Dropdowns:** white paper background, 4px radius, subtle navy shadow, slide down on hover.
- **"Get Help" nav CTA:** pill button, navy border, navy text, fills navy on hover. Distinct from all other links.
- **Exit Site button:** octagon clip-path, red (`#B24840`), white text "EXIT / SITE", 58×58px. Spins -6° on hover. Appears in both nav and footer. Safety-critical — never recolor or reposition.
- **Mobile nav:** slides down from top, full-width list, hamburger toggle (3 bars → X).

### Buttons
```css
.btn {
  font-family: var(--sans); font-size: 12px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase;
  padding: 16px 30px; border-radius: 100px;
  display: inline-flex; align-items: center; gap: 10px;
}
```

| Class | Style | Hover |
|---|---|---|
| `.btn-primary` | Navy bg, white text | Darker ink bg, lift + shadow |
| `.btn-light` | White bg, navy text | Sky-soft bg, lift |
| `.btn-ghost` | Transparent, navy text, navy bottom border | Letter-spacing expands to 0.28em |
| `.btn-secondary` | Transparent, navy border, navy text | Navy fill, white text |
| `.btn-outline-light` | Transparent, white border, white text | Slight white fill |

Arrow icon (`→`) inside buttons animates `translateX(4px)` on hover.

### Cards — General Pattern
```css
background: var(--paper);
border: 1px solid rgba(29,42,138, 0.07–0.10);
border-radius: var(--radius); /* 14px */
transition: transform .4s var(--ease), box-shadow .4s var(--ease);
```
Hover: `translateY(-4–6px)` + `box-shadow: 0 30px 60px -36px rgba(14,26,102,.25–.30)`

### Page Hero (inner pages)
Every inner page has a consistent ambient hero section:
- Background: layered radial gradients (warm white wash top-left, porcelain wash bottom-right) over veil
- Ambient glow blobs in pseudo-elements (`::before`, `::after`) — blurred radial gradients, not visible shapes
- Only remaining ambient shape: small soft circle (`border-radius: 50%`, sky blue at 13% opacity) and tiny sky dot (9px circle)
- Floating diamond and rectangle shapes have been **removed** from all pages
- Content: breadcrumb trail → eyebrow → h1 → body text. Centered on about page, left-aligned on most others.
- Padding: `110px 48px 130px`

### Dark Section Panel (Promise Visual)
Used in about page and as a standalone dark card:
```css
background: linear-gradient(160deg, var(--ink) 0%, var(--navy) 100%);
border-radius: 28px;
padding: 52px 48px;
box-shadow: 0 40px 80px -40px rgba(14,26,102,.35);
```
Contains a radial sky-blue ambient wash (`::before`). White text, sky-blue italic emphasis, sky-blue stat numbers.

### CTA Band (closing section, every page)
```css
background: [multi-layer radial gradients] + linear-gradient(180deg, var(--ink), var(--navy));
padding: 140px 48px;
text-align: center;
```
Contains: sky eyebrow → large white serif h2 (sky italic emphasis) → muted white body text → button group. A soft sky glow sits behind the text via `::before` pseudo-element.

### Hotline Strip
Dark navy pill-shaped card, appears floating below the homepage hero:
- Three-column grid: label | large serif phone number | call/text buttons
- `border-radius: 28px`, deep shadow: `0 32px 80px -40px rgba(14,26,102,.55)`
- Phone number: Cormorant Garamond, `clamp(28px, 3.5vw, 44px)`, white

### Eyebrow + Section Head
```css
.section-head { max-width: 720px; }
.section-head.center { text-align: center; max-width: 760px; margin: 0 auto; }
/* h2 inside section-head */
margin-top: 22px; margin-bottom: 22px;
```

### Footer
Four-column grid (`1.6fr 1fr 1fr 1fr`). Paper background. Columns: brand (logo + tagline + hotline) · About links · Resources links · Take Action links. Bottom bar: copyright · danger note (red pill with ⚠) · Exit Site button.

---

## 7. Form Design

Forms use a consistent field style across reporting.html and get-listed.html:

```css
.f-input {
  font-family: var(--sans); font-size: 15px; font-weight: 300;
  padding: 13px 16px;
  border: 1px solid rgba(29,42,138,.18);
  border-radius: 4px;
  background: #fff;
  outline: none;
}
.f-input:focus {
  border-color: var(--navy);
  box-shadow: 0 0 0 3px rgba(29,42,138,.08);
}
```

**Field labels:** 11px Outfit, 500 weight, 0.22em spacing, ALL CAPS, navy.

**Pill radio/checkbox groups:** `border: 1px solid rgba(29,42,138,.22)`, `border-radius: 100px`. Checked state fills navy with white text.

**Checkbox grid items:** custom `appearance: none` checkboxes, navy fill on checked, white checkmark via `::after`.

**Section numbers:** Large Cormorant Garamond italic numerals in sky blue (`font-size: 44px`), used as section markers in long forms.

**Form section divider:** `border-bottom: 1px solid rgba(29,42,138,.1)`, 52px bottom margin/padding.

---

## 8. Key Page Structures

### index.html (Home)
1. Topbar
2. Nav
3. Hero — two-column grid (content left, animated logo right with breathing rings)
4. Hotline Strip — floating dark card
5. Trust Ribbon — 5 stats (2012 · 1st · 100+ · 11 · 24/7)
6. Promise Section — dark card + text with blockquote
7. Who We Serve — 3 cards (3D flip reveal)
8. Locations — 4-column city cards
9. News Feed — 3 cards
10. Partners — grayscale logo row
11. CTA Band
12. Footer

### about.html
Hero (centered) → Initiative split → Stats strip → Mission quote (centered) → Three pillars → Reality in NM stats → Promise dark card → Team cards → Partner tiles → CTA Band → Footer

### get-help.html
Large centered hero (big serif phone number as primary CTA) → Services grid → What to expect (steps list) → Privacy band (dark) → Two-path split → CTA Band → Footer

### reporting.html
Hero → Report methods (2×2 grid) → Confidentiality band → What's helpful checklist → What happens flow (4-step) → FAQ accordion → Victim contact form (6 sections) → CTA Band → Footer

### resources.html
Compact hero → Sticky filter bar (city tabs + search + category chips) → Split layout (scrollable list left, Leaflet map right) → Footer

### news.html
Hero → Sticky filter nav (4 sections) → Featured cards + media rows (local) → Media rows by sub-section (Navajo investigation) → Official record list → Video grid → Footer

### get-listed.html
Hero → Benefits (3 cards) → Apply layout (eligibility card sticky + application form) → CTA Band → Footer

### signage.html
Hero → Law text + statute block → Downloads (4 poster previews: EN/ES/Navajo/Mandarin) → Where to post (4-item grid) → FAQ accordion → CTA Band → Footer

### donate.html
Hero → Impact numbers (3 stats) → Amount cards ($25/$100/$250) → Ways to give (3 columns) → CTA Band → Footer

---

## 9. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Default (desktop) | Full layout as described |
| `max-width: 1200px` | Downloads grid: 4-col → 2-col |
| `max-width: 1100px` | Nav padding 32px; inner padding 32px; footer 2-col; some grids collapse |
| `max-width: 1000px` | Most 3-col grids → 1-col; two-col splits → single column; map stacks above list |
| `max-width: 760px` | Nav hidden → hamburger; mobile nav active; inner padding 22px; hero padding reduced; footer single column; topbar collapses to single centered line |
| `max-width: 600px` | Further collapse of multi-column grids |

---

## 10. Critical UI Patterns

### Exit Site Button
**Always present, never modified.** Appears in the nav (right side) and the footer (right of bottom bar). Red octagon (`clip-path: polygon(29% 0%, 71% 0%, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0% 71%, 0% 29%)`), 58×58px. Inner border ring via `::before`. Rotates -6° on hover. Clicking navigates to `https://weather.com` (quick exit for safety).

### Topbar Live Indicator
The pulsing sky-blue dot (`animation: pulse 2.4s ease-in-out infinite`) signals the hotline is live. Always present at top of every page.

### Selection Color
```css
::selection { background: var(--sky); color: var(--ink); }
```

### FAQ Accordion
Built with native `<details>/<summary>`. The `+` icon in summary `::after` rotates to `×` when open via `transform: rotate(45deg)`. No JavaScript required.

### Breadcrumb Trail (inner pages)
Small ALL CAPS trail below the page hero, visually guides users. Uses `opacity: .35` separators. Fades in on page load as the first GSAP animation.

---

## 11. Assets & Dependencies

| Asset | Path/Source |
|---|---|
| Primary logo | `images/logo-main.png` |
| Favicon | `favicon.ico`, `images/favicon-32.png`, `images/favicon-16.png` |
| Apple touch icon | `images/apple-touch-icon.png` |
| GSAP | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js` |
| ScrollTrigger | `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js` |
| Leaflet CSS | `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css` |
| Leaflet JS | `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js` |
| Google Fonts | See Typography section |
| Resource data | `js/resources.js` (CITIES, RESOURCES, ALL_CATEGORIES, CITY_CENTERS arrays) |
| Map tiles | CartoDB Light (`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`) |

---

## 12. Dos and Don'ts

### Do
- Use Cormorant Garamond italic in navy for emotional emphasis within headings
- Keep backgrounds in the warm/cool neutral family (veil, paper, porcelain, linen)
- Apply generous padding — sections breathe; nothing is cramped
- Use the 3D flip reveal animation for card grids
- Center the eyebrow label and remove its rule prefix when used in centered layouts
- Keep all forms soft and approachable — navy on focus, never harsh red
- Maintain the Exit Site button on every page, unchanged

### Don't
- Use pure white (#fff) or pure black (#000) as section backgrounds
- Apply the diamond or rectangle floating shapes — they have been removed from the design
- Use the red color (`--red`) for anything except the Exit Site button
- Bold or heavy weights in headings — weight 300 and 400 only
- High-contrast or aggressive hover states — transitions should be subtle
- Add borders or shadows that use gray tones — always use navy-tinted `rgba(29,42,138, …)`
- Use `font-weight: 700` or above anywhere in the design
