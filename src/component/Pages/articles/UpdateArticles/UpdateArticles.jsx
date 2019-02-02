import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toastr as feedback } from 'react-redux-toastr';
import setToken from '../../../../config/setToken';
import './UpdateArticles.scss';
import updateArticles from '../../../../actions/ArticleActions/updateArticlesActions';
import { getArticleById } from '../../../../actions/ArticleActions/getArticlesByIdActions';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

/**
 * @description - Helps a user updates his articles
 * @param {props} updateArticlesStatus - the status returned from dispatching updateArticles action
 * @param {props} title - the article title returned from dispatching getArticlesById action
 * @param {props} body - the article body returned from dispatching getArticlesById action
 * @param {props} updateArticles - the action been dispatched
 * @param {props} getArticlesById - the action been dispatched
 * @returns {component} Component
 */
export class UpdateArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedTitle: '',
      updatedText: '',
    };
    this.onHandleText = this.onHandleText.bind(this);
    this.onHandleTitle = this.onHandleTitle.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  /**
 * @description - Handles the initial component rendering by dispatching getArticleById action
 * @returns {component} the initial rendered component
 */
  componentDidMount() {
    const identifier = new URLSearchParams(window.location.search).get('id');
    const token = localStorage.getItem('access-token');
    setToken(token);
    this.props.actions(getArticleById(identifier));
  }

  /**
 * @description - Handles the form submit by calling updateArticles action
 * @param {event} e - the event passed to the method
 * @returns {component} null
 */
  onHandleSubmit(e) {
    e.preventDefault();
    const identifier = new URLSearchParams(window.location.search).get('id');
    const token = localStorage.getItem('access-token');
    setToken(token);
    const { updatedTitle, updatedText } = this.state;
    if ((!updatedTitle && !updatedText)) {
      feedback.warning('Article unchanged', 'You did not update the article');
    } else if (updatedText && !updatedTitle) {
      const description = this.props.title.substring(0, 100);
      this.props.actions(updateArticles(this.props.title, updatedText, description, identifier));
    } else if (updatedText && updatedTitle) {
      const description = updatedTitle.substring(0, 100);
      this.props.actions(updateArticles(updatedTitle, updatedText, description, identifier));
    } else if (updatedTitle && !updatedText) {
      const description = updatedTitle.substring(0, 100);
      this.props.actions(updateArticles(updatedTitle, this.props.body, description, identifier));
    }
  }

  /**
 * @description - Handles the Editor body input change
 * @param {string} text - the text passed to the method
 * @returns {component} updated body state
 */
  onHandleText(text) {
    this.setState({ updatedText: text });
  }

  /**
 * @description - Handles the Editor title input change
 * @param {string} text - the text passed to the method
 * @returns {component} updated title state
 */
  onHandleTitle(text) {
    this.setState({ updatedTitle: text });
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    const { updatedText, updatedTitle } = this.state;
    const { updateArticlesStatus, title, body } = this.props;
    return this.props.children({
      updatedText,
      updatedTitle,
      title,
      body,
      updateArticlesStatus,
      onHandleSubmit: this.onHandleSubmit,
      onHandleText: this.onHandleText,
      onHandleTitle: this.onHandleTitle,
    });
  }
}

UpdateArticles.defaultProps = {
  title: 'Article Title',
  body: 'Article Body',
};

UpdateArticles.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  updateArticlesStatus: PropTypes.string.isRequired,
};

const mapStateToprops = state => ({
  title: state.getArticlesById.payload.title,
  body: state.getArticlesById.payload.body,
  updateArticlesStatus: state.updateArticles.status,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToprops, mapDispatchToProps)(UpdateArticles);
