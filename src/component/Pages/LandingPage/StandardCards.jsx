import React from 'react';
import { Link } from 'react-router-dom';
import Glow from '../../ui/Buttons/glow/Glow';
import Rating from '../../ui/Rating/Rating';

const StanadardCard = () => (
  <div className="article-card">
    <div className="text-center mb-3">
      <span className="read-time mt-1">2 mins read</span>
      {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
    </div>
    <Link to="/henry/articles/slug" className="card-title-link text-dark">
      <h5 className="card-title text-center">This is the Title</h5>
    </Link>
    <div className="card-image-container">
      <img
        className="card-image"
        src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
        alt="Card"
      />
    </div>
    <p className="card-text">The article Body</p>
    <div className="row mb-2">
      <div className="col-6">
        <img
          className="user-image float-left"
          src="https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig"
          alt="user"
        />
        <div className="user-name pl-1">
          <Link to="/username">username</Link>
        </div>
      </div>
      <div className="col-6 mt-2">
        <i className="far fa-clock updated-time float-right"> 2 days ago</i>
      </div>
    </div>
    <div className="row">
      <div className="col-6 glow-likes">
        <Glow active handleGlow={() => {}} />
        <span>60 likes</span>
      </div>
      <div className="col-6 mt-2">
        <i className="far fa-comment-alt comment float-right"> 5 comments</i>
      </div>
    </div>
    <div className="row">
      <div className="col-12 text-center ratings">
        <Rating />
      </div>
    </div>
    <hr />
  </div>
);

export default StanadardCard;
