import React from 'react';

import Image from 'next/image';

import arrowRight from '@/assets/arrowRight.svg';

const DiscoverMore = () => {
  return (
    <div className="flex gap-2 items-center justify-center cursor-pointer ">
      <span className="font-medium text-2xl">Discover more</span>
      <Image src={arrowRight} alt="github" width={32} height={32} />
    </div>
  );
};

export default DiscoverMore;
