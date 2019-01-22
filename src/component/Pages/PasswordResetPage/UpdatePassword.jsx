import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';
import Button from '../../ui/Buttons/Button';
import './PasswordReset.scss';
import updatePassword from '../../../actions/PasswordReset/updatePasswordActions';

/**
 * @description - Helps a user updates his password
 * @param {props} status - the status returned from dispatching actions
 * @param {props} updatePassword - the action been dispatched
 * @returns {component} Component
 */
class PasswordUpdate extends Component {
  state = {
    password: '',
    confirmpassword: '',
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
 * @description - Handles the form submit by calling updatePassword action
 * @param {event} e - the event passed to the method
 * @returns {component} null
 */
  onHandleSubmit(e) {
    const { password, confirmpassword } = this.state;
    e.preventDefault();
    const token = new URLSearchParams(window.location.search).get('token');
    if (password === confirmpassword) {
      toastr.success('Loading...', 'Loading please be patient');
      // eslint-disable-next-line react/destructuring-assignment
      this.props.updatePassword(token, { password, confirmpassword });
    } else {
      toastr.warning('Password', 'Password and Confirm passsword must be the same');
    }
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    const { password, confirmpassword } = this.state;
    const { status } = this.props;
    return (
      <Fragment>
        {status === 'SUCCESS' && <Redirect to='/login' />}
        {status === 'FAILED' && <Redirect to='/resetpassword' />}
        <Header isValidated={false} />
        <div className='password-reset body'>
          <p>Enter Your New Password</p>
          {status === 'ERROR' && toastr.warning('Error', 'Server Error')}
          <form onSubmit={e => this.onHandleSubmit(e)}>
            <input type='text' className='password-reset input-reset-password' name='password' value={password} placeholder='Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <br />
            <input type='text' className='password-reset input-reset-password' name='confirmpassword' value={confirmpassword} placeholder='Confirm Password' onChange={e => this.onHandleChange(e)} required />
            <br />
            <br />
            <Button type='login2' label='Update' Class='password-reset button' />
          </form>
        </div>
        <br />
        <Footer />
      </Fragment>
    );
  }
}

PasswordUpdate.propTypes = {
  status: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.updatepassword.status,
});

export default connect(mapStateToProps, { updatePassword })(PasswordUpdate);
