import { currentUser } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="sm:py-16 md:px-4">
      {user && (
        <>
          <h1 className="text-3xl font-semibold ">
            👋 Hi, {user.firstName ?? `Stranger`}
          </h1>
          <p className="pt-4 text-neutral-75">
            {" "}
            To add new Open source project, blogs or any other resource, please
            check the side menu
          </p>
        </>
      )}
    </div>
  );
}
