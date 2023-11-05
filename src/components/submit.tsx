import Link from "next/link";

export const Submit = () => {
  return (
    <li className="mt-2 sm:mt-0">
      <Link
        className="rounded-xl border-2 border-gray-600 px-6 py-2 font-medium text-gray-600 hover:bg-gray-600 hover:text-white"
        href="/dashboard"
      >
        Submit
      </Link>
    </li>
  );
};
