/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import { CommentCard } from './CommentCard';
import { DeleteButton } from '../CommentForm/CommentDelete';
import { ReplyComment } from '../ReplyComment/ReplyComment';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      user: '',
      comment: '',
    };
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper.find(DeleteButton)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<CommentCard {...props} />);
    expect(wrapper.find(ReplyComment)).toEqual({});
  });
});
