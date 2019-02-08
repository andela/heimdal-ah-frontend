/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-as-default */
/* eslint-disable arrow-body-style */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
import React, { Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';

import moment from 'moment';
import { connect } from 'react-redux';
import english from 'javascript-time-ago/locale/en';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import Glow from '../../../ui/Buttons/glow/Glow';
import './ReadSingleArticle.scss';
import ArticlesRating from '../../../ui/Rating/ArticlesRating';
import ReportArticle from '../../../ui/Forms/ReportArticle/Index';
import ModalButton from '../../../ui/Modal/Index';
import Comment from '../../../ui/Comment/Comment';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/**
 * @description - ReadSingleArticlePresentation renders Reading Single article page
 */
const ReadSingleArticlePresentation = (props) => {
  const { author = {}, auth } = props;
  const username = `${props.username.substring(0, 9)}...`;
  const userImage = props.userImage || <i className="fas fa-7x fa-user-circle" />;
  if (props) {
    return (
      <Fragment>
        <Redirect to={`/${props.username}/articles/${props.slug}`} />
        <div className="single-article-wrapper">
          <div className="bookmark-row">
            <div />
          </div>
          <div className="body-section">
            <div className="article-section">
              <div className="body-header">
                <h1>{props.title}</h1>
                {auth.isAuthenticated
                  && (props.bookmark
                    ? <i className="fas fa-bookmark fa-3x bookmark-logo" onClick={props.deleteBookmark} />
                    : <i className="far fa-bookmark fa-3x bookmark-logo" onClick={props.createBookmark} />)
              }
              </div>
              <p>
                {timeAgo.format(moment(props.time).valueOf())}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {props.readingTime}
              </p>
              <p>{}</p>
              <br />
              <div dangerouslySetInnerHTML={{ __html: props.body }} />
              {/* {props.body} */}
              <div className="bottom-details">
                <div className='socails'>
                  {/* <span>
                    <FacebookShareButton
                      className="no-outline"
                      url={window.location}
                      quote={props.title}
                    >
                      <i className="fab fa-2x fa-facebook-square facebook" />
                    </FacebookShareButton>
                  </span> */}
                  <span>
                    <TwitterShareButton
                      className="no-outline"
                      url={window.location}
                      title={`Kindly check out this awesome article ${
                        props.title
                      } on Heimdal.com`}
                    >
                      <i className="fab fa-2x fa-twitter-square twitter" />
                    </TwitterShareButton>
                  </span>
                  <span>
                    <EmailShareButton
                      className="no-outline"
                      subject={props.title}
                      body={`Kindly check out this awesome article ${window.location} on Heimdal.com`}
                    >
                      <i className="fa fa-2x fa-envelope" />
                    </EmailShareButton>
                  </span>
                </div>
                <div className="ratings">
                  {props.articleId && <ArticlesRating articleId={props.articleId} />}
                </div>
                <div className='glow'>
                  <Glow active={props.active} handleGlow={props.handleGlow} />
                  <span className='likesCount'>{ props.likesCount }</span>
                </div>
              </div>
              <br />
              <div className="">
                {auth.isAuthenticated
                    && (!author ? (
                      <ModalButton label="Report Article" Class="btn-danger p-2 ph-25">
                        <ReportArticle articleId={props.articleId} />
                      </ModalButton>
                    ) : (
                      <Link
                        to={`/update-articles?id=${props.articleId}`}
                        className="btn btn-secondary p-70 ph-25"
                      >
                    Edit
                      </Link>
                    )
                    )}
              </div>
              <div>
                {props.articleId && <Comment articleId={props.articleId} />}
              </div>
              <br />
              <div>
                {props.articleId && <Comment articleId={props.articleId} />}
              </div>
              <br />
            </div>
            <div className="user-section">
              <div className="user-profile">
                <img className="user-image" src={userImage} alt="user" />
                <br />
                <br />
                <a href={`/${props.username}`} className="user-link">
                  <h2>{username}</h2>
                </a>
                <br />
                <button className="btn follow-btn" type="submit">
                        Follow
                </button>
              </div>
            </div>
            <div />
            <br />
          </div>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ReadSingleArticlePresentation);
