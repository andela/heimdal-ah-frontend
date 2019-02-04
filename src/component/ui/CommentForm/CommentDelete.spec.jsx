/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { DeleteButton } from './CommentDelete';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      deleteCommentReplies: jest.fn(),
      comment: '',
    };
  });

  it('check the component', () => {
    wrapper = shallow(<DeleteButton {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the component', () => {
    wrapper = shallow(<DeleteButton {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<DeleteButton {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
