import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toastr as feedback } from 'react-redux-toastr';
import Editor from 'react-medium-editor';
import Button from '../../../ui/Buttons/Button';
import Alert from '../../../ui/Alert/Alert';
import './UpdateArticles.scss';
import updateArticles from '../../../../actions/articleActions/updateArticlesActions';
import getArticleById from '../../../../actions/articleActions/getArticlesByIdActions';
import checkAuthentication from '../../../../utils/checkAuthentication';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');


class UpdateArticles extends Component {
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

  componentDidMount() {
    const identifier = new URLSearchParams(window.location.search).get('id');
    const token = localStorage.getItem('access-token');
    this.props.actions(getArticleById(identifier, token));
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const identifier = new URLSearchParams(window.location.search).get('id');
    const { updatedTitle, updatedText } = this.state;
    if (!updatedTitle && !updatedText) {
      feedback.warning('Article unchanged', 'You did not edit the article');
    } else {
      const description = updatedTitle.substring(0, 100);
      this.props.actions(updateArticles(updatedTitle, updatedText, description, identifier));
    }
  }

  onHandleText(text) {
    this.setState({ updatedText: text });
    console.log(this.state.updatedText);
  }

  onHandleTitle(text) {
    this.setState({ updatedTitle: text });
    console.log(this.state.updatedTitle);
  }

  render() {
    // const { title, body } = this.props;
    return (
      <Fragment>
        {checkAuthentication()}
        {this.props.updateArticlesStatus === 'SUCCESS' && <Alert type='success' title='Article Update' message='Article updated successfully' /> }
        {this.props.updateArticlesStatus === 'ERROR' && <Alert type='warning' title='Server Error' message='An error occured while trying to update your article, please try again' /> }
        <Button type='article' label='Post Article' Class='update-articles __button' disabled onClick={e => this.onHandleSubmit(e)} />
        <div className='update-articles __title'>
          <Editor
            tag="pre"
            text={this.props.title} // Change this to redux state
            onChange={this.onHandleTitle}
            options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
          />
        </div>
        <div className='update-articles __text'>
          <Editor
            tag="pre"
            text={this.props.body} // Change this to redux state
            onChange={this.onHandleText}
            options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
          />
        </div>

      </Fragment>
    );
  }
}

UpdateArticles.defaultProps = {
  title: 'Article Title',
  body: 'Article Body',
};

UpdateArticles.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
//   updateArticlesStatus: PropTypes.string.isRequired,
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
