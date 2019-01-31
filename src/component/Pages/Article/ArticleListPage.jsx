import React from 'react';
import ArticleList from '../../../container/Article/Article';

/**
 * Article List page
 */
export default function ArticleListPage() {
  return (
    <div>
      <h2 className='mx-auto text-center mb-5'> All Stories</h2>
      <ArticleList />
    </div>
  );
}
