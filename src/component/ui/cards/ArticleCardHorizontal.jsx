import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Glow from '../Buttons/glow/Glow.jsx';
import './articleCardHorizontal.scss';
import Rating from '../Rating/Rating';
import { textTrimmer } from '../../../../helper/cardsHelper';

/** @description horizontal Cards for Article
   * @return {object} props
   * @public
   */
const ArticleCardHorizontal = (props) => {
  // const articleText = textTrimmer(props.article, 100);
  const userName = textTrimmer(props.username, 12);
  return (
    <Fragment>
      <div className="article-card-horizontal">
        <h5 className="card-title">{props.articleTitle}</h5>
        <img className="card-img-top mb-4" src={props.articleImage} alt="Card" />
        <div className="card-body">
          <div className="flex-text-content mb-3">
            <p className="card-text">{props.article}</p>
          </div>
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
              <i className="far fa-comment-alt comment">{props.commentCount}</i>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </Fragment>
  );
};

ArticleCardHorizontal.defaultProps = {
  articleTitle: '',
  article: '',
  userImage: '',
  articleImage: '',
  commentCount: '',
  username: '',
  updatedTime: '',
};


ArticleCardHorizontal.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
  articleImage: PropTypes.string,
  commentCount: PropTypes.string,
};

export default ArticleCardHorizontal;
