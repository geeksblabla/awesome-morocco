import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Items = [
  {
    label: "Home",
    href: "/dashboard",
  },
  {
    label: "Open Source Projects",
    href: "/dashboard/open-source",
  },
  {
    label: "Blogs",
    href: "/dashboard/blogs",
  },
  {
    label: "Communities",
    href: "/dashboard/communities",
  },
  {
    label: "Events",
    href: "/dashboard/events",
  },
  {
    label: "Podcasts",
    href: "/dashboard/podcasts",
  },
  {
    label: "Mentors",
    href: "/dashboard/mentors",
  },
];

type Page =
  | "Home"
  | "Open Source Projects"
  | "Blogs"
  | "Communities"
  | "Events"
  | "Podcasts"
  | "Mentors";

export const DashboardLayout = ({
  children,
  activePage,
}: {
  children: React.ReactNode;
  activePage?: Page;
}) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-4 max-w-screen-lg  sm:mx-8 xl:mx-auto">
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="col-span-2 hidden sm:block">
            <ul>
              {Items.map((item) => (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  active={activePage === item.label}
                />
              ))}
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({
  label,
  href,
  active = false,
}: {
  label: string;
  href: string;
  active?: boolean;
}) => {
  return (
    <li
      className={`mt-5 cursor-pointer border-l-2 ${
        active
          ? "border-l-blue-700 text-blue-700"
          : "border-transparent text-black"
      }  px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};
