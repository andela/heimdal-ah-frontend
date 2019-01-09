/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Homepage} />
          </Switch>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
