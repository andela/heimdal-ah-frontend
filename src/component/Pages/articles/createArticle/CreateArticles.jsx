import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import Alert from '../../../ui/Alert/Alert';
import './CreateArticle.scss';
import articleActions from '../../../../actions/articleActions/createArticleActions';

// import articleActions from '../../../actions/articleActions/createArticleActions';

class CreateArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.articleHandleChange = this.articleHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    const articleDetails = {
      title,
      body,
      description: body.substring(0, 100),
    };
    this.props.actions(articleActions(articleDetails));
  }

  articleHandleChange(body) {
    this.setState({ body });
  }

  titleHandleChange(title) {
    this.setState({ title });
  }

  render() {
    const { status } = this.props;
    return (
      <Fragment>
        {status === 'SUCCESS' && <Alert type='success' title='Article was posted' message='your Article was published successfully' />}
        {status === 'FAILURE' && <Alert type='warning' title='all fields should be filled' message='Error : Article was not posted' />}
        <div className='container'>
          <br />
          <div className='create-articles __text'>
            <Editor
              tag="pre"
              data-placeholder='Amaze us with your story....'
              text={this.state.title}
              onChange={this.titleHandleChange}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
            />
          </div>
          <div className='create-articles __text'>
            <Editor
              tag="pre"
              data-placeholder='Amaze us with your story....'
              text={this.state.body}
              onChange={this.articleHandleChange}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
            />
          </div>
          <br />
          <button type='submit' onClick={e => this.onHandleSubmit(e)}>Post</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  title: state.title,
  body: state.body,
  status: state.createArticleReducer.status,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToprops, mapDispatchToProps)(CreateArticle);
