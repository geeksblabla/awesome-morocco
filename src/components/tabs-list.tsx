"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Route = {
  name: string;
  link: string;
};

export const TabsList = ({ routes }: { routes: Route[] }) => {
  const pathname = usePathname();

  return (
    <div className="sticky left-0 right-0 top-0 z-30 mb-2 w-full  items-center justify-center sm:inline-flex md:relative md:mb-6">
      <div className="mx-auto flex flex-row content-center items-center justify-center bg-black p-2 md:bg-transparent  ">
        {routes.map((route, index) => {
          return (
            <Link
              key={index}
              className={`text-md mx-3 inline-flex min-w-[100px]  items-center  justify-center border-b-2  py-2 font-medium transition-all  disabled:pointer-events-none   ${
                route.link === pathname
                  ? "border-secondary-500/50  text-white"
                  : "border-transparent  text-neutral-200"
              }`}
              href={route.link}
            >
              {route.name}
            </Link>
          );
        })}
      </div>

      {/* <div className="fixed bottom-0 left-0 z-50 h-12 w-full border-t  border-gray-600 bg-secondary-500/20 backdrop-blur-2xl sm:hidden">
        <div className="mx-auto grid h-full max-w-lg grid-cols-3 font-medium">
          {routes.map((route, index) => {
            return (
              <Link
                key={index}
                href={route.link}
                type="button"
                className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800/60"
              >
                <span className="text-sm text-gray-500 group-hover:text-primary-500 dark:text-gray-400 dark:group-hover:text-primary-500">
                  {route.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};
