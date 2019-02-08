/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { Fragment } from 'react';
import Alert from '../../ui/Alert/Alert';
import './PasswordReset.scss';
// eslint-disable-next-line import/no-named-as-default
import PasswordReset from './PasswordReset';

const PasswordResetPresentation = () => (
  <PasswordReset>
    {
        data => (
          <Fragment>
            {data.status === 'SUCCESS' && <Alert type='success' title='Email Sent' message='An Email has been sent to you, please click on the link to reset your password' />}
            {data.status === 'SUCCESS' ? data.state.email = '' : ''}
            {data.status === 'FAILED' && <Alert type='warning' title='Invalid Credentials' message='User not Found' />}
            <br />
            <div className='password-reset box'>
              <p><strong>Reset Your Password</strong></p>
              <form onSubmit={e => data.onHandleSubmit(e)}>
                <input type='email' className='password-reset input-reset-password' name='email' value={data.email} placeholder='Enter your Email' onChange={e => data.onHandleChange(e)} required />
                <br />
                {data.status === 'ERROR' && <Alert type='warning' title='Email not sent' message='Server Error' />}
                <br />
                <button type='submit' className='password-reset submit-button'>Reset</button>
              </form>
            </div>
            <br />
          </Fragment>
        )
    }
  </PasswordReset>
);


export default PasswordResetPresentation;
