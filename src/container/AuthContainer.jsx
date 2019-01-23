import { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import login from '../actions/auth/login';
import validateLoginInput from '../validations/authValidations';

class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = (event) => {
    const { errors } = this.state;
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

  onLoginSubmit = (e) => {
    const { actions } = this.props;
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      actions.login(this.state);
    }
  };

  isValid = () => {
    const { errors, isValid } = validateLoginInput(this.state);
    if (!isValid) {
      this.setState({ errors, password: '' });
    }
    return isValid;
  }

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
  actions: bindActionCreators(
    {
      login,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AuthContainer);
