import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import './CommentForm.scss';
import { connect } from 'react-redux';
import Button from '../Buttons/Button';
import { postArticleComment } from '../../../actions/CommentActions/CommentActions';
import Alert from '../Alert/Alert';

/**
  * renderComponent
  * @method Class Class based Component
  * @summary React component for rendering the card components
  * @param {object}  comment contains the comments of an article
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment form view
  */
class CommentForm extends Component {
  state = {
    formIsValid: false,
    commentError: '',
    content: '',
    checkbox: false,
  }

   submitForm = (e) => {
     e.preventDefault();
     const { user } = this.props.auth;
     const { formIsValid, content, checkbox } = this.state;
     if (formIsValid) {
       const data = {
         content,
         isPrivate: checkbox,
       };

       this.props.postArticleComment(1, data, user.image);
       this.setState({
         content: '',
       });
     } else {
       this.setState({
         commentError: 'Content cannot be Empty',
       });
     }
   }

   onChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
       commentError: '',
     });
   }

   onBlur = (e) => {
     if (e.target.value === '') {
       this.setState({
         commentError: 'Content cannot be Empty',
       });
     } else {
       this.setState({
         formIsValid: true,
         commentError: '',
       });
     }
   }

   onCheck = () => {
     const { checkbox } = this.state;
     this.setState({
       checkbox: !checkbox,
       commentError: '',
     });
   }

   /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */
   render() {
     const { checkbox, commentError } = this.state;
     return (
       <div className='container form__comment'>
         <div className='comment__head'>
           <p className='comment__head__a'>ADD COMMENT</p>
           <p className='comment__head__b'>Comment</p>
         </div>
         <div>
           {' '}
           {commentError !== '' && <Alert type='warning' message='Comment content cannot be empty' title='Invalid Credenntials' /> }
           <div />
         </div>
         <form className='' onSubmit={this.submitForm}>
           <FormGroup controlId="formControlsTextarea">
             <FormControl
               onBlur={this.onBlur}
               onChange={this.onChange}
               componentClass="textarea"
               value={this.state.content}
               name='content'
               className='comment-form'
               rows="7"
               cols="70"
               placeholder="textarea"
             />
           </FormGroup>
           <div className='flex-container__a'>
             <div className="form-check flex-container__b">
               <div className='private__comment'>Make it Private</div>
               <div className='comment_check'>
                 <input type="checkbox" name='checkbox' onChange={e => this.onCheck(e)} className="form-check" value={!checkbox} />
               </div>
             </div>
             <Button type="comment" className='comment-button' label="Add Comment" />
           </div>
         </form>
       </div>
     );
   }
}

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  comment: state.comment,
  auth: state.auth,
  error: state.errors,
});

export default connect(mapStateToProps, { postArticleComment })(CommentForm);
