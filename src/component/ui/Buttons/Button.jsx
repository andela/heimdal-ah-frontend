import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
/**
 * @description - Heimdal Authors Haven Button Component
 * @param {props} Class - the class of the button(bootstrap or custom)
 * @param {props} onClick - the function to be performed by the button when it is clicked
 * @param {props} label - the title of the button
 * @param {props} type - the type of the button(signin,signup,login,follow,tag,login2,signup2,
 * subscribe,publish,report,notifications,article,save-profile,cancel,edit-profile,reply,comment,
 * stories,facebook,twitter,google)
 * @returns {component} Button
 */
const Button = (props) => {
  const {
    Class, onClick, label, type,
  } = props;

  if (type) {
    return (
      <button type="submit" className={`button btn-${type}  ${Class}`} onClick={onClick}>
        {label}
      </button>
    );
  }
  return (
    <button type="button" className={`button btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  Class: '',
  type: 'default',
  onClick: () => {},
  label: 'Default',
};

Button.propTypes = {
  Class: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'signin',
    'signup',
    'login',
    'follow',
    'tag',
    'login2',
    'signup2',
    'subscribe',
    'publish',
    'report',
    'notifications',
    'article',
    'save-profile',
    'cancel',
    'edit-profile',
    'reply',
    'comment',
    'stories',
    'facebook',
    'twitter',
    'google',
    'default',
  ]),
};

export default Button;
