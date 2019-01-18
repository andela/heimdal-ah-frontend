import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.jsx';

describe('Testing the App', () => {
  it('should render the header ', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );
    const header = container.firstChild;
    expect(header.textContent).toBe('HomeAll StoriesTagsSignupLogin');
  });
});
