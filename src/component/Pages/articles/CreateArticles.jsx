import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Editor from 'react-medium-editor';
import './CreateArticle.scss';
import articleActions from '../../../actions/articleActions/createArticleActions';

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
    this.props.articleActions(articleDetails);
  }

  articleHandleChange(body) {
    this.setState({ body });
  }

  titleHandleChange(title) {
    this.setState({ title });
  }

  render() {
    return (
      <Fragment>
        <Editor
          placeholder="type your article"
          tag="pre"
          text={this.state.title}
          onChange={this.titleHandleChange}
          options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
        />
        <Editor
          placeholder="type your article"
          tag="pre"
          text={this.state.body}
          onChange={this.articleHandleChange}
          options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
        />
        <br />
        <button type='submit' onClick={e => this.onHandleSubmit(e)}>Post</button>
      </Fragment>
    );
  }
}

const mapStateToprops = state => ({
  title: state.title,
  body: state.body,
});

export default connect(mapStateToprops, { articleActions })(CreateArticle);


// class Signup extends Component {
//   state = {
//     username: '',
//     email: '',
//     password: '',
//     passwordConfirmation: '',
//     errors: {},
//     isLoading: false,
//   };

//   componentWillReceiveProps(nextProps) {
//     return nextProps.errors && this.setState({ errors: nextProps.errors });
//   }

//   onChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//     if (this.state.errors[event.target.name]) {
//       const { action } = this.props;
//       action.removeAnError(event.target.name);
//     }
//   };

//   handleSignup = (event) => {
//     event.preventDefault();
//     this.setState({ isLoading: true });

//     const {
//       username, email, password, passwordConfirmation,
//     } = this.state;

//     const signupData = {
//       username,
//       email,
//       password,
//       passwordConfirmation,
//     };

//     const errors = validateSignup(signupData);

//     if (errors) {
//       this.setState({ isLoading: false });

//       const { action } = this.props;
//       return action.setErrors(errors.errors);
//     }

//     const { action, history } = this.props;
//     action.clearErrors();
//     this.setState({ isLoading: false });
//     return action.signupUser(signupData, history);
//   };

//   render() {
//     const {
//       email, username, password, passwordConfirmation, errors, isLoading,
//     } = this.state;

//     return (
//       <div className="heimdal-form">
//         <h1 className="form-title font-cardo text-center">Become an Heimdal Demonym</h1>
//         <form className="heimdal-form" onSubmit={this.handleSignup} noValidate>
//           <div className="font-cardo ph-30">
//             <FormInput
//               name="username"
//               value={username}
//               type="text"
//               classname="form-control"
//               placeholder="Username"
//               onChange={this.onChange}
//               errors={errors}
//             />
//             <FormInput
//               name="email"
//               value={email}
//               type="email"
//               classname="form-control"
//               placeholder="Email Address"
//               onChange={this.onChange}
//               errors={errors}
//             />
//             <FormInput
//               name="password"
//               value={password}
//               type="password"
//               classname="form-control"
//               placeholder="Password"
//               onChange={this.onChange}
//               errors={errors}
//             />
//             <FormInput
//               name="passwordConfirmation"
//               value={passwordConfirmation}
//               type="password"
//               classname="form-control"
//               placeholder="Confirm Password"
//               onChange={this.onChange}
//               errors={errors}
//             />
//             <div className="row">
//               <div className={`col-md-12 text-center ${isLoading ? '' : 'd-none'}`}>
//                 <i className="fa fa-spin fa-spinner" />
//               </div>
//               <div className="col-md-12 text-danger text-center">
//                 {errors.mainError && <span className="">{errors.mainError}</span>}
//               </div>
//               <div className="col-md-8 text-left mb-10">
//                 <span className="text-muted p-t-10">
//                   Already have an account?
//                   {' '}
//                   <Link to="/" className="link">
//                     Log in here
//                   </Link>
//                 </span>
//               </div>
//               <div className="col-md-4 text-right">
//                 <button type="submit" className="btn signup-btn" disabled={isLoading}>
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   errors: state.errors,
// });

// const mapDispatchToProps = dispatch => ({
//   action: bindActionCreators(
//     {
//       signupUser,
//       removeAnError,
//       setErrors,
//       clearErrors,
//     },
//     dispatch,
//   ),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withRouter(Signup));