export const PageBanner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mx-auto bg-black">
      <div className="mx-auto flex  max-w-screen-lg items-center text-white ">
        <div className="my-5 lg:my-8 lg:w-1/2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
        </div>
        <div className="hidden h-56 w-1/2 flex-shrink-0 justify-center lg:flex">
          <img className="" src="/images/banner-back.png" alt="" />
        </div>
      </div>
    </div>
  );
};
