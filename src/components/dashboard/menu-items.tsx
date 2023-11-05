"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const MenuItems = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="col-span-2 hidden sm:block">
        <ul>
          {Items.map((item) => (
            <MenuItem
              key={item.label}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
            />
          ))}
        </ul>
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
          ? "text-neutral-10 border-l-blue-700"
          : "border-transparent text-neutral-200"
      }  text-neutral-10 px-2 py-2 font-semibold transition hover:border-l-blue-700`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};
