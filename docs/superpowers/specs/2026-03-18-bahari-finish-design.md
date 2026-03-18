# Bahari Kosmetikstudio — Finish & Complete Design Spec

**Date:** 2026-03-18
**Approach:** Focused finish — fix what's broken, nothing more (Option A)

---

## Background

The Bahari Kosmetikstudio website is a React 19 + TypeScript + Vite single-page app for a cosmetics studio in Dippoldiswalde, Germany. The codebase was started but never completed. All components exist and are structurally sound; the work required is filling in placeholders and wiring up functionality.

---

## Scope

### 1. Page structure

Add `Philosophy` component to `App.tsx` between `Hero` and `ServiceMenu`. The component already exists and is complete — it was simply never imported or rendered. No nav link is needed; it has no anchor in the navigation.

**New render order:**
1. Navigation
2. Hero
3. **Philosophy** ← added
4. ServiceMenu
5. TreasureChamber
6. AboutUs
7. Gallery
8. ContactSection
9. Footer

All other components retain their current order — only Philosophy is inserted.

---

### 2. Image replacements

All placeholder images (random `picsum.photos` URLs) are replaced with curated Unsplash direct image URLs matching the studio's aesthetic. These are static `src` attributes — no JS, no tracking. They serve as stand-ins until the client provides real photos. The developer selects suitable Unsplash images within the described theme for each slot.

**Suggested Unsplash image URLs** (direct CDN links, swap for any preferred alternatives):

| Component | Slot | Suggested URL | Theme |
|---|---|---|---|
| `ServiceMenu` | Asian section | `https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80` | Zen stones / spa |
| `TreasureChamber` | Left image | `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80` | Jewelry / accessories |
| `TreasureChamber` | Right image | `https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&q=80` | Boutique display |
| `AboutUs` | Portrait 1 (owner) | `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80` | Professional woman portrait |
| `AboutUs` | Portrait 2 | `https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80` | Professional woman portrait |
| `AboutUs` | Portrait 3 | `https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80` | Professional woman portrait |
| `Gallery` | Image 1 | `https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80` | Spa treatment |
| `Gallery` | Image 2 | `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80` | Facial treatment |
| `Gallery` | Image 3 | `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80` | Face massage |
| `Gallery` | Image 4 | `https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80` | Cosmetics products |
| `Gallery` | Image 5 | `https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80` | Skincare ritual |
| `Gallery` | Image 6 | `https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80` | Relaxation / candles |

| Component | Images | Theme |
|---|---|---|
| `ServiceMenu` | 1 image (Asian section) | Zen stones / spa atmosphere |
| `TreasureChamber` | 2 images | Boutique accessories / jewelry |
| `AboutUs` | 3 portrait images (team grid) | Professional portraits (diverse, warm) — **requires structural change**: the current team slots render a grey `<div>` + `UserIcon` SVG (no `<img>` tags). The icon div must be replaced with an `<img>` element pointing to the Unsplash URL. |
| `Gallery` | 6 images | Spa / wellness / cosmetics mood |

---

### 3. Brand color fix

`AboutUs.tsx` "Unsere Produkte" card uses `border-blue-400`, `bg-blue-50`, `text-blue-500` — inconsistent with the brand palette.

**Fix:** Replace with `border-bahari-orange`, `bg-bahari-orange/10`, `text-bahari-orange` to match the other two cards in that section.

---

### 4. Contact form — Formspree integration

The contact form currently calls `e.preventDefault()` with no action. It is wired to Formspree.

**Behaviour:**
- On submit: POST to `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}` via `fetch()`
- Success state: form hides, success message shown ("Vielen Dank! Wir melden uns bald.")
- Error state: error message shown ("Etwas ist schiefgelaufen. Bitte rufen Sie uns an.")
- Loading state: button disabled and shows loading text while submitting
- Fallback: if `VITE_FORMSPREE_ID` is not set, form is replaced with a "Bitte kontaktieren Sie uns per Telefon" message. Check with `if (!import.meta.env.VITE_FORMSPREE_ID)` — in Vite, absent env vars resolve to an empty string at runtime, so a falsy check is sufficient.

**Fields — add `name` attributes:** The current inputs only have `id` attributes. Formspree parses `FormData` by `name`, so all four fields must have `name` attributes added:
- `name="name"` on the Name input
- `name="phone"` on the Telefon input
- `name="email"` on the E-Mail input
- `name="message"` on the Nachricht textarea

Submission uses `new FormData(e.currentTarget as HTMLFormElement)` passed to `fetch()` — no ref needed, access the form via `e.currentTarget`.

**Fields (otherwise unchanged):** Name, Telefon, E-Mail, Nachricht

**Setup required by studio owner:**
1. Create free account at formspree.io
2. Create new form → copy the 8-character form ID
3. Add to `.env` file: `VITE_FORMSPREE_ID=xxxxxxxx`

---

### 5. Map placeholder → Address card + Google Maps link

The static `h-64` grey box ("Karte wird geladen...") and its outer wrapper (`h-64 rounded-2xl overflow-hidden shadow-sm relative bg-gray-200`) are removed entirely and replaced with the new address card markup. The `h-64` and `overflow-hidden` classes must not be carried over to the replacement.
- Address lines from `CONTACT_INFO`
- A prominent CTA button: "In Google Maps öffnen →"
- Link: `https://www.google.com/maps/search/?api=1&query=Dresdner+Straße+149+Dippoldiswalde`

The existing "Route planen →" `<span>` directly above the map box (in the address block) is converted to an `<a>` tag with the same Google Maps link, replacing the dead unlinked span.

No API key or iframe required.

---

### 6. Data — email field

The email address `info@bahari-kosmetik.de` is currently hardcoded inside `LegalModal.tsx`. It is centralised:

**`types.ts`:** Add `email: string` to `ContactInfo` interface.

**`constants.ts`:** Add `email: "info@bahari-kosmetik.de"` to `CONTACT_INFO`.

**`LegalModal.tsx`:** Replace hardcoded string with `CONTACT_INFO.email`.

**`ContactSection.tsx`:** Optionally display `CONTACT_INFO.email` as a mailto link in the contact details panel.

---

### 7. Environment file

Add `.env.example` to the project root:

```
# Formspree form ID for the contact form
# Create a free form at https://formspree.io and paste the ID here
VITE_FORMSPREE_ID=your_form_id_here
```

---

## Files Changed

| File | Change |
|---|---|
| `App.tsx` | Import and render `Philosophy` between `Hero` and `ServiceMenu` |
| `types.ts` | Add `email: string` to `ContactInfo` |
| `constants.ts` | Add `email` field to `CONTACT_INFO` |
| `components/AboutUs.tsx` | Fix blue→orange brand color; replace `UserIcon` div placeholders with `<img>` elements pointing to Unsplash portrait stock URLs |
| `components/Gallery.tsx` | Swap 6 picsum URLs → curated wellness Unsplash URLs |
| `components/ServiceMenu.tsx` | Swap Asian section picsum URL → Unsplash zen/stone spa URL |
| `components/TreasureChamber.tsx` | Swap 2 picsum URLs → Unsplash boutique/jewelry URLs |
| `components/ContactSection.tsx` | Wire Formspree; replace map placeholder with address card + Google Maps link; add `CONTACT_INFO.email` mailto link |
| `components/LegalModal.tsx` | Use `CONTACT_INFO.email` instead of hardcoded string |
| `.env.example` | Add `VITE_FORMSPREE_ID` placeholder with comment |

---

## Out of Scope

- Font stack improvements (generic "cursive" remains)
- Scroll-to-top button
- SEO / structured data / JSON-LD
- Open Graph tags
- Real photos (client to supply later)
- Backend or CMS
- Any new features or sections beyond what already exists

---

## Success Criteria

- No random `picsum.photos` URLs remain in any component
- Contact form successfully submits to Formspree and shows feedback states
- Map placeholder is replaced with a functional address card and Google Maps link
- Philosophy section is visible on the page
- All three "Über Uns" feature cards use consistent brand colors
- Email address is sourced from `CONTACT_INFO` everywhere
- `.env.example` documents the required environment variable
