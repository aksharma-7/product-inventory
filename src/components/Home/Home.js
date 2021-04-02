import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  const products = useSelector((state) => state.products);
  const [searchInput, setSearchInput] = useState('');

  const handlePriceFilter = () => {
    products.products.sort((a, b) => a.price - b.price);
  };

  const handleQuantityFilter = () => {
    products.products.sort((a, b) => a.quantity - b.quantity);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    products.products.filter((product) =>
      product.productName.toLowerCase().includes(searchInput)
    );
  };
  return (
    <>
      <Header />
      <div className='container'>
        <input
          className='search'
          placeholder='Search Name'
          value={searchInput}
          onChange={handleSearch}
        />
        <div className='filter-container'>
          Filter By:
          <span className='price-filter' onClick={handlePriceFilter}>
            Price
          </span>
          <span className='quantity-filter' onClick={handleQuantityFilter}>
            Quantity
          </span>
        </div>
      </div>
      {products.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Home;
