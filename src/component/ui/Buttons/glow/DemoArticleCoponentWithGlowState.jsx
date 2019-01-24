import React, { Component } from 'react';
import './Glow.scss';
import Glow from './Glow';

export class DemoArticleCoponentWithGlowState extends Component {
    state = {
      active: false,
    };

    handleGlow = () => {
      this.setState(prevState => ({
        active: !prevState.active,
        glowCount: prevState.active ? prevState.glowCount - 1 : prevState.glowCount + 1,
      }));
    };

    render() {
      const { active } = this.state;
      return (
        <Glow active={active} handleGlow={this.handleGlow} />
      );
    }
}
