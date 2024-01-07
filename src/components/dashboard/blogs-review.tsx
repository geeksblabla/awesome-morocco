import { getXataClient } from "~/xata";
import { BlogItem } from "./blog-item";

export default async function BlogsReview() {
  const blogs = await getXataClient().db.blogs.filter({ draft: true }).getAll();

  return (
    <>
      <div className="pt-4">
        <h4 className="mb-5 border-b-2  border-secondary-500/30 py-5 text-xl font-semibold">
          Blogs ( {blogs.length} ) :
        </h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {blogs.map((blog) => {
          return <BlogItem key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
}
