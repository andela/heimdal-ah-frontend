import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
import Glow from '../buttons/glow/Glow.jsx';

const ArticleCard1 = (props) => {
  const articleText = props.article.length > 100 ? `${props.article.substring(0, 100).trim()}...` : props.article;
  const userName = props.username.length > 12 ? `${props.username.substring(0, 12).trim()}...` : props.username;
  return (
    <Fragment>
      <div className="col-md-12 high articleCard1">
        <div className="card">
          <div className='row'>
            <div className='col-md-5 m-r-0'>
              <img className="" width="120" src={props.articleImage} alt="Card cap" />
            </div>
            <div className='col-md-7'>
              <h6 className="card-title">{ props.articleTitle }</h6>
              <p className="card-text fs-13 ">{ articleText }</p>
              <div className='row card-buttom'>
                <div className='text-right'>
                  <span className='col-md-8'>
                    <img className="user-image" src={props.userImage} alt="user" />
                    <span className="user-name">{ userName }</span>
                  </span>
                  <span className='col-md-4 text-right'>
                    <i className="far fa-comment-alt comment text-right"> 10</i>
                  </span>
                </div>
                <div className='col-md-12'>
                  <Glow active handleGlow={() => {}} />
                  <span className='float-right fs-13 m-t-10 m-r-15'>{ props.updatedTime }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const article = 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur';
const articleImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const userName = 'Henry';
const userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const title = 'Lorem ipsum dolor';

ArticleCard1.defaultProps = {
  articleTitle: title,
  article,
  userImage,
  articleImage,
  username: userName,
  updatedTime: '5 mins read',
};


ArticleCard1.propTypes = {
  articleTitle: PropTypes.string,
  article: PropTypes.string,
  articleImage: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
};

export default ArticleCard1;
