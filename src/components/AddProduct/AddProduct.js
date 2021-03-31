import React from 'react';
import cart from '../../images/cart.svg';
import './AddProduct.css';
// name
// description
// price
// quantity
const AddProduct = () => {
  return (
    <div className='add-product-container'>
      <img className='image-container' src={cart} />
      <form className='form-container'>
        <h2>Add Product</h2>
        <label for='name'>Product Name</label>
        <input id='name' type='text' placeholder='Product Name' />
        <label for='description'>Product Description</label>
        <input id='description' type='text' placeholder='Product Description' />
        <label for='price'>Price</label>
        <input
          id='price'
          type='text'
          placeholder='number'
          placeholder='Price'
        />
        <label for='quantity'>Quantity</label>
        <input id='quantity' type='number' placeholder='Quantity' />
      </form>
    </div>
  );
};

export default AddProduct;
