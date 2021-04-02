import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addproduct } from '../../actions/productAction';
import cart from '../../images/cart.svg';
import './AddProduct.css';
// name
// description
// price
// quantity
const AddProduct = () => {
  // const [productData, setProductData] = useState([
  //   {
  //     productName: '',
  //     productDescription: '',
  //     price: 0,
  //     quantity: 0,
  //   },
  // ]);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const product = {
    productName,
    productDescription,
    price,
    quantity,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('cartProducts', JSON.stringify(product));

    dispatch(addproduct(product));
    history.push('/');
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
          value={productName}
          required
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor='description'>Product Description</label>
        <input
          id='description'
          type='text'
          placeholder='Product Description'
          value={productDescription}
          required
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <label htmlFor='price'>Price</label>
        <input
          id='price'
          type='text'
          placeholder='number'
          placeholder='Price'
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor='quantity'>Quantity</label>
        <input
          id='quantity'
          type='number'
          placeholder='Quantity'
          value={quantity}
          required
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type='submit' className='add-btn'>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
