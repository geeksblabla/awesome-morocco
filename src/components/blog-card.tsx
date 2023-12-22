import { type Blogs } from "~/xata";
import { RemoteImage } from "./remote-image";

type BlogCardProps = {
  blog: Blogs;
};

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <a
      href={blog.url ?? "#"}
      target="_blank"
      className="relative flex w-full max-w-xs cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#3a374b] text-neutral-25 shadow-md transition-all hover:scale-105 hover:border-secondary-500/75"
    >
      <RemoteImage
        className="w-full object-cover md:h-36 lg:h-48"
        src={blog.image ?? undefined}
        alt={`${blog.title} website image`}
      />
      <span className="absolute left-0 top-0 w-28 -translate-x-6 translate-y-4 -rotate-45 border bg-secondary-500/60 text-center text-sm text-white">
        New
      </span>
      <div className="mt-4 px-5 pb-5 text-start">
        <h5 className="line-clamp-1 text-start text-xl font-semibold tracking-tight">
          {blog.title}
        </h5>

        <div className="mb-4 mt-2.5 flex items-center">
          <span className="mr-2 line-clamp-2 rounded text-xs">
            {blog.description}
          </span>
        </div>
      </div>
    </a>
  );
};
