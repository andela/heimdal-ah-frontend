import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../ui/Buttons/Button';
import './PasswordReset.scss';
import ResetPassword from '../../../actions/PasswordReset/ResetPasswordActions';

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
    // eslint-disable-next-line react/destructuring-assignment
    this.props.ResetPassword();
  }

  render() {
    const { email } = this.state;
    const { status } = this.props;
    if (status === 'LOADING') {
      document.querySelector('.password-reset button').innerHTML = 'Loading...';
    } else if (status === 'LOADING_FINISHED') {
      document.querySelector('.password-reset button').innerHTML = 'Reset';
    }
    return (
      <Fragment>
        {status === 'SUCCESS' && <Redirect to='/updatepassword' />}
        {status === 'FAILED' && <Redirect to='/resetpassword' />}
        <div className='password-reset header'>
          Our Header
        </div>
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='email' className='password-reset input-reset-password' name='email' value={email} placeholder='Enter your Email' onChange={e => this.onHandleChange(e)} required />
            <br />
            {status === 'ERROR' && <span>Server error</span>}
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
  ResetPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.resetpassword.status,
});

export default connect(mapStateToProps, { ResetPassword })(PasswordReset);
