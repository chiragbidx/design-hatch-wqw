import { getTask, updateTask, deleteTask, getTaskAssignees } from "../actions";
import { redirect } from "next/navigation";

type Props = { params: { id: string } };

export default async function TaskDetailPage({ params }: Props) {
  let task: any = null;
  let assignees: { id: string; name: string; email: string }[] = [];
  let error: string | null = null;
  try {
    task = await getTask(params.id);
    assignees = await getTaskAssignees();
  } catch (e: any) {
    error = e?.message || "Could not load task";
  }

  async function handleEdit(formData: FormData) {
    "use server";
    const res = await updateTask(formData);
    if (res.status === "success") {
      redirect(`/dashboard/tasks/${params.id}`);
    }
    return res;
  }

  async function handleDelete() {
    "use server";
    await deleteTask({ id: params.id });
    redirect(`/dashboard/tasks`);
  }

  if (error) {
    return (
      <div>
        <h2 className="text-xl font-semibold">Task Not Found</h2>
        <p className="mb-4 text-destructive">{error}</p>
        <a href="/dashboard/tasks" className="underline text-primary">
          Back to tasks
        </a>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Task</h1>
      <p className="mb-4 text-muted-foreground">
        View or edit task details below.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-10 flex flex-col items-center text-left">
        <form className="w-full max-w-md" action={handleEdit}>
          <input type="hidden" name="id" value={task.id} />
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <input
              required
              name="title"
              id="title"
              defaultValue={task.title}
              placeholder="Enter a task title"
              className="w-full rounded-lg border px-3 py-2"
              maxLength={255}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={task.description}
              placeholder="Optional details"
              className="w-full rounded-lg border px-3 py-2"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full rounded-lg border px-3 py-2"
              defaultValue={task.status}
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="assigneeId" className="block font-medium mb-1">
              Assignee
            </label>
            <select
              name="assigneeId"
              id="assigneeId"
              className="w-full rounded-lg border px-3 py-2"
              defaultValue={task.assigneeId || ""}
            >
              <option value="">Unassigned</option>
              {assignees.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="dueDate" className="block font-medium mb-1">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              defaultValue={
                task.dueDate
                  ? new Date(task.dueDate).toISOString().split("T")[0]
                  : ""
              }
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-lg bg-primary text-background py-2 px-6 font-semibold shadow hover:bg-primary/90 transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="rounded-lg bg-destructive text-background py-2 px-6 font-semibold shadow hover:bg-destructive/90 transition ml-auto"
              formAction={handleDelete}
            >
              Delete Task
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <a
          href="/dashboard/tasks"
          className="underline text-primary text-base"
        >
          &larr; Back to Tasks
        </a>
      </div>
    </div>
  );
}