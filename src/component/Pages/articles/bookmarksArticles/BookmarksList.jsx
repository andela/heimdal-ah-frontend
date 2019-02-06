/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BookmarksCard from '../../../ui/cards/BookmarksCards';
import getAllBookmarksActions from '../../../../actions/ArticleActions/bookmarksAction/getAllBookmarksAction';

const propTypes = {};

const defaultProps = {};

 /**
 * @description - BookmarksList- List all avaliable bookmark by a user
 */
export class BookmarksList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
 * @description - ComponentDidmount call the getAllBookmarks action
 */
  componentDidMount() {
    this.props.actions.getAllBookmarksActions();
  }

  render() {
    if (this.props.bookmarks && this.props.bookmarks.length > 0) {
      return (
        <Fragment>
          {this.props.bookmarks.map(bookmark => (
            <BookmarksCard
              slug={bookmark.article.slug}
              article={bookmark.article.body}
              articleTitle={bookmark.article.title}
              username={bookmark.article.user.profile.username}
              userImage={bookmark.article.user.profile.image}
            />
          ))}
          <br />
        </Fragment>
      );
    }
    return (
      <Fragment>
        <h1> No bookmarks found </h1>
      </Fragment>
    );
  }
}
const mapStateToprops = state => ({
  username: state.getallbookmarks.payload,
  userImage: state.getallbookmarks.payload,
  bookmarks: state.getallbookmarks.payload.rows,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getAllBookmarksActions,
    },
    dispatch,
  ),
});

BookmarksList.propTypes = propTypes;
BookmarksList.defaultProps = defaultProps;

export default connect(mapStateToprops, mapDispatchToProps)(BookmarksList);
