import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import './Rating.scss';

const Rating = props => (
  <span className="rate">
    {
      range(1, 6).map(value => (
        <i
          key={value}
          className={Rating.getClassNames(value, props.ratings)}
        />
      ))
    }
  </span>
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
