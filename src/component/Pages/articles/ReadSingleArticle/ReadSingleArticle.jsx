import React, { Fragment } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import './ReadSingleArticle.scss';
import Rating from '../../../ui/Rating/Rating';
import Glow from '../../../ui/Buttons/glow/Glow';


// /**
//  * @description - CreateArticle Class
//  */
// class ReadSingleArticle extends React.Component {
//   /**
//  * @description - render the editors
//  * @param {props} status - the status returned from dispatching actions
//  * @returns {component} Component
//  */
//   render() {
const ReadSingleArticle = () => (
  <Fragment>
    <div className='article-header'>
      <h1>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugit, totam!
      </h1>
    </div>
    <div className='bookmark-row'>
      <div />
      <div>
        <img className='bookmark-logo' src='/src/images/bookmark.svg' alt='bookmark-logo' />
      </div>
    </div>
    <div className='body'>
      <div className='article-section'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quibusdam. Minima, laboriosam sed? Ex labore
                  voluptatibus fugiat sit dicta obcaecati deleniti esse illum architecto? Incidunt,
                  ipsam? Nihil facere aliquam minima nostrum eum! Perferendis adipisci temporibus, ipsam molestiae
                  inventore mollitia fuga! Rem, vitae. Fuga ab harum dolores ea error tenetur. Autem vel esse fuga.
                  Nisi sit atque aperiam reiciendis
                  labore dolorum id, quo praesentium mollitia beatae voluptatum aliquam dolor, ut quibusdam
                    iure fugit dicta tenetur et aliquid eos neque ducimus voluptas!
      </div>
      <div className='user-section'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quibusdam. Minima,
                  laboriosam sed? Ex labore
                  voluptatibus fugiat sit dicta obcaecati deleniti esse illum architecto? Incidunt,
                  ipsam? Nihil facere aliquam minima nostrum eum! Perferendis adipisci
                  temporibus, ipsam molestiae inventore mollitia fuga! Rem, vitae. Fuga ab harum dolores ea error tenetur. Autem vel esse fuga.
                  Nisi sit atque aperiam reiciendis labore dolorum id, quo praesentium mollitia beatae voluptatum aliquam dolor, ut quibusdam
                    iure fugit dicta tenetur et aliquid eos neque ducimus voluptas!
      </div>
      <div className='bottom-details'>
        <div>
          <Rating />
        </div>
        <div className='ratings'>
          <span>Rated by:</span>
        </div>
        <div className='glow'>
          <Glow />
        </div>
      </div>
      <div />
      <div className='line' />
    </div>
    <div className='tag-buttons'>
      <button type='submit'> hello </button>
      <button type='submit'> hello </button>
      <button type='submit'> hello </button>
    </div>
  </Fragment>
);
//   }
// }

// const mapStateToprops = state => ({

// });

// const matchDispatchToProps = dispatch => ({
//   actions: bindActionCreators(
//     {
//       createArticleAction,
//     },
//     dispatch,
//   ),
// });


export default ReadSingleArticle;
