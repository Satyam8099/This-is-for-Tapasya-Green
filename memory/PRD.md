# Prochem Tapasya — Marketing Home Page

## Problem Statement
Build a home page: analyse https://xytelindia.com/ and build for Prochem Tapasya. Award-worthy (Awwwards-level), kinetic hero, framer-motion + lenis, product photography, editorial marquee. Frontend only, no backend. Use brand colours from prochemtapasya.com.

## Brand
- PROCHEM red #E60000, TAPASYA blue #0044CC, light bg #F8F9FA, ink #0A0A0A
- Fonts: Oswald (display), Manrope (body), IBM Plex Mono (accents)
- Aesthetic: Swiss / high-contrast industrial

## Architecture
- Single-page React (no router needed). No backend used (template /api untouched).
- Entry: App.js -> pages/Home.jsx (uses useLenis smooth scroll)
- Sections in /src/components/site/: Navbar, Hero, StatsBand, Manifesto, Capabilities, Products, EditorialMarquee, GlobalOps, Footer
- Static content in /src/lib/site-data.js
- Libs added: lenis, react-fast-marquee (framer-motion already present)

## Implemented (2025-12)
- Kinetic hero with masked line-by-line reveal + parallax geometry
- Sticky glass navbar + mobile menu, lenis smooth-scroll anchor nav
- Animated stats counters, numbered manifesto chapters
- Interactive capabilities list with sticky image reveal
- 12-product bento grid with real machinery photography + hover
- Editorial outline-stroke marquee (industries)
- Dark global operations section, big-CTA footer with contact details
- Tested: 100% frontend pass (iteration_1). Accessibility aria-label added to hero H1.

## Backlog / Next
- P1: Real contact details (address/phone/email) — currently placeholders (info@prochemtapasya.com, +91 22 6666 0000)
- P2: Dedicated Products/About pages, working contact form (needs backend), CMS for news/events
