import React from 'react';

const ChildTitle = ({children, className, fontSize = 20} : {children: React.ReactNode, className?: string, fontSize?: number}) => {
  return (
    <h3 className={`${className} font-semibold text-[${fontSize}px]`}>{children}</h3>
  );
};

export default ChildTitle;