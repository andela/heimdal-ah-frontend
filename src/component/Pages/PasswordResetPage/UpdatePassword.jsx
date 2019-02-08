import { Component } from 'react';
import { connect } from 'react-redux';
import { toastr as feedback } from 'react-redux-toastr';
import PropTypes from 'prop-types';
import './PasswordReset.scss';
import updatePassword from '../../../actions/PasswordReset/updatePasswordActions';

/**
 * @description - Helps a user updates his password
 * @param {props} status - the status returned from dispatching actions
 * @param {props} updatePassword - the action been dispatched
 * @returns {component} Component
 */
export class PasswordUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmpassword: '',
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
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
    e.preventDefault();
    const { password, confirmpassword } = this.state;
    const token = new URLSearchParams(window.location.search).get('token');
    if (password === confirmpassword) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.actions(updatePassword(token, { password, confirmpassword }));
    } else {
      feedback.warning('Password', 'Password and Confirm passsword must be the same');
    }
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    const { password, confirmpassword } = this.state;
    const { status } = this.props;
    return this.props.children({
      password,
      confirmpassword,
      status,
      state: this.state,
      onHandleSubmit: this.onHandleSubmit,
      onHandleChange: this.onHandleChange,
    });
  }
}

PasswordUpdate.propTypes = {
  status: PropTypes.string.isRequired,
  actions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: state.updatepassword.status,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordUpdate);
