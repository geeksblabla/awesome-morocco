import React from 'react';

import Image from 'next/image';

import amazon from '@/assets/amazon.svg';
import github from '@/assets/github.svg';
import google from '@/assets/google.svg';
import ibm from '@/assets/ibm.svg';
import microsoft from '@/assets/microsoft.svg';
import oracle from '@/assets/oracle.svg';
import spotify from '@/assets/spotify.svg';

const Header = () => {
  return (
    <div
      className="w-full py-20 flex flex-col justify-center items-center gap-16"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #EAE0FF 48.01%, #FFEEEB 81.77%, #FEFAFF 100%)',
      }}
    >
      {/* hero title and desc */}
      <div>
        <h1 className="font-[Epilogue] text-7xl font-medium leading-tight text-center">
          awesome <span className="font-extrabold">Morocco</span>
        </h1>
        <p className="text-2xl font-medium leading-10 text-center max-w-2xl px-8 text-[#271337] ">
          Open source, Blogs, Podcasts, and more awesome stuff build by Moroccan
          developers
        </p>
      </div>

      {/* action buttons */}
      <div className="flex gap-10">
        <button
          className="bg-[#2B204E] py-2 px-8 text-white rounded-xl shadow-3xl flex items-center justify-center gap-3"
          type="button"
        >
          <span>Get Started</span>
        </button>
        <button
          className="bg-white py-2 px-8 text-[#271337] rounded-xl shadow-3xl flex items-center justify-center gap-3"
          type="button"
        >
          <span>Github</span>
          <Image
            src={github}
            alt="github"
            width={28}
            height={28}
            layout="fixed"
          />
        </button>
      </div>

      {/* developed by */}
      <div className="flex flex-col justify-center items-center gap-8 px-16">
        <h3 className="text-lg font-light ">Given to you by Developers at</h3>
        <div className="flex gap-x-28 gap-y-10 justify-center flex-wrap ">
          <Image src={microsoft} width={62} height={62} alt="microsoft icon" />
          <Image src={google} width={62} height={62} alt="google icon" />
          <Image src={ibm} width={62} height={62} alt="ibm icon" />
          <Image src={amazon} width={62} height={62} alt="amazon icon" />
          <Image src={oracle} width={62} height={62} alt="oracle icon" />
          <Image src={spotify} width={62} height={62} alt="spotify icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
