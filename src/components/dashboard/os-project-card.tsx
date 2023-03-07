import type { GithubRepo } from "@prisma/client";

export const OSProjectCard = ({ project }: { project: GithubRepo }) => {
  return (
    <div className="mx-auto my-8 flex max-w-screen-sm flex-col items-center gap-3 rounded-xl border border-gray-100 p-6 text-gray-600 shadow-lg sm:flex-row sm:gap-8">
      <div className="flex flex-col items-center text-center sm:items-stretch sm:text-left">
        <div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
          <h4 className="mb-4 sm:m-0">
            <span className="text-xs">{project.language}</span>
            <br />
            {project.owner}/{project.name}
          </h4>
          <div className="flex items-center">
            <a
              href="#"
              className="mx-1 flex h-8 w-8 items-center justify-center rounded-full border text-lg transition-colors duration-200 ease-in-out hover:bg-gray-300"
              title="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="mx-1 flex h-8 w-8 items-center justify-center rounded-full border text-lg transition-colors duration-200 ease-in-out hover:bg-gray-300"
              title="Github"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="mx-1 flex h-8 w-8 items-center justify-center rounded-full border text-lg transition-colors duration-200 ease-in-out hover:bg-gray-300"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          fugit veritatis sapiente quidem odit labore animi velit obcaecati
          adipisci exercitationem!.
        </p>
        <div className="flex flex-row flex-wrap py-2">
          {project.topics.split(",").map((topic, index) => (
            <div
              key={index}
              className="mr-2 mt-1 self-start rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600"
            >
              #icefactory
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
