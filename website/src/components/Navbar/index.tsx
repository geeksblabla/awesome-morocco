import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

import logo from '@/assets/logo.svg';
import searchIcon from '@/assets/search.svg';

const MenuLinks = [
  {
    to: '/',
    label: 'Library',
    subMenu: [{}],
  },
  {
    to: '/',
    label: 'Communities',
  },
  { to: '/', label: 'Events' },
];

const Navbar = () => {
  return (
    <div className="max-w-[1320px] w-full mx-auto">
      <nav className="flex justify-between align-middle my-14 px-4 ">
        {/* logo */}
        <div className="grow-[2] flex items-center ">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
              height={40}
              width={94}
              layout="fixed"
            />
          </Link>
        </div>

        {/* menu */}
        <ul className="grow flex justify-between items-center text-xl font-medium tracking-tight">
          {MenuLinks.map((menuLink, i) => (
            <li className="cursor-pointer whitespace-nowrap" key={i}>
              <span>{menuLink.label}</span>
              {menuLink.subMenu && (
                <IoIosArrowDown className="inline-block ml-1 " />
              )}
              {/* TODO submenu drop down */}
            </li>
          ))}
        </ul>

        {/* search and action button */}
        <div className="grow-[2] flex justify-end gap-4 items-center whitespace-nowrap ">
          <Image
            src={searchIcon}
            alt="Search"
            height={24}
            width={24}
            layout="fixed"
            className="cursor-pointer "
          />
          <span className="rounded border-[#271337] border-2 w-0 h-2/3 "></span>
          <a
            className="inline-block leading-10 cursor-pointer text-xl font-medium tracking-tight"
            href="https://github.com/DevC-Casa/awesome-morocco"
            target={'_blank'}
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
