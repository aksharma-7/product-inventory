import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  const products = useSelector((state) => state.products);
  let productsArr = [];
  console.log(products);

  for (let product of Object.keys(products)) {
    productsArr.push(products[product]);
  }

  const handleFilter = () => {
    productsArr.sort((a, b) => a - b);
  };

  console.log(productsArr);

  return (
    <>
      <Header />
      <div className='filter-container'>
        Filter By:
        <span className='price-filter' onClick={handleFilter}>
          Price
        </span>
        <span className='quantity-filter' onClick={handleFilter}>
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
