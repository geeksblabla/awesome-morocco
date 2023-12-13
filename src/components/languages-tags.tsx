"use client";

import { usePathname } from "next/navigation";
import { languages } from "~/utils/utils";

export const LanguagesTags = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="my-2 flex w-full flex-wrap ">
      {languages.map((language) => {
        return (
          <div
            key={language}
            className="mb-1 mr-1 rounded-md bg-secondary-500/30 px-2 py-1 text-xs font-semibold text-neutral-100"
          >
            {language}
          </div>
        );
      })}
    </div>
  );
};
