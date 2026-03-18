-- Regenerated migration for tasks table (TaskNest, for comprehensive test overwrite)
CREATE TABLE IF NOT EXISTS "tasks" (
  "id" text PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
  "team_id" text NOT NULL REFERENCES "teams"("id") ON DELETE CASCADE,
  "created_by" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
  "assignee_id" text REFERENCES "users"("id") ON DELETE SET NULL,
  "title" text NOT NULL,
  "description" text NOT NULL DEFAULT '',
  "status" text NOT NULL DEFAULT 'todo',
  "due_date" timestamp with time zone,
  "created_at" timestamp with time zone NOT NULL DEFAULT now(),
  "updated_at" timestamp with time zone NOT NULL DEFAULT now()
);