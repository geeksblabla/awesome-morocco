import { BlogCard } from "~/components/blog-card";
import { getXataClient } from "~/xata";

// ReGenerate the page every 24 hours
export const revalidate = 86400;

export default async function BlogsPage() {
  const blogs = await getXataClient()
    .db.blogs.filter({ draft: false })
    .getAll();

  return (
    <div className="grid gap-4 sm:grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
      {blogs.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </div>
  );
}
