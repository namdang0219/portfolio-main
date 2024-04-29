import React from 'react';

const ChildTitle = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    <h3 className={`${className} font-semibold text-[20px]`}>{children}</h3>
  );
};

export default ChildTitle;