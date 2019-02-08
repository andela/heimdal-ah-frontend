/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getArticlesByPage } from '../../actions/ArticleActions/articles';
import { getUnpublishedArticles } from '../../actions/ArticleActions/unPublishedAction';
import ArticleCard from '../../component/ui/cards/ArticleCard/ArticleCard';
import LoadingSpinner from '../../component/ui/loadingSpinners/LoadingSpinner';
import '../../component/ui/cards/ArticleCard/articleCard.scss';
import 'rc-pagination/assets/index.css';

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
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const { getUnpublishedArticles, getArticlesByPage } = this.props.actions;
    if ([1, 3].includes(this.props.user.roleId)) {
      getUnpublishedArticles();
    }
    getArticlesByPage(3, 0);
  }

  getUserArticles = articles => (
    <div className="col-md-10 offset-md-1 mt-2 pt-3">
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

  returnPaginate = () => (
    <div className="react-paginate mx-auto text-center mt-5">
      <Pagination
        defaultPageSize={1}
        defaultCurrent={5}
        current={this.props.articles.metadata.currentPage}
        onChange={this.onChange}
        total={this.props.articles.metadata.totalPages}
      />
    </div>
  );

  onChange = (pageNumber) => {
    const { getArticlesByPage } = this.props.actions;
    const size = 3;
    if (pageNumber === 1) {
      const offset = size * pageNumber - pageNumber;
      getArticlesByPage(size, offset);
    } else {
      const offset = size * pageNumber - pageNumber + 1;
      getArticlesByPage(size, offset);
    }
  };

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
      return (
        <div className="container vh-100">
          <div className="row align-items-center h-100">
            <div className="mx-auto my-auto">
              <div className="h-100 justify-content-center">
                <LoadingSpinner isLoading />
              </div>
            </div>
          </div>
        </div>
      );
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
            {this.getUserArticles(this.props.articles.articles.rows)}
            {this.getUserArticles(this.props.articles.rows)}
            {/* {this.getUserArticles(this.props.unpublishedarticle.rows)}  */}
            <div className="react-paginate mx-auto text-center mt-5">{this.returnPaginate()}</div>
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
          {this.returnPaginate()}
        </div>
      );
    }
    return (
      <div>
        {this.getUserArticles(this.props.articles.articles.rows)}
        {this.returnPaginate()}
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getUnpublishedArticles,
      getArticlesByPage,
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
