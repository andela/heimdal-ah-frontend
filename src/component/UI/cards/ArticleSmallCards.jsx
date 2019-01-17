import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
import Glow from '../buttons/glow/Glow.jsx';


const ArticleSmallCards = (props) => {
  const {
    ArticleTitle,
    ArticleSnippet,
    userImage,
    username,
    updatedTime,
  } = props;
  return (
    <Fragment>
      <div className="SmallCards row">
        <div className='col-sm-3'>
          <img className="small-card-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72b92vQAI3xXJTcOQPVIkE0FfK8j21btJeLZPSuP7vF2DvuBTBQ' alt='i-icon' />
        </div>
        <div className='col-sm-6'>
          <div className='col-md-12 article-header'>
            { ArticleTitle }
          </div>
          <div className='col-md-12, small-card-text'>
            { ArticleSnippet }
          </div>
          <div className="user-section">
            <div>
              <span><img className="user-image" src={userImage} alt="user" /></span>
              {/* <i className="fas fa-user-circle" /> */}
              <p className="col-md-7 user-name">{username}</p>
              <i className="far fa-comment-alt col-md-3 comments"> 0</i>
            </div>
            <span><Glow className="col-1 glowButton" active /></span>
            <span className='glow-text'>0</span>
            <i className="far fa-clock timer" style={{}}>{updatedTime}</i>
          </div>
          <div />
          <div />

        </div>
      </div>

    </Fragment>
  );
};
const article = 'Lorem ipsum dolor sit amet consectetur adipisicing';
const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const userName = 'pato azu';

ArticleSmallCards.defaultProps = {
  ArticleTitle: 'Lorem ipsum dolor',
  ArticleSnippet: article,
  userImage: image,
  username: userName,
  updatedTime: '5 days ago',
};


ArticleSmallCards.propTypes = {
  ArticleTitle: PropTypes.string,
  ArticleSnippet: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
};

export default ArticleSmallCards;
