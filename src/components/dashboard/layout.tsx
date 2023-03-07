import Link from "next/link";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="col-span-2 hidden sm:block">
          <ul>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Submissions
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              <Link href="/dashboard/open-source">Open Source Projects</Link>
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Blogs
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Communities
            </li>
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Events
            </li>
          </ul>
        </div>

        <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
          {children}
        </div>
      </div>
    </div>
  );
};
