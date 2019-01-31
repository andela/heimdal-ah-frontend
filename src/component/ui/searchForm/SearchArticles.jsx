/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import searchArticleByAuthor from '../../../actions/SearchArticles/searchArticlesByAuthorActions';
import searchArticleByTitle from '../../../actions/SearchArticles/searchArticlesByTitleActions';
import searchArticleByTags from '../../../actions/SearchArticles/searchArticlesByTagsActions';
import './SearchArticles.scss';

/**
* @description - Helps search for an artile
* @param {props}  articlesByAuthorStatus - the status returned from dispatching
searchArticleByAuthor action
* @param {props}  searchArticleByTitle - the status returned from dispatching
searchArticleByTitle action
* @param {props}  searchArticleByTags - the status returned from dispatching
searchArticleByTags action
* @param {props} articlesByAuthor - the article returned based on author parameter
* @param {props} articlesByTitle - the article returned based on title parameter
* @param {props} articlesByTags - the article returned based on tag parameter
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
 * @description - Handles the form change event by calling search actions
 * @param {event} e - the event passed to the method
 * @returns {component} null
 */
  onHandleChange(e) {
    const stateChanged = new Promise((resolve) => {
      resolve(this.setState({
        [e.target.name]: e.target.value,
      }));
    });
    stateChanged.then(() => {
      this.props.actions(debounce(searchArticleByAuthor(this.state.query || new URLSearchParams(window.location.search).get('query'), this.props.offset, this.props.size), 500));
      this.props.actions(debounce(searchArticleByTitle(this.state.query || new URLSearchParams(window.location.search).get('query'), this.props.offset, this.props.size), 500));
      this.props.actions(debounce(searchArticleByTags(this.state.query || new URLSearchParams(window.location.search).get('query'), this.props.offset, this.props.size), 500));
    });
  }

  /**
 * @description - Handles the key press event by calling toggling the input field
 */
  onKeyPress() {
    const { displayInput } = this.state;
    this.setState({ displayInput: !displayInput });
  }

  /**
 * @description - Handles the click event by calling toggling the input field
 */
  onButtonClick() {
    const { displayInput } = this.state;
    this.setState({ displayInput: !displayInput });
  }

  /**
* @description - Handles the rendering of the component
* @returns {component} the rendered component
*/
  render() {
    const { displayInput, query } = this.state;
    const {
      articlesByAuthorStatus,
      articlesByTitleStatus,
      articlesByTagsStatus,
      articlesByAuthor,
      articlesByTitle,
      articlesByTags,
      realTime,
    } = this.props;
    return this.props.children({
      onHandleChange: this.onHandleChange,
      onButtonClick: this.onButtonClick,
      onKeypress: this.onKeyPress,
      articlesByAuthorStatus,
      articlesByTitleStatus,
      articlesByTagsStatus,
      state: this.state,
      articlesByAuthor,
      articlesByTitle,
      articlesByTags,
      displayInput,
      realTime,
      query,
      
    });
  }
}

const mapStateToProps = state => ({
  articlesByAuthorStatus: state.searcharticlesbyauthor.status,
  articlesByTitleStatus: state.searcharticlesbytitle.status,
  articlesByTagsStatus: state.searcharticlesbytags.status,
  articlesByAuthor: state.searcharticlesbyauthor.payload,
  articlesByTitle: state.searcharticlesbytitle.payload,
  articlesByTags: state.searcharticlesbytags.payload,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchArticles);
