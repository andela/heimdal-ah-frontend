import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
import Glow from '../buttons/glow/Glow.jsx';


const NotificationCards = (props) => {
  const {
    ArticleTitle,
    Article,
    userImage,
    username,
    moreClass,
  } = props;
  return (
    <Fragment>
      <div className={`NotificationCards ${moreClass}`}>
        <div className='header'>
          <h1 className="col-md-10">{ ArticleTitle }</h1>
          <img className='bookmark-logo col-md-3' src='/src/images/livello42.svg' alt='bookmark-logo' />
        </div>
        <div className='row'>
          <p className='text col-md-8'>
            { Article }
          </p>
        </div>
        <br />
        <div className="user-section">
          <span><img className="user-image" src={userImage} alt="user" /></span>
          {/* <i className="fas fa-user-circle" /> */}
          <p className="col-8 col-md-9 username" style={{ display: 'inline-block' }}>{ username }</p>
          <span><Glow className="col-1 glowButton" active /></span>
          <span className='glow-text'>5000</span>
        </div>
      </div>
    </Fragment>
  );
};

const article = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Est delectus sit nemo aperiam esse. Harum perspiciatis asperiores atque aliquid,
error quo sapiente numquam aspernaturreiciendis saepe corporis fugit. Cumque, facilis.`;
const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const userName = 'pato azu';
const articleTitle = 'Lorem ipsum dolor sit amet,';

NotificationCards.defaultProps = {
  ArticleTitle: articleTitle,
  Article: article,
  userImage: image,
  username: userName,
  moreClass: '',
};


NotificationCards.propTypes = {
  ArticleTitle: PropTypes.string,
  Article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  moreClass: PropTypes.string,
};

export default NotificationCards;
