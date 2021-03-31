import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addproduct } from '../../actions/productAction';
import cart from '../../images/cart.svg';
import './AddProduct.css';
// name
// description
// price
// quantity
const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    price: 0,
    quantity: 0,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('cartProducts', JSON.stringify(productData));
    dispatch(addproduct(productData));
  };

  return (
    <div className='add-product-container'>
      <img className='image-container' src={cart} />
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <label htmlFor='name'>Product Name</label>
        <input
          id='name'
          type='text'
          placeholder='Product Name'
          value={productData.productName}
          onChange={(e) =>
            setProductData({ ...productData, productName: e.target.value })
          }
        />
        <label htmlFor='description'>Product Description</label>
        <input
          id='description'
          type='text'
          placeholder='Product Description'
          value={productData.productDescription}
          onChange={(e) =>
            setProductData({
              ...productData,
              productDescription: e.target.value,
            })
          }
        />
        <label htmlFor='price'>Price</label>
        <input
          id='price'
          type='text'
          placeholder='number'
          placeholder='Price'
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
        />
        <label htmlFor='quantity'>Quantity</label>
        <input
          id='quantity'
          type='number'
          placeholder='Quantity'
          value={productData.quantity}
          onChange={(e) =>
            setProductData({ ...productData, quantity: e.target.value })
          }
        />
        <button type='submit' className='add-btn'>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
