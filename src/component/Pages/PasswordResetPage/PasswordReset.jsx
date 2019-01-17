import React, { Fragment, Component } from 'react';
import Button from '../../UI/buttons/Button';
import './PasswordReset.scss';

class PasswordReset extends Component {
  state = {
    email: '',
  }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <Fragment>
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <input type='text' className='password-reset input-reset-password' name='email' value={email} placeholder='Enter your Email' onChange={e => this.onHandleChange(e)} />
          <Button type='login2' label='Send' />
        </div>
        <div className='password-reset footer'>
          Our Footer
        </div>
      </Fragment>
    );
  }
}

export default PasswordReset;
