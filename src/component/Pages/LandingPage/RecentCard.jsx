import React from 'react';
import { Link } from 'react-router-dom';
import Glow from '../../ui/Buttons/glow/Glow';

const RecentCard = props => (
  <div className="article-card mt-4">
    <div className="row">
      <div className="col-md-5 m-0">
        <div className="card-image-container-2">
          <img
            className="card-image img-fluid rounded-20"
            src={props.image || `https://picsum.photos/1200/1300/?image=${props.id}`}
            alt="Card"
          />
        </div>
      </div>
      <div className="col-md-7 m-0">
        <Link
          to={`/${props.user.profile.username}/articles/${props.slug}`}
          className="card-title-link"
        >
          <h5 className="card-title text-dark">{props.title}</h5>
        </Link>
        <p className="card-text card-text-2">{props.body}</p>
        <div className="row mb-1">
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
              <Link to="/username">{props.user.profile.username}</Link>
            </div>
          </div>
          <div className="col-6">
            <i className="far fa-comment-alt comment float-right">
              {' '}
              {props.comments.length}
            </i>
          </div>
        </div>
        <div className="row">
          <div className="col-6 glow-likes pt-1">
            <Glow active handleGlow={() => {}} />
            <span>{props.likes.length}</span>
          </div>
          <div className="col-6 mt-2">
            <span className="comment float-right text-right">{props.readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentCard;
