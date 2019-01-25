import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './articleCardVertical.scss';
import Glow from '../Buttons/glow/Glow.jsx';
import Rating from '../Rating/Rating';

/** @description vertical Cards for Article
   * @return {object} props
   * @public
   */
const ArticleCardVertical = props => (
  <Fragment>
    <div className="cardbox shadow-sm bg-white">
      <div className="row">
        <div className="col-md-5 pr-0">
          <div className="cardbox-heading">
            <div className="cardbox-item">
              <img className="img-fluid" src={props.articleImage} alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-7 ml-0 pl-0">
          <div className="cardbox-heading">
            <div className="col-md-12 mb-0 pb-0">
              <h5>{props.articleTitle}</h5>
              <div className="card-text">{props.article}</div>
            </div>

            <div className="cardbox-base mt-0 mb-0">
              <div className="mt-0 mb-0 pb-0">
                <ul>
                  <li>
                    <a href="/">
                      <img src={props.userImage} className="img-fluid rounded-circle" alt="User" />
                      <span className="ml-1 user-name-text">{props.username}</span>
                    </a>
                  </li>
                </ul>
                <ul className="float-right">
                  <li><a href="/"><i className="far fa-comment-alt comment">{props.commentCount}</i></a></li>
                </ul>

                <ul>
                  <li>
                    <Glow active handleGlow={() => {}} />
                  </li>
                </ul>

                <span className="text-center">
                  <Rating />
                </span>
                <span className="time-text">
                  <i>{props.updatedTime}</i>
                </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

ArticleCardVertical.defaultProps = {
  articleTitle: '',
  article: '',
  commentCount: '',
  userImage: '',
  articleImage: '',
  username: '',
  updatedTime: '',
};


ArticleCardVertical.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  articleImage: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
  commentCount: PropTypes.string,
};

export default ArticleCardVertical;
