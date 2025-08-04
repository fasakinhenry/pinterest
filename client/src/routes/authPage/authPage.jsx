import './authPage.css';
import IKImage from './../../components/image/image';
import { useState } from 'react';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className='authPage'>
      <div className='authContainer'>
        <IKImage path='/general/logo.png' w={36} h={36} alt='logo' />
        <h1>{isRegister ? 'Create an Account' : 'Login to your account'}</h1>
        {isRegister ? (
          <form key="register">
            <div className='formGroup'>
              <label htmlFor='username'>Username</label>
              <input
                type='username'
                name='username'
                id='username'
                placeholder='Username'
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='displayName'>Name</label>
              <input
                type='displayName'
                name='displayName'
                id='displayName'
                placeholder='Name'
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                required
              />
            </div>
            <button type='submit'>Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account <b>Login</b>
            </p>
            {error && <p>{error}</p>}
          </form>
        ) : (
          <form key="loginForm">
            <div className='formGroup'>
              <label htmlFor='password'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                required
              />
            </div>
            <button type='submit'>Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don't have an account <b>Register</b>
            </p>
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
