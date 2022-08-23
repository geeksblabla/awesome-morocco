import React from 'react';

type Props = {
  title: string;
  desc: string;
};

const SectionTitle = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-10 md:px-20 lg:px-46 gap-2 md:gap-4 lg:gap-6">
      <h2 className="font-[Epilogue] text-4xl font-bold	text-[#2B204E] whitespace-nowrap">
        {props.title}
      </h2>

      <div className="rounded border-[#2B204E] bg-[#2B204E] border-2 w-16 md:w-0 h-0 md:h-16 "></div>

      <p className="max-w-30 font-medium text-2xl text-center md:text-left text-[#2F2F2F] ">
        {props.desc}
      </p>
    </div>
  );
};

export default SectionTitle;
