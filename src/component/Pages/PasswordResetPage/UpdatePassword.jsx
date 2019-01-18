import React, { Fragment, Component } from 'react';
import Button from '../../UI/buttons/Button';
import './PasswordReset.scss';

class UpdatePassword extends Component {
  state = {
    oldpassword: '',
    newpassword: '',
  }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { oldpassword, newpassword } = this.state;
    return (
      <Fragment>
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <form>
            <input type='text' className='password-reset input-reset-password' name='oldpassword' value={oldpassword} placeholder='Old Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <input type='text' className='password-reset input-reset-password' name='newpassword' value={newpassword} placeholder='New Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <Button type='login2' label='Update' Class='password-reset button' />
          </form>
        </div>
        <br />
        <div className='password-reset footer'>
          Our Footer
        </div>
      </Fragment>
    );
  }
}

export default UpdatePassword;
