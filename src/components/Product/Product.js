import React from 'react';
import './Product.css';

// name
// description
// price
// quantity
const Product = () => {
  return (
    <div className='product-container'>
      <span>Name</span>
      <span>This is a Product</span>
      <span>$10</span>
      <span>2</span>
    </div>
  );
};

export default Product;
