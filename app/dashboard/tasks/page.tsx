export default function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Tasks</h1>
      <p className="mb-4 text-muted-foreground">
        All your tasks in one place.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-10 flex flex-col items-center text-center">
        <div className="mb-6 text-lg">No tasks found. Start by creating a new task.</div>
        <a
          href="/dashboard/tasks/create"
          className="inline-block rounded-lg bg-primary px-6 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition"
        >
          Create Task
        </a>
      </div>
    </div>
  );
}