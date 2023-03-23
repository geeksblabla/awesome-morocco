import type { GithubRepo } from "@prisma/client";

export const OSProjectCard = ({ project }: { project: GithubRepo }) => {
  return (
    <div className="flex grow cursor-pointer flex-col  items-center rounded-xl border border-gray-100 p-6 text-gray-600 shadow-md hover:shadow-lg sm:flex-row sm:gap-6">
      <div className="flex h-full grow flex-col items-stretch text-left">
        <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
          <h4 className="mb-4 sm:m-0">
            <span className="text-xs">{project.language}</span>
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
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  fill="currentColor"
                  data-view-component="true"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
              </span>
              <span className="text-xs">{project.stars}</span>
            </div>
            <div className="flex flex-row items-center justify-center">
              <span
                className="ml-1 flex h-8 w-8 items-center justify-center text-lg  "
                title="Forks"
              >
                <svg
                  aria-label="forks"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  fill="currentColor"
                  data-view-component="true"
                >
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
              </span>
              <span className="text-xs">{project.forks}</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm">{project.description}</p>
        </div>
        <div className="flex flex-row flex-wrap  py-2">
          {project.topics.split(",").map((topic, index) => (
            <span
              key={index}
              className="mr-2 mt-1 self-start rounded-2xl bg-blue-100 py-1 px-3 text-xs text-gray-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
