import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartProducts');
    history.push('/login');
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
