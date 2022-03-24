import { NextSeo } from 'next-seo';

import Header from '@/components/Header';

const Index = () => {
  const sections = [
    {
      pageLink: '/',
      title: 'The List of awesome Moroccan things for developers',
      description:
        'The place where you gonna find out great things, made by great Moroccans',
    },
    {
      pageLink: '/',
      title: 'The List of awesome Moroccan things for developers',
      description:
        'The place where you gonna find out great things, made by great Moroccans',
    },
  ];

  return (
    <>
      <NextSeo title="Home" />

      <div className="grow">
        {sections.map((el, index) => (
          <Header key={`link-${index}`} {...el} />
        ))}
      </div>
    </>
  );
};

export default Index;
