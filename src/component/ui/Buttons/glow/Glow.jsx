import React from 'react';
import './Glow.scss';
import PropTypes from 'prop-types';

const Glow = (props) => {
  const { active, handleGlow } = props;

  return (
    <i
      className={`glow-btn  ${active ? 'glow-on' : 'glow-off'}`}
      role="button"
      tabIndex={0}
      onClick={handleGlow}
      onKeyPress={handleGlow}
    />
  );
};

Glow.propTypes = {
  active: PropTypes.bool,
  handleGlow: PropTypes.func.isRequired,
};

Glow.defaultProps = {
  active: false,
};

export default Glow;

// /**
//  * @description - Glow an article
//  * @param {props} active - the status of user glow
//  * @param {props} handleGlow- handles the glow action
//  * @returns {component} Component
//  */
// export class Glow extends Component {
//   /**
//    * @description handles article glow
//    */
//   handleGlow = () => {
//     const { articleId } = this.props;
//     this.props.actions(glow(articleId));
//   }

//   /**
//    * @description handles component rendering
//    */
//   render() {
//     console.log('<<<<=====', this.props.active);
//     return (
//       <i
//         className={`glow-btn  ${this.props.active ? 'glow-on' : 'glow-off'}`}
//         role="button"
//         tabIndex={0}
//         onClick={this.props.handleGlow}
//         onKeyPress={this.handleGlow}
//       />
//     );
//   }
// }

// Glow.propTypes = {
//   active: PropTypes.bool,
//   handleGlow: PropTypes.func.isRequired,
// };

// Glow.defaultProps = {
//   active: false,
// };

// const mapStateToProps = state => ({
//   message: state.articleLike,
//   glow: state.articleLike,
// });

// const mapDispatchToProps = dispatch => ({
//   action: action => dispatch(action),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Glow);
