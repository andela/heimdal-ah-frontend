import React from 'react';
import { range } from 'lodash';
import Button from '../../ui/Buttons/Button';
import ArticleCard from '../../ui/cards/ArticleCard/ArticleCard';
import ProfileContainer from '../../../container/Profile/ProfileContainer';
import ArticleLoader from '../../ui/ContentLoaders/ArticleLoader';
import ProfileInfoLoader from '../../ui/ContentLoaders/ProfileInfoLoader';
import ProfilePictureLoader from '../../ui/ContentLoaders/ProfilePictureLoader';
import './profile.scss';

/**
 * @description
 * @param {object} profile - profile object
 * @param {Array} articles - articles array
 * @returns {object} - react component
 */
const getUserArticles = (profile, articles) => {
  if (Object.keys(profile).length) {
    return (
      <div className="publication-cards">
        { articles
          ? articles.map(article => <ArticleCard key={article.id} {...article} />)
          : <p className="no-publication">No publications yet</p>
        }
      </div>
    );
  }

  return (
    <div className="publication-cards">
      { range(6).map(value => <ArticleLoader key={value} />) }
    </div>
  );
};

/**
 * @description
 * @param {object} profile - profile object
 * @returns {object} - react component
 */
const getUserImage = (profile) => {
  if (Object.keys(profile).length) {
    return (
      <img
        className="img-fluid img-thumbnail profile-image"
        src={profile.image || 'https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig'}
        alt="profile"
      />
    );
  }
  return <ProfilePictureLoader className="img-fluid img-thumbnail profile-image-loading" />;
};

/**
 * @description
 * @param {object} profile - profile object
 * @param {Function} onClick - on click function
 * @param {string} username - logged in user
 * @returns {object} - react component
 */
const getUserInfo = (profile, onClick, user) => {
  if (Object.keys(profile).length) {
    return (
      <div>
        <h3 className="profile-name">
          {`${profile.firstName || ''} ${profile.lastName || ''}`}
        </h3>
        <p>{profile.location || ''}</p>
        <p className="profile-addtionals">
          <span className="profile-addtionals-info">
            { profile.followers && profile.followers.length }
            {' '}
            Followers
          </span>
          <span className="profile-addtionals-info">
            { profile.followed && profile.followed.length }
            {' '}
            Following
          </span>
        </p>
        {
          profile.username === user.username
            ? <Button label='Edit' type='edit-profile' onClick={onClick} />
            : (
              <Button
                label={profile.followers && profile.followers.some(item => item.followerId === user.userId) ? 'unfollow' : 'follow'}
                type="follow"
                onClick={onClick}
              />
            )
        }
      </div>
    );
  }

  return <ProfileInfoLoader className="profile-info-loading" />;
};

/**
 * @description
 * @param {object} props - react props
 * @returns {object} - react component
 */
const getProfileView = (props) => {
  const {
    articles,
    profile,
    onClick,
    loggedInUser,
    error,
  } = props;

  return (
    error
      ? <div className="display-4 text-center p-5">{error}</div>
      : (
        <div className="profile">
          <div className="row profile-header">
            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 profile-image-container">
              { getUserImage(profile) }
            </div>
            <div className="col-8 mt-2">
              { getUserInfo(profile, onClick, loggedInUser) }
            </div>
          </div>

          <div className="row biography">
            <div className="col-md-12 col-lg-9">
              <h4 className="biography-label">Biography</h4>
              <p>{ profile.biodata || 'Not Available'}</p>
            </div>
          </div>

          <hr />

          <div className="publications">
            <h3>publications</h3>
            { getUserArticles(profile, articles) }
          </div>
        </div>
      )
  );
};

/**
 * @description
 * @param {object} props - react props
 * @returns {object} - react component
 */
const Profile = (props) => {
  const { username } = props.match.params;
  return (
    <ProfileContainer username={username}>
      {
        data => getProfileView(data)
      }
    </ProfileContainer>
  );
};

export default Profile;
