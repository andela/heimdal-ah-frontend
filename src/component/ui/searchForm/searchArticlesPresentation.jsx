/* eslint-disable no-return-assign */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import './SearchArticles.scss';
import SearchArticles from './SearchArticles';

let sum = 0;
window.document.addEventListener('click', () => {
  if (window.location.pathname === '/' && document.querySelector('.search-articles')) {
    document.querySelector('.search-articles').style.display = 'none';
  }
});

const SearchArticlesPresentation = () => (
  <SearchArticles offset={0} size={6}>
    {
      data => (
        <Fragment>
          <form className="header-form form-inline my-2 my-lg-0">
            <div className={data.displayInput ? '' : 'header-input'}>
              <FormControl
                className='myf form-control mr-sm-2'
                placeholder='Search....'
                name='query'
                value={data.state.query}
                onChange={e => data.onHandleChange(e)}
                onInput={() => {
                  if (window.location.pathname === '/' && document.querySelector('.search-articles')) {
                    document.querySelector('.search-articles').style.display = 'block';
                  }
                }
                }
              />
            </div>
            <div
              role="searchbox"
              onKeyPress={() => data.onKeypress()}
              onClick={() => data.onButtonClick()}
              className='search_icon'
              tabIndex="-1"
            >
              <i className="fas fa-search" />
            </div>
          </form>
          {data.articlesByAuthorStatus === 'SUCCESS' ? (
            <div className='search-articles'>
              <br />
              <table className='search-articles'>
                <tbody className='search-articles'>
                  <tr className='search-articles'>
                    <th className='search-articles'>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByAuthor.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`/${article.user.profile.username}/articles/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                      {/* <td>
                        {article.user.profile.username}
                      </td> */}
                    </tr>
                  ))
                  }
                  {data.articlesByAuthor.length > 5 ? (
                    <td>
                      {<a href={`/search?query=${data.query}`}>View More</a>}
                    </td>
                  ) : ''
                }
                </tbody>
              </table>
            </div>
          ) : data.articlesByTitleStatus === 'SUCCESS' ? (
            <div className='search-articles'>
              <br />
              <table className='search-articles'>
                <tbody className='search-articles'>
                  <tr className='search-articles'>
                    <th className='search-articles'>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByTitle.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`/${article.user.profile.username}/articles/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                    </tr>
                  ))
                  }
                  {data.articlesByTitle.length > 5 ? (
                    <td>
                      {<a href={`/search?query=${data.query}`}>View More</a>}
                    </td>
                  ) : ''
                }
                </tbody>
              </table>
            </div>
          ) : data.articlesByTagsStatus === 'SUCCESS' ? (
            <div className='search-articles'>
              <br />
              <table className='search-articles'>
                <tbody className='search-articles'>
                  <tr className='search-articles'>
                    <th className='search-articles'>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByTags.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`/${article.article.user.profile.username}/articles/${article.article.slug}`}>{article.article.title}</a>
                        <br />
                        <span>{article.article.user.profile.username}</span>
                      </td>
                    </tr>
                  ))
                  }
                  {data.articlesByTags.length > 5 ? (
                    <td>
                      {<a href={`/search?query=${data.query}`}>View More</a>}
                    </td>
                  ) : ''
                }
                </tbody>
              </table>
            </div>
          ) : ''
          }
        </Fragment>
      )
    }
  </SearchArticles>
);

export default SearchArticlesPresentation;
