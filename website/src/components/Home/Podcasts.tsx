import React from 'react';

import Image from 'next/image';

import DiscoverMore from './DiscoverMore';
import SectionTitle from './SectionTitle';

const PodcastCard = () => {
  const data = {
    title: 'Kass Atay',
    about: 'A podcast about technology, computer science, programming',
    coverImage: 'https://source.unsplash.com/random',
  };
  return (
    <div className="bg-white w-72 rounded-3xl shadow-3xl p-3">
      <div className="rounded-3xl overflow-hidden relative h-60">
        <Image src={data.coverImage} alt="podcast Image" layout="fill" />
      </div>
      <h3 className="text-xl font-bold text-[#1E1E1E] pt-2">{data.title}</h3>
      <p className="text-[#1E1E1E] font-normal ">{data.about}</p>
    </div>
  );
};

const Podcasts = () => {
  return (
    <div className="py-52 flex flex-col gap-28 max-w-[1320px] mx-auto">
      <SectionTitle
        title="Blogs"
        desc="Stay updated with the latest articles written by Moroccan developers"
      />
      <div className="flex flex-col gap-16 ">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
        <DiscoverMore />
      </div>
    </div>
  );
};

export default Podcasts;
