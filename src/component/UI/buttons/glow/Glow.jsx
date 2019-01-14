import React, { Component } from 'react';
import './Glow.scss';
import PropTypes from 'prop-types';

class Glow extends Component {
  state = {
    isGlowedByUser: this.props.isGlowedByUser || false,
    glowCount: this.props.glowCount,
  };

  handleGlow = () => {
    this.setState(prevState => ({
      isGlowedByUser: !prevState.isGlowedByUser,
      glowCount: prevState.isGlowedByUser ? prevState.glowCount - 1 : prevState.glowCount + 1,
    }));
  };

  render() {
    const { isGlowedByUser } = this.state;
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

Glow.propTypes = {
  isGlowedByUser: PropTypes.bool.isRequired,
  glowCount: PropTypes.number,
};

Glow.defaultProps = {
  glowCount: 0,
};

export default Glow;
