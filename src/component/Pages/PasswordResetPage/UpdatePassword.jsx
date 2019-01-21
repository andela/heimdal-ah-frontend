import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../ui/Buttons/Button';
import './PasswordReset.scss';
import updatePassword from '../../../actions/PasswordReset/updatePasswordActions';

class PasswordUpdate extends Component {
  state = {
    password: '',
    confirmpassword: '',
  }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onHandleSubmit(e) {
    const { password, confirmpassword } = this.state;
    e.preventDefault();
    const token = new URLSearchParams(window.location.search).get('token');
    if (password === confirmpassword) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.UpdatePassword(token, { password, confirmpassword });
    } else {
      document.querySelector('.feedback').style.display = 'block';
    }
  }

  render() {
    const { password, confirmpassword } = this.state;
    const { status } = this.props;
    if (status === 'LOADING') {
      document.querySelector('.password-reset button').innerHTML = 'Loading...';
    } else if (status === 'LOADING_FINISHED') {
      document.querySelector('.password-reset button').innerHTML = 'Reset';
    }
    return (
      <Fragment>
        {status === 'SUCCESS' && <Redirect to='/login' />}
        {status === 'FAILED' && <Redirect to='/resetpassword' />}
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Enter Your New Password</p>
          {status === 'ERROR' && <span>Server error</span>}
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='text' className='password-reset input-reset-password' name='password' value={password} placeholder='Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <br />
            <input type='text' className='password-reset input-reset-password' name='confirmpassword' value={confirmpassword} placeholder='Confirm Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <span className='password-reset feedback'>Password and Confirm Password must be Equal</span>
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


PasswordUpdate.propTypes = {
  status: PropTypes.string.isRequired,
  UpdatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.updatepassword.status,
});


export default connect(mapStateToProps, { updatePassword })(PasswordUpdate);
