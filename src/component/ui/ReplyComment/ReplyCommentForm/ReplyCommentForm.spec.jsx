/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { ReplyCommentForm } from './ReplyCommentForm';
import Button from '../../Buttons/Button';


describe('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      postCommentReplies: jest.fn(),
      auth: '',
    };
  });

  it('renders One Reply Form components', () => {
    wrapper = shallow(<ReplyCommentForm {...props} />);
    expect(wrapper.find(Button)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<ReplyCommentForm {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<ReplyCommentForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
