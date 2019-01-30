/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ReadSingleArticle.scss';
// import setToken from '../../../../config/setToken';
import getArticleById from '../../../../actions/articleActions/getArticlesByIdActions';
import decodeToken from '../../../../utils/decodeToken';
import ReadSingleArticlePresentation from './ReadSingleArticlePresentation';


/**
 * @description - Read a single article posted by a user
 * @param {props} singleArticle - the status state object that contains all details about the article
 */
export class ReadSingleArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleArticle: {
        title: '',
        id: '',
        userId: '',
        slug: '',
        body: '',
        likes: [],
        tags: [],
        user: {},
      },
    };
    this.editButton = React.createRef();
    this.followButton = React.createRef();
  }


  /**
 * @description - component mounts method runs as soon as the page loads
 * * @description token - decode gets the user token from local storage
 * * @description  - decode gets the user token from local storage
 */
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.actions.getArticleById(slug);
  }

  /**
 * @description - Handles props being received
 * @param {string} nextProps - props being passed
 * @returns {component} update state
 */
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps, singleArticle: nextProps.singleArticle });
  }

  /**
 * @description - render single article page
 * @param {props} status - the status returned from dispatching actions
 * @returns {component} the render component
 */
  render() {
    const author = decodeToken(this.state.singleArticle.userId);
    const likesCount = this.state.singleArticle.likes && this.state.singleArticle.likes.length;
    const { user = {} } = this.state.singleArticle;
    const { profile = {} } = user;
    localStorage.setItem('articleId', this.state.singleArticle.id);
    const { slug } = this.props.match.params;
    const { status } = this.props;


    return (
      <Fragment>
        { status === 'ERROR' ? <Redirect to={`/articles/${slug}`} />
          : (
            <Fragment>
              <ReadSingleArticlePresentation
                slug={slug}
                author={author}
                articleId={this.state.singleArticle.id}
                title={this.state.singleArticle.title}
                body={this.state.singleArticle.body}
                username={profile.username}
                time={this.state.singleArticle.createdAt}
                likesCount={likesCount}
                userImage={profile.image}
              />
            </Fragment>
          )
        }
      </Fragment>
    );
  }
}

ReadSingleArticlePresentation.defaultProps = {
  username: '@username',
};


ReadSingleArticlePresentation.propTypes = {
  username: PropTypes.string,
};

const mapStateToprops = state => ({
  singleArticle: state.getArticlesById.payload,
  status: state.getArticlesById.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticleById,
    },
    dispatch,
  ),
});

export default connect(mapStateToprops, mapDispatchToProps)(ReadSingleArticle);
