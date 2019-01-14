import React from 'react';
import PropTypes from 'prop-types';
import './ButtonStyles.scss';
/**
 * @description - Heimdal Authors Haven Button Component
 * @param {props} btnClass - the class of the button(bootstrap or custom)
 * @param {props} btnClick - the function to be performed by the button when it is clicked
 * @param {props} btnTitle - the title of the button
 * @param {props} btnType - the type of the button(signin,signup,login,follow,tag,login2,signup2,
 * subscribe,publish,report,notifications,article,save_profile,cancel,edit_profile,reply,comment,
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

  switch (btnType) {
    case 'signup': {
      return (<button type='submit' className={`btn-signup-login  ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'login': {
      return (<button type='submit' className={`btn-signup-login  ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'follow': {
      return (<button type='submit' className={`btn-follow ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'tag': {
      return (<button type='submit' className={`btn-tag-login2-signup2 ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'login2': {
      return (<button type='submit' className={`btn-tag-login2-signup2  ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'signup2': {
      return (<button type='submit' className={`btn-tag-login2-signup2  ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'subscribe': {
      return (<button type='submit' className={`btn-subscribe ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'publish': {
      return (<button type='submit' className={`btn-publish ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'report': {
      return (<button type='submit' className={`btn-report ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'notifications': {
      return (<button type='submit' className={`btn-notifications ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'article': {
      return (<button type='submit' className={`btn-post-article ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'save_profile': {
      return (<button type='submit' className={`btn-profile-cancel ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'cancel': {
      return (<button type='submit' className={`btn-profile-cancel ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'edit_profile': {
      return (<button type='submit' className={`btn-edit-profile ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'reply': {
      return (<button type='submit' className={`btn-reply-comment-stories ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'comment': {
      return (<button type='submit' className={`btn-reply-comment-stories ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'stories': {
      return (<button type='submit' className={`btn-reply-comment-stories ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'facebook': {
      return (<button type='submit' className={`btn-facebook ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'twitter': {
      return (<button type='submit' className={`btn-twitter ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    case 'google': {
      return (<button type='submit' className={`btn-google ${btnClass}`} onClick={btnClick}>{btnTitle}</button>);
    }
    default:
      return (<button type='button' className='btn-default' onClick={btnClick}>{btnTitle}</button>);
  }
};

Button.defaultProps = {
  btnClass: '',
  btnType: '',
  btnClick: () => {},
  btnTitle: 'Heimdal Default Button',
};

Button.propTypes = {
  btnClass: PropTypes.string,
  btnClick: PropTypes.func,
  btnTitle: PropTypes.string,
  btnType: PropTypes.string,
};

export default Button;
