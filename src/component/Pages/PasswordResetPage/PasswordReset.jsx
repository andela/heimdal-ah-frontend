import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import Button from '../../ui/Buttons/Button';
import './PasswordReset.scss';
import resetPassword from '../../../actions/PasswordReset/resetPasswordActions';

class PasswordReset extends Component {
  state = {
    email: '',
  }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onHandleSubmit(e) {
    const { email } = this.state;
    e.preventDefault();
    toastr.success('Loading...', 'Loading, please be patient');
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetPassword(email);
  }

  render() {
    const { email } = this.state;
    const { status } = this.props;
    return (
      <Fragment>
        {status === 'SUCCESS' && toastr.success('Email Sent', 'An Email has been sent to you, please click on the link to reset your password')}
        {status === 'FAILED' && toastr.warning('Invalid Credentials', 'User not Found')}
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='email' className='password-reset input-reset-password' name='email' value={email} placeholder='Enter your Email' onChange={e => this.onHandleChange(e)} required />
            <br />
            {status === 'ERROR' && toastr.warning('Email Not Sent', 'Server Error') }
            <br />
            <Button type='login2' label='Reset' Class='password-reset button' ref={this.button} />
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

PasswordReset.propTypes = {
  status: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.resetpassword.status,
});

export default connect(mapStateToProps, { resetPassword })(PasswordReset);
