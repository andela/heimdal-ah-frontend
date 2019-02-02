/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { CommentForm } from './CommentForm';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      postArticleComment: jest.fn(),
      comment: '',
      auth: '',
      error: '',
    };
  });

  it('renders One Comment Form components', () => {
    wrapper = shallow(<CommentForm {...props} />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<CommentForm {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<CommentForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
