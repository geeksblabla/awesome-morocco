import Link from "next/link";

export const SeeMoreButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className="group flex  cursor-pointer items-center justify-center rounded-md bg-secondary-500 px-6 py-2 text-gray-300 transition"
    >
      <span className="group flex  items-center justify-center rounded py-1 text-center font-bold">
        See More
      </span>
      <svg
        className="flex-0 ml-4 h-6 w-6 transition-all group-hover:translate-x-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
};
