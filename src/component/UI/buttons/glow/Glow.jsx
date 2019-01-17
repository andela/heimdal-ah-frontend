import React from 'react';
import './Glow.scss';
import PropTypes from 'prop-types';

const Glow = (props) => {
  const { active, handleGlow } = props;

  return (
    <i
      className={`glow-btn ${active ? 'glow-on' : 'glow-off'}`}
      role="button"
      tabIndex={0}
      onClick={handleGlow}
      onKeyPress={handleGlow}
    />
  );
};

Glow.propTypes = {
  active: PropTypes.bool,
  handleGlow: PropTypes.func.isRequired,
};

Glow.defaultProps = {
  active: false,
};


export default Glow;
