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
          <ul className="flex flex-col items-center md:items-start space-y-3 md:ml-auto md:flex-row md:space-y-0">
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
                Add Yours
              </Link>
            </li>
            <li className="inline-flex md:mr-6">
            <a
              className=" hover:underline"
              href="https://github.com/geeksblabla/awesome-morocco"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0C5.82125 0 0 5.73784 0 12.8164C0 18.479 3.72494 23.2831 8.89022 24.9779C9.53985 25.0965 9.77845 24.6997 9.77845 24.3613C9.77845 24.0558 9.76651 23.046 9.76086 21.9751C6.14424 22.7505 5.38109 20.4629 5.38109 20.4629C4.78967 18.9816 3.93772 18.5876 3.93772 18.5876C2.75811 17.7921 4.02663 17.8085 4.02663 17.8085C5.33192 17.8989 6.0194 19.1295 6.0194 19.1295C7.17884 21.0887 9.06054 20.5222 9.80249 20.1947C9.91919 19.3665 10.2559 18.8009 10.6278 18.4809C7.74033 18.1569 4.70483 17.0578 4.70483 12.1469C4.70483 10.7478 5.21272 9.60444 6.0444 8.70687C5.90944 8.38393 5.46441 7.08048 6.17036 5.31501C6.17036 5.31501 7.26206 4.97075 9.74611 6.62893C10.7832 6.34491 11.8953 6.2025 13.0001 6.19756C14.1048 6.2025 15.2178 6.34491 16.2567 6.62893C18.738 4.97075 19.8282 5.31501 19.8282 5.31501C20.5357 7.08048 20.0907 8.38393 19.9557 8.70687C20.7893 9.60444 21.2936 10.7478 21.2936 12.1469C21.2936 17.0696 18.2524 18.1534 15.3575 18.4707C15.8238 18.8685 16.2392 19.6484 16.2392 20.8441C16.2392 22.5589 16.2243 23.9391 16.2243 24.3613C16.2243 24.7024 16.4583 25.1021 17.1171 24.9763C22.2798 23.2797 26 18.4772 26 12.8164C26 5.73784 20.1796 0 13 0Z"
                  fill="white"
                />
                <path
                  d="M4.92383 18.4015C4.89522 18.4653 4.79349 18.4844 4.70096 18.4407C4.60659 18.3988 4.55382 18.312 4.58428 18.2481C4.61225 18.1826 4.71396 18.1643 4.80817 18.2081C4.9026 18.25 4.95644 18.3376 4.92383 18.4015Z"
                  fill="white"
                />
                <path
                  d="M5.45044 18.9806C5.38848 19.0371 5.26709 19.0108 5.18486 18.9213C5.09972 18.8319 5.08399 18.7123 5.14691 18.655C5.21083 18.5984 5.32837 18.6249 5.41346 18.7142C5.49865 18.8046 5.5152 18.9232 5.45044 18.9806Z"
                  fill="white"
                />
                <path
                  d="M5.96302 19.7187C5.88332 19.7733 5.75299 19.7221 5.67244 19.6081C5.59274 19.4941 5.59276 19.3574 5.67431 19.3026C5.75486 19.2479 5.88334 19.2972 5.96489 19.4102C6.04438 19.5261 6.04436 19.6629 5.96302 19.7187Z"
                  fill="white"
                />
                <path
                  d="M6.66518 20.4318C6.59387 20.5093 6.44206 20.4884 6.33111 20.3827C6.21737 20.2794 6.18583 20.1328 6.25708 20.0552C6.32944 19.9777 6.48207 19.9994 6.59386 20.1043C6.70676 20.2075 6.74103 20.3551 6.66518 20.4318Z"
                  fill="white"
                />
                <path
                  d="M7.63391 20.8459C7.6024 20.9462 7.45632 20.9918 7.30911 20.9491C7.16196 20.9052 7.06592 20.7877 7.09553 20.6863C7.12598 20.5852 7.27288 20.5377 7.42109 20.5833C7.56809 20.627 7.66436 20.7437 7.63391 20.8459Z"
                  fill="white"
                />
                <path
                  d="M8.69789 20.9226C8.70143 21.0283 8.57656 21.116 8.42207 21.1179C8.26668 21.1214 8.14073 21.0358 8.13909 20.9318C8.13909 20.825 8.26115 20.7383 8.41659 20.7357C8.57108 20.7328 8.69789 20.8177 8.69789 20.9226Z"
                  fill="white"
                />
                <path
                  d="M9.68788 20.7566C9.70636 20.8596 9.59886 20.9655 9.44537 20.9937C9.29447 21.0211 9.15491 20.9572 9.13559 20.855C9.1169 20.7494 9.22615 20.6434 9.37694 20.6161C9.53064 20.5897 9.6683 20.6517 9.68788 20.7566Z"
                  fill="white"
                />
              </svg>
            </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
