import { type Blogs } from "~/xata";
import { RemoteImage } from "./remote-image";

type BlogCardProps = {
  blog: Blogs;
};

export const BlogCard = ({ blog }: BlogCardProps) => {
  const blogUrl = blog.url ?? "#";
  return (
    <a
      href={blogUrl}
      target="_blank"
      className="relative flex w-full max-w-xs cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#3a374b] text-neutral-25 shadow-md transition-all hover:border-secondary-500/75"
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

// <a
//   href={blogUrl}
//   target="_blank"
//   className="flex grow cursor-pointer flex-col rounded-xl border border-[rgba(203,60,172,0.30)] bg-[#110F1C]  text-neutral-25  shadow-md  sm:flex-row sm:gap-6"
// >
//   <RemoteImage
//     className="h-4/6 w-full object-cover"
//     src={blog.image}
//     alt={`${blog.title} website image`}
//   />
//   <div className="group relative my-2 h-60 w-full  cursor-pointer overflow-hidden rounded-lg shadow-md">
//     <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold ">
//       {blog.title}
//     </h1>
//     <p className="px-8 text-center">{blog.description}</p>
//   </div>
// </a>
