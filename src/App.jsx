/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllFollowers } from './actions/Follow/UserFollowAction';
import Routes from './routes/routes';
import 'font-awesome/css/font-awesome.min.css';
import './styles/global.scss';

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getAllFollowers();
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getAllFollowers,
    },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, matchDispatchToProps)(App);
// export default App;
