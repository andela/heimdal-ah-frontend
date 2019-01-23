import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  const {
    auth, email, errors, error, password, onChange, onLoginSubmit,
  } = props;
  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <div className='loginForm'>
      {
        (error && error.message) ? (
          <div className="alert alert-danger">
            <strong>Info!</strong>
            {' '}
            {error.message}
          </div>
        ) : ''
      }
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
        <p id="error-message">{errors.email}</p>
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
        <p id="error-message">{errors.password}</p>
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
