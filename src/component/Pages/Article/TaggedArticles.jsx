import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { getArticlesByTagName } from '../../../actions/homeArticles/articleActions';
import LoadingSpinner from '../../ui/loadingSpinners/LoadingSpinner';
import StanadardCard from '../LandingPage/StandardCards';

/**
 * @description - This class enables new users to Signup on the platform
 * @param {func} setErrors  - A dispatchable errorAction to set errors in state
 * @param {func} removeAnError  - A dispatchable errorAction to clear one error from state
 * @param {func} clearErrors  - A dispatchable errorAction to clear the error state
 * @param {func} signupUser  - A dispatchable authAction to enable signup
 * @param {object} SignupForm  - A Form component that takes in props
 * @returns {object} The rendered Component
 */
class TaggedArticles extends Component {
  state = {
    // errors: {},
  };

  componentDidMount() {
    const { match } = this.props;
    this.fetchTaggedArticles(match.params.tagName);
  }

  componentWillReceiveProps(nextProps) {
    const { match } = nextProps;
    if (this.props.match.params.tagName !== nextProps.match.params.tagName) {
      this.fetchTaggedArticles(match.params.tagName);
    }
  }

  fetchTaggedArticles(tagName) {
    const { actions } = this.props;
    actions.getArticlesByTagName(tagName);
  }

  render() {
    const { taggedArticles, errors, match } = this.props;
    console.log(this.props);

    if (taggedArticles.length > 0) {
      return (
        <div className="col-md-12 p-5">
          <h3 className="text-center text-capitalize">
            All articles relating to
            {' '}
            {match.params.tagName}
          </h3>
          <div className="row p-3 mb-5 mt-5">
            {/** Tagged Articles Section Start */}
            <div className="col-md-10">
              {taggedArticles.map(item => (
                <div className="col-md-4" key={Math.random()}>
                  <StanadardCard {...item.article} />
                </div>
              ))}
              {/** Tagged Articles Section End */}
            </div>

            {/** Aside Card Section Start */}
            <div className="col-md-2 pt-5">
              <div className="card p-3">
                <div className="mb-5">
                  <span className="text-center h4">Tags</span>
                  <hr />
                  <Link to="/articles/tag/nodeJs" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="tag" />
                      NodeJs
                    </label>
                  </Link>
                  <Link to="/articles/tag/angular" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="tag" />
                      Angular
                    </label>
                  </Link>
                  <Link to="/articles/tag/react" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="tag" />
                      React
                    </label>
                  </Link>
                  <Link to="/articles/tag/node" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="tag" />
                      Node
                    </label>
                  </Link>
                </div>
              </div>
            </div>
            {/** Aside Card Section End */}
          </div>
        </div>
      );
    }
    if (errors && errors.mainError) {
      return (
        <div className="col-12 text-center">
          <h2>{errors.mainError}</h2>
        </div>
      );
    }
    return (
      <div className="col-12 text-center">
        <LoadingSpinner isLoading />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  taggedArticles: state.taggedArticles,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticlesByTagName,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaggedArticles);
