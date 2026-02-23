# Copilot instructions (bahari)

## Big picture
- This is a **single-page** React + Vite + TypeScript site (no router/state lib). The page is composed in `App.tsx` by stacking section components.
- Navigation is **anchor-based** (`href="#leistungen"`) and each section owns its `id` (see `components/ServiceMenu.tsx`, `components/ContactSection.tsx`).
- Most copy/data is **static** and centralized in `constants.ts` (e.g. `CONTACT_INFO`, `SERVICES`) with types in `types.ts`.

## Key files to know
- Entry: `index.html` (Tailwind CDN config + fonts) and `index.tsx` (mounts `<App />`).
- Composition/state: `App.tsx` (controls the legal modal state and renders all sections).
- Content/data: `constants.ts`, `types.ts`.
- UI sections: `components/*`.

## Styling + UI conventions (project-specific)
- Styling is **Tailwind via CDN**, configured inline in `index.html` (`bahari-*` colors + `script/serif/sans` fonts). There is no local Tailwind build pipeline.
- Prefer the existing theme tokens/classes (`bg-bahari-stone`, `text-bahari-brown`, `font-script`, etc.) and reuse established layout patterns like `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Icons are usually **inline SVG components** defined locally inside each file (see `components/Navigation.tsx`, `components/AboutUs.tsx`).
- Motion/animation is used sparingly via **framer-motion** (currently in `components/Hero.tsx`).

## Data / content patterns
- If you add/modify services or contact details, update `constants.ts` and keep `types.ts` consistent.
- Copy is primarily **German**; keep tone and terminology consistent with existing sections.
- Images are currently placeholders (e.g. `picsum.photos`); keep changes minimal unless explicitly asked.

## Legal modal flow
- Legal content is rendered in a single component (`components/LegalModal.tsx`) and opened from `components/Footer.tsx` via callbacks.
- The modal locks background scroll using `document.body.style.overflow`.

## Env + config
- Dev server runs on `http://localhost:3000` (see `vite.config.ts`).

## Developer workflow
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Adding a new section (common change)
- Create a component in `components/` with a unique `id` on the outer `<section>`.
- Add it to `App.tsx` in the desired order.
- If it should be in the nav, add a matching `{ name, href: "#..." }` entry in `components/Navigation.tsx`.
