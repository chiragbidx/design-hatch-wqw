import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";

// Purpose: Server route entry for /dashboard.
// Keep auth checks and database reads in this file,
// then pass prepared props into `client.tsx`.

export default async function DashboardPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [user] = await db
    .select({ firstName: users.firstName })
    .from(users)
    .where(eq(users.id, session.userId))
    .limit(1);

  const firstName = user?.firstName || "there";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome to TaskNest</h1>
      <p className="text-lg mb-6 text-muted-foreground">
        Your command center for organized, collaborative work.
      </p>
      <Client greeting="Welcome" firstName={firstName} />
    </div>
  );
}