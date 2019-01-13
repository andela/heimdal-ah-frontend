import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description - Heimdal Authors Haven Button Component
 * @param {props} btnClass - the class of the button(bootstrap or custom)
 * @param {props} btnClick - the function to be performed by the button when it is clicked
 * @param {props} btnTitle - the title of the button
 * @returns {component} Button
 */
const Button = (props) => {
  const {
    btnClass,
    btnClick,
    btnTitle,
  } = props;

  return (<button type='button' className={`btn ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
};

Button.defaultProps = {
  btnClick: () => {},
  btnClass: 'btn-primary',
  btnTitle: 'Heimdal Default Button',
};

Button.propTypes = {
  btnClick: PropTypes.func,
  btnClass: PropTypes.string,
  btnTitle: PropTypes.string,
};

export default Button;
