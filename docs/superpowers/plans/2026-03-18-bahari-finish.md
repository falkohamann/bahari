# Bahari Kosmetikstudio — Finish & Complete Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the unfinished Bahari Kosmetikstudio website by wiring up the contact form, replacing all placeholder images with curated stock, adding the Philosophy section, fixing a brand color inconsistency, and centralising the email address.

**Architecture:** Single-pass edits to 9 existing files plus one new file (`.env.example`). No new components are created. Tasks are ordered by dependency: data layer first (types/constants), then components, then App wiring.

**Tech Stack:** React 19, TypeScript, Vite 6, Tailwind CSS (CDN), Framer Motion — no new dependencies required.

---

## File Map

| File | What changes |
|---|---|
| `types.ts` | Add `email: string` to `ContactInfo` interface |
| `constants.ts` | Add `email` field to `CONTACT_INFO` |
| `App.tsx` | Import and render `Philosophy` between `Hero` and `ServiceMenu` |
| `components/AboutUs.tsx` | Fix blue brand color on "Unsere Produkte" card; replace `UserIcon` divs with `<img>` elements |
| `components/Gallery.tsx` | Replace 6 picsum URLs with Unsplash wellness URLs |
| `components/ServiceMenu.tsx` | Replace 1 picsum URL with Unsplash zen/spa URL |
| `components/TreasureChamber.tsx` | Replace 2 picsum URLs with Unsplash boutique URLs |
| `components/ContactSection.tsx` | Add `name` attrs to form fields; wire Formspree fetch; add success/error/loading states; replace map placeholder with address card; convert "Route planen" span to `<a>`; add email mailto link |
| `components/LegalModal.tsx` | Replace hardcoded email string with `CONTACT_INFO.email` |
| `.env.example` | Add `VITE_FORMSPREE_ID` placeholder |

---

## Task 1: Data layer — add email to types and constants

**Files:**
- Modify: `types.ts`
- Modify: `constants.ts`

This must be done first because `LegalModal.tsx` and `ContactSection.tsx` depend on it.

- [ ] **Step 1: Add `email` to `ContactInfo` interface in `types.ts`**

Open `types.ts`. The `ContactInfo` interface currently ends at `note: string`. Add one line:

```typescript
export interface ContactInfo {
  name: string;
  owner: string;
  address: string;
  zipCity: string;
  phone: string;
  note: string;
  email: string;  // ← add this
}
```

- [ ] **Step 2: Add `email` field to `CONTACT_INFO` in `constants.ts`**

Open `constants.ts`. The `CONTACT_INFO` object currently ends at `note: "Termine nach Vereinbarung"`. Add one line:

```typescript
export const CONTACT_INFO: ContactInfo = {
  name: "Bahari Kosmetikstudio",
  owner: "Inh. Nadin Kästner",
  address: "Dresdner Straße 149",
  zipCity: "01744 Dippoldiswalde OT Obercarsdorf",
  phone: "035052 189960",
  note: "Termine nach Vereinbarung",
  email: "info@bahari-kosmetik.de",  // ← add this
};
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add types.ts constants.ts
git commit -m "feat: add email field to ContactInfo and CONTACT_INFO"
```

---

## Task 2: Add Philosophy to App.tsx

**Files:**
- Modify: `App.tsx`

`Philosophy.tsx` already exists and is complete. It just needs to be imported and rendered.

- [ ] **Step 1: Import Philosophy in `App.tsx`**

`App.tsx` currently imports 9 components. Add the Philosophy import after the Hero import:

```typescript
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';  // ← add this line
import ServiceMenu from './components/ServiceMenu';
```

- [ ] **Step 2: Render Philosophy between Hero and ServiceMenu**

In the `<main>` block, insert `<Philosophy />` between `<Hero />` and `<ServiceMenu />`:

```tsx
<main>
  <Hero />
  <Philosophy />       {/* ← add this */}
  <ServiceMenu />
  <TreasureChamber />
  <AboutUs />
  <Gallery />
  <ContactSection />
</main>
```

- [ ] **Step 3: Check dev server renders Philosophy**

The dev server should already be running at `http://localhost:3001/dev/`. Scroll down from the Hero — you should see the "Zwei Welten, eine Harmonie" section with two cards (African orange, Asian green) appearing before the service menu.

- [ ] **Step 4: Commit**

```bash
git add App.tsx
git commit -m "feat: add Philosophy section to page between Hero and ServiceMenu"
```

---

## Task 3: Fix brand color in AboutUs + replace team portrait placeholders

**Files:**
- Modify: `components/AboutUs.tsx`

Two independent fixes in the same file — do them together.

- [ ] **Step 1: Fix the blue brand color on "Unsere Produkte" card**

In `AboutUs.tsx`, find the first feature card around line 70. It has `border-blue-400`, `bg-blue-50`, and `text-blue-500`. Replace all three with the orange brand equivalents:

```tsx
// BEFORE (around line 70-72):
<motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-400" variants={itemVariants}>
  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
    <SparklesIcon className="text-blue-500 w-6 h-6" />

// AFTER:
<motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-bahari-orange" variants={itemVariants}>
  <div className="w-12 h-12 bg-bahari-orange/10 rounded-full flex items-center justify-center mb-6">
    <SparklesIcon className="text-bahari-orange w-6 h-6" />
```

- [ ] **Step 2: Replace UserIcon placeholder divs with `<img>` elements**

The team grid has three slots (lines ~110–147). Each slot contains a wrapper div with an inner div holding a `UserIcon`. Replace the inner icon div in each slot with an `<img>` tag. Keep the existing overlay div (`absolute inset-0 bg-bahari-brown/10 ...`) untouched.

For each of the 3 team member slots, replace:
```tsx
// REMOVE this inner div:
<div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
  <UserIcon size={64} />
</div>
```

With an `<img>` tag:
```tsx
// Portrait 1 (Nadin Kästner — owner):
<img
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  alt="Nadin Kästner"
  className="absolute inset-0 w-full h-full object-cover"
/>

// Portrait 2:
<img
  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
  alt="Mitarbeiterin"
  className="absolute inset-0 w-full h-full object-cover"
/>

// Portrait 3:
<img
  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  alt="Mitarbeiterin"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

- [ ] **Step 3: Remove the unused `UserIcon` import**

`UserIcon` is now unused. Remove it from the top of `AboutUs.tsx`:

```tsx
// Remove this line:
const UserIcon = ({ size = 24, className = "" }) => ( ... );
```

- [ ] **Step 4: Verify in browser**

Check `http://localhost:3001/dev/` — scroll to "Über Uns". The three feature cards should all have orange top borders (not blue on the first one). The team section should show portrait photos, not grey silhouettes.

- [ ] **Step 5: Commit**

```bash
git add components/AboutUs.tsx
git commit -m "fix: correct brand color on Unsere Produkte card; replace team portrait placeholders with stock photos"
```

---

## Task 4: Replace placeholder images in Gallery, ServiceMenu, TreasureChamber

**Files:**
- Modify: `components/Gallery.tsx`
- Modify: `components/ServiceMenu.tsx`
- Modify: `components/TreasureChamber.tsx`

Simple URL substitutions — no structural changes.

- [ ] **Step 1: Replace Gallery images**

In `Gallery.tsx`, replace the `images` array (lines 28–35):

```tsx
const images = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=600&q=80",
];
```

- [ ] **Step 2: Replace ServiceMenu Asian section image**

In `ServiceMenu.tsx`, find the `<img>` inside the Asian services block (around line 52). Replace:

```tsx
// BEFORE:
<img src="https://picsum.photos/800/600?grayscale&blur=2" alt="Zen Stone Atmosphere" ... />

// AFTER:
<img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80" alt="Zen Stone Atmosphere" ... />
```

- [ ] **Step 3: Replace TreasureChamber images**

In `TreasureChamber.tsx`, find the two `<img>` tags in the grid (around lines 81–82). Replace:

```tsx
// BEFORE:
<img src="https://picsum.photos/400/500?random=10" alt="Accessoires" ... />
<img src="https://picsum.photos/400/500?random=11" alt="Schmuck" ... />

// AFTER:
<img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" alt="Accessoires" ... />
<img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&q=80" alt="Schmuck" ... />
```

- [ ] **Step 4: Verify in browser — no picsum URLs remain**

Check `http://localhost:3001/dev/`. Scroll through the page — Gallery, TreasureChamber, and the Asian massage section should all show real-looking spa/wellness images.

Also verify no picsum URLs remain anywhere:

```bash
grep -r "picsum" components/
```

Expected: no output.

- [ ] **Step 5: Commit**

```bash
git add components/Gallery.tsx components/ServiceMenu.tsx components/TreasureChamber.tsx
git commit -m "feat: replace all picsum placeholder images with curated Unsplash stock"
```

---

## Task 5: Fix LegalModal to use CONTACT_INFO.email

**Files:**
- Modify: `components/LegalModal.tsx`

Depends on Task 1 (email field added to CONTACT_INFO).

- [ ] **Step 1: Add CONTACT_INFO import to LegalModal**

`LegalModal.tsx` already imports `CONTACT_INFO` at line 3 — no change needed.

- [ ] **Step 2: Replace hardcoded email in LegalModal**

Find line 89 in `LegalModal.tsx`:

```tsx
// BEFORE:
E-Mail: info@bahari-kosmetik.de

// AFTER:
E-Mail: {CONTACT_INFO.email}
```

The full line in context looks like:
```tsx
Telefon: {CONTACT_INFO.phone}<br />
E-Mail: {CONTACT_INFO.email}   {/* ← was hardcoded */}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/LegalModal.tsx
git commit -m "fix: use CONTACT_INFO.email in LegalModal instead of hardcoded string"
```

---

## Task 6: Overhaul ContactSection — Formspree, address card, email link

**Files:**
- Modify: `components/ContactSection.tsx`

This is the most involved task. It has four sub-changes:
1. Add `name` attributes to form fields
2. Wire Formspree with loading/success/error states
3. Replace map placeholder with address card + Google Maps link
4. Convert "Route planen" span to `<a>` tag + add email mailto link

Depends on Task 1 (email field in CONTACT_INFO).

- [ ] **Step 1: Add React state imports for form handling**

`ContactSection.tsx` currently imports only `React` and `motion`. Add `useState`:

```tsx
import React, { useState } from 'react';
```

- [ ] **Step 2: Add form state variables inside the component**

Inside `ContactSection` component body (before the `return`), add:

```tsx
const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
```

- [ ] **Step 3: Add `name` attributes to all four form fields**

Find each input/textarea and add the `name` attribute:

```tsx
// Name input (around line 118):
<input type="text" id="name" name="name" ... />

// Phone input (around line 122):
<input type="tel" id="phone" name="phone" ... />

// Email input (around line 128):
<input type="email" id="email" name="email" ... />

// Message textarea (around line 133):
<textarea id="message" name="message" ... />
```

- [ ] **Step 4: Replace the form's `onSubmit` handler**

Replace the current `onSubmit={(e) => e.preventDefault()}` on the `<form>` with:

```tsx
onSubmit={async (e) => {
  e.preventDefault();
  setStatus('loading');
  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      body: new FormData(e.currentTarget as HTMLFormElement),
      headers: { Accept: 'application/json' },
    });
    setStatus(res.ok ? 'success' : 'error');
  } catch {
    setStatus('error');
  }
}}
```

- [ ] **Step 5: Add loading state to the submit button**

Replace the submit button:

```tsx
// BEFORE:
<button type="submit" className="w-full bg-bahari-brown text-white py-3 rounded-lg font-medium hover:bg-bahari-orange transition-colors flex items-center justify-center gap-2">
  <SendIcon size={18} />
  Nachricht senden
</button>

// AFTER:
<button
  type="submit"
  disabled={status === 'loading'}
  className="w-full bg-bahari-brown text-white py-3 rounded-lg font-medium hover:bg-bahari-orange transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
>
  <SendIcon size={18} />
  {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
</button>
```

- [ ] **Step 6: Wrap form in conditional rendering for success/error/fallback states**

Replace the entire `<form>` block with a conditional:

```tsx
{!formspreeId ? (
  <div className="py-8 text-center text-gray-600">
    <p>Bitte kontaktieren Sie uns per Telefon:</p>
    <p className="font-semibold text-bahari-brown mt-2">{CONTACT_INFO.phone}</p>
  </div>
) : status === 'success' ? (
  <div className="py-8 text-center">
    <p className="text-2xl mb-2">✓</p>
    <p className="text-bahari-brown font-serif text-xl mb-2">Vielen Dank!</p>
    <p className="text-gray-600">Wir melden uns bald.</p>
  </div>
) : (
  <form className="space-y-6" onSubmit={/* use the handler from Step 4 */async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(e.currentTarget as HTMLFormElement),
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }}>
    {/* all the existing form fields with name attributes added in Step 3 */}
    {status === 'error' && (
      <p className="text-red-600 text-sm">Etwas ist schiefgelaufen. Bitte rufen Sie uns an.</p>
    )}
    {/* submit button */}
  </form>
)}
```

- [ ] **Step 7: Convert "Route planen" span to an `<a>` tag**

Find the dead `<span>` around line 73:

```tsx
// BEFORE:
<span className="inline-block mt-2 text-sm text-bahari-orange">Route planen &rarr;</span>

// AFTER:
<a
  href="https://www.google.com/maps/search/?api=1&query=Dresdner+Straße+149+Dippoldiswalde"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-2 text-sm text-bahari-orange hover:underline"
>
  Route planen →
</a>
```

- [ ] **Step 8: Add email mailto link to contact details**

After the phone block (around line 84), add an email contact item following the same pattern as phone and address:

```tsx
<div className="flex items-start gap-4">
  <div className="p-3 bg-bahari-orange/10 rounded-full shrink-0">
    <SendIcon size={20} className="text-bahari-orange" />
  </div>
  <div>
    <h5 className="font-semibold text-bahari-dark">E-Mail</h5>
    <a
      href={`mailto:${CONTACT_INFO.email}`}
      className="text-gray-600 font-sans hover:text-bahari-orange transition-colors"
    >
      {CONTACT_INFO.email}
    </a>
  </div>
</div>
```

- [ ] **Step 9: Replace map placeholder with address card**

Find the map placeholder block (around lines 101–106):

```tsx
// REMOVE this entire div:
<div className="h-64 rounded-2xl overflow-hidden shadow-sm relative bg-gray-200">
  <div className="absolute inset-0 flex items-center justify-center bg-bahari-brown/5">
    <span className="text-bahari-brown/40 font-serif text-xl">Karte wird geladen...</span>
  </div>
</div>
```

Replace with the address card:

```tsx
<div className="bg-bahari-stone rounded-2xl p-6 flex flex-col gap-4">
  <div className="flex items-start gap-3">
    <MapPinIcon className="text-bahari-orange w-5 h-5 mt-1 shrink-0" />
    <div>
      <p className="font-semibold text-bahari-dark">{CONTACT_INFO.address}</p>
      <p className="text-gray-600 text-sm">{CONTACT_INFO.zipCity}</p>
    </div>
  </div>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Dresdner+Straße+149+Dippoldiswalde"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-bahari-brown text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-bahari-orange transition-colors self-start"
  >
    <MapPinIcon className="w-4 h-4" />
    In Google Maps öffnen →
  </a>
</div>
```

- [ ] **Step 10: Add CONTACT_INFO import**

`ContactSection.tsx` already imports `CONTACT_INFO` at line 4. No change needed.

- [ ] **Step 11: Verify in browser**

Check `http://localhost:3001/dev/` — scroll to Kontakt:
- "Route planen" should be a clickable orange link
- Email address should appear as a mailto link in the contact details
- Map placeholder should be replaced by the address card with "In Google Maps öffnen" button
- Form should have all fields present; if `VITE_FORMSPREE_ID` is not set in `.env`, the fallback message should appear

- [ ] **Step 12: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 13: Commit**

```bash
git add components/ContactSection.tsx
git commit -m "feat: wire Formspree contact form, add address card, fix Route planen link, add email link"
```

---

## Task 7: Add .env.example

**Files:**
- Create: `.env.example`

- [ ] **Step 1: Create `.env.example`**

Create the file at the project root with this exact content:

```
# Formspree form ID for the contact form
# 1. Create a free form at https://formspree.io
# 2. Copy the 8-character form ID from your form's endpoint URL
# 3. Paste it below and rename this file to .env
VITE_FORMSPREE_ID=your_form_id_here
```

- [ ] **Step 2: Verify .env is gitignored**

```bash
cat .gitignore | grep -i env
```

If `.env` is not listed, add it:

```bash
echo ".env" >> .gitignore
```

- [ ] **Step 3: Commit**

```bash
git add .env.example .gitignore
git commit -m "chore: add .env.example documenting VITE_FORMSPREE_ID"
```

---

## Task 8: Final verification

- [ ] **Step 1: Check no picsum URLs remain anywhere**

```bash
grep -r "picsum" components/
```

Expected: no output.

- [ ] **Step 2: Check TypeScript compiles clean**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Build for production**

```bash
npm run build
```

Expected: build completes with no errors. Output in `dist/`.

- [ ] **Step 4: Smoke test the production build**

```bash
npm run preview
```

Open `http://localhost:4173/dev/` and verify:
- Philosophy section visible between Hero and services
- All images load (no broken image icons)
- Three "Über Uns" feature cards all have orange top borders
- Contact section shows either the Formspree form or the fallback message
- "Route planen" and "In Google Maps öffnen" are both clickable links
- Clicking Impressum/Datenschutz in the footer opens the modal; email shows correctly

- [ ] **Step 5: Final commit if any stray fixes were needed**

```bash
git status  # review what's changed — do NOT use git add -A to avoid accidentally staging .env
git add <only the specific files that changed>
git commit -m "chore: final verification fixes"
```
