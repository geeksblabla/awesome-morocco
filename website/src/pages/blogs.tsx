import React from 'react';

import { IBlog } from '@/interfaces/blog';
import { customFetch } from '@/utils/customFetch';

type Props = {
  blogs?: Array<IBlog>;
};

export async function getStaticProps(__context: any) {
  const res = await customFetch('/api?resourceType=posts');

  return {
    props: {
      blogs: res.data,
    },
  };
}

const Blogs = (props: Props) => {
  return (
    <div>
      {props.blogs?.map((el, i) => (
        <pre key={i}>{JSON.stringify(el, null, 2)}</pre>
      ))}
    </div>
  );
};

export default Blogs;
