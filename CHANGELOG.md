# Changelog

## 2024-06-09 — TaskNest Branding & Dashboard Foundation

- Overhauled all landing content in `content/home.ts` to reflect TaskNest branding, value prop, features, and testimonials.
- Updated `components/layout/navbar.tsx` to use TaskNest for all brand and action labels.
- Refreshed authentication UI copy (`app/auth/client.tsx` and `app/auth/forgot-password/client.tsx`) to match TaskNest, including headings, descriptions, button labels, and all helpers.
- Upgraded dashboard shell sidebar (`app/dashboard/layout.tsx` and `components/dashboard/sidebar-nav.tsx`) for TaskNest brand, with platform nav: Overview, Tasks, Create Task.
- Added minimal, navigable dashboard routes:
  - `/dashboard/overview` with heading, description, and empty state.
  - `/dashboard/tasks` with heading, empty state, and "Create Task" CTA.
  - `/dashboard/tasks/create` with heading, description, and immutable form/warning.
- Updated dashboard welcome page and empty states to TaskNest-specific copy and actions.
- Provided minimal client shell files for dashboard routes to keep dashboard fully navigable and production ready.