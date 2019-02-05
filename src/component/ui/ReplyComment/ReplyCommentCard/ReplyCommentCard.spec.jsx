/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { ReplyCommentCard } from './ReplyCommentCard';
import { DeleteButton } from '../../CommentForm/CommentDelete';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      auth: '',
      replies: '',
    };
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<ReplyCommentCard {...props} />);
    expect(wrapper.find(DeleteButton)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<ReplyCommentCard {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should test snapshot', () => {
    wrapper = shallow(<ReplyCommentCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
