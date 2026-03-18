import { createTask, getTaskAssignees } from "../actions";
import { redirect } from "next/navigation";

export default async function CreateTaskPage() {
  let assignees: { id: string; name: string; email: string }[] = [];
  try {
    assignees = await getTaskAssignees();
  } catch (_) {}

  async function action(formData: FormData) {
    "use server";
    const result = await createTask(formData);
    if (result.status === "success" && result.id) {
      redirect(`/dashboard/tasks/${result.id}`);
    }
    return result;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Create Task</h1>
      <p className="mb-4 text-muted-foreground">
        Enter details for your new task below.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-10 flex flex-col items-center text-center">
        <form className="w-full max-w-md" action={action}>
          <div className="mb-4 text-left">
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <input
              required
              name="title"
              id="title"
              placeholder="Enter a task title"
              className="w-full rounded-lg border px-3 py-2"
              maxLength={255}
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Optional details"
              className="w-full rounded-lg border px-3 py-2"
              rows={3}
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="status" className="block font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="w-full rounded-lg border px-3 py-2"
              defaultValue="todo"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="assigneeId" className="block font-medium mb-1">
              Assignee
            </label>
            <select
              name="assigneeId"
              id="assigneeId"
              className="w-full rounded-lg border px-3 py-2"
            >
              <option value="">Unassigned</option>
              {assignees.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="dueDate" className="block font-medium mb-1">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary text-background py-2 font-semibold shadow hover:bg-primary/90 transition"
          >
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
}