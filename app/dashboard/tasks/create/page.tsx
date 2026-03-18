export default function CreateTaskPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Create Task</h1>
      <p className="mb-4 text-muted-foreground">
        Enter details for your new task below.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-10 flex flex-col items-center text-center">
        <div className="mb-3 text-lg">
          Assign your task to a project or team member.
        </div>
        <form className="w-full max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="w-full rounded-lg border p-2"
              placeholder="Task name"
              disabled
            />
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-primary text-background py-2 font-semibold shadow cursor-not-allowed opacity-60"
            disabled
          >
            Save Task (Coming Soon)
          </button>
        </form>
      </div>
    </div>
  );
}