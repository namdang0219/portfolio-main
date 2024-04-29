import React from 'react';

interface ISubLine {
  children: string,
  className?: string
}

const SubLine = ({children, className}: ISubLine) => {
  return (
    <p className={`${className} text-[22px] font-light text-subGray sm:text-[16px]`}>
      {children}
    </p>
  );
};

export default SubLine;