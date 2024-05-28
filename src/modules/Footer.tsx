import { socials } from '@/utils/socials';
import Link from 'next/link';
import React from 'react';

const Footer = ({className}: {className?: string}) => {
  return (
    <div className={`${className} p-7 bg-[#151515] text-white flex flex-col items-center gap-3`}>
      <span className='text-[32px] font-bold sm:text-[28px]'>Portfolio</span>
      <div className='flex items-center gap-5'>
      <div className="flex items-center justify-center space-x-4">
					{socials.map((item) => (
						<Link
							key={item.name}
							href={item.href}
              target='_blank'
							className="size-12 sm:scale-75 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-20 ransition-all rounded-full"
						>
							{item.icon}
						</Link>
					))}
				</div>
      </div>
      
      <span className='uppercase text-[22px] sm:text-base font-light opacity-80 tracking-wider'>Thanks for visit my portfolio!</span>
      <span className='text-sm sm:text-xs opacity-60 tracking-wider'>&copy; Copyright by NamDang 2024</span>
    </div>
  );
};



export default Footer;