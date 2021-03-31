import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// Site name
// user name
// logout
// Add to cart
const Header = () => {
  return (
    <div className='container'>
      <div className='logo-container'>Product Inventory</div>
      <div className='info-container'>
        <div className='username-container'>User Name</div>
        <Link to='/addproduct'>
          <div className='add-to-cart-container'>Add to Cart</div>
        </Link>
        <button className='logout-btn'>Logout</button>
      </div>
    </div>
  );
};

export default Header;
