import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Header />
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
};

export default Home;
