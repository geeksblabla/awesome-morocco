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
      className="relative flex w-full max-w-xs cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#3a374b] text-neutral-25 shadow-md transition-all hover:scale-105 hover:border-secondary-500/75"
    >
      <RemoteImage
        className="aspect-[16/9] w-full object-cover"
        src={article.image ?? undefined}
        alt={`${article.title} website image`}
      />
      <div className="flex h-full flex-col px-5 pb-5 pt-4 text-start">
        <div className="mt-2.5 flex flex-grow flex-col ">
          <h5 className="text-start  text-lg font-semibold tracking-tight ">
            {article.title}
          </h5>
          <span className="mr-2 line-clamp-2 rounded text-xs text-neutral-75">
            {article.description}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-neutral-75">
            {article.published_at && (
              <>
                {new Date(article.published_at).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                })}{" "}
                {","} {new Date(article.published_at).getFullYear()}
              </>
            )}
          </span>
          <span className="text-xs text-neutral-75">{host}</span>
        </div>
      </div>
    </a>
  );
};
