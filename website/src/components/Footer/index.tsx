import CommunityCard from './CommunityCard';

const Footer = () => {
  const links = [
    {
      title: 'Awesome Morocco',
      subLinks: [
        {
          link: '/',
          label: 'Home',
        },
        {
          link: '/',
          label: 'Communities',
        },
        {
          link: '/',
          label: 'Events',
        },
      ],
    },
    {
      title: 'People',
      subLinks: [
        {
          link: '/',
          label: 'Blogs',
        },
        {
          link: '/',
          label: 'Podcasts',
        },
        {
          link: '/',
          label: 'YouTube Channels',
        },
      ],
    },
  ];

  return (
    <div className="">
      <CommunityCard />
    </div>
  );
};

export default Footer;
