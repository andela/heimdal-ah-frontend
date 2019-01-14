import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class StarRating extends Component {
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    ratio: 2,
  }

  maxStars() {
    const { maxRating, ratio } = this.props;
    return Math.ceil(maxRating / ratio);
  }

  fullStars() {
    const { rating, ratio } = this.props;
    return Math.floor(rating / ratio);
  }

  emptyStars() {
    return this.maxStars() - this.fullStars();
  }

  render() {
    const fullStars = this.fullStars();
    const emptyStars = this.emptyStars();

    const renderFullStars = () => (fullStars !== 0
      ? Array(fullStars)
        .fill(null)
        .map((item, i) => <FontAwesomeIcon className="star" key={`fs${i}`} icon="star" />)
      : '');

    const renderEmptyStars = () => (emptyStars !== 0
      ? Array(emptyStars)
        .fill(null)
        .map((item, i) => <FontAwesomeIcon className="star" key={`es${i}`} icon={['far', 'star']} />)
      : '');


    return (
      <div className="star-rating">
        {renderFullStars()}
        {renderEmptyStars()}
      </div>
    );
  }
}
