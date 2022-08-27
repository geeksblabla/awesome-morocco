import Link from 'next/link';

import logo from '@/assets/lightLogo.svg';
import Image from '@/components/Image';

import CommunityCard from './CommunityCard';

const Footer = () => {
  const links = [
    {
      title: 'Library',
      subLinks: [
        {
          link: '/',
          label: 'Open source',
        },
        {
          link: '/',
          label: 'Blogs',
        },
        {
          link: '/',
          label: 'Podcasts',
        },
      ],
    },
    {
      title: 'Community',
      subLinks: [
        {
          link: '/',
          label: 'Open source',
        },
        {
          link: '/',
          label: 'Blogs',
        },
        {
          link: '/',
          label: 'Podcasts',
        },
      ],
    },
    {
      title: 'Events',
      subLinks: [
        {
          link: '/',
          label: 'Open source',
        },
        {
          link: '/',
          label: 'Blogs',
        },
        {
          link: '/',
          label: 'Podcasts',
        },
      ],
    },
  ];

  return (
    <div>
      <CommunityCard />
      <div
        className="p-12"
        style={{
          background: 'linear-gradient(270deg, #140E28 -1.71%, #100C29 100%)',
        }}
      >
        <div className="w-full max-w-[1320px] mx-auto flex justify-evenly flex-col md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-[25%] flex flex-col gap-6 items-center md:items-start">
            <Image src={logo} alt={'ama logo'} layout={'fixed'} />
            <p className="text-white font-normal text-center md:text-left">
              Want to Contribute?
              <br />
              This Website is made with ❤️ By GeeksBlaBla Team - Sourced on
              GitHub
            </p>
          </div>

          <div className="w-full md:w-[75%] flex justify-evenly flex-col sm:flex-row gap-4 sm:gap-0">
            {links.map((link, index) => (
              <div key={index} className="text-white flex flex-col gap-4 ">
                <h3 className="text-xl font-semibold text-left">
                  {link.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {link.subLinks.map((subLink, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 whitespace-nowrap"
                    >
                      <Link href={subLink.link} passHref>
                        <span className="text-sm font-light cursor-pointer">
                          {subLink.label}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-base font-light text-white text-center pt-4">
          awesome-morocco 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
