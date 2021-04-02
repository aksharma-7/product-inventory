import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
// Site name
// user name
// logout
// Add to cart
const Header = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  // const { userInfo } = user;

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartProducts');
  };

  return (
    <div className='container'>
      <div className='logo-container'>Product Inventory</div>
      <div className='info-container'>
        <div className='username-container'>{user.userName}</div>
        <Link to='/addproduct'>
          <div className='add-to-cart-container'>Add to Cart</div>
        </Link>
        <button className='logout-btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
