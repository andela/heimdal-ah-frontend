import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../UI/buttons/Button';
import './PasswordReset.scss';
import ResetPassword from '../../../actions/ResetPasswordActions';

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
    e.preventDefault();
    this.props.ResetPassword();
  }

  render() {
    const { email } = this.state;
    const { status, error } = this.props;
    return (
      <Fragment>
        {status === 'SUCCESS' && <Redirect to='/updatepassword' />}
        {status === 'FAILED' && <Redirect to='/resetpassword' />}
        {status === 'ERROR' ? console.log(error) : ''}
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='email' className='password-reset input-reset-password' name='email' value={email} placeholder='Enter your Email' onChange={e => this.onHandleChange(e)} required />
            <br />
            <Button type='login2' label='Reset' Class='password-reset button' />
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
  error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  status: state.resetpassword.status,
  error: state.resetpassword.error,
  payload: state.resetpassword.payload,
});

export default connect(mapStateToProps, { ResetPassword })(PasswordReset);
