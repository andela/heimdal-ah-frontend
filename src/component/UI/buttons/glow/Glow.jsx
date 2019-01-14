import React, { Component } from 'react';
import './Glow.scss';

class Glow extends Component {
  state = {
    isGlowedByUser: this.props.isGlowedByUser || false,
    glowCount: this.props.glowCount || 0,
  };

  handleGlow = () => {
    this.setState(prevState => ({
      isGlowedByUser: !prevState.isGlowedByUser,
      glowCount: prevState.isGlowedByUser ? prevState.glowCount - 1 : prevState.glowCount + 1,
    }));
  };

  render() {
    const { isGlowedByUser, glowCount } = this.state;
    return (
      <div>
        <div className='glow-text'>
          {isGlowedByUser && <small> You glowed this article</small>}
        </div>
        <span
          className={`glow-btn ${isGlowedByUser ? 'glow-on' : 'glow-off'}`} 
          role="button"
          tabIndex={0}
          onClick={this.handleGlow}
          onKeyPress={this.handleGlow}
        />
      </div>
    );
  }
}

export default Glow;
