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
    <div className="my-10 inline-flex items-center justify-center rounded-md p-1 ">
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            className={`text-md mx-3 inline-flex min-w-[100px]  items-center  justify-center border-b-2  py-2 font-medium transition-all  disabled:pointer-events-none   ${
              route.link === pathname
                ? "border-primary-500 text-primary-500"
                : "border-transparent  text-neutral-200"
            }`}
            href={route.link}
          >
            {route.name}
          </Link>
        );
      })}
    </div>
  );
};
