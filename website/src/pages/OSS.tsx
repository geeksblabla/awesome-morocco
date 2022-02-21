import React from 'react';
import { RepoCard } from '@/components/OSS/RepoCard';
 const OSS = () => {
  return (
    <div className="px-4 py-16   md:px-24 lg:px-8 lg:py-20 flex flex-row justify-evenly flex-wrap">
        <RepoCard/>
        <RepoCard/>
        </div>
  )
}
export default OSS;
