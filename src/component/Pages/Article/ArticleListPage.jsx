import React from 'react';
import ArticleList from '../../../container/Article/Article';
import '../../ui/cards/ArticleCard/articleCard.scss';

/**
 * Article List page
 */
export default function ArticleListPage() {
  return (
    <div className="mb-5 p-5 mx-auto text-center text-muted">
      <h2 className="mt-5 mb-5"> All Stories</h2>
      <ArticleList />
    </div>
  );
}
