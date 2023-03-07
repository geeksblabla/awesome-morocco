import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  const { data: sessionData } = useSession();
  return (
    <li className="mt-2 sm:mt-0">
      {sessionData ? (
        <Link
          className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
          href="/dashboard"
        >
          Dashboard
        </Link>
      ) : (
        <a
          className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
          onClick={() => void signIn()}
        >
          Login
        </a>
      )}
    </li>
  );
};
