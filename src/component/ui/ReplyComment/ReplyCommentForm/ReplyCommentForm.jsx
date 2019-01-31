import React, { Component } from 'react';
import './ReplyComment.scss';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import Button from '../../Buttons/Button';
import Alert from '../../Alert/Alert';
import { postCommentReplies } from '../../../../actions/ReplyActions/ReplyAction';

class ReplyCommentForm extends Component {
  state = {
    content: '',
    replyError: '',
  }

  submitForm = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { commentId } = this.props;
    const { formIsValid, content } = this.state;
    if (formIsValid) {
      const data = { content };
      this.props.postCommentReplies(commentId, data, user.image);
      this.setState({
        content: '',
      });
    } else {
      this.setState({
        replyError: 'Reply Content cannot be Empty',
      });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      replyError: '',
    });
  }

  onBlur = (e) => {
    if (e.target.value === '') {
      this.setState({
        replyError: 'Reply Content cannot be Empty',
      });
    } else {
      this.setState({
        formIsValid: true,
        replyError: '',
      });
    }
  }

  render() {
    const { content, replyError } = this.state;
    return (
      <div>
        <div className='error_msg'>
          {' '}
          {replyError !== '' && <Alert type='warning' message='Reply content cannot be empty' title='Invalid Credenntials' /> }
        </div>
        <div className='reply_input'>
          <form className='' onSubmit={this.submitForm}>
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                onBlur={this.onBlur}
                onChange={this.onChange}
                componentClass="textarea"
                value={content}
                name='content'
                className='reply_form'
                rows="5"
                cols="80"
                placeholder="textarea"
              />
            </FormGroup>
            <Button type="reply" Class='btn__reply' label="Add Reply" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { postCommentReplies })(ReplyCommentForm);
