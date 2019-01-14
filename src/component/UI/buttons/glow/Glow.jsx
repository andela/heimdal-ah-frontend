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
          <small>
            {glowCount}
            <span> Glows.</span>
          </small>
          {isGlowedByUser && <small> You glowed this article</small>}
        </div>
        <button
          type="button"
          onClick={this.handleGlow}
          className={`btn fs-20 btn-default ${isGlowedByUser && 'bg-blue'}`}
        >
          <i className={`fa fa-lightbulb ${isGlowedByUser ? 'fa-spin' : 'text-primary'}`} />
          <span> Glow</span>
        </button>
      </div>
    );
  }
}

export default Glow;
