/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { ReplyComment } from './ReplyComment';
import { ReplyCommentCard } from './ReplyCommentCard/ReplyCommentCard';
import { ReplyCommentForm } from './ReplyCommentForm/ReplyCommentForm';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      getCommentReplies: jest.fn(),
      replies: '',
    };
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<ReplyComment {...props} />);
    expect(wrapper.find(ReplyCommentCard)).toEqual({});
  });

  it('renders One Comment Form components', () => {
    wrapper = shallow(<ReplyComment {...props} />);
    expect(wrapper.find(ReplyCommentForm)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<ReplyComment {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<ReplyComment {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
