


import { useState, useEffect } from 'react';

export default function useGithubRepoStarsCount(repoId) {
  const [count, setCount] = useState(0);

  const getCount = async () => {
    const data = await fetch(`https://api.github.com/repos/${repoId}`)
    const { stargazers_count } = await data.json()
    return setCount(stargazers_count)
  }

  useEffect(() => {
    getCount()
  });

  return  count ;
}