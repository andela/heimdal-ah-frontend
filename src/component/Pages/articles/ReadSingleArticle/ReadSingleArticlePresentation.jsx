/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-body-style */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import moment from 'moment';
import english from 'javascript-time-ago/locale/en';
import Glow from '../../../ui/Buttons/glow/Glow';
import './ReadSingleArticle.scss';
import ArticlesRating from '../../../ui/Rating/ArticlesRating';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/**
 * @description - ReadSingleArticlePresentation renders Reading Single article page
 */
class ReadSingleArticlePresentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.editButton = React.createRef();
    this.followButton = React.createRef();
  }

  /**
 * @description - render single article page
 */
  render() {
    setTimeout(() => {
      return this.props.author ? this.editButton.current.style.display = 'inline' : !this.props.author ? this.followButton.current.style.display = 'inline' : null;
    }, 2000);
    const username = `${this.props.username.substring(0, 9)}...`;
    return (
      <Fragment>
        <Redirect to={`/${this.props.username}/articles/${this.props.slug}`} />
        <div className="single-article-wrapper">
          <div className='article-header'>
            <h1>
              { this.props.title }
            </h1>
          </div>
          <div className='bookmark-row'>
            <div />
            <div>
              <img className='bookmark-logo' src='/src/images/bookmark.svg' alt='bookmark-logo' />
            </div>
          </div>
          <div className='body-section'>
            <div className='article-section'>
              { this.props.body }
              <div className='bottom-details'>
                <div>
                  {this.props.articleId && <ArticlesRating articleId={this.props.articleId} />}
                </div>
                <div className='ratings' />
                <div className='glow'>
                  <Glow active handleGlow={() => {}} />
                  <span className='likesCount'>{ this.props.likesCount }</span>
                </div>
              </div>
              <div className='line' />
            </div>
            <div className='user-section'>
              <div className='user-profile'>
                <img className="user-image" src={this.props.userImage} alt="user" />
                <br />
                <br />
                <a href={`/${this.props.username}`} className="user-link"><h2>{username}</h2></a>
                <br />
                <h4>{ timeAgo.format(moment(this.props.time).valueOf()) }</h4>
                <br />
                <a href={`http://heimdal-frontend.herokuapp.com/articles/update?id=${this.props.articleId}`}><button className="btn edit-btn btn-secondary" ref={this.editButton} type="submit">edit</button></a>
                <button className="btn follow-btn" ref={this.followButton} type="submit">follow</button>
                <br />
                <br />
                <div className="social-media">
                  <i className="fab fa-4x fa-facebook-square facebook" />
                  <i className="fab fa-4x fa-twitter-square twitter" />
                </div>
              </div>
              <div>
                <hr />
                <h5>tags</h5>
                <div className='tag-buttons'>
                  <div className="radio">
                    <input type="radio" name="optradio" checked />
                  </div>
                  <div className="radio">
                    <input type="radio" name="optradio" />
                  </div>
                  <div className="radio disabled">
                    <input type="radio" name="optradio" disabled />
                  </div>
                  <div className="radio">
                    <input type="radio" name="optradio" checked />
                  </div>
                  <div className="radio">
                    <input type="radio" name="optradio" />
                  </div>
                  <div className="radio disabled">
                    <input type="radio" name="optradio" disabled />
                  </div>
                  <div className="radio">
                    <input type="radio" name="optradio" checked />
                  </div>
                  <div className="radio">
                    <input type="radio" name="optradio" />
                  </div>
                  <div className="radio disabled">
                    <input type="radio" name="optradio" disabled />
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <h5>Recent articles</h5>
              </div>
            </div>
            <div />
            <br />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ReadSingleArticlePresentation;
