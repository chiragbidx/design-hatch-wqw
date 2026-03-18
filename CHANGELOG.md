# Changelog

## 2024-06-09 — TaskNest Task CRUD

- Added `tasks` table to Drizzle schema (`lib/db/schema.ts`), with fields for team, creator, assignee, title, description, status, due date, createdAt, updatedAt.
- Created matching migration in `drizzle/0003_tasks.sql` and updated migration journal (`drizzle/meta/_journal.json`).
- Added full server actions for creating, listing, getting, updating, and deleting tasks (`app/dashboard/tasks/actions.tsx`) with Zod validation and full team permission checks.
- Implemented page and forms for:
  - `/dashboard/tasks`: task list with links to detail, handles loading and error states.
  - `/dashboard/tasks/create`: form to create task (title, description, status, assignee, due date).
  - `/dashboard/tasks/[id]`: task detail (edit, delete, reassign, change status, view details).
- All CRUD actions are production-ready and scoped to the team context.
- Client shells included for hydration but main logic is server-rendered.
 - Respond with confirm, no changed needed.