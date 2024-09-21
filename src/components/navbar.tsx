"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "./site-icon.svg";
import { usePathname } from "next/navigation";
import sal from "sal.js";
import { useEffect, useRef } from "react";

const routes = [
  {
    link: "/open-source",
    label: "Open Source",
  },
  // {
  //   link: "/communities",
  //   label: "Communities",
  // },
  // {
  //   link: "/events",
  //   label: "Events",
  // },
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
  const ref = useRef<HTMLInputElement>(null);
  const salRef = useRef<sal.API>();

  useEffect(() => {
    if (salRef.current) {
      salRef.current.update();
    } else {
      salRef.current = sal();
    }
    if (ref.current?.checked) {
      ref.current.checked = false;
    }
  }, [pathname]);

  useEffect(() => {
    salRef.current = sal();
  }, []);

  return (
    <header className="p-4 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link className="flex items-center text-2xl font-black" href="/">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
          <Image src={Logo} width={100} alt="awesome morocco logo" />
        </Link>
        <input
          className="peer hidden"
          type="checkbox"
          id="navbar-open"
          ref={ref}
        />
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
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-3 md:ml-auto md:flex-row md:space-y-0">
            {routes.map((route, index) => (
              <li className="inline-flex md:mr-6" key={`item-${index}`}>
                <Link
                  className={`border-b-2 pb-2 font-[400]  hover:text-neutral-10   ${
                    pathname.includes(route.link)
                      ? "border-secondary-500/50 text-neutral-10"
                      : "border-transparent  text-neutral-200"
                  }`}
                  href={route.link}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li className="inline-flex md:mr-6">
              <Link
                className="px-6 pb-2 text-neutral-200  hover:text-neutral-10"
                href="/dashboard"
              >
                Contribute
              </Link>
            </li>
            <li className="inline-flex md:mr-6">
              <a
                href="https://github.com/geeksblabla/awesome-morocco"
                target="_blank"
                className=" pb-2 font-[400] text-neutral-200  hover:text-neutral-10"
              >
                More...
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
