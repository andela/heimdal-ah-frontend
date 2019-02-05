/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ReadSingleArticle.scss';
// import setToken from '../../../../config/setToken';
import getArticleById from '../../../../actions/ArticleActions/getArticlesByIdActions';
import decodeToken from '../../../../utils/decodeToken';
import ReadSingleArticlePresentation from './ReadSingleArticlePresentation';
import getAllBookmarksAction from '../../../../actions/ArticleActions/bookmarksAction/getAllBookmarksAction';
import createBookmarkAction from '../../../../actions/ArticleActions/bookmarksAction/createBookmarkAction';
import deleteBookmarksActions from '../../../../actions/ArticleActions/bookmarksAction/deleteBookmarksActions';


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
    // const bookmarks = this.props.bookmark.payload.rows;

    // const isBookmarked = bookmarks && bookmarks.some(item => item.article.id === this.state.singleArticle.id);

    // if (isBookmarked) {
    //   this.setState({ bookmarks: true });
    // }
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
    this.setState({ bookmarks: true });
    this.props.actions.createBookmarkAction(this.state.singleArticle.id);
  }

  deleteBookmark = () => {
    this.setState({ bookmarks: false });
    this.props.actions.deleteBookmarksActions(this.state.singleArticle.id);
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
    const { slug } = this.props.match.params;
    const { status } = this.props;
    
    // const bookmarks = this.props.bookmark.payload.rows;

    // const isBookmarked = bookmarks && bookmarks.some(item => item.article.id === this.state.singleArticle.id);

    // // if (isBookmarked) {
    // //   this.setState({ bookmarks: true });
    // // }

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
  bookmark: state.getallbookmarks,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticleById,
      getAllBookmarksAction,
      createBookmarkAction,
      deleteBookmarksActions,
    },
    dispatch,
  ),
});

export default connect(mapStateToprops, mapDispatchToProps)(ReadSingleArticle);
