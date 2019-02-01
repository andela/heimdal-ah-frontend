import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import ArticleCardHorizontal from '../ui/cards/ArticleCardHorizontal';
// import ArticleCard from '../ui/cards/ArticleCard/ArticleCard';
import Glow from '../ui/Buttons/glow/Glow';
import Rating from '../ui/Rating/Rating';
import ArticleCardHorizontal from '../ui/cards/ArticleCardHorizontal';
import ArticleTag from '../ui/Tags/ArticlesTag';

const HomePage = () => (
  <div className="col-md-12 p-5">
    <h2 className="text-center">Featured</h2>
    <div className="row p-3">
      <ArticleTag name="React" />
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3">
          <ArticleCardHorizontal
            articleTitle="An article Title"
            articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
            article="This is the article description"
            userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
            username="Henperi"
            updatedTime="15hrs ago"
            commentCount="120"
          />
        </div>
        <div className="col-md-3">
          <Fragment>
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
          </Fragment>
        </div>

        <div className="col-md-6 mt-4">
          <div className="row">
            <div className="col-md-6 mb-2">
              <div className="article-card">
                <div className="row">
                  <div className="col-md-5 m-0">
                    <div className="card-image-container mb-4">
                      <img
                        className="card-image"
                        src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                          Math.random() * 20,
                        )}`}
                        alt="Card"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 m-0">
                    <Link to="/henry/articles/slug" className="card-title-link">
                      <h5 className="card-title text-dark">This is the Title</h5>
                    </Link>
                    <p className="card-text">The article Body</p>
                    <div className="row mb-4">
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
                      <div className="col-6">
                        <i className="far fa-comment-alt comment float-right"> 5</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 glow-likes">
                        <Glow active handleGlow={() => {}} />
                        <span>60</span>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="comment float-right">2 mins read</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="article-card">
                <div className="row">
                  <div className="col-md-5 m-0">
                    <div className="card-image-container mb-4">
                      <img
                        className="card-image"
                        src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                          Math.random() * 20,
                        )}`}
                        alt="Card"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 m-0">
                    <Link to="/henry/articles/slug" className="card-title-link text-dark">
                      <h5 className="card-title">This is the Title</h5>
                    </Link>
                    <p className="card-text">The article Body</p>
                    <div className="row mb-4">
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
                      <div className="col-6">
                        <i className="far fa-comment-alt comment float-right"> 5</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 glow-likes">
                        <Glow active handleGlow={() => {}} />
                        <span>60</span>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="comment float-right">2 mins read</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="article-card">
                <div className="row">
                  <div className="col-md-5 m-0">
                    <div className="card-image-container mb-4">
                      <img
                        className="card-image"
                        src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                          Math.random() * 20,
                        )}`}
                        alt="Card"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 m-0">
                    <Link to="/henry/articles/slug" className="card-title-link">
                      <h5 className="card-title">This is the Title</h5>
                    </Link>
                    <p className="card-text">The article Body</p>
                    <div className="row mb-4">
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
                      <div className="col-6">
                        <i className="far fa-comment-alt comment float-right"> 5</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 glow-likes">
                        <Glow active handleGlow={() => {}} />
                        <span>60</span>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="comment float-right">2 mins read</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <div className="article-card">
                <div className="row">
                  <div className="col-md-5 m-0">
                    <div className="card-image-container mb-4">
                      <img
                        className="card-image"
                        src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                          Math.random() * 20,
                        )}`}
                        alt="Card"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 m-0">
                    <Link to="/henry/articles/slug" className="card-title-link text-dark">
                      <h5 className="card-title">This is the Title</h5>
                    </Link>
                    <p className="card-text">The article Body</p>
                    <div className="row mb-4">
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
                      <div className="col-6">
                        <i className="far fa-comment-alt comment float-right"> 5</i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 glow-likes">
                        <Glow active handleGlow={() => {}} />
                        <span>60</span>
                      </div>
                      <div className="col-6 mt-2">
                        <span className="comment float-right">2 mins read</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <Fragment>
            <div className="article-card">
              <div className="text-center mb-3">
                <span className="read-time mt-1">2 mins read</span>
                {
                  // props.tags && props.tags.length
                  <span className="tag btn btn-sm btn-secondary float-right">Food</span>
                }
              </div>
              <Link to="/henry/articles/slug" className="card-title-link">
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
          </Fragment>
        </div>
      </div>

      <div className="row p-3">
        <div className="col-md-10">
          <div className="row p-5">
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                  <div className="text-center mb-3">
                    <span className="read-time mt-1">2 mins read</span>
                    {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                  </div>
                  <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                  <div className="text-center mb-3">
                    <span className="read-time mt-1">2 mins read</span>
                    {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                  </div>
                  <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                  <div className="text-center mb-3">
                    <span className="read-time mt-1">2 mins read</span>
                    {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                  </div>
                  <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>

            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                  <div className="text-center mb-3">
                  <span className="read-time mt-1">2 mins read</span>
                  {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                </div>
                  <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                <div className="text-center mb-3">
                  <span className="read-time mt-1">2 mins read</span>
                  {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                </div>
                <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                <div className="text-center mb-3">
                  <span className="read-time mt-1">2 mins read</span>
                  {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
                </div>
                <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>

            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
                <div className="text-center mb-3">
                <span className="read-time mt-1">2 mins read</span>
                {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
              </div>
                <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
              <div className="text-center mb-3">
                <span className="read-time mt-1">2 mins read</span>
                {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
              </div>
              <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
            <div className="col-md-4">
              <Fragment>
                <div className="article-card">
              <div className="text-center mb-3">
                <span className="read-time mt-1">2 mins read</span>
                {<span className="tag btn btn-sm btn-secondary float-right">Food</span>}
              </div>
              <Link to="/henry/articles/slug" className="card-title-link">
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
              </Fragment>
            </div>
          </div>
        </div>
        <div className="col-md-2 pt-5">
          <div className="card p-3">
          <div className="tags mb-5">
            <span className="text-center h4">Tags</span>
            <hr />
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
            <Link to="/a" className="form-check text-dark pb-2">
              <label htmlFor="beauty" className="form-check-label">
                <input type="radio" className="form-check-input" name="optradio" />
                Beauty
              </label>
            </Link>
          </div>
          <div className="tags">
            <span className="text-center h4">Recent posts</span>
            <hr />
            <Link to="/a" className="text-dark pb-2 list-group-flush list-group-item">
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="img-fluid rounded-circle"
                    width="40"
                    src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                    alt="Card"
                  />
                  <span className="p-2">The fun in Andela and Beyond</span>
                </div>
              </div>
            </Link>
            <Link to="/a" className="text-dark pb-2 list-group-flush list-group-item">
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="img-fluid rounded-circle"
                    width="40"
                    src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                    alt="Card"
                  />
                  <span className="p-2">The fun in Andela and Beyond</span>
                </div>
              </div>
            </Link>
            <Link to="/a" className="text-dark pb-2 list-group-flush list-group-item">
              <div className="row">
                <div className="col-md-12">
                  <img
                    className="img-fluid rounded-circle"
                    width="40"
                    src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                    alt="Card"
                  />
                  <span className="p-2">The fun in Andela and Beyond</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 mb-2">
          <div className="article-card">
          <div className="row">
            <div className="col-md-5">
              <div className="card-image-container">
                <img
                  className="card-image img-fluid rounded"
                  src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                  alt="Card"
                />
              </div>
            </div>
            <div className="col-md-7 m-0">
              <Link to="/henry/articles/slug" className="card-title-link">
                <h5 className="card-title text-dark">This is the Title</h5>
              </Link>
              <p className="card-text">The article Body</p>
              <div className="row mb-4">
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
              </div>
              <div className="row">
                <div className="col-6 glow-likes">
                  <Glow active handleGlow={() => {}} />
                  <span>60</span>
                </div>
                <div className="col-6 mt-2">
                  <span className="comment float-right">2 mins read</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="article-card">
          <div className="row">
            <div className="col-md-5 m-0">
              <div className="card-image-container mb-4">
                <img
                  className="card-image"
                  src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                  alt="Card"
                />
              </div>
            </div>
            <div className="col-md-7 m-0">
              <Link to="/henry/articles/slug" className="card-title-link text-dark">
                <h5 className="card-title">This is the Title</h5>
              </Link>
              <p className="card-text">The article Body</p>
              <div className="row mb-4">
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
                <div className="col-6">
                  <i className="far fa-comment-alt comment float-right"> 5</i>
                </div>
              </div>
              <div className="row">
                <div className="col-6 glow-likes">
                  <Glow active handleGlow={() => {}} />
                  <span>60</span>
                </div>
                <div className="col-6 mt-2">
                  <span className="comment float-right">2 mins read</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="article-card">
          <div className="row">
            <div className="col-md-5 m-0">
              <div className="card-image-container mb-4">
                <img
                  className="card-image"
                  src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                  alt="Card"
                />
              </div>
            </div>
            <div className="col-md-7 m-0">
              <Link to="/henry/articles/slug" className="card-title-link">
                <h5 className="card-title">This is the Title</h5>
              </Link>
              <p className="card-text">The article Body</p>
              <div className="row mb-4">
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
                <div className="col-6">
                  <i className="far fa-comment-alt comment float-right"> 5</i>
                </div>
              </div>
              <div className="row">
                <div className="col-6 glow-likes">
                  <Glow active handleGlow={() => {}} />
                  <span>60</span>
                </div>
                <div className="col-6 mt-2">
                  <span className="comment float-right">2 mins read</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        </div>

        <div className="col-md-3 mb-2">
          <div className="article-card">
          <div className="row">
            <div className="col-md-5 m-0">
              <div className="card-image-container mb-4">
                <img
                  className="card-image"
                  src={`https://picsum.photos/1200/1300/?image=${Math.trunc(Math.random() * 20)}`}
                  alt="Card"
                />
              </div>
            </div>
            <div className="col-md-7 m-0">
              <Link to="/henry/articles/slug" className="card-title-link text-dark">
                <h5 className="card-title">This is the Title</h5>
              </Link>
              <p className="card-text">The article Body</p>
              <div className="row mb-4">
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
                <div className="col-6">
                  <i className="far fa-comment-alt comment float-right"> 5</i>
                </div>
              </div>
              <div className="row">
                <div className="col-6 glow-likes">
                  <Glow active handleGlow={() => {}} />
                  <span>60</span>
                </div>
                <div className="col-6 mt-2">
                  <span className="comment float-right">2 mins read</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
