import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Glow from '../buttons/glow/Glow.jsx';
import './Cards.scss';
import Rating from '../Rating/Rating';

const ArticleCard2 = (props) => {
  const articleText = props.article.length > 100 ? `${props.article.substring(0, 100).trim()}...` : props.article;
  const userName = props.username.length > 12 ? `${props.username.substring(0, 12).trim()}...` : props.username;
  return (
    <Fragment>
      <div className="article-Card-2">
        <h5 className="card-title">{props.articleTitle.substring(0, 30)}</h5>
        <img className="card-img-top mb-4" src={props.articleImage} alt="Card" />
        <div className="card-body">
          <p className="card-text">{articleText}</p>
          <div className='row'>
            <div className='col-md-8 mb-3'>
              <span><img className="user-image" width='30' src={props.userImage} alt="user" /></span>
              <span className="col-8 col-md-7 user-name">{userName}</span>
            </div>
            <div className='col-md-4 mb-3 mt-2'>
              <i className="far fa-clock updated-time float-right">{ props.updatedTime }</i>
            </div>
          </div>
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
        <hr />
      </div>
    </Fragment>
  );
};
const article = 'low as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longerlow as a natural lead-in to additional content. This content is a little bit longer.';
const image = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';
const userName = 'Peter Debbyy';
const articleTitle = 'Lorem ipsum dolor';
const articleImage = 'https://i.pinimg.com/originals/37/6f/6c/376f6cc74753e92bd2d39a762b4e2c9f.jpg';

ArticleCard2.defaultProps = {
  articleTitle,
  article,
  userImage: image,
  articleImage,
  username: userName,
  updatedTime: ' 5 days ago',
};


ArticleCard2.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
  articleImage: PropTypes.string,
};

export default ArticleCard2;
