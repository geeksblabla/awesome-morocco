import React from 'react';

import Image from 'next/image';

import starIcon from '@/assets/star.svg';
import targetIcon from '@/assets/target.svg';
import typescriptIcon from '@/assets/typescript.svg';

import DiscoverMore from './DiscoverMore';
import SectionTitle from './SectionTitle';

const GithubRepoCard = () => {
  const data = {
    title: 'DevC/awesome-morocco',
    desc: 'awesome stuff created by moroccan developers',
    lang: '70% TypeScript',
    stars: '704',
    openIssues: '12',
  };
  return (
    <div className="bg-white w-72 rounded-3xl shadow-3xl ">
      <h3 className="p-6 pb-4 text-2xl text-center text-[#2B204E] font-extrabold truncate">
        {data.title}
      </h3>

      <hr className="border-2 border-[#F5F2FF]" />

      <div className="p-6 pt-4 flex flex-col gap-6">
        <p className="font-normal text-lg text-[#0E0E0E]">{data.desc}</p>

        <div>
          <div className="flex gap-2">
            <Image src={typescriptIcon} alt="icon" width={14} height={14} />
            <span className="text-[#0E0E0E] text-sm">{data.lang}</span>
          </div>
          <div className="flex gap-2">
            <Image src={starIcon} alt="icon" width={14} height={14} />
            <span className="text-[#0E0E0E] text-sm">{data.stars} Stars</span>
          </div>
          <div className="flex gap-2">
            <Image src={targetIcon} alt="icon" width={14} height={14} />
            <span className="text-[#0E0E0E] text-sm">
              {data.openIssues} Open Issues
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const OpenSource = () => {
  return (
    <div className="py-52 flex flex-col gap-28 max-w-[1320px] mx-auto">
      <SectionTitle
        title="Open Source"
        desc="Be part of the greatest open source projects build by Moroccan Developers"
      />

      <div className="flex flex-col gap-16 ">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          <GithubRepoCard />
          <GithubRepoCard />
          <GithubRepoCard />
          <GithubRepoCard />
          <GithubRepoCard />
          <GithubRepoCard />
          <GithubRepoCard />
        </div>

        <DiscoverMore />
      </div>
    </div>
  );
};

export default OpenSource;
