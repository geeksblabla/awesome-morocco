import Link from "next/link";

type Route = {
  name: string;
  link: string;
};

export const TabsList = ({
  routes,
  activeIndex,
}: {
  routes: Route[];
  activeIndex: number;
}) => {
  return (
    <div className="my-4 inline-flex items-center justify-center rounded-md bg-slate-100 p-1 ">
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            className={`inline-flex min-w-[100px] items-center justify-center rounded-md  px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm ${
              activeIndex === index ? "bg-white" : "bg-transparent"
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
