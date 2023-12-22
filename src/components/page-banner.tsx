import Image, { type StaticImageData } from "next/image";
import openSourceSrc from "~/assets/open-source.png";

type Props = {
  title: string;
  description: string;
  image?: StaticImageData;
};

export const PageBanner = ({
  title,
  description,
  image = openSourceSrc,
}: Props) => {
  return (
    <div className="sm:px-none mx-auto px-4">
      <div className="mx-auto flex  max-w-screen-lg items-center text-white ">
        <div className="my-5 lg:my-8 lg:w-1/2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-2xl text-neutral-200">{description}</p>
        </div>
        <div className="hidden w-1/2 flex-shrink-0 justify-center lg:flex">
          <Image src={image} alt="open source" priority />
        </div>
      </div>
    </div>
  );
};
