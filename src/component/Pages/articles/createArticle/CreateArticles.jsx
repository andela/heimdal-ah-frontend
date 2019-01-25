import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import Alert from '../../../ui/Alert/Alert';
import Button from '../../../ui/Buttons/Button';
import checkArticleDetails from '../../../../utils/createArticle';
import './CreateArticle.scss';
import { createArticleAction } from '../../../../actions/articleActions/createArticleActions';

/**
 * @description - CreateArticle Class
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
    const { title, body } = this.state;
    const articleDetails = {
      title,
      body,
      description: body.substring(0, 100),
    };

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
  descriptionHandleChange(title) {
    this.setState({ title });
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
        {status === 'SUCCESS' && <Alert type='success' title='Article was posted' message='your Article was published successfully' /> && <Redirect to='/' />}
        {alert === 'FAILURE' && <Alert type='warning' title='All fields should be filled' message='Error : Article was not posted' />}
        {status === 'FAILURE' && <Alert type='success' title='Article was posted' message='server error' />}
        <Button type='article' label='Post Article' Class='update-articles __button' onClick={e => this.onHandleSubmit(e)} />
        <div className='container'>
          <br />
          <div className='create-articles __title'>
            <Editor
              tag="pre"
              data-placeholder='Type your title....'
              text={this.state.title}
              onChange={this.titleHandleChange}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
            />
          </div>
          <div className='create-articles __text'>
            <Editor
              tag="pre"
              data-placeholder='Type your decription....'
              text={this.state.description}
              onChange={this.descriptionHandleChange}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
            />
          </div>
          <div className='create-articles __text'>
            <Editor
              tag="pre"
              data-placeholder='Type your article....'
              text={this.state.body}
              onChange={this.articleHandleChange}
              options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'html', 'strikethrough', 'subscript', 'superscript'] } }}
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
});

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      createArticleAction,
    },
    dispatch,
  ),
});


export default connect(mapStateToprops, matchDispatchToProps)(CreateArticle);
