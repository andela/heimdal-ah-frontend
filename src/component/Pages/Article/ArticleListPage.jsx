import React from 'react';
import ArticleList from '../../../container/Article/Article';
import '../../ui/cards/ArticleCard/articleCard.scss';

/**
 * Article List page
 */
export default function ArticleListPage() {
  return (
    <div className='mb-5'>
      <h2 className='mx-auto text-center'> All Stories</h2>
      <ArticleList />

    </div>
  );
}
