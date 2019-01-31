import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import './Rating.scss';
import articleRating from '../../../actions/ArticlesRating/articlesRating';
import getAverageRatings from '../../../utils/getAverageRatings';
import getArticleRating from '../../../actions/ArticlesRating/getArticlesRating';
import Alert from '../Alert/Alert';

/**
 * @description - Helps a user rate an article
 * @param {props} status - the status returned from dispatching articleRating action
 * @param {props} star - the star rating given by a user to the article
 * @param {props} getratingstatus - the status returned from dispatching getArticleRating action
 * @param {props} ratings - average rating for the article
 * @returns {component} Component
 */
export class ArticlesRating extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick = this.onHandleSubmit.bind(this);
  }

  /**
 * @description - Handles the initial component mounting and calls getArticleRating action
 */
  componentDidMount() {
    const articleId = setTimeout((localStorage.getItem('articleId')), 1);
    this.props.actions(getArticleRating(articleId));
  }

  /**
 * @description - Handles the submission of the rating by calling articleRating action
 * @param {number} stars - the star rating of the article, supplied by user
 */
  onHandleSubmit(stars) {
    // Might change based on where the article id is  gotten from
    const articleId = localStorage.getItem('articleId');
    // eslint-disable-next-line react/destructuring-assignment
    this.props.actions(articleRating(stars, articleId));
  }

  /**
 * @description - Handles the rendering of the component
 * @returns {component} the rendered component
 */
  render() {
    return (
      <Fragment>
        {this.props.status === 'SUCCESS' && <Alert type='success' title='Article Rated' message={`Hello Buddy, you gave this article a star rating of ${this.props.star}`} />}
        {this.props.getratingstatus === 'SUCCESS' && (
        <span className='rate'>
          {
            range(1, 6).map(value => (
              <button
                key={value}
                type='button'
                onClick={() => {
                  this.onHandleSubmit(value);
                }}
                className='rate __button'
              >
                <i
                  key={value}
                  className={`${ArticlesRating.getClassNames(value, getAverageRatings(Array.from(this.props.ratings)))}  `}
                />
              </button>
            ))
          }
        </span>
        )
        }
      </Fragment>
    );
  }
}

ArticlesRating.getClassNames = (value, ratings) => (
  (value <= Math.trunc(ratings)) ? 'fa fa-star star' : 'fa fa-star-o star'
);

ArticlesRating.defaultProps = {
  ratings: 0,
};

const mapStateToProps = state => ({
  status: state.articlerating.status,
  star: state.articlerating.payload,
  ratings: state.getarticlerating.payload,
  getratingstatus: state.getarticlerating.status,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesRating);
