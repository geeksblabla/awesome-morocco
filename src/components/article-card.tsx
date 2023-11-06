import { RemoteImage } from "./remote-image";
import { type Articles } from "~/xata";

type ArticleCardProps = {
  article: Articles;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const articleUrl = article.url ?? "#";
  const host = new URL(articleUrl).host ?? "";
  return (
    <a
      href={articleUrl}
      target="_blank"
      className="relative flex w-full max-w-xs cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#3a374b] text-neutral-25 shadow-md transition-all hover:border-secondary-500/75"
    >
      <RemoteImage
        className="w-full object-cover md:h-36 lg:h-48"
        src={article.image ?? undefined}
        alt={`${article.title} website image`}
      />
      {/* <span className="absolute left-0 top-0 w-28 -translate-x-6 translate-y-4 -rotate-45 border bg-secondary-500/60 text-center text-sm text-white">
        New
      </span> */}
      <div className="mt-4 px-5 pb-5 text-start">
        <h5 className="text-start text-base font-semibold tracking-tight ">
          {article.title}
        </h5>

        <div className="mt-2.5 flex flex-col">
          <span className="mr-2 line-clamp-2 rounded text-xs text-neutral-75">
            {article.description}
          </span>
          <div className="mt-3 flex items-center justify-between ">
            <span className="text-xs text-neutral-75">
              {article.published_at?.toDateString()}
            </span>
            <span className="text-xs text-neutral-75">{host}</span>
          </div>
        </div>
      </div>
    </a>
  );
};
