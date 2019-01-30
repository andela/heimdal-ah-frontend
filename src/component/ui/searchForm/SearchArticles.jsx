/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchArticleByAuthor from '../../../actions/SearchArticles/searchArticlesByAuthorActions';
import searchArticleByTitle from '../../../actions/SearchArticles/searchArticlesByTitleActions';
import searchArticleByTags from '../../../actions/SearchArticles/earchArticlesByTagsActions';
import './SearchArticles.scss';
// import Alert from '../Alert/Alert';

/**
* @description - Helps a user rate an article
* @param {props} status - the status returned from dispatching articleRating action
* @param {props} star - the star rating given by a user to the article
* @param {props} getratingstatus - the status returned from dispatching getArticleRating action
* @param {props} ratings - average rating for the article
* @returns {component} Component
*/
export class SearchArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: false,
      query: null,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.searchPopUp = React.createRef();
  }

  /**
* @description - Handles the initial component mounting and calls getArticleRating action
*/
  // componentDidMount() {
  //   const articleId = localStorage.getItem('articleId');
  //   this.props.actions(getArticleRating(Number(articleId)));
  // }

  /**
* @description - Handles the submission of the rating by calling articleRating action
* @param {number} stars - the star rating of the article, supplied by user
*/
  // onHandleSubmit(stars) {
  //   // Might change based on where the article id is  gotten from
  //   const articleId = localStorage.getItem('articleId');
  //   // eslint-disable-next-line react/destructuring-assignment
  //   this.props.actions(articleRating(stars, articleId));
  // }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    setTimeout(() => {
      if (this.state.query !== null) {
        this.props.actions(searchArticleByAuthor(this.state.query));
        this.props.actions(searchArticleByTitle(this.state.query));
        this.props.actions(searchArticleByTags(this.state.query));
      }
    }, 1);
    // this.props.actions(getArticlesByAuthoor(query));
    // this.props.actions(getArticlesByTags(query));
  }

  onKeyPress() {
    this.setState({ displayInput: true });
  }

  onButtonClick() {
    this.setState({ displayInput: true });
  }

  /**
* @description - Handles the rendering of the component
* @returns {component} the rendered component
*/
  render() {
    const { displayInput, query } = this.state;
    const {
      articlesByAuthorStatus,
      articlesByAuthor,
      articlesByTitle,
      articlesByTitleStatus,
      articlesByTagsStatus,
      articlesByTags,
    } = this.props;
    return this.props.children({
      displayInput,
      query,
      onKeypress: this.onKeyPress,
      onButtonClick: this.onButtonClick,
      state: this.state,
      articlesByAuthorStatus,
      articlesByAuthor,
      articlesByTitle,
      articlesByTitleStatus,
      articlesByTagsStatus,
      articlesByTags,
      onHandleChange: this.onHandleChange,
    });
  }
}

const mapStateToProps = state => ({
  articlesByAuthorStatus: state.searcharticlesbyauthor.status,
  articlesByAuthor: state.searcharticlesbyauthor.payload,
  articlesByTitle: state.searcharticlesbytitle.payload,
  articlesByTitleStatus: state.searcharticlesbytitle.status,
  articlesByTagsStatus: state.searcharticlesbytags.status,
  articlesByTags: state.searcharticlesbytags.payload,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchArticles);
