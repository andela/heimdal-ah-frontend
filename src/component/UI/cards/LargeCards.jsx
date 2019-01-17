import React from 'react';
import PropTypes from 'prop-types';
import Glow from '../buttons/glow/Glow.jsx';
import './Cards.scss';

const AriticleLargeCards = (props) => {
  const {
    ArticleTitle,
    Article,
    ArticleImage,
    userImage,
    username,
    updatedTime,
  } = props;
  return (
    <div className="LargeCards" style={{ border: '0rem' }}>
      <h5 className="card-title">{ArticleTitle}</h5>
      <img className="card-img-top" src={ArticleImage} alt="Card" />
      <div className="card-body" style={{ padding: '0rem' }}>
        <br />
        <p className="card-text">{Article}</p>
        <span><img className="user-image" src={userImage} alt="user" /></span>
        <p className="col-8 col-md-7" style={{ display: 'inline-block' }}>{username}</p>
        <i className="far fa-clock " style={{}}>{updatedTime}</i>
        <Glow className="glow" />
        <div className='stars col-7' style={{ display: 'inline-block' }}>
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
        <i className="far fa-comment-alt"> 0</i>
        <hr />
      </div>
    </div>
  );
};
const article = 'low as a natural lead-in to additional content. This content is a little bit longer.';
const image = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';
const userName = 'peter debby';
const articleTitle = 'Lorem ipsum dolor';
const articleImage = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';

AriticleLargeCards.defaultProps = {
  ArticleTitle: articleTitle,
  Article: article,
  userImage: image,
  ArticleImage: articleImage,
  username: userName,
  updatedTime: '5days ago',
};


AriticleLargeCards.propTypes = {
  ArticleTitle: PropTypes.string,
  Article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
  ArticleImage: articleImage,
};


export default AriticleLargeCards;
