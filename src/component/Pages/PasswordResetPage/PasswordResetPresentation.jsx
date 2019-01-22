import React, { Fragment } from 'react';
import Button from '../../ui/Buttons/Button';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';
import Alert from '../../ui/Alert/Alert';
import './PasswordReset.scss';
import PasswordReset from './PasswordReset';

const PasswordResetPresentation = () => (
  <PasswordReset>
    {
        data => (
          <Fragment>
            {data.status === 'SUCCESS' && <Alert type='success' title='Email Sent' message='An Email has been sent to you, please click on the link to reset your password' />}
            {data.status === 'FAILED' && <Alert type='warning' title='Invalid Credentials' message='User not Found' />}
            <Header isValidated={false} />
            <div className='password-reset body'>
              <p>Reset Your Password</p>
              <form onSubmit={e => data.onHandleSubmit(e)}>
                <input type='email' className='password-reset input-reset-password' name='email' value={data.email} placeholder='Enter your Email' onChange={e => data.onHandleChange(e)} required />
                <br />
                {data.status === 'ERROR' && <Alert type='warning' title='Email not sent' message='Server Error' />}
                <br />
                <Button type='login2' label='Reset' Class='password-reset button' />
              </form>
            </div>
            <br />
            <Footer />
          </Fragment>
        )
    }
  </PasswordReset>
);


export default PasswordResetPresentation;
