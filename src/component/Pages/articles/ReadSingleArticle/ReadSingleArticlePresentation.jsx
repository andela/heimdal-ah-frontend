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
import Glow from '../../../ui/Buttons/glow/Glow';
import './ReadSingleArticle.scss';
import ArticlesRating from '../../../ui/Rating/ArticlesRating';
import ReportArticle from '../../../ui/Forms/ReportArticle/Index';
import ModalButton from '../../../ui/Modal/Index';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/**
 * @description - ReadSingleArticlePresentation renders Reading Single article page
 */
const ReadSingleArticlePresentation = (props) => {
  const { author = {}, auth } = props;


  const username = `${props.username.substring(0, 9)}...`;
  if (props) {
    return (
      <Fragment>
        <Redirect to={`/${props.username}/articles/${props.slug}`} />
        <div className="single-article-wrapper">
          <div className="article-header">
            <h1>{props.title}</h1>
          </div>
          <div className="bookmark-row">
            <div />
            <div>
              {props.bookmark
                ? <i className="fas fa-bookmark fa-3x bookmark-logo" onClick={props.deleteBookmark} />
                : <i className="far fa-bookmark fa-3x bookmark-logo" onClick={props.createBookmark} />
                }
            </div>
          </div>
          <div className="body-section">
            <div className="article-section">
              {props.body}
              <div className="bottom-details">
                <div>
                  {props.articleId && <ArticlesRating articleId={props.articleId} />}
                </div>
                <div className="ratings" />
                <div className="glow">
                  <Glow active handleGlow={() => {}} />
                  <span className="likesCount">{props.likesCount}</span>
                </div>
              </div>
              <div className="line" />
              <div className="col-md-12">
                {auth.isAuthenticated
                    && (!author ? (
                      <ModalButton label="Report Article" Class="btn-danger p-2 ph-25">
                        <ReportArticle articleId={props.articleId} />
                      </ModalButton>
                    ) : null)}
              </div>
            </div>
            <div className="user-section">
              <div className="user-profile">
                <img className="user-image" src={props.userImage} alt="user" />
                <br />
                <br />
                <a href={`/${props.username}`} className="user-link">
                  <h2>{username}</h2>
                </a>
                <br />
                <h4>{timeAgo.format(moment(props.time).valueOf())}</h4>
                <br />

                {auth.isAuthenticated
                    && (author ? (
                      <Link
                        to={`/update-articles/update?id=${props.articleId}`}
                        className="btn btn-secondary"
                      >
                        edit
                      </Link>
                    ) : (
                      <button className="btn follow-btn" type="submit">
                        follow
                      </button>
                    ))}
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
                <div className="tag-buttons">
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
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ReadSingleArticlePresentation);
