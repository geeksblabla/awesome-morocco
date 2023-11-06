"use client";
import Image from "next/image";
import Link from "next/link";
import { Submit } from "./submit";
import Logo from "./site-icon.svg";
import { usePathname } from "next/navigation";

const routes = [
  {
    link: "/open-source",
    label: "Open Source",
  },
  {
    link: "/communities",
    label: "Communities",
  },
  {
    link: "/events",
    label: "Events",
  },
  {
    link: "/blogs",
    label: "Blogs",
  },
  {
    link: "/podcasts",
    label: "Podcasts",
  },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="px-4 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center text-2xl font-black" href="/">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={Logo} width={100} alt="awesome morocco logo" />
        </Link>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label
          className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="hidden py-6 pl-2 peer-checked:block sm:block sm:py-0"
        >
          <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
            {routes.map((route, index) => (
              <li className="" key={`item-${index}`}>
                <Link
                  className={`border-b-2 pb-2 font-[400]  text-neutral-10 hover:text-neutral-200  ${
                    pathname.includes(route.link)
                      ? "border-primary-500 text-neutral-10"
                      : "border-transparent  text-neutral-200"
                  }`}
                  href={route.link}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <Submit />
          </ul>
        </nav>
      </div>
    </header>
  );
};
