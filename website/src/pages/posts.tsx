import React from 'react';

import { IBlogPost } from '@/interfaces/blog';
import { customFetch } from '@/utils/customFetch';

type Props = {
  posts?: Array<IBlogPost>;
};

export async function getStaticProps(__context: any) {
  const res = await customFetch('/api?resourceType=articles');
  return {
    props: {
      posts: res.data,
    },
  };
}

const Posts = ({ posts }: Props) => {
  return (
    <div>
      {posts?.map((el, i) => (
        <pre key={i}>{JSON.stringify(el, null, 2)}</pre>
      ))}
    </div>
  );
};

export default Posts;
