# FOR FALKO — Everything We Did on Bahari, and Why

---

## Step 1: What approach did we take, and why?

We inherited a half-finished React website and had to make it production-ready without a designer, without real photos, and without breaking anything that already worked.

**The starting point was triage.** Before touching a single line, we needed to understand what existed. Think of it like a doctor seeing a new patient — you don't prescribe before you diagnose. We read every component, mapped the render tree, and catalogued every placeholder: grey boxes where images should be, a dead "Route planen" span that looked like a link but did nothing, a Philosophy component built but never rendered.

**The guiding principle throughout:** change only what's broken or missing. Don't refactor the world. Don't add features nobody asked for. This discipline — called *minimal viable diff* — is what separates professionals from enthusiastic beginners who "improve" things and break them.

The redesign phase was different: the user explicitly asked us to apply design rules. There we worked from a spec written *before* touching code. The sequence was: audit → plan → approve → implement. Never the other way around.

---

## Step 2: What approaches did we consider but abandon?

**For placeholder images:** We could have left them as grey boxes or used Lorem Picsum (random placeholder service). We rejected this because placeholder images train clients to ignore them — they stop imagining what the real thing will look like. Using real Unsplash stock photos in the right *category* (spa, wellness, cosmetics) makes the site feel real and helps the client see the actual potential.

**For the contact form:** We could have used `mailto:` links (just opens the user's email client). We rejected this because it creates friction — most users don't have a mail client configured, especially on desktop. Formspree gives a real submission experience with zero server code.

**For the hero redesign:** We initially considered keeping `title.png` as a `bg-contain` overlay on a coloured background. We abandoned this because it violates the "full-bleed hero" rule — the image was floating in the centre with empty space around it. A full-bleed background *fills the stage*. Then the user asked us to restore `title.png` — which taught us that rules are guides, not laws. The client's brand identity overrides a general design principle.

**For cards:** The original design used `bg-white rounded-2xl shadow-sm` cards everywhere — for features, for team members, for the philosophy panels. We stripped most of them. Cards are a lazy default in web design — they say "I didn't know how to create visual separation, so I put a box around everything." Spacing, colour zones, and typography can do the same job without the visual noise.

---

## Step 3: How do the different parts connect?

Think of the page as a *conversation* with a stranger who just walked in off the street:

1. **Hero** — First impression. Who are you? What do you do? Give me a reason to stay. (Brand + tagline + two CTAs)
2. **Philosophy** — Why are you different? (African + Asian duality)
3. **Services** — What exactly do you offer and what does it cost? (The practical question everyone has)
4. **TreasureChamber** — Oh, there's more? (Boutique — a surprise)
5. **AboutUs** — Who are the people? Can I trust them? (Team + social proof signals)
6. **Gallery** — Show me the atmosphere. (Proof of vibe)
7. **Contact** — OK I'm interested. How do I get in touch? (Conversion)

This order is called a *narrative funnel*. Each section answers the natural next question a visitor would have. If you put Contact before Services, visitors would ask "contact you about what?" The order is not arbitrary — it mirrors the psychology of trust-building.

The three **intentional animations** reinforce this: the hero text reveal shows hierarchy (biggest signal first), the philosophy convergence shows the two-worlds concept visually, and the contact split entry mirrors the bilateral structure of the philosophy section — creating a visual language that runs through the whole page.

---

## Step 4: What tools and methods did we use, and why?

**React 19 + TypeScript** — TypeScript caught several bugs before they ever ran in the browser. When we added `email` to `ContactInfo`, TypeScript immediately complained about every place that used the type without the new field. Without it, we'd have found those bugs by accident in production.

**Framer Motion** — For animations, not CSS transitions. The difference: CSS transitions are fire-and-forget. Framer Motion gives you *physics* (spring stiffness, damping, mass), *orchestration* (stagger children, wait for parent), and *viewport detection* (whileInView). CSS can't do any of that without JavaScript anyway, so you might as well use a library built for it.

**Tailwind CSS via CDN** — Normally you'd install Tailwind via npm and let it purge unused classes. Here it's loaded from a CDN, which means *all* Tailwind classes are available but the CSS file is huge (~3MB). This was a deliberate trade-off: the client didn't want a complex build pipeline. For a single-page studio site with low traffic, it's acceptable.

**Unsplash for stock images** — Free, high quality, no attribution required for most use cases. The key insight: we didn't use random images. We chose images in the *right emotional category* — spa candles, zen stones, wellness treatments. Images carry mood. A stock photo of a busy office would make the site feel wrong even if technically "a photo."

**Formspree** — Contact form backend as a service. No server, no database, free up to 50 submissions/month. The alternative (build your own backend) would take days and require hosting. Formspree handles spam filtering, email delivery, and storage. For a small studio, 50 submissions/month is more than enough.

**JSON-LD structured data** — This is invisible to users but speaks directly to Google's crawler. It's like filling out a government form: you can describe your business in prose, or you can fill in the official fields. Google much prefers the official fields. `@type: BeautySalon` tells Google exactly what kind of business this is, which powers the local search result cards.

---

## Step 5: What tradeoffs did we make?

**Speed vs. correctness on the hero image.** We preloaded the hero background image with `<link rel="preload">`. This makes the first paint faster but adds a request that runs even if the user never sees the hero (e.g., they navigate directly to #kontakt). For a single-page site, this is worth it — the hero is almost always the first thing seen.

**`dangerous-clean-slate: true` in the deploy.** This deletes everything on the server before uploading. Fast and simple, but if the upload fails halfway through, the site is temporarily broken. The alternative — incremental sync — is safer but more complex to configure. For a small site with fast deploys, clean-slate is fine.

**Tailwind via CDN vs. npm.** Already mentioned above. The cost: a 3MB CSS file loaded every visit. The benefit: no build tooling complexity for the client to maintain. For a high-traffic site this would be unacceptable. For a local cosmetics studio, it's invisible.

**Unsplash stock photos vs. real photos.** Stock photos are a placeholder, not a solution. They make the site *look* finished but reduce trust — users can sometimes recognise stock photos and it makes the business feel generic. The tradeoff was: ship something that works now, replace with real photos when the client provides them.

**Animation speed.** We reduced durations from 0.7–0.9s to 0.4–0.5s and lowered the `viewport amount` from 0.2 to 0.05. Faster feels snappier but risks feeling cheap. Slower feels premium but can frustrate returning visitors who've seen the animations before. 0.5s is a well-established sweet spot for UI animations.

---

## Step 6: Mistakes, dead ends, and wrong turns

**The GitHub token in the commit.** The `.claude/settings.local.json` file contained your GitHub personal access token. We committed it, GitHub's push protection blocked the push, we had to soft-reset, add the file to `.gitignore`, and re-commit. This is one of the most common (and embarrassing) mistakes in developer history. The fix: always check what you're staging with `git status` before committing. Add secrets to `.gitignore` before they ever touch version control.

**The wrong FTP server path.** The deploy was configured as `/www/htdocs/w0213e45/bahari-kosmetik.de/dev/` but the actual path was `/bahari-kosmetik.de/dev/`. The site deployed successfully but the files landed in the wrong directory. Diagnosis: the deploy log showed "Sync complete" with 0 bytes at the right path. Fix: check the FTP directory structure before assuming the path. One wrong folder = invisible site.

**The `title.png` background sizing.** We changed it to 75% to make it "smaller" but forgot to add `background-repeat: no-repeat`, so the image tiled. A browser's default for `background-repeat` is `repeat` — it tiles like wallpaper. Any time you set a custom `background-size`, you probably want `no-repeat` unless you're making a texture. The user correctly called this out and we reverted to the Unsplash image.

**Philosophy panel edit failure.** When we tried to edit `Philosophy.tsx` a second time, the tool refused because the file had been modified by a linter between reads. This happens when auto-formatters (Prettier, ESLint) run on save and change whitespace. Solution: always re-read a file immediately before editing if time has passed since the last read.

---

## Step 7: Pitfalls to watch out for next time

**Never commit files in `.claude/`, `.env`, or any tooling config without checking for secrets first.** GitHub's push protection will catch it, but the token is already in git history — you need to rotate it. Always add these patterns to `.gitignore` before the first commit.

**FTP paths are not filesystem paths.** The path your FTP client shows you may be relative to your home directory, not the server root. When configuring automated deploys, test with a manual FTP connection first and confirm the exact absolute path.

**`background-size` without `background-repeat: no-repeat` will tile.** Every time. Burn this into memory.

**Don't remove a component from the DOM and add it back — add `loading="lazy"` to images instead.** Lazy loading defers the network request. Removing from DOM causes layout shift and re-mounting costs. These are different tools for different problems.

**When using Tailwind via CDN, you can't purge unused classes.** This means the CSS bundle is always ~3MB regardless of how few classes you use. If performance becomes critical, switching to the npm version with purging can reduce CSS to ~10KB.

**Viewport `amount: 0.2` means 20% of the element must be visible before animations trigger.** For tall sections on mobile, 20% of a 1000px section is 200px — the section is nearly half-visible before anything animates. Use `amount: 0.05` or `amount: 0` for sections with animations that should start as soon as the top edge enters the viewport.

---

## Step 8: What an expert would notice that a beginner would miss

**The render order in App.tsx is the UX.** A beginner sees a list of components. An expert sees a persuasion sequence. The order of `<Hero />`, `<Philosophy />`, `<ServiceMenu />` is not arbitrary — it's a story. Changing it changes the emotional journey of every visitor.

**The `ease: [0.22, 1, 0.36, 1]` curve is not magic — it's a specific physics.** This is a cubic bezier that starts slow, accelerates quickly, and overshoots slightly before settling. It mimics how physical objects move in the real world: not linearly, not bouncing, just natural. Default CSS `ease-in-out` is symmetric — equally slow at start and end. The custom curve front-loads the motion so the element arrives confidently. The difference is subtle but cumulative.

**`whileInView` with `once: true` is a commitment.** Once an element has animated in, it never animates again, even if you scroll back up. This is correct for most cases — re-animating on every scroll feels unstable. But for some elements (like a counter that should always start at zero when visible), `once: false` is correct. The expert thinks about the *re-visit experience*, not just the first visit.

**`useReducedMotion()` is not optional — it's a legal requirement in some jurisdictions.** Users with vestibular disorders can experience physical nausea from parallax and sliding animations. The `prefers-reduced-motion` media query, and the React hook that reads it, is the correct way to respect this. We only had it in Hero — accessibility is only as good as its weakest component.

**JSON-LD structured data is invisible to users but doubles your Google footprint.** Without it, Google sees text. With it, Google sees a structured record: name, type, address, phone, coordinates. This is what generates the rich Business Profile sidebar in search results. A beginner adds meta tags. An expert adds structured data.

---

## Step 9: Lessons that apply to completely different projects

**Triage before touch.** Whether it's a codebase, a business, or a house you're renovating — understand what exists before changing anything. The worst thing you can do is "improve" something you don't understand and break something you couldn't see.

**Order is UX.** This applies to onboarding flows, email sequences, restaurant menus, and slide decks. The sequence in which information arrives determines whether it persuades, confuses, or bores. Ask yourself: what question does the user have right now, and does this answer it?

**Cards are a design crutch.** Whenever you reach for a box with a border and shadow, ask: what job is this box doing? Is it grouping things that belong together? Is it making something feel interactive? If neither, remove it. White space and colour zones can do the same job with less noise. This applies to dashboards, presentations, documents — everywhere.

**Secrets don't belong in version control. Ever.** This is not a git rule — it's a security rule. Tokens, passwords, API keys, and private keys should live in environment variables, secret managers, or `.env` files that are gitignored. Rotate immediately if exposed.

**The deploy is part of the product.** A beautiful website that nobody can reach is worthless. CI/CD pipelines, correct server paths, SSL certificates, and DNS records are not DevOps afterthoughts — they are the last mile that makes everything else matter. Invest time in getting the deploy right before the site launches.

**Accessibility is not a feature — it's a baseline.** `aria-label`, `role="alert"`, `focus:ring`, `required` — these feel like polish but they're the difference between a site that works for everyone and one that only works for people without disabilities, without keyboards, and without screen readers. The EU Web Accessibility Act makes this a legal requirement for many sites. Build it in from the start; retrofitting is painful.

**Naming things is the hardest part of communication.** The `title.png` filename tells you nothing. `hero-background.png` does. `Mitarbeiterin` tells you nothing about who the person is. Every time you have a placeholder name — in code, in content, in a document — treat it as a debt that will confuse someone later (probably you).

---

*The best projects aren't the ones where everything went right. They're the ones where things went wrong in interesting ways and you learned why.*
