import React from 'react';
import Image from 'next/image'
export const RepoCard = () => {
    const stars=5;
    const forks=5;
  return (
    <div className='rounded w-full md:w-1/3 border-slate-400 border-solid border p-4'>
        <div><Image src="/repo.svg" alt="repository icon"  height={16} width={16}/><span>title</span></div>
        <p>description</p>
        <div className='flex flex-row items-end'>
            <div  className='flex mr-4  items-end'><span className=' w-3.5 h-3.5 bg-blue-400 rounded-full'/><span className='leading-none ml-2 ' >  Languages</span></div> 
            <div  className='flex mr-4  items-end'> <Image src="/star.svg" alt="star icon"  height={16} width={16}/><span className='leading-none ml-2'>  {stars}</span></div> 
            <div  className='flex mr-4  items-end'><Image src="/fork.svg" alt="star icon"  height={16} width={16}/> <span className='leading-none ml-2'>{forks}</span></div> 
            
        </div>
    </div>
  )
}
