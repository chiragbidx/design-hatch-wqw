import { listTasks } from "./actions";
import Link from "next/link";

export default async function TasksPage() {
  let tasks: any[] = [];
  let error: string | null = null;
  try {
    tasks = await listTasks();
  } catch (e: any) {
    error = e?.message || "Could not load tasks";
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Tasks</h1>
      <p className="mb-4 text-muted-foreground">
        All your tasks in one place.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-4 md:p-10 flex flex-col items-center text-center">
        <div className="w-full">
          {error ? (
            <div className="text-destructive mb-4">{error}</div>
          ) : tasks.length === 0 ? (
            <>
              <div className="mb-6 text-lg">No tasks found. Start by creating a new task.</div>
              <Link
                href="/dashboard/tasks/create"
                className="inline-block rounded-lg bg-primary px-6 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition"
              >
                Create Task
              </Link>
            </>
          ) : (
            <>
              <div className="flex justify-end w-full mb-4">
                <Link
                  href="/dashboard/tasks/create"
                  className="inline-block rounded-lg bg-primary px-4 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition"
                >
                  Create Task
                </Link>
              </div>
              <div className="overflow-x-auto w-full">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2 text-left">Title</th>
                      <th className="p-2 text-left">Status</th>
                      <th className="p-2 text-left">Due</th>
                      <th className="p-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task) => (
                      <tr key={task.id} className="border-b hover:bg-muted/50">
                        <td className="p-2">
                          <Link href={`/dashboard/tasks/${task.id}`} className="font-medium underline">
                            {task.title}
                          </Link>
                        </td>
                        <td className="p-2 capitalize">
                          {task.status.replace("_", " ")}
                        </td>
                        <td className="p-2">{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : <span className="text-muted-foreground">—</span>}</td>
                        <td className="p-2">
                          <Link href={`/dashboard/tasks/${task.id}`} className="text-primary underline">View</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {tasks.length === 0 && (
                <div className="mt-6 text-muted-foreground text-center">No tasks to display</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}