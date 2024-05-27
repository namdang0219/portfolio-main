import React, { ReactNode } from 'react';

interface ISubLine {
  children: ReactNode,
  className?: string
}

const SubLine = ({children, className}: ISubLine) => {
  return (
    <p className={` text-[22px] font-light text-subGray sm:text-[16px] ${className}`}>
      {children}
    </p>
  );
};

export default SubLine;