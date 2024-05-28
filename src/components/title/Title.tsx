import React from 'react';

interface ITitle {
  children: string,
  className?: string,
}

const Title = ({children, className}: ITitle) => {
  return (
    <h2 className={`${className} text-[40px] sm:text-[26px] font-semibold mb-2`}>
      {children}
    </h2>
  );
};

export default Title;