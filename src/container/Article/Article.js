/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { getArticles } from '../../actions/ArticleActions/article';
// import ArticleCard from '../../component/ui/cards/ArticleCard/ArticleCard';

/**
 * article class
 */
class Article extends Component {
  componentDidMount() {
    const { getArticles } = this.props;

    getArticles();
  }

  render() {
    return (
      <div>
        Welcome to articles page
      </div>
    );
  }
}

// const matchDispatchToProps = dispatch => ({
//   actions: bindActionCreators(
//     {
//       getArticles,
//     },
//     dispatch,
//   ),
// });

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getArticles })(Article);
