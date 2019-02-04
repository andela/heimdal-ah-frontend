import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './bookmarksCards.scss';
import Glow from '../Buttons/glow/Glow.jsx';


/** @description booksmarks Cards for Article
   * @return {object} props
   * @public
   */
const BookmarksCards = (props) => {
  const article = `${props.article.substring(0, 200)}...`;
  const title = `${props.articleTitle.substring(0, 25)}...`;
  return (
    <Fragment>
      <br />
      <div>
        <div className='bookmarks-cards'>
          <div className=''>
            <div className='bookmarks-header'>
              <h2 className="">{title}</h2>
              <img className='bookmark-logo' src='/src/images/bookmark.svg' alt='bookmark-logo' />
            </div>
          </div>
          <div className='text-content'>
            <p>
              {article}
            </p>
            <div />
          </div>
          <br />
          <div className="user-section">
            <div className="user-profile">
              <span><img className="user-image" src={props.userImage} alt="user" /></span>
              <span className="username">{ props.username }</span>
            </div>
            <div>
              <span><Glow className="glowButton" active handleGlow={() => {}} /></span>
              <span className='glow-text'>{props.glowCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

BookmarksCards.defaultProps = {
  articleTitle: '',
  article: '',
  userImage: '',
  username: '',
  glowCount: '',
};


BookmarksCards.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  glowCount: PropTypes.string,
};

export default BookmarksCards;
