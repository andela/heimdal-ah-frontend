/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import './ReplyComment.scss';
import Button from '../../Buttons/Button';
import Alert from '../../Alert/Alert';
import { postCommentReplies } from '../../../../actions/ReplyActions/ReplyAction';


/**
  * renderComponent
  * @method Class Class based Component
  * @summary React component for rendering the card components
  * @param {object}  Replies contains the Replies of a comment
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment form view
  */
export class ReplyCommentForm extends Component {
  state = {
    content: '',
    replyError: '',
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

  submitForm = (e) => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { commentId } = this.props;
    const { formIsValid, content } = this.state;
    if (content.length >= 1500) {
      this.setState({
        formIsValid: false,
        replyError: "Can't have more than 1500 characters",
      });
    } else if (formIsValid) {
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

  /**
     * Renders the component.
     *
     * @memberof app.components.Replies
     * @return {string} - HTML markup for the component
   */
  render() {
    const { content, replyError } = this.state;
    return (
      <div>
        <div className='error_msg'>
          {' '}
          {replyError !== '' && <Alert type='warning' message={this.state.replyError} title='Invalid Credenntials' /> }
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

ReplyCommentForm.propTypes = {
  auth: PropTypes.object.isRequired,
};
/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { postCommentReplies })(ReplyCommentForm);
