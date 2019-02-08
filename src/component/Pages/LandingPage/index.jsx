import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { getArticles } from '../../../actions/homeArticles/articleActions';
import StanadardCard from './StandardCards';
import FeaturedCard from './FeaturedCard';
import RecentCard from './RecentCard';
import LoadingSpinner from '../../ui/loadingSpinners/LoadingSpinner';

/**
 * @description - This class enables new users to Signup on the platform
 * @param {func} setErrors  - A dispatchable errorAction to set errors in state
 * @param {func} removeAnError  - A dispatchable errorAction to clear one error from state
 * @param {func} clearErrors  - A dispatchable errorAction to clear the error state
 * @param {func} signupUser  - A dispatchable authAction to enable signup
 * @param {object} SignupForm  - A Form component that takes in props
 * @returns {object} The rendered Component
 */
class LandingPage extends Component {
  state = {
    // errors: {},
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getArticles();
  }

  render() {
    const { featuredArticles, recentArticles, mainArticles } = this.props.home;
    const { errors } = this.props;

    if (featuredArticles.length > 0) {
      return (
        <div className="col-md-12 p-5">
          {/** Featured Articles Section Start */}
          <h2 className="text-center text-muted text-light">Featured Articles</h2>
          <div className="row p-3">
            <div className="col-md-3 col-sm-4">{<StanadardCard {...featuredArticles[0]} />}</div>
            <div className="col-md-6 col-sm-4 mt-3">
              <div className="row">
                {featuredArticles.slice(1, 5).map(item => (
                  <div className="col-md-6 col-sm-12 mb-2" key={Math.random()}>
                    <FeaturedCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-sm-4">{<StanadardCard {...featuredArticles[5]} />}</div>
          </div>
          {/** Featured Articles Section Start */}

          <div className="row p-3 mb-5 mt-5">
            {/** Main Articles Section Start */}
            <div className="col-md-10">
              <div className="row">
                {mainArticles.slice(0, 6).map(item => (
                  <div className="col-md-4 mt-4" key={Math.random()}>
                    <StanadardCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            {/** Main Articles Section End */}

            {/** Aside Card Section Start */}
            <div className="col-md-2 pt-3">
              <div className="card p-3">
                <div className="mb-5">
                  <span className="text-center h5 font-weight-light text-muted">Tags</span>
                  <hr />
                  <Link to="/articles/tag/nodeJs" className="pb-2">
                    <span htmlFor="beauty" className="btn-badge badge badge-light h6 text-muted">
                      NodeJs
                    </span>
                  </Link>
                  <Link to="/articles/tag/angular" className="text-dark pb-2">
                    <span htmlFor="beauty" className="btn-badge badge badge-light h6 text-muted">
                      Angular
                    </span>
                  </Link>
                  <Link to="/articles/tag/react" className="text-dark pb-2">
                    <span htmlFor="beauty" className="btn-badge badge badge-light h6 text-muted">
                      React
                    </span>
                  </Link>
                  <Link to="/articles/tag/node" className="text-dark pb-2">
                    <span htmlFor="beauty" className="btn-badge badge badge-light h6 text-muted">
                      Node
                    </span>
                  </Link>
                </div>

                <div className="recent-posts">
                  <span className="text-center h5 font-weight-light text-muted">Recent posts</span>
                  <hr />
                  {recentArticles.map(item => (
                    <Link
                      to={`/${item.user.profile.username}/articles/${item.slug}`}
                      className="text-dark pb-5"
                      key={Math.random()}
                    >
                      <div className="col-md-12 mb-3">
                        <div className="row">
                          <div className="col-md-3 mr-0 pl-0 pr-0">
                            <img
                              className="img-fluid rounded-circle"
                              width="40"
                              src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                                Math.random() * 20,
                              )}`}
                              alt="Card"
                            />
                          </div>
                          <div className="col-md-9 ml-0">
                            <span className="h6 text-muted">
                              {`${item.title.substring(0, 15)}...`}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/** Aside Card Section End */}
          </div>

          {/** Recent Articles Section Start */}
          <h2 className="text-center text-muted text-light">Recent Posts</h2>
          <div className="row">
            {recentArticles.slice(0, 4).map(item => (
              <div className="col-md-3 mb-2" key={Math.random()}>
                <RecentCard {...item} />
              </div>
            ))}
          </div>
          {/** Recent Articles Section End */}
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
      <div className="container vh-100">
        <div className="row align-items-center h-100">
          <div className="mx-auto my-auto">
            <div className="h-100 justify-content-center">
              <LoadingSpinner isLoading />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  home: state.home,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticles,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
