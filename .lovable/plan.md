## Goal
Transform the existing Uma Techno site from a template look into a premium, custom software-agency experience (Linear / Stripe / Vercel / Framer caliber) — without touching branding, content, routes, or business logic.

## Scope guardrails (unchanged)
- Routes, URL structure, page content, copy, nav links, form fields, backend calls, estimator logic, admin pages.
- Brand color family (cyan/blue electric on deep navy).

## What changes
Pure presentation layer: `src/styles.css`, layout components, section components, and hero/estimator visuals.

## Design system upgrades (`src/styles.css`)
- Refined dark palette: layered navy surfaces, aurora cyan/violet accent, warm highlight for depth.
- Typography scale bump: display font (Space Grotesk or Instrument Serif accent) + body (Inter). Larger H1 (clamp 3.5rem → 7rem), tighter tracking, better line-height rhythm.
- Radius scale: 1rem / 1.75rem / 2.5rem / 3.5rem.
- Shadow tokens: elevation-1..4 + colored glow (cyan, violet).
- New utilities: `.mesh-bg`, `.aurora`, `.noise`, `.shine-border`, `.glass-panel`, `.magnetic`, `.text-reveal`, `.tilt-3d`.
- SVG noise + CSS mesh gradient background layers.

## Global infrastructure
- Install `gsap`, `@studio-freight/lenis` (already have framer-motion).
- New `src/components/fx/`:
  - `SmoothScroll.tsx` — Lenis provider, mounted in `SiteLayout`.
  - `Cursor.tsx` — mouse follower + morph on hoverables (`data-cursor="link|button"`).
  - `MagneticButton.tsx` — wraps CTAs.
  - `TextReveal.tsx` / `MaskReveal.tsx` — GSAP ScrollTrigger reveals.
  - `AuroraBackground.tsx` — animated mesh + particles canvas.
  - `Tilt.tsx` — 3D hover tilt.
  - `ShinyBorder.tsx` — animated gradient border wrapper.
- Respect `prefers-reduced-motion` in every fx component.

## Section-by-section redesign

**Navbar** — shrink-on-scroll, deeper glass, animated underline (already partly there), magnetic CTA, subtle glow on active.

**Hero** — keep headline/CTA copy. Replace static illustration with a canvas visualization: animated network of nodes + particles, parallax orbit rings, aurora glow blob following cursor. Headline uses staggered word/char reveal. CTAs magnetic + shine border.

**Project Estimator** — same inputs/outputs. New luxury glass panel, animated rolling number counter for price, progress ring for completeness, floating service icons, dynamic gradient that reacts to selection.

**Services grid** — glass cards with 3D tilt, animated icon (framer), gradient sweep on hover, shiny border on focus, reflection at bottom.

**About / Stats** — parallax image stack, animated counters on scroll, floating decorative shapes.

**Portfolio** — device-mockup framing, hover reveals live preview / video loop, animated overlay with case-study CTA opening modal.

**Process** — interactive horizontal timeline (scroll-hijack via GSAP), glowing progress line, icons animate in per step.

**Testimonials** — dual-row marquee, glass cards, client logos strip, Google-rating badge.

**FAQ** — premium accordion with blurred backdrop, animated +/– morph icon, smooth height.

**Contact** — glass form, floating labels, submit button with success morph, decorative interactive map/globe.

**Footer** — animated grid backdrop, moving gradient wash, social icons with glow, oversized CTA band above.

## Performance & a11y
- All animations GPU-transform based; ScrollTrigger cleaned up on unmount.
- Canvas/particles pause off-screen; disabled under reduced motion.
- Semantic HTML preserved; focus-visible rings retained; contrast tokens verified.
- Images `loading="lazy"`, dimensions set.

## Out of scope
- Backend, admin CMS logic, auth, routing structure, copy rewrites, page additions/removals.

## Rollout order
1. Design tokens + utilities in `styles.css`.
2. Install deps + build `src/components/fx/*`.
3. Wire `SmoothScroll` + `Cursor` in `SiteLayout`.
4. Navbar polish.
5. Hero rebuild (visual only).
6. Estimator visual pass.
7. Services / About / Portfolio / Process / Testimonials / FAQ / Contact / Footer.
8. Verify build + Playwright screenshot pass on `/`, `/services`, `/portfolio`, `/contact`.

Given the breadth, I'll ship this in one large pass focused on the homepage sections + global system first (which is where 90% of the "template feel" lives), then extend the same patterns to inner pages. Confirm and I'll start.