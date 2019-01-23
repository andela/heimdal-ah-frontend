import React, { Component } from 'react';
import Header from '../ui/header/Header.jsx';
import Footer from '../ui/footer/Footer.jsx';

class Layout extends Component {
  state = {
    isAuthenticated: false,
  }

  render() {
    const { isAuthenticated } = this.state;
    const { children } = this.props;
    return (
      <div>
        <Header isValidated={isAuthenticated} />
        {children}
        <Footer />
      </div>
    );
  }
}
export default Layout;
