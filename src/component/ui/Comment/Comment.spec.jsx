/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Comment } from './Comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentForm } from '../CommentForm/CommentForm';

describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      getArticleComment: jest.fn(),
      comment: '',
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(Comment.prototype, 'componentDidMount');
    wrapper = shallow(<Comment comment='' getArticleComment={() => {}} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<Comment {...props} />);
    expect(wrapper.find(CommentCard)).toEqual({});
  });

  it('renders One Comment Form components', () => {
    wrapper = shallow(<Comment {...props} />);
    expect(wrapper.find(CommentForm)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<Comment {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<Comment {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
