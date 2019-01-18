import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Cards.scss';
import Glow from '../buttons/glow/Glow.jsx';

const ArticleCard1 = (props) => {
  const {
    ArticleTitle,
    ArticleSnippet,
    ArticleImage,
    userImage,
    username,
    updatedTime,
  } = props;
  return (
    <Fragment>
      <div className="col-md-12 high articleCard1">
        <div className="card">
          <div className='row'>
            <div className='col-md-5 m-r-0'>
              <img className="" width="120" src={ArticleImage} alt="Card cap" />
            </div>
            <div className='col-md-7'>
              <h6 className="card-title">{ ArticleTitle }</h6>
              <p className="card-text fs-13 ">{ ArticleSnippet }</p>
              <div className='row card-buttom'>
                <div className='col-md-12'>
                  <span><img className="user-image" src={userImage} alt="user" /></span>
                  <p className="col-8 col-md-6 user-name" style={{ display: 'inline-block' }}>{ username }</p>
                  <i className="far fa-comment-alt comment"> 10</i>
                </div>
                <div className='col-md-12'>
                  <Glow active />
                  <span className='float-right fs-13 m-t-10 m-r-15'>{ updatedTime }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
};

const article = 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur';
const articleImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const userName = 'Henry Izontimi';
const userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';

ArticleCard1.defaultProps = {
  ArticleTitle: 'Lorem ipsum dolor',
  ArticleSnippet: article,
  userImage,
  ArticleImage: articleImage,
  username: userName,
  updatedTime: '5 mins read',
};


ArticleCard1.propTypes = {
  ArticleTitle: PropTypes.string,
  ArticleSnippet: PropTypes.string,
  ArticleImage: PropTypes.string,
  userImage: PropTypes.string,
  username: PropTypes.string,
  updatedTime: PropTypes.string,
};

export default ArticleCard1;
