import { numberToShortString } from "~/utils/utils";
import type { OsRepositories } from "~/xata";

export const OSProjectCard = ({ project }: { project: OsRepositories }) => {
  return (
    <div className="flex grow cursor-pointer flex-col items-center  rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#110F1C] p-6 text-neutral-25  shadow-md   sm:flex-row sm:gap-6">
      <div className="flex h-full grow flex-col items-stretch text-left">
        <div className="mb-2 flex flex-row items-center justify-between ">
          <h4 className="mb-4 sm:m-0">
            <span className="text-xs text-neutral-200">{project.language}</span>
            <br />
            <span className="text-lg font-bold">{project.name}</span>
          </h4>
          <div className="flex items-end justify-end ">
            <div className="flex flex-row items-center justify-center">
              <span
                className="ml-1 flex h-8 w-8 items-center justify-center text-lg  "
                title="Stars"
              >
                <svg
                  aria-label="stars"
                  role="img"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  version="1.1"
                  fill="none"
                  data-view-component="true"
                >
                  <path
                    d="M13.7299 3.51063L15.4899 7.03063C15.7299 7.52063 16.3699 7.99063 16.9099 8.08063L20.0999 8.61062C22.1399 8.95062 22.6199 10.4306 21.1499 11.8906L18.6699 14.3706C18.2499 14.7906 18.0199 15.6006 18.1499 16.1806L18.8599 19.2506C19.4199 21.6806 18.1299 22.6206 15.9799 21.3506L12.9899 19.5806C12.4499 19.2606 11.5599 19.2606 11.0099 19.5806L8.01991 21.3506C5.87991 22.6206 4.57991 21.6706 5.13991 19.2506L5.84991 16.1806C5.97991 15.6006 5.74991 14.7906 5.32991 14.3706L2.84991 11.8906C1.38991 10.4306 1.85991 8.95062 3.89991 8.61062L7.08991 8.08063C7.61991 7.99063 8.25991 7.52063 8.49991 7.03063L10.2599 3.51063C11.2199 1.60063 12.7799 1.60063 13.7299 3.51063Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-xs">
                {numberToShortString(project.stars ?? 0)}
              </span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <span
                className="ml-1 flex h-8 w-8 items-center justify-center text-lg  "
                title="Forks"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15V8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.12988 15.0009C5.57988 13.2509 7.17988 11.9509 9.06988 11.9609L12.4999 11.9709C15.1199 11.9809 17.3499 10.3009 18.1699 7.96094"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm">
                {numberToShortString(project.forks ?? 0)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 text-sm text-neutral-200">
            {project.description}
          </p>
        </div>
        <div className="flex flex-row flex-wrap  py-2">
          {project.topics?.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="mr-2 mt-1 self-start rounded-2xl bg-secondary-500/10 px-3 py-1 text-xs text-secondary-500/100"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
