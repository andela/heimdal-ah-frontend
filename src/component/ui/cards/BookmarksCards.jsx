import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './bookmarksCards.scss';
import Glow from '../Buttons/glow/Glow.jsx';


/** @description booksmarks Cards for Article
   * @return {object} props
   * @public
   */
const BookmarksCards = props => (
  <Fragment>
    <div className='col-md-12'>
      <div className={`bookmarks-cards ${props.moreClass}`}>
        <div className='col-md-12'>
          <div className='header'>
            <h1 className="col-md-11 card-title">{ props.articleTitle }</h1>
            <img className='bookmark-logo col-md-1' src='/src/images/bookmark.svg' alt='bookmark-logo' />
          </div>
        </div>
        <div className='col-md-12'>
          <p className='text-content'>{ props.article}</p>
        </div>
        <br />
        <div className="user-section ml-10 card-bottom">
          <div className='col-md-12'>
            <span><img className="user-image" src={props.userImage} alt="user" /></span>
            <p className="col-8 col-md-9 username" style={{ display: 'inline-block' }}>{ props.username }</p>
            <span><Glow className="col-1 glowButton" active handleGlow={() => {}} /></span>
            <span className='glow-text'>{props.glowCount}</span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

BookmarksCards.defaultProps = {
  articleTitle: '',
  article: '',
  userImage: '',
  username: '',
  moreClass: '',
  glowCount: '',
};


BookmarksCards.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  moreClass: PropTypes.string,
  glowCount: PropTypes.string,
};

export default BookmarksCards;
