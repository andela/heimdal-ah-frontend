import React from 'react';
import PropTypes from 'prop-types';
import Glow from '../buttons/glow/Glow.jsx';
import './Cards.scss';
import Rating from '../Rating/Rating';

const ArticleCard2 = (props) => {
  const {
    ArticleTitle,
    Article,
    ArticleImage,
    userImage,
    username,
    updatedTime,
  } = props;
  return (
    <div className="article-Card-2" style={{ border: '0rem' }}>
      <h5 className="card-title">{ArticleTitle}</h5>
      <img className="card-img-top" src={ArticleImage} alt="Card" />
      <div className="card-body" style={{ padding: '0rem' }}>
        <br />
        <p className="card-text">{Article}</p>
        <span><img className="user-image" src={userImage} alt="user" /></span>
        <p className="col-8 col-md-8 user-name" style={{ display: 'inline-block' }}>{username}</p>
        <i className="far fa-clock updated-time" style={{}}>{ updatedTime }</i>
        <div className='row'>
          <div className='col-md-3'>
            <Glow active handleGlow={() => {}} />
          </div>
          <div className='col-md-6 text-center ratings'>
            <Rating />
          </div>
          <div className='col-md-3'>
            <i className="far fa-comment-alt comment"> 10</i>
          </div>
        </div>
      </div>
    </div>
  );
};
const article = 'low as a natural lead-in to additional content. This content is a little bit longer.';
const image = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';
const userName = 'Peter Debby';
const articleTitle = 'Lorem ipsum dolor';
const articleImage = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';

ArticleCard2.defaultProps = {
  ArticleTitle: articleTitle,
  Article: article,
  userImage: image,
  ArticleImage: articleImage,
  username: userName,
  updatedTime: ' 5 days ago',
};


ArticleCard2.propTypes = {
  ArticleTitle: PropTypes.string,
  Article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
  ArticleImage: PropTypes.string,
};

export default ArticleCard2;
