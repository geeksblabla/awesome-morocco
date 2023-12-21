import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import OSProjectsReview from "~/components/dashboard/os-projects-review";

const items = [
  {
    label: "New OS project",
    href: "/dashboard/open-source",
  },
  {
    label: "New blog",
    href: "/dashboard/blogs",
  },
  {
    label: "New podcast",
    href: "/dashboard/podcasts",
  },
];
export default async function DashboardPage() {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata.role === "admin";
  console.log(user?.privateMetadata);

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
          <div className="mt-4 grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <Link href={item.href} key={index}>
                <div
                  key={index}
                  className="flex content-center items-center justify-center rounded-md border-2 border-[rgba(203,60,172,0.30)] px-16 py-8"
                >
                  <h1 className="text-center text-2xl text-gray-300">
                    {item.label}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
          {isAdmin && (
            <div className="pt-4">
              <OSProjectsReview />
            </div>
          )}
        </>
      )}
    </div>
  );
}
