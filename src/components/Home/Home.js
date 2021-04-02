import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  const products = useSelector((state) => state.products);
  let productsArr = [];
  console.log(products);

  // for (let product of Object.keys(products)) {
  //   productsArr.push(products[product]);
  // }

  const handlePriceFilter = () => {
    productsArr.sort((a, b) => a.price - b.price);
  };

  const handleQuantityFilter = () => {
    productsArr.sort((a, b) => a.quantity - b.quantity);
  };

  return (
    <>
      <Header />
      <div className='filter-container'>
        Filter By:
        <span className='price-filter' onClick={handlePriceFilter}>
          Price
        </span>
        <span className='quantity-filter' onClick={handleQuantityFilter}>
          Quantity
        </span>
      </div>
      {productsArr.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Home;
