import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import './ratings.scss';

class Rating extends Component {
   state = {
     ratings: this.props.ratings,
   };

   setRating(value) {
     this.setState(prevState => ({ ...prevState, ratings: value }));
   }

   getClassName(value) {
     const { ratings } = this.state;
     if (value <= Math.trunc(ratings)) return 'fa fa-star star';
     return 'fa fa-star-o star';
   }


   render() {
     return (
       <div className="rate">
         {
            _.range(1, 6).map(
              value => (
                <i
                  key={value}
                  role="button"
                  tabIndex={0}
                  onClick={() => this.setRating(value)}
                  onKeyPress={() => this.setRatings(value)}
                  className={this.getClassName(value)}
                />
              ),
            )
          }
       </div>
     );
   }
}

Rating.propTypes = {
  ratings: PropTypes.number,
};

Rating.defaultProps = {
  ratings: 0,
};
export default Rating;
