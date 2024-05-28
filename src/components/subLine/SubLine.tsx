import React, { ReactNode } from 'react';

interface ISubLine {
  children: ReactNode,
  className?: string
}

const SubLine = ({children, className}: ISubLine) => {
  return (
    <p className={`text-[20px] font-light text-subGray leading-relaxed sm:text-[16px] tracking-wider ${className}`}>
      {children}
    </p>
  );
};

export default SubLine;