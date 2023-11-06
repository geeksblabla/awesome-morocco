import { Rule } from "~/components/dashboard/rule";
import { NewBlogForm } from "~/components/forms/new-blog";

export default function BlogsPage() {
  return (
    <>
      <div className="pt-4">
        <h1 className="border-b-2 border-secondary-500/30  py-5 text-2xl font-semibold">
          New Blog
        </h1>
      </div>
      <p className="pt-8 text-lg">
        Before adding a new project, ensure that it meets the following
        criteria:
      </p>
      <ul className="py-2 text-base">
        <Rule>
          If your blog is part of your portfolio please add the exact blog Url
        </Rule>
        <Rule>The blog should have at least 3 blog posts to be accepted</Rule>
        <Rule>
          Make sure your blog open graph metadata is correct as we will use it
          to display your blog
        </Rule>
      </ul>

      <div className="mt-4">
        <NewBlogForm />
      </div>
    </>
  );
}
