import { Component } from 'react';
import { connect } from 'react-redux';
import signin, { removeErrorMsg } from '../actions/auth/signin';
// import validateLoginInput from '../validations/authValidations';
import { validateLogin } from '../helpers/validateInputs';

/**
 * @description - Helps a user resets his password
 * @param {props} auth - auth details received from the backend
 * @param {props} error - error received
 * @param {props} signin - sign action
 * @returns {component} Component
 */
export class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    isLoading: false,
  };

  /**
 * @description - form onChange event
* @param {props} event - event recieved
 */
  onChange = (event) => {
    const { errors } = this.state;
    const { actions } = this.props;
    actions(removeErrorMsg());
    if (errors[event.target.name]) {
      const newErrors = { ...errors };
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  /**
 * @description - form onLoginSubmit event
 * @param {props} e - event recieved
 */
  onLoginSubmit = (e) => {
    const { actions } = this.props;
    e.preventDefault();
    this.setState({ isLoading: true });
    if (this.isValid()) {
      this.setState({ errors: {} });
      actions(signin(this.state));
    }
  };

  /**
 * @description - error check
 */
  isValid = () => {
    const { errors, isValid } = validateLogin(this.state);
    if (errors) {
      this.setState({ errors, password: '' });
    }
    return isValid;
  }

  /**
 * @description - AuthContainer
 */
  sendProps = () => ({
    ...this.props,
    ...this.state,
    onChange: this.onChange,
    onLoginSubmit: this.onLoginSubmit,
  })

  render() {
    return this.props.children(this.sendProps());
  }
}


const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  error: state.auth.error,
});

const matchDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AuthContainer);
