import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../../ui/Alert/Alert';
import './PasswordReset.scss';
// eslint-disable-next-line import/no-named-as-default
import PasswordUpdate from './UpdatePassword';

const UpdatePasswordPresentation = () => (
  <PasswordUpdate>
    {
        data => (
          <Fragment>
            {data.status === 'SUCCESS' && <Alert title='Password Update' message='Password updated successfully' type='success' />}
            {data.status === 'SUCCESS' && <Redirect to='/' />}
            {data.status === 'FAILED' && <Redirect to='/resetpassword' />}
            <br />
            <div className='password-reset update-box'>
              <p>Enter Your New Password</p>
              {data.status === 'ERROR' && <Alert type='warning' title='Email not sent' message='Server Error' />}
              <form onSubmit={e => data.onHandleSubmit(e)}>
                <input type='password' className='password-reset input-reset-password' name='password' value={data.password} placeholder='Password' onChange={e => data.onHandleChange(e)} required />
                <br />
                <br />
                <input type='password' className='password-reset input-reset-password' name='confirmpassword' value={data.confirmpassword} placeholder='Confirm Password' onChange={e => data.onHandleChange(e)} required />
                <br />
                <br />
                <button type='submit' className='password-reset submit-button'>Update</button>
              </form>
            </div>
            <br />
          </Fragment>
        )
    }
  </PasswordUpdate>
);


export default UpdatePasswordPresentation;
