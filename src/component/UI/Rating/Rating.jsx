import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './ratings.scss';

const Rating = props => (
  <div className="rate">
    {
      _.range(1, 6).map(value => (
        <i
          key={value}
          className={Rating.getClassNames(value, props.ratings)}
        />
      ))
    }
  </div>
);

Rating.getClassNames = (value, ratings) => (
  (value <= Math.trunc(ratings)) ? 'fa fa-star star' : 'fa fa-star-o star'
);

Rating.propTypes = {
  ratings: PropTypes.number,
};

Rating.defaultProps = {
  ratings: 0,
};
export default Rating;
