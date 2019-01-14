import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class StarRating extends Component {
  static defaultProps = {
    minRating: 0,
    maxRating: 10,
    rating: 5,
    starRatio: 2,
  }

  maxStars() {
    const { maxRating, starRatio } = this.props;
    return Math.ceil(maxRating / starRatio);
  }

  fullStars() {
    const { rating, starRatio } = this.props;
    return Math.floor(rating / starRatio);
  }

  halfStars() {
    const { rating, starRatio } = this.props;
    const x = rating % starRatio;
    const i = (1 / 2) * starRatio;
    return x >= i ? 1 : 0;
  }

  emptyStars() {
    return this.maxStars() - this.fullStars() - this.halfStars();
  }

  render() {
    const fullStars = this.fullStars();
    const halfStars = this.halfStars();
    const emptyStars = this.emptyStars();

    const renderFullStars = () => (fullStars !== 0
      ? Array(fullStars)
        .fill(null)
        .map((item, i) => <FontAwesomeIcon className="star" key={`fs${i}`} icon="star" />)
      : '');

    const renderHalfStars = () => (halfStars !== 0
      ? Array(halfStars)
        .fill(null)
        .map((item, i) => (
          <span key={`hs${i}`} className="fa-layers fa-fw star">
            <FontAwesomeIcon icon="star-half" />
            <FontAwesomeIcon icon={['far', 'star-half']} flip="horizontal" />
          </span>
        ))
      : '');

    const renderEmptyStars = () => (emptyStars !== 0
      ? Array(emptyStars)
        .fill(null)
        .map((item, i) => <FontAwesomeIcon className="star" key={`es${i}`} icon={['far', 'star']} />)
      : '');


    return (
      <div className="star-rating">
        {renderFullStars()}
        {renderHalfStars()}
        {renderEmptyStars()}
      </div>
    );
  }
}
