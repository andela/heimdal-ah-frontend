/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import SocialAuth from './SocialAuth';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      location: {
        pathname: 'testUrl1',
        search: '?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2…TYxfQ.RBCBnAodHd8fEEiWU2v4E3GQaHsaOpSfD1nAJt5so0M',
      },
      autheticateUser: () => {},
    };
  });

  it('componentWillReceiveProps', () => {
    wrapper = shallow(<SocialAuth {...props} />);
    expect(wrapper).toBeTruthy();
  });
});
