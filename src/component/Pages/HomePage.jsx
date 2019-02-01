import React from 'react';
import ArticleCardHorizontal from '../ui/cards/ArticleCardHorizontal';
import ArticleTag from '../ui/Tags/ArticlesTag';

const HomePage = () => (
  <div className="mt-5">
    <h2 className="text-center">Featured</h2>
    <ArticleTag name='React' />
    <br />
    <br />
    <br />
    <div className="row">
      <div className="col-md-3">
        <ArticleCardHorizontal
          articleTitle="An article Title"
          articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
          article="This is the article description"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
          username="Henperi"
          updatedTime="15hrs ago"
          commentCount="120"
        />
      </div>
      <div className="col-md-3">
        <ArticleCardHorizontal
          articleTitle="An article Title"
          articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
          article="This is the article description"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
          username="Henperi"
          updatedTime="15hrs ago"
          commentCount="120"
        />
      </div>
      <div className="col-md-3">
        <ArticleCardHorizontal
          articleTitle="An article Title"
          articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
          article="This is the article description"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
          username="Henperi"
          updatedTime="15hrs ago"
          commentCount="120"
        />
      </div>
      <div className="col-md-3">
        <ArticleCardHorizontal
          articleTitle="An article Title"
          articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
          article="This is the article description"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
          username="Henperi"
          updatedTime="15hrs ago"
          commentCount="120"
        />
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-4">
            <ArticleCardHorizontal
              articleTitle="An article Title"
              articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
              article="This is the article description"
              userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
              username="Henperi"
              updatedTime="15hrs ago"
              commentCount="120"
            />
          </div>
          <div className="col-md-4">
            <ArticleCardHorizontal
              articleTitle="An article Title"
              articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
              article="This is the article description"
              userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
              username="Henperi"
              updatedTime="15hrs ago"
              commentCount="120"
            />
          </div>
          <div className="col-md-4">
            <ArticleCardHorizontal
              articleTitle="An article Title"
              articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
              article="This is the article description"
              userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
              username="Henperi"
              updatedTime="15hrs ago"
              commentCount="120"
            />
          </div>
          <div className="col-md-4">
            <ArticleCardHorizontal
              articleTitle="An article Title"
              articleImage="https://cdn-images-1.medium.com/max/1200/0*pgKJXXvrKJ-b8ztZ.jpg"
              article="This is the article description"
              userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3jX0asji2xGa96e7dpfNI30qEiEBOkr14S1XNlCy1B-6JxQ9"
              username="Henperi"
              updatedTime="15hrs ago"
              commentCount="120"
            />
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card card-shadow p-2">
          <h5 className="text-center">Tags</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Beauty</li>
            <li className="list-group-item">Technology</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
