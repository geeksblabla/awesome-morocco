import React from 'react';

import arrowRight from '@/assets/arrowRight.svg';
import Image from '@/components/Image';

const DiscoverMore = () => {
  return (
    <div className="flex gap-2 items-center justify-center cursor-pointer ">
      <span className="font-medium text-2xl">Discover more</span>
      <Image src={arrowRight} alt="github" width={32} height={32} />
    </div>
  );
};

export default DiscoverMore;
