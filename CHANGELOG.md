# Changelog

## [0.11.1] — 2025-12-02
### Fixed
- Added missing Vercel Analytics integration in `layout.tsx`.
- Resolved production build failure caused by missing environment variables.

## [0.11.0] — 2025-12-02
### Added
- Implemented Supabase integration for email signup collection.
- Added `/api/subscribe` backend route with validation and RLS-friendly structure.
- Added `lib/supabaseServer.ts` for server-side Supabase client.
- Added email signup UI component with animation and confirmation messaging.

### Changed
- Updated homepage to include email signup form.
- Refined Notify Me button styling, animation, and arrow SVG.
- Adjusted spacing and layout of coming soon page.

### Fixed
- Resolved import path issues for components and lib.
- Fixed folder structure: moved components and lib out of `/app`.
- Fixed route handler placement (converted `subscribe.js` to `/api/subscribe/route.js`).


## [0.10.0] — 2025-12-01
### Added
- Built the reworked Archive page using edge-to-edge, full-screen stacked images
- Added dynamic `[slug]` routing for future deep-dive item pages
- Created placeholder deep-dive template under `/archive/[slug]`
- Added local hosting for archive images inside `/public/images`
- Implemented hero font sizing and container adjustments for improved homepage layout

### Changed
- Removed Archive filters/tabs (will return later when categories grow)
- Removed rounded corners, borders, and padding around Archive images
- Removed “View Timeline” footer block from Archive page
- Replaced About preview paragraph with CTA button linking to About page
- Adjusted homepage hero hierarchy (updated button text, updated copy, resized layout)
- Updated About page to remove body paragraph and standardize layout

### Fixed
- Corrected broken image paths after moving assets to local `/public/images/`
- Cleaned up breadcrumb paths and standardized them across pages
- Fixed hero text not expanding to container width
- Removed unused breadcrumb variants and old layout fragments that could cause routing confusion

### Notes
- Deep-dive product pages will be populated later — structural foundation is now ready
- Archive now serves as an immersive gallery placeholder until items are curated
- Next steps: design deep-dive layouts + finish image selection pass

---

## [0.9] — 2025-12-01
### Major Structure & Layout
- Established new site structure with dedicated pages:
  - `/current-drop`
  - `/archive`
  - `/timeline`
  - `/lab`
  - `/about`
  - `/contact`
- Unified sticky navigation and breadcrumb system across all pages.
- Removed legacy folder artifacts and ensured all pages use the updated layout.

### Homepage (Hero + About Preview)
- Rebuilt the hero section using the new brand direction.
- Added custom display font for hero text (“GDPHero”).
- Tuned hero typography, fixed column alignment, enforced consistent container width.
- Updated hero CTA to **Drop** with animated button behavior.
- Added placeholder drop-image grid under hero.
- Replaced About preview paragraph with matching animated button (“About Me”).
- Updated alignment, spacing, and container consistency.

### About Page
- Integrated circular portrait.
- Standardized header, breadcrumb, and navigation with global layout.
- Cleaned up content spacing and typography.

### Archive / Timeline / Lab / Contact Pages
- All pages upgraded to the new design system.
- Added consistent breadcrumbs and nav.
- Built archive grid with filtering UI (tabs & cards).
- Timeline kept as chronological visual story layout.
- Lab and Contact pages updated to match site styling.

### Fonts & Assets
- Added local font assets at `/public/fonts/mandalore/`.
- Implemented custom hero font using `@font-face`.
- Converted About portrait to local hosting in `/public/images/selfportrait.png`.

### Cleanup & Fixes
- Removed noise texture from global background.
- Fixed broken image paths.
- Removed unused text, buttons, and early industrial design remnants.
- Standardized padding, margin, and max-width utilities site-wide.