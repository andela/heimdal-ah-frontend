import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  const {
    auth, email, password, onChange, onLoginSubmit,
  } = props;
  if (auth) {
    return <Redirect to="/menu" />;
  }
  return (
    <div className='loginForm'>
      <h2>Heimdal</h2>
      <form>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            name='email'
            field='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            placeholder='Enter Password'
            name='password'
            field='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className='checkbox'>
          <label htmlFor='checkbox'>
            <input type='checkbox' id='checkbox' />
            {' '}
            Remember me
          </label>
        </div>
        <button type="submit" className='btn btn-primary' onClick={onLoginSubmit}>Login </button>
        <h5>
          Already Registered?
          <Link to="/signup">Sign Up</Link>
        </h5>
      </form>
    </div>
  );
};

export default LoginForm;
