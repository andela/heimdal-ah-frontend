import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TimeAgo from 'javascript-time-ago';
import english from 'javascript-time-ago/locale/en';
import Glow from '../../Buttons/glow/Glow';
import Rating from '../../Rating/Rating';
import './articleCard.scss';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/** @description Card for Articles
 * @param {object} props - article
 * @return {object} react component
 */
const ArticleCard = props => (
  <Fragment>
    <div className="article-card">
      <div className="text-center mb-3">
        <span className="read-time mt-1">{props.readingTime}</span>
        {props.tags && props.tags.length ? (
          <span className="tag btn btn-sm btn-secondary float-right">{props.tags[0].tagName}</span>
        ) : (
          ''
        )}
      </div>
      <Link
        to={`/${props.user.profile.username}/articles/${props.slug}`}
        className="card-title-link"
      >
        <h5 className="card-title text-center">{props.title}</h5>
      </Link>
      <div className="card-image-container">
        <img
          className="card-image"
          src={props.image || `https://picsum.photos/1200/1300/?image=${props.id}`}
          alt="Card"
        />
      </div>
      <p className="card-text">{props.body}</p>
      <div className="row mb-2">
        <div className="col-6">
          <img
            className="user-image float-left"
            src={
              props.user.profile.image
              || 'https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig'
            }
            alt="user"
          />
          <div className="user-name pl-1">
            <Link to={`/${props.user.profile.username}`}>{props.user.profile.username}</Link>
          </div>
        </div>
        <div className="col-6 mt-2">
          <i className="far fa-clock updated-time float-right">
            {' '}
            {timeAgo.format(moment(props.createdAt).valueOf())}
          </i>
        </div>
      </div>
      <div className="row">
        <div className="col-6 glow-likes">
          <Glow active={false} handleGlow={() => {}} />
          <span>{props.likes.length}</span>
        </div>
        <div className="col-6 mt-2">
          <i className="far fa-comment-alt comment float-right">
            {' '}
            {props.comments.length}
          </i>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center ratings">
          <Rating />
        </div>
      </div>
    </div>
  </Fragment>
);

export default ArticleCard;
