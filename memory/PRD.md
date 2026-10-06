# Prochem Tapasya — Full-Stack Industrial Engineering Site

## Problem Statement
Awwwards-level marketing site for Prochem Tapasya (industrial/pharma process equipment) evolved into a full-stack app: React + FastAPI + MongoDB with an Admin Panel for products, blog, news, pages, settings and enquiry capture. Product lineup must match the user's uploaded chart exactly.

## Brand
- PROCHEM red #E60000, TAPASYA blue #0044CC, light bg #F8F9FA, ink #0A0A0A
- Fonts: Oswald (display), Manrope (body), IBM Plex Mono (accents)
- Aesthetic: Swiss / high-contrast industrial; Admin panel: charcoal/slate-800 dark theme, original (non-inverted) logo
- Favicon served as /favicon.png?v=3 (cache-busted)

## Architecture
- Frontend: React, framer-motion, lenis, shadcn/ui, tailwind. Entry App.js -> routes (public pages + /admin/*)
- Public product catalog is STATIC: /app/frontend/src/data/products.js (CATEGORIES, PRODUCT_DETAILS, FEATURED_SLUGS) — user decision: do NOT wire public site to the API
- Backend: FastAPI + MongoDB (motor). server.py, auth.py (JWT), seed.py (seeds only when collections empty), routes/{content,enquiries,users}.py
- Admin panel (API-driven): /app/frontend/src/pages/admin/* — dashboard, products, enquiries, blog, news, pages, settings
- DB migration helper: /app/backend/migrate_chart_products.py (one-time wipe + reseed of products/categories)

## Product Catalog (user chart, applied 2026-09-28)
26 products, 6 categories — REPLACED all previous products (Saizoner, RMG, coating, micronising, pelletising lines removed):
- Granulating (3): High Shear Mixer Granulator, HSMG - R2T, Binder Preparation Vessel
- Drying (3): Fluid Bed Equipment, Tray Dryer, Roto Cone Vacuum Dryer
- Milling (7): Tap Cone Mill, Under Driven Cone Mill, Multi Mill, Sifter Cum Multi Mill, Oscillating Granulator, Vibratory Sifter, Delumper
- Blending (6): 'V' Blender, Conta Blender, Octagonal Blender, Double Cone Blender, Ribbon Blender, Plough Shear Mixer
- Material Handling (5): Elevator, Tipper, Power Transfer System, IBC, Pallet Weighing Truck
- Cleaning (2): Bin Wash System, CIP / WIP Skid
- "More" items from chart (Integrated Systems, Our Partners, Shield 10, Documentation) intentionally SKIPPED per user
- Note: chart says "Power Transfer System" (verified twice from image — not "Powder")

## Implemented
- Kinetic hero, sticky glass navbar + mega menu (dynamic categories, dynamic count), stats band, manifesto, capabilities (6 chart-aligned), 12-product bento grid, editorial marquee, global ops, big-CTA footer
- 16-section dynamic product pages (/product/:slug) + proper 404 state for unknown slugs
- Static pages: About, Capabilities, Global, Spares & Service, Contact; Blog + News
- EnquiryForm on pages -> POST /api/enquiries
- Admin: JWT login, dashboard, full CRUD managers (products incl. category select limited to the 6 chart slugs), settings
- Tested: iteration_1..3 (general), iteration_4 (catalog replacement) — 100% backend/frontend pass

## Real Product Photos (installed 2026-10-06)
- User ZIP ("Prochem Tapasya Upscaled images - Website.zip") processed: 78 photos optimized (144MB PNG -> 17MB progressive JPEG q82) at /app/frontend/public/products/<slug>/1.jpg (hero) + gallery
- 20 products have real photos; 6 keep stock (tipper, power-transfer-system, ibc, pallet-weighing-truck, bin-wash-system, cip-wip-skid)
- 4 real PDF datasheets wired to Downloads section (hsmg, hsmg-r2t, binder-preparation-vessel, oscillating-granulator) — direct download links, others use mailto
- Wiring: REAL_PHOTOS/DATASHEETS overlay maps in products.js; img() helper in site-data.js resolves stock keys OR direct /products/* paths; DB + seed.py hero fields synced via /app/backend/sync_real_photos.py
- Note: HSMG gallery 4.jpg shows a co-mill nameplate — user's own ZIP organization, intentional

## Backlog / Next
- P1: Blog/news seed content still references legacy "Saizoner"/"RMG" (editorial) — confirm with user whether to rewrite
- P1: Real contact details currently placeholders (info@prochemtapasya.com, +91 22 6666 0000)
- P2: Real photos still needed for the 6 stock products (Tipper, Power Transfer System, IBC, Pallet Weighing Truck, Bin Wash System, CIP/WIP Skid)
- P2: Admin product form has no file-upload for hero/gallery (free-text key field) — add upload if editors need it
- P2: If admin edits should ever go live, wire public pages to GET /api/products (user currently declined)

## Credentials
- Admin: /admin/login — panditamit946@gmail.com / AmitS@2025 (see /app/memory/test_credentials.md)
