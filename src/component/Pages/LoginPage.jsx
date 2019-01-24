/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../ui/Buttons/Button.jsx';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2 className='lead mt-5'>
      Welcome to the login page...
          <div>
            <Button type='login' label='Login' />
          </div>
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(LoginPage);
