import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const user = await clerkClient.users.getUser(userId);
  console.log(user.privateMetadata);

  return (
    <div className=" sm:py-16 md:px-20">
      {user && (
        <>
          <h1 className="text-3xl font-semibold ">
            👋 Hi, {user.firstName ?? `Stranger`}
          </h1>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">test user</div>
          <h2 className="mb-4 mt-16 text-3xl font-semibold ">What's next?</h2>
          Read the{" "}
          <Link
            className="text-primary-600 font-medium hover:underline"
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            target="_blank"
          >
            Clerk Docs -&gt;
          </Link>
        </>
      )}
    </div>
  );
}
