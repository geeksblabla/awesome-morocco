import { RemoteImage } from "./remote-image";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
};
export const BlogCard = ({ title, description, image }: BlogCardProps) => {
  return (
    <div className="group relative my-2 h-60 w-full  cursor-pointer overflow-hidden rounded-lg shadow-md">
      <div className="absolute left-0 top-0 h-full w-full  transition-all duration-300 ease-in-out group-hover:-top-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <RemoteImage
          className="h-4/6 w-full object-cover"
          src={image}
          alt={`${title} website image`}
        />
        <div className="flex h-2/6 items-center justify-center  ">
          <h1 className=" px-4 text-center font-serif text-xl font-semibold">
            {title}
          </h1>
        </div>
      </div>

      <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
        <h1 className="mb-2 px-8 text-center font-serif text-xl font-semibold ">
          {title}
        </h1>
        <p className="px-8 text-center">{description}</p>
      </div>
    </div>
  );
};
