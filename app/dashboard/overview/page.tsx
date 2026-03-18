export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Overview</h1>
      <p className="mb-4 text-muted-foreground">
        Get a summary of your tasks and team activity in TaskNest.
      </p>
      <div className="rounded-xl border border-card shadow bg-card p-10 flex flex-col items-center text-center">
        <div className="mb-6 text-lg">No recent activity yet.</div>
      </div>
    </div>
  );
}