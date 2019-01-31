import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Glow from '../../ui/Buttons/glow/Glow';
import Rating from '../../ui/Rating/Rating';

// import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
import { getArticles } from '../../../actions/homeArticles/articleActions';
import StanadardCard from './StandardCards';
import FeaturedCard from './FeaturedCard';
import ArticleCard from '../../ui/cards/ArticleCard/ArticleCard';

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
    // featuredArticles: [],
    // recentArticles: [],
    // mainArticles: [],
    // errors: {},
    isLoading: false,
  };

  // componentWillReceiveProps(nextProps) {
  //   return nextProps.errors && this.setState({ errors: nextProps.errors });
  // }

  componentDidMount() {
    const { actions } = this.props;
    actions.getArticles();
  }

  render() {
    {
      this.props.home.featuredArticles && console.log(this.props.home.featuredArticles);
    }
    return (
      <div className="col-md-12 p-5">
        <h2 className="text-center">Featured</h2>
        <div className="row p-3">
          <div className="col-md-3">
            {<StanadardCard {...this.props.home.featuredArticles[0]} />}
          </div>
          <div className="col-md-6 mt-4">
            <div className="row">
              {this.props.home.featuredArticles.slice(1, 5).map(item => (
                <div className="col-md-6 mb-2" key={Math.random()}>
                  <FeaturedCard {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            {<StanadardCard {...this.props.home.featuredArticles[5]} />}
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
