import React from 'react';
import { range } from 'lodash';
import './profile.scss';
import Button from '../../ui/buttons/Button';
import ArticleCard from '../../ui/cards/ArticleCard/ArticleCard';
import ProfileContainer from '../../../container/Profile/ProfileContainer';
import ArticleLoader from '../../ui/ContentLoaders/ArticleLoader';
import ProfileInfoLoader from '../../ui/ContentLoaders/ProfileInfoLoader';
import ProfilePictureLoader from '../../ui/ContentLoaders/ProfilePictureLoader';

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

const getUserImage = (profile) => {
  if (Object.keys(profile).length) {
    return (
      <img
        className="img-fluid img-thumbnail"
        src={profile.image || 'https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig'}
        alt="profile"
      />
    );
  }
  return <ProfilePictureLoader className="img-fluid img-thumbnail profile-image-loading" />;
};

const getUserInfo = (profile, username, onClick) => {
  if (Object.keys(profile).length) {
    return (
      <div>
        <h3>
          {`${profile.firstName || ''} ${profile.lastName || ''}`}
        </h3>
        <p>{profile.location || ''}</p>
        <p className="dist">
          <span>
            { profile.followers && profile.followers.length }
            {' '}
            Followers
          </span>
          <span>
            { profile.followed && profile.followed.length }
            {' '}
            Following
          </span>
        </p>
        {
          username
            ? <Button label='Follow' type='follow' onClick={onClick} />
            : <Button label='Edit' type='edit-profile' onClick={onClick} disabled />
        }
      </div>
    );
  }

  return <ProfileInfoLoader className="profile-info-loading" />;
};

const valueFunction = ({ articles, profile, onClick }, username) => (
  <div className="profile">
    <div className="row profile-header">
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 profile-image">
        { getUserImage(profile) }
      </div>
      <div className="col-8 mt-2">
        { getUserInfo(profile, username, onClick) }
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
);

/**
 * @description
 * @param {object} props -
 * @returns {object}
 */
const Profile = (props) => {
  const { username } = props.match.params;
  return (
    <ProfileContainer username={username}>
      {
        data => valueFunction(data, username)
      }
    </ProfileContainer>
  );
};

export default Profile;
