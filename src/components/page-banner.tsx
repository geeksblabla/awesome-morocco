import Image from "next/image";
import openSourceSrc from "~/assets/open-source.png";

export const PageBanner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto ">
      <div className="mx-auto flex  max-w-screen-lg items-center text-white ">
        <div className="my-5 lg:my-8 lg:w-1/2">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-lg text-neutral-200">{description}</p>
        </div>
        <div className="hidden w-1/2 flex-shrink-0 justify-center lg:flex">
          <Image src={openSourceSrc} alt="open source" />
        </div>
      </div>
    </div>
  );
};
