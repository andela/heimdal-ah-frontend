/* eslint-disable no-nested-ternary */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import searchArticleByAuthor from '../../../actions/SearchArticles/searchArticlesByAuthorActions';
import searchArticleByTitle from '../../../actions/SearchArticles/searchArticlesByTitleActions';
import searchArticleByTags from '../../../actions/SearchArticles/earchArticlesByTagsActions';
import './SearchArticles.scss';
// import Alert from '../Alert/Alert';

/**
* @description - Helps a user rate an article
* @param {props} status - the status returned from dispatching articleRating action
* @param {props} star - the star rating given by a user to the article
* @param {props} getratingstatus - the status returned from dispatching getArticleRating action
* @param {props} ratings - average rating for the article
* @returns {component} Component
*/
class SearchArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInput: false,
      query: null,
    };
  }

  /**
* @description - Handles the initial component mounting and calls getArticleRating action
*/
  // componentDidMount() {
  //   const articleId = localStorage.getItem('articleId');
  //   this.props.actions(getArticleRating(Number(articleId)));
  // }

  /**
* @description - Handles the submission of the rating by calling articleRating action
* @param {number} stars - the star rating of the article, supplied by user
*/
  // onHandleSubmit(stars) {
  //   // Might change based on where the article id is  gotten from
  //   const articleId = localStorage.getItem('articleId');
  //   // eslint-disable-next-line react/destructuring-assignment
  //   this.props.actions(articleRating(stars, articleId));
  // }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    setTimeout(() => {
      this.props.actions(searchArticleByAuthor(this.state.query));
      this.props.actions(searchArticleByTitle(this.state.query));
      this.props.actions(searchArticleByTags(this.state.query));
    }, 1);
    // this.props.actions(getArticlesByAuthoor(query));
    // this.props.actions(getArticlesByTags(query));
  }

  /**
* @description - Handles the rendering of the component
* @returns {component} the rendered component
*/
  render() {
    const { displayInput } = this.state;
    return (
      <Fragment>
        <form className="header-form form-inline my-2 my-lg-0">
          <div className={displayInput ? '' : 'header-input'}>
            <FormControl
              className='form-control mr-sm-2'
              placeholder='Search....'
              name='query'
              value={this.state.query}
              onChange={e => this.onHandleChange(e)}
            />
          </div>
          <div
            role="searchbox"
            onKeyPress={() => this.setState({ displayInput: !displayInput })}
            onClick={() => this.setState({ displayInput: !displayInput })}
            className='search_icon'
            tabIndex="-1"
          >
            <i className="fas fa-search" />
          </div>
        </form>
        {this.props.articlesByAuthorStatus === 'SUCCESS' ? (
          <div className='search-articles'>
            <br />
            <table>
              <tbody>
                <tr>
                  <th>
                    Title
                  </th>
                  <th>
                    Author
                  </th>
                  <th>
                    Tags
                  </th>
                </tr>
                {this.props.articlesByAuthor.map(article => (
                  <tr className='search-articles' key={article.id}>
                    <td>
                      <a href={`https://heimdal-frontend.herokuapp.com/${article.user.profile.username}/${article.slug}`}>{article.title}</a>
                    </td>
                    <td>
                      {article.user.profile.username}
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        ) : this.props.articlesByTitleStatus === 'SUCCESS' ? (
          <div className='search-articles'>
            <br />
            <table>
              <tbody>
                <tr>
                  <th>
                    Title
                  </th>
                  <th>
                    Author
                  </th>
                  <th>
                    Tags
                  </th>
                </tr>
                {this.props.articlesByTitle.map(article => (
                  <tr className='search-articles' key={article.id}>
                    <td>
                      <a href={`https://heimdal-frontend.herokuapp.com/articles/${article.slug}`}>{article.title}</a>
                    </td>
                    <td>
                      Joshua
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        ) : this.props.articlesByTagsStatus === 'SUCCESS' ? (
          <div className='search-articles'>
            <br />
            <table>
              <tbody>
                <tr>
                  <th>
                    Title
                  </th>
                  <th>
                    Author
                  </th>
                  <th>
                    Tags
                  </th>
                </tr>
                {this.props.articlesByTags.map(article => (
                  <tr className='search-articles' key={article.id}>
                    <td>
                      <a href={`https://heimdal-frontend.herokuapp.com/articles/${article.article.slug}`}>{article.article.title}</a>
                    </td>
                    <td>
                      Joshua
                    </td>
                    <td>
                      {article.tag.tagName}
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        ) : ''
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articlesByAuthorStatus: state.searcharticlesbyauthor.status,
  articlesByAuthor: state.searcharticlesbyauthor.payload,
  articlesByTitle: state.searcharticlesbytitle.payload,
  articlesByTitleStatus: state.searcharticlesbytitle.status,
  articlesByTagsStatus: state.searcharticlesbytags.status,
  articlesByTags: state.searcharticlesbytags.payload,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchArticles);
