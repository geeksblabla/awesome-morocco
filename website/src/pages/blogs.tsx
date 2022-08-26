import React from 'react';

import { IBlog } from '@/interfaces/blog';
import { customFetch } from '@/utils/customFetch';

type Props = {
  blogs?: Array<IBlog>;
};

export async function getStaticProps(__context: any) {
  try {
    const res = await customFetch('/api?resourceType=posts');
    return {
      props: {
        blogs: res.data,
      },
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('error');
    // eslint-disable-next-line no-console
    console.error(err);
    return {
      props: {
        blogs: null,
      },
    };
  }
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
