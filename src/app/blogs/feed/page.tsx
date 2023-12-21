import { ArticleCard } from "~/components/article-card";
import { getXataClient } from "~/xata";

export default async function FeedPage() {
  const articles = await getXataClient()
    .db.articles.filter({ $all: [{ $exists: "title" }] })
    .sort("published_at", "desc")
    .getMany({
      pagination: { size: 200 },
    }); // TODO: apply pagination next
  return (
    <div className="grid gap-4 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
}
