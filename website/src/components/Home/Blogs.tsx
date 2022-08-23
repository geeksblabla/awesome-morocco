import React from 'react';

import Image from 'next/image';

import DiscoverMore from './DiscoverMore';
import SectionTitle from './SectionTitle';

const BlogCard = () => {
  const data = {
    title: 'Developing an AR / VR Game',
    snippet:
      'As you write the name of the code down, in your code book you should give a description of what that code is about. You should also give an example from your data. Then finally you should give an example of close but not quite. This will stop your coders from misinterpreting important nuances...see all',
    imageLink: 'https://source.unsplash.com/random',
    date: 'Jun 14, 2022',
    blogger: 'Mehdi',
  };
  return (
    <div className="bg-white w-72 rounded-3xl shadow-3xl block overflow-hidden ">
      <Image
        src={data.imageLink}
        alt="blog Image"
        layout="responsive"
        width={320}
        height={170}
      />
      <div className="flex flex-col pt-2 px-6 pb-4 ">
        <p className="text-sm text-[#505050] font-normal">
          {data.date} by {data.blogger}
        </p>
        <h3 className="text-2xl font-medium truncate tracking-tight">
          {data.title}
        </h3>
        <p className="text-lg font-light text-[#0E0E0E] line-clamp-4">
          {data.snippet}
        </p>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className="py-52 flex flex-col gap-28 max-w-[1320px] mx-auto">
      <SectionTitle
        title="Blogs"
        desc="Stay updated with the latest articles written by Moroccan developers"
      />
      <div className="flex flex-col gap-16 ">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <DiscoverMore />
      </div>
    </div>
  );
};

export default Blogs;
