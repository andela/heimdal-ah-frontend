import { Component } from 'react';
import { connect } from 'react-redux';
import signin, { removeErrorMsg } from '../actions/auth/signin';
// import validateLoginInput from '../validations/authValidations';
import { validateLogin } from '../helpers/validateInputs';
import { removeAnError, setErrors, clearErrors } from '../actions/errorActions';

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


  componentWillReceiveProps(nextProps) {
    return nextProps.errors && this.setState({ errors: nextProps.errors });
  }

  /**
 * @description - form onChange event
* @param {props} event - event recieved
 */
  onChange = (event) => {
    const { actions } = this.props;
    this.setState({ [event.target.name]: event.target.value });
    actions(removeErrorMsg());
    if (this.state.errors[event.target.name]) {
      actions(removeAnError(event.target.name));
    }
  }

  /**
 * @description - form onLoginSubmit event
 * @param {props} e - event recieved
 */
  onLoginSubmit = (e) => {
    const { actions } = this.props;
    e.preventDefault();
    this.setState({ isLoading: true });
    const errors = validateLogin(this.state);
    if (errors) {
      this.setState({ isLoading: false });
      return actions(setErrors(errors.errors));
    }

    actions(clearErrors());
    return actions(signin(this.state));
  };

  /**
 * @description - send props function
 * @param {returns} e - props
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
  errors: state.errors,
});

const matchDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AuthContainer);
