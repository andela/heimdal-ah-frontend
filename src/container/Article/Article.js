/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../actions/ArticleActions/articles';
import { getUnpublishedArticles } from '../../actions/ArticleActions/unPublishedAction';
import ArticleCard from '../../component/ui/cards/ArticleCard/ArticleCard';
import { DotSpinner } from '../../component/ui/loadingSpinners/LoadingSpinner';
import '../../component/ui/cards/ArticleCard/articleCard.scss';

/**
 * article class
 */
export class Article extends Component {
  constructor() {
    super();
    this.state = {
      displaying: 'published',
    };
    this.handleUnpublishedClick = this.handleUnpublishedClick.bind(this);
    this.handlePublishedClick = this.handlePublishedClick.bind(this);
  }

  componentDidMount() {
    const { getArticles, getUnpublishedArticles } = this.props.actions;

    getArticles();
    if ([1, 3].includes(this.props.user.roleId)) {
      getUnpublishedArticles();
    }
  }

  getUserArticles = articles => (
    <div className="col-md-10 offset-md-1 mt-2">
      <div className="row publication-cards container-fluid">
        {articles ? (
          articles.map(article => (
            <div className="col-md-4" key={article.id}>
              <ArticleCard key={article.id} {...article} />
            </div>
          ))
        ) : (
          <p className="no-publication">No publications yet</p>
        )}
      </div>
    </div>
  );

  handlePublishedClick(event) {
    event.preventDefault();
    this.setState({ displaying: 'published' });
  }

  handleUnpublishedClick(event) {
    event.preventDefault();
    this.setState({ displaying: 'unpublished' });
  }

  render() {
    const { isLoading } = this.props.articles;
    if (isLoading) {
      return <DotSpinner isLoading={isLoading} />;
    }
    if ([1, 3].includes(this.props.user.roleId)) {
      if (this.state.displaying === 'published') {
        return (
          <div>
            <div className="mb-5 mx-auto text-center">
              <Link to="#" onClick={this.handlePublishedClick} className="">
                Published Articles
              </Link>
              <span> | </span>
              <Link to="#" onClick={this.handleUnpublishedClick} className="">
                Unpublished Articles
              </Link>
            </div>
            {this.getUserArticles(this.props.articles.rows)}
            {/* {this.getUserArticles(this.props.unpublishedarticle.rows)}  */}
          </div>
        );
      }
      return (
        <div>
          <div className="mb-5 mx-auto text-center">
            <Link to="#" onClick={this.handlePublishedClick} className="">
              Published Articles
            </Link>
            <span> | </span>
            <Link to="#" onClick={this.handleUnpublishedClick} className="">
              Unpublished Articles
            </Link>
          </div>
          {this.getUserArticles(this.props.unpublishedarticle.rows)}
        </div>
      );
    }
    return <div>{this.getUserArticles(this.props.articles.rows)}</div>;
  }
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticles,
      getUnpublishedArticles,
    },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  articles: state.articles.articles,
  unpublishedarticle: state.unpublishedarticle.articles,
  user: state.auth.user,
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Article);
