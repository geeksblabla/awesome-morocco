import React from 'react';

import Image from 'next/image';

import peopleDiscussing from '../../assets/peopleDiscussing.svg';

const CommunityCard = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-20">
      <div className={`bg-[#7C6CE4] rounded-3xl p-12 relative z-0`}>
        <div className="w-full lg:w-1/3 text-center lg:text-left z-10">
          <p className="font-[Epilogue] font-semibold text-5xl text-white leading-[52.8px]">
            Find your <span className="text-[#2B204E]">Community</span>,
            <br />
            and Grow with it!
          </p>

          <button className="py-2 px-8 bg-[#403779] rounded-xl text-white">
            Learn more
          </button>
        </div>

        <div className="hidden md:block absolute right-0 bottom-0 -z-10 translate-y-[16%]">
          <Image
            src={peopleDiscussing}
            alt="young people discussing work issues"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};
export default CommunityCard;
