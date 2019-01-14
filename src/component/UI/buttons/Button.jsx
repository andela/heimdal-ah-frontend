import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStyles.scss';
/**
 * @description - Heimdal Authors Haven Button Component
 * @param {props} btnClass - the class of the button(bootstrap or custom)
 * @param {props} btnClick - the function to be performed by the button when it is clicked
 * @param {props} btnTitle - the title of the button
 * @param {props} btnType - the type of the button(signin,signup,login,follow,tag,login2,signup2,
 * subscribe,publish,report,notifications,article,save-profile,cancel,edit-profile,reply,comment,
 * stories,facebook,twitter,google)
 * @returns {component} Button
 */
const Button = (props) => {
  const {
    btnClass,
    btnClick,
    btnTitle,
    btnType,
  } = props;

  if (btnType) {
    return (<button type='submit' className={`btn-${btnType}  ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
  }
  return (<button type='button' className='btn-default' onClick={btnClick}>{btnTitle}</button>);
};

Button.defaultProps = {
  btnClass: '',
  btnType: '',
  btnClick: () => {},
  btnTitle: 'Default',
};

Button.propTypes = {
  btnClass: PropTypes.string,
  btnClick: PropTypes.func,
  btnTitle: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
