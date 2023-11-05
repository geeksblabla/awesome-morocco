import type { Article } from "@prisma/client";
import { RemoteImage } from "./remote-image";

export const ArticleCard = ({
  image,
  title,
  description,
  publishedAt,
  url,
}: Article) => {
  return (
    <a href={url} target="_blank">
      <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
        <RemoteImage
          className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src={image}
          alt="blog"
        />
        <div className="grow py-1 px-6">
          <h1 className="title-font my-3 inline-block cursor-pointer text-lg font-extrabold capitalize tracking-wide text-gray-800">
            {title}
          </h1>
          <p className="line-clamp-2 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
            {description.slice(0, 80) + "..."}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          <div className="flex flex-wrap text-sm text-gray-500">
            <span className="mr-1">{publishedAt.toDateString()}</span>
          </div>
        </div>
      </article>
    </a>
  );
};
