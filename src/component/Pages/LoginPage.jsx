/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../ui/buttons/Button.jsx';
import { getAllProfile } from '../../actions/getProfileAction';

class LoginPage extends Component {
  componentDidMount() {
    console.log(this.props);
    const { getAllProfile } = this.props;
    getAllProfile();
  }

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

export default connect(mapStateToProps, { getAllProfile })(LoginPage);
