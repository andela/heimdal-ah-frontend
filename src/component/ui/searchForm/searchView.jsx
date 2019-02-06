/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';
import './SearchArticles.scss';
import SearchArticles from './SearchArticles';
import StandardCard from '../../Pages/LandingPage/StandardCards';

let sum = 0;
window.onload = () => {
  if (window.location.search === '?query=' || window.location.pathname === '/search' || new URLSearchParams(window.location.search).get('query')) {
    document.querySelector('.search-button').click();
  }
};

const searchView = () => (
  <SearchArticles>
    {data => (
      <Fragment>
        <form className="search-articles-full-body header-formm">
          <div className={data.displayInput ? '' : 'header-input'}>
            <FormControl
              className="search-articles-full-body form-control mr-sm-2"
              placeholder="Search...."
              name="query"
              value={data.state.query}
              onChange={e => data.onHandleChange(e)}
            />
          </div>
          <div
            role="searchbox"
            onKeyPress={() => data.onKeypress()}
            onClick={() => data.onButtonClick()}
            className="search_icon"
            tabIndex="-1"
          >
            <button type="button" hidden className="search-button" onClick={e => data.onHandleChange(e)}>
              Search
            </button>
          </div>
        </form>
        <div className="search-articles-full-body returned-articles">

          {data.articlesByAuthorStatus === 'SUCCESS' ? (
            <div key={(sum += 1)}>
              <br />
              {data.articlesByAuthor.map(returnedArticle => (
                <StandardCard className="search-articles-full-body flex-container" {...returnedArticle} />
              ))}
            </div>
          ) : data.articlesByTitleStatus === 'SUCCESS' ? (
            <div key={(sum += 1)}>
              <hr />
              <br />
              {data.articlesByTitle.map(returnedArticle => (
                <StandardCard className="search-articles-full-body flex-container" {...returnedArticle} />
              ))}
            </div>
          ) : data.articlesByTagsStatus === 'SUCCESS' ? (
            <div key={(sum += 1)}>
              <hr />
              <br />
              {data.articlesByTags.map(returnedArticle => (
                <StandardCard className="search-articles-full-body flex-container" {...returnedArticle} />
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </Fragment>
    )}
  </SearchArticles>
);

export default searchView;
