/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ReadSingleArticle.scss';
// import setToken from '../../../../config/setToken';
import { getArticleById, glow } from '../../../../actions/ArticleActions/getArticlesByIdActions';
import decodeToken from '../../../../utils/decodeToken';
import ReadSingleArticlePresentation from './ReadSingleArticlePresentation';
import getAllBookmarksAction from '../../../../actions/ArticleActions/bookmarksAction/getAllBookmarksAction';
import createBookmarkAction from '../../../../actions/ArticleActions/bookmarksAction/createBookmarkAction';
import deleteBookmarksActions from '../../../../actions/ArticleActions/bookmarksAction/deleteBookmarksActions';
import LoadingSpinner from '../../../ui/loadingSpinners/LoadingSpinner';


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
      bookmarks: false,
    };
  }

  /**
   * @description - component mounts method runs as soon as the page loads
   * * @description token - decode gets the user token from local storage
   * * @description  - decode gets the user token from local storage
   */
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.actions.getArticleById(slug);
    this.props.actions.getAllBookmarksAction();
  }

  /**
   * @description - Handles props being received
   * @param {string} nextProps - props being passed
   * @returns {component} update state
   */
  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps, singleArticle: nextProps.singleArticle });
    const bookmarks = nextProps.bookmark.payload.rows;
    const isBookmarked = bookmarks && bookmarks.some(item => item.article.id === this.state.singleArticle.id);

    if (isBookmarked) {
      this.setState({ bookmarks: true });
    }
  }

  createBookmark = () => {
    this.props.actions.createBookmarkAction(this.state.singleArticle.id, this.toggleBookmark);
  }

  deleteBookmark = () => {
    this.props.actions.deleteBookmarksActions(this.state.singleArticle.id, this.toggleBookmark);
  }

  toggleBookmark = () => {
    this.setState((prevState => ({ bookmarks: !prevState.bookmarks })));
  }


  /**
   *@description checkuser id
   */
  checkUserId = (likes, userId) => likes && likes.some(item => item.userId === userId);

  handleGlow = () => {
    if (this.props.userId) {
      this.props.actions.glow(this.state.singleArticle.id, this.props.userId);
    }
  };

  /**
   * @description - render single article page
   * @param {props} status - the status returned from dispatching actions
   * @returns {component} the render component
   */
  render() {
    if (this.props.singleArticle) {
      const author = decodeToken(this.state.singleArticle.userId);
      const likesCount = this.state.singleArticle.likes && this.state.singleArticle.likes.length;
      const { user = {} } = this.state.singleArticle;
      const { profile = {} } = user;
      const { slug } = this.props.match.params;
      const { status } = this.props;
      const { likes } = this.state.singleArticle && this.state.singleArticle;

      const active = this.checkUserId(likes, this.props.userId);

      return (
        <Fragment>
          { status === 'ERROR' ? <Redirect to={`/articles/${slug}`} />
            : (
              <Fragment>
                <ReadSingleArticlePresentation
                  createBookmark={this.createBookmark}
                  deleteBookmark={this.deleteBookmark}
                  bookmark={this.state.bookmarks}
                  slug={slug}
                  author={author}
                  readingTime={this.state.singleArticle.readingTime}
                  articleId={this.state.singleArticle.id}
                  title={this.state.singleArticle.title}
                  body={this.state.singleArticle.body}
                  description={this.state.singleArticle.description}
                  username={profile.username}
                  time={this.state.singleArticle.createdAt}
                  likesCount={likesCount}
                  userImage={profile.image}
                  active={active}
                  handleGlow={this.handleGlow}
                />
              </Fragment>
            )
          }
        </Fragment>
      );
    }
    return <LoadingSpinner />;
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
  bookmark: state.getallbookmarks,
  deleteBookmarks: state.deleteBookmarks,
  createBookmarks: state.createbookmarks,
  userId: state.auth.user.userId,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticleById,
      getAllBookmarksAction,
      createBookmarkAction,
      deleteBookmarksActions,
      glow,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToprops,
  mapDispatchToProps,
)(ReadSingleArticle);
