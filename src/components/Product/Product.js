import React from 'react';
import './Product.css';

// name
// description
// price
// quantity
const Product = ({ product }) => {
  return (
    <>
      {product && (
        <div className='product-container'>
          <span>{product.productName}</span>
          <span>{product.productDescription}</span>
          <span>${product.price}</span>
          <span>{product.quantity}</span>
        </div>
      )}
    </>
  );
};

export default Product;
