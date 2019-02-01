/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
import 'font-awesome/css/font-awesome.min.css';
import './styles/global.scss';

/**
 * @description App class
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}


export default App;
// export default App;
