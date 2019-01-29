/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticles } from '../../actions/ArticleActions/article';
import ArticleCard from '../../component/ui/cards/ArticleCard/ArticleCard';

/**
 * article class
 */
class Article extends Component {
  componentDidMount() {
    const { getArticles } = this.props.actions;

    getArticles();
  }

   getUserArticles = articles => (
     <div className="publication-cards">
       { articles
         ? articles.map(article => <ArticleCard key={article.id} {...article} />)
         : <p className="no-publication">No publications yet</p>
          }
     </div>
   );

   render() {
     return (
       <div>
         {this.getUserArticles(this.props.articles.rows)}
       </div>
     );
   }
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticles,
    },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, matchDispatchToProps)(Article);
