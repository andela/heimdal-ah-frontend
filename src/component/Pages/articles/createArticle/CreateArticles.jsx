import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import Alert from '../../../ui/Alert/Alert';
import Button from '../../../ui/Buttons/Button';
import checkArticleDetails from '../../../../utils/createArticle';
import './CreateArticle.scss';
import { createArticleAction } from '../../../../actions/ArticleActions/CreateArticle/createArticleActions';

/**
 * @description - Creates article for a user
 * @param {props} updateArticlesStatus - the status returned from dispatching updateArticles action
 * @param {props} title - the article title
 * @param {props} body - the article body
 * @param {props} discription- description of article
 */
class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      description: '',
      alert: '',
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.articleHandleChange = this.articleHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
  }

  /**
   * @description - onHandleSubmit method
   */
  onHandleSubmit(e) {
    e.preventDefault();
    const { title, body, description } = this.state;
    const articleDetails = {
      title: title.substring(0, 100),
      body: body.substring(0, 10000),
      description: description || body.substring(0, 100),
    };

    if (body.split('').length > 10000 || title.split('').length > 120 || description.split('').length > 400) {
      this.setState({ alert: 'FAILED' });
      return setInterval(() => {
        this.setState({ alert: '' });
      }, 1000);
    }

    const isEmpty = checkArticleDetails(articleDetails);
    if (!isEmpty) {
      return this.props.actions.createArticleAction(articleDetails);
    }

    this.setState({ alert: 'FAILURE' });
    return setInterval(() => {
      this.setState({ alert: '' });
    }, 1000);
  }

  /**
   * @description - articleHandleChange for body state method
   */
  articleHandleChange(body) {
    this.setState({ body });
  }

  /**
   * @description - articleHandleChange for body state method
   */
  titleHandleChange(title) {
    this.setState({ title });
  }

  /**
   * @description - articleHandleChange for body state method
   */
  descriptionHandleChange(description) {
    this.setState({ description });
  }

  /**
   * @description - render the editors
   * @param {props} status - the status returned from dispatching actions
   * @returns {component} Component
   */
  render() {
    const { status } = this.props;
    const { alert } = this.state;

    return (
      <Fragment>
        {status === 'SUCCESS' && (<Alert type="success" title="Article was posted" message="your Article was published successfully" />) && <Redirect to={`/@username/articles/${this.props.payload.slug}`} />}
        {alert === 'FAILURE' && (<Alert type="warning" title="All fields should be filled" message="Error : Article was not posted" />)}
        {alert === 'FAILED' && (<Alert type="warning" title="Exceeded max Character in text feilds" message="Error : Article was not posted" />)}
        {status === 'FAILURE' && (<Alert type="warning" title="user should be logged in" message="please log-in" />)}
        <Button
          type="article"
          label="Post Article"
          Class="update-articles __button"
          onClick={e => this.onHandleSubmit(e)}
        />
        <div className="create-article-container">
          <br />
          <div className="create-articles __title">
            <Editor
              tag="pre"
              data-placeholder="Type your title...."
              text={this.state.title}
              onChange={this.titleHandleChange}
              options={{
                toolbar: {
                  buttons: [
                    'bold',
                    'italic',
                    'underline',
                    'anchor',
                    'h2',
                    'h3',
                    'quote',
                    'html',
                    'strikethrough',
                    'subscript',
                    'superscript',
                  ],
                },
              }}
            />
          </div>
          <div className="create-articles __text">
            <Editor
              tag="pre"
              data-placeholder="Type your decription...."
              text={this.state.description}
              onChange={this.descriptionHandleChange}
              options={{
                toolbar: {
                  buttons: [
                    'bold',
                    'italic',
                    'underline',
                    'anchor',
                    'h2',
                    'h3',
                    'quote',
                    'html',
                    'strikethrough',
                    'subscript',
                    'superscript',
                  ],
                },
              }}
            />
          </div>
          <div className="create-articles __text">
            <Editor
              tag="pre"
              data-placeholder="Type your article...."
              text={this.state.body}
              onChange={this.articleHandleChange}
              options={{
                toolbar: {
                  buttons: [
                    'bold',
                    'italic',
                    'underline',
                    'anchor',
                    'h2',
                    'h3',
                    'quote',
                    'html',
                    'strikethrough',
                    'subscript',
                    'superscript',
                  ],
                },
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  title: state.title,
  body: state.body,
  description: state.description,
  status: state.createArticleReducer.status,
  payload: state.createArticleReducer.payload,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createArticleAction,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToprops,
  mapDispatchToProps,
)(CreateArticle);
