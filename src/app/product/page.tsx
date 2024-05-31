import React from 'react';

const Product = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Product;