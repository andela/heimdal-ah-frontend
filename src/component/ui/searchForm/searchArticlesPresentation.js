/* eslint-disable no-return-assign */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import './SearchArticles.scss';
import SearchArticles from './SearchArticles';

let sum = 0;
window.document.addEventListener('click', () => {
  document.querySelector('.search-articles').style.display = 'none';
});

const SearchArticlesPresentation = () => (
  <SearchArticles>
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
                onInput={() => document.querySelector('.search-articles').style.display = 'block'}
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
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {/* <tr>
                    <th>
                      Title
                    </th>
                    <th>
                      Author
                    </th>
                    <th>
                      Tags
                    </th>
                  </tr> */}
                  {data.articlesByAuthor.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`https://heimdal-frontend.herokuapp.com/${article.user.profile.username}/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                      {/* <td>
                        {article.user.profile.username}
                      </td> */}
                    </tr>
                  ))
                  }
                  {data.articlesByAuthor.length > 6 ? (
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
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {/* <tr>
                    <th>
                      Title
                    </th>
                    <th>
                      Author
                    </th>
                    <th>
                      Tags
                    </th>
                  </tr> */}
                  {data.articlesByTitle.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`https://heimdal-frontend.herokuapp.com/articles/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                    </tr>
                  ))
                  }
                  {data.articlesByTitle.length > 6 ? (
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
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {/* <tr>
                    <th>
                      Title
                    </th>
                    <th>
                      Author
                    </th>
                    <th>
                      Tags
                    </th>
                  </tr> */}
                  {data.articlesByTags.map(article => (
                    <tr className='search-articles' key={sum += 1}>
                      <td>
                        <a href={`https://heimdal-frontend.herokuapp.com/articles/${article.article.slug}`}>{article.article.title}</a>
                        <br />
                        <span>{article.article.user.profile.username}</span>
                      </td>
                      {/* <td>
                        Joshua
                      </td>
                      <td>
                        {article.tag.tagName}
                      </td> */}
                    </tr>
                  ))
                  }
                  {data.articlesByTags.length > 6 ? (
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
