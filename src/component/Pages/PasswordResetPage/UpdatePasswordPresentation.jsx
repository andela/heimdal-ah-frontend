import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../ui/Buttons/Button';
import Alert from '../../ui/Alert/Alert';
import './PasswordReset.scss';
// eslint-disable-next-line import/no-named-as-default
import PasswordUpdate from './UpdatePassword';

const UpdatePasswordPresentation = () => (
  <PasswordUpdate>
    {
        data => (
          <Fragment>
            {data.status === 'SUCCESS' && <Redirect to='/login' />}
            {data.status === 'FAILED' && <Redirect to='/resetpassword' />}
            <div className='password-reset body'>
              <p>Enter Your New Password</p>
              {data.status === 'ERROR' && <Alert type='warning' title='Email not sent' message='Server Error' />}
              <form onSubmit={e => data.onHandleSubmit(e)}>
                <input type='text' className='password-reset input-reset-password' name='password' value={data.password} placeholder='Password' onChange={e => data.onHandleChange(e)} required />
                <br />
                <br />
                <input type='text' className='password-reset input-reset-password' name='confirmpassword' value={data.confirmpassword} placeholder='Confirm Password' onChange={e => data.onHandleChange(e)} required />
                <br />
                <br />
                <Button type='login2' label='Update' Class='password-reset button' />
              </form>
            </div>
            <br />
          </Fragment>
        )
    }
  </PasswordUpdate>
);


export default UpdatePasswordPresentation;