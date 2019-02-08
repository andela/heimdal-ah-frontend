import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PasswordReset.scss';
import resetPassword from '../../../actions/PasswordReset/resetPasswordActions';

/**
 * @description - Helps a user resets his password
 * @param {props} status - the status returned from dispatching actions
 * @param {props} resetPassword - the action been dispatched
 * @returns {component} Component
 */
export class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  /**
 * @description - Handles the form submit by calling resetPassword action
 * @param {event} e - the event passed to the method
 * @returns {component} null
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
    const { email } = this.state;
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions(resetPassword(email));
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    const { email } = this.state;
    const { status } = this.props;
    return this.props.children({
      email,
      status,
      state: this.state,
      emailField: this.emailField,
      onHandleSubmit: this.onHandleSubmit,
      onHandleChange: this.onHandleChange,
    });
  }
}

PasswordReset.propTypes = {
  status: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  status: state.resetpassword.status,
});


const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
