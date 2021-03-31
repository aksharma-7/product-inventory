import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/userAction';
import loginImage from '../../images/login.svg';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    userName: '',
    userEmail: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(addUser(user));
  };

  return (
    <div className='login-container'>
      <img className='image-container' src={loginImage} />
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          placeholder='Your Name'
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          placeholder='abc@def.com'
          value={user.email}
          onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
        />
        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
