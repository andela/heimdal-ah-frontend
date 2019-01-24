import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import Button from '../../../ui/Buttons/Button';
import './UpdateArticles.scss';
import updateArticles from '../../../../actions/articleActions/updateArticlesActions';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');


class UpdateArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
    this.onHandleText = this.onHandleText.bind(this);
    this.onHandleTitle = this.onHandleTitle.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;
    const description = title.substring(0, 100);
    this.props.actions(updateArticles(title, body, description));
  }

  onHandleText(text) {
    this.setState({ text });
    console.log(this.state.text);
  }

  onHandleTitle(title) {
    this.setState({ title });
    console.log(this.state.title);
  }

  render() {
    return (
      <Fragment>
        <Button type='article' label='Post Article' Class='update-articles __button' />
        <div className='update-articles __title'>
          <Editor
            tag="pre"
            data-placeholder='Title'
            title={this.state.title}
            onChange={this.onHandleTitle}
            options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
          />
        </div>
        <br />
        <br />
        <div className='update-articles __text'>
          <Editor
            tag="pre"
            data-placeholder='Amaze us with your story....'
            text={this.state.text}
            onChange={this.onHandleText}
            options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  title: state.title,
  body: state.body,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToprops, mapDispatchToProps)(UpdateArticles);
