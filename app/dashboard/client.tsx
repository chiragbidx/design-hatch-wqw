"use client";

export default function Client({ greeting, firstName }: { greeting: string, firstName: string }) {
  return (
    <section className="py-10">
      <div className="rounded-xl border border-card shadow-lg bg-card p-10 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Hello, {firstName}!</h2>
        <p className="mb-4 text-muted-foreground">
          Ready to organize your work, assign tasks, and boost your team’s productivity? Get started by creating a new task or exploring your dashboard.
        </p>
        <a
          href="/dashboard/tasks/create"
          className="inline-block rounded-lg bg-primary px-6 py-2 text-base font-semibold text-background shadow hover:bg-primary/90 transition"
        >
          Create Task
        </a>
      </div>
      <div className="mt-8 text-muted-foreground text-center">
        No tasks to display
      </div>
    </section>
  );
}