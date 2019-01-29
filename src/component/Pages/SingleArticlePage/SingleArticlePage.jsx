import React, { Component } from 'react';
import Comment from '../../ui/Comment/Comment';

class SingleArticlePage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        Article Single Page
        <Comment />
      </div>
    );
  }
}

export default SingleArticlePage;
