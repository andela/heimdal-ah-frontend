import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import Button from '../../ui/Buttons/Button';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';
import './PasswordReset.scss';
import resetPassword from '../../../actions/PasswordReset/resetPasswordActions';

/**
 * @description - Helps a user resets his password
 * @param {props} status - the status returned from dispatching actions
 * @param {props} resetPassword - the action been dispatched
 * @returns {component} Component
 */
class PasswordReset extends Component {
  state = {
    email: '',
  }

  /**
 * @description - Handles the form input change
 * @param {event} e - the event passed to the method
 * @returns {component} updated state
 */
  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /**
 * @description - Handles the form submit by calling resetPassword action
 * @param {event} e - the event passed to the method
 * @returns {component} null
 */
  onHandleSubmit(e) {
    toastr.success('Loading...', 'Loading, please be patient');
    const { email } = this.state;
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetPassword(email);
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    const { email } = this.state;
    const { status } = this.props;
    return (
      <Fragment>
        {status === 'SUCCESS' && toastr.success('Email Sent', 'An Email has been sent to you, please click on the link to reset your password')}
        {status === 'FAILED' && toastr.warning('Invalid Credentials', 'User not Found')}
        <Header isValidated={false} />
        <div className='password-reset body'>
          <p>Reset Your Password</p>
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='email' className='password-reset input-reset-password' name='email' value={email} placeholder='Enter your Email' onChange={e => this.onHandleChange(e)} required />
            <br />
            {status === 'ERROR' && toastr.warning('Email Not Sent', 'Server Error')}
            <br />
            <Button type='login2' label='Reset' Class='password-reset button' ref={this.button} />
          </form>
        </div>
        <br />
        <Footer />
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
