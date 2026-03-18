"use server";

import { z } from "zod";
import { db } from "@/lib/db/client";
import { tasks, users } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";
import { eq, and } from "drizzle-orm";

const CreateTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().default(""),
  status: z.enum(["todo", "in_progress", "done"]).default("todo"),
  assigneeId: z.string().optional().nullable(),
  dueDate: z.string().optional().nullable(),
});

const UpdateTaskSchema = CreateTaskSchema.partial()
  .extend({ id: z.string().min(1) });

// List all tasks for the current user's team
export async function listTasks() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  // Find user's team (first by membership)
  const team = await db.query.teamMembers.findFirst({
    where: and(
      eq("user_id", session.userId)
    ),
    columns: ["team_id"]
  });

  if (!team) throw new Error("No team found");
  return await db.select({
    id: tasks.id,
    title: tasks.title,
    description: tasks.description,
    status: tasks.status,
    assigneeId: tasks.assigneeId,
    dueDate: tasks.dueDate,
    createdAt: tasks.createdAt,
    updatedAt: tasks.updatedAt,
  })
    .from(tasks)
    .where(eq(tasks.teamId, team.team_id))
    .orderBy(tasks.createdAt);
}

// Get one task (with team validation)
export async function getTask(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const t = await db.query.tasks.findFirst({
    where: eq(tasks.id, id),
  });
  if (!t) throw new Error("Task not found");

  // Make sure the user is a member of this task's team
  const isMember = await db.query.teamMembers.findFirst({
    where: and(
      eq("team_id", t.teamId),
      eq("user_id", session.userId)
    )
  });
  if (!isMember) throw new Error("Forbidden");

  return t;
}

// Get potential assignees (teammates)
export async function getTaskAssignees() {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const team = await db.query.teamMembers.findFirst({
    where: and(
      eq("user_id", session.userId)
    ),
    columns: ["team_id"]
  });
  if (!team) throw new Error("No team found");
  return await db
    .select({
      id: users.id,
      name: users.firstName,
      email: users.email,
    })
    .from(users)
    .innerJoin(
      "team_members",
      and(eq(users.id, "user_id"), eq("team_id", team.team_id))
    );
}

// Create a new task
export async function createTask(formData: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");

  const team = await db.query.teamMembers.findFirst({
    where: and(
      eq("user_id", session.userId)
    ),
    columns: ["team_id"]
  });
  if (!team) throw new Error("No team found");

  const parsed = CreateTaskSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { status: "error", message: "Validation failed" };
  const { title, description, status, assigneeId, dueDate } = parsed.data;

  const [task] = await db
    .insert(tasks)
    .values({
      title,
      description,
      status,
      assigneeId: assigneeId || null,
      dueDate: dueDate ? new Date(dueDate) : null,
      teamId: team.team_id,
      createdBy: session.userId,
      updatedAt: new Date(),
    })
    .returning();

  return { status: "success", message: "Task created", id: task.id };
}

// Edit task
export async function updateTask(formData: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const parsed = UpdateTaskSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { status: "error", message: "Validation failed" };
  const { id, ...fields } = parsed.data;
  const task = await getTask(id!);
  // Only team members can update
  await db
    .update(tasks)
    .set({
      ...fields,
      updatedAt: new Date(),
    })
    .where(eq(tasks.id, id));
  return { status: "success", message: "Task updated" };
}

// Delete task
export async function deleteTask({ id }: { id: string }) {
  const session = await getAuthSession();
  if (!session) throw new Error("Unauthorized");
  const task = await getTask(id);
  await db.delete(tasks).where(eq(tasks.id, id));
  return { status: "success" };
}