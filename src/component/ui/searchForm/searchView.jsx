/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import './SearchArticles.scss';
import SearchArticles from './SearchArticles';

let sum = 0;
window.onload = () => {
  if (window.location.search === '?query=' || window.location.pathname === '/search' || new URLSearchParams(window.location.search).get('query')) {
    document.querySelector('.search-button').click();
  }
};

const searchView = () => (
  <SearchArticles>
    {
      data => (
        <Fragment>
          <form className="search-articles-full-body header-formm">
            <div className={data.displayInput ? '' : 'header-input'}>
              <FormControl
                className='search-articles-full-body form-control mr-sm-2'
                placeholder='Search....'
                name='query'
                value={data.state.query}
                onChange={e => data.onHandleChange(e)}

              />
            </div>
            <div
              role="searchbox"
              onKeyPress={() => data.onKeypress()}
              onClick={() => data.onButtonClick()}
              className='search_icon'
              tabIndex="-1"
            >
              <button type='button' hidden className='search-button' onClick={e => data.onHandleChange(e)}>Search</button>

            </div>
          </form>
          {data.articlesByAuthorStatus === 'SUCCESS' ? (
            <div className='search-articles-full-body'>
              <br />
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByAuthor.map(article => (
                    <tr className='search-articles-full-body' key={sum += 1}>
                      <td>
                        <a href={`/${article.user.profile.username}/articles/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
          ) : data.articlesByTitleStatus === 'SUCCESS' ? (
            <div className='search-articles-full-body'>
              <br />
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByTitle.map(article => (
                    <tr className='search-articles-full-body' key={sum += 1}>
                      <td>
                        <a href={`/${article.user.profile.username}/articles/${article.slug}`}>{article.title}</a>
                        <br />
                        <span>{article.user.profile.username}</span>
                      </td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
            </div>
          ) : data.articlesByTagsStatus === 'SUCCESS' ? (
            <div className='search-articles-full-body'>
              <br />
              <table>
                <tbody>
                  <tr>
                    <th>
                      Articles
                    </th>
                  </tr>
                  {data.articlesByTags.map(article => (
                    <tr className='search-articles-full-body' key={sum += 1}>
                      <td>
                        <a href={`/${article.article.user.profile.username}/articles/${article.article.slug}`}>{article.article.title}</a>
                        <br />
                        <span>{article.article.user.profile.username}</span>
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
      )
    }
  </SearchArticles>
);

export default searchView;
