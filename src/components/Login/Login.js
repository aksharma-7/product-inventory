import React from 'react';
import loginImage from '../../images/login.svg';
import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <img className='image-container' src={loginImage} />
      <form className='form-container'>
        <h2>Login</h2>
        <label for='name'>Name</label>
        <input id='name' type='text' placeholder='Your Name' />
        <label for='email'>Email</label>
        <input id='email' type='email' placeholder='abc@def.com' />
        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
