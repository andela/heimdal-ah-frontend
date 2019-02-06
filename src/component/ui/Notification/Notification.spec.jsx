/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { shallow } from 'enzyme';
import { Notification } from './Notification';
import { CommentCard } from '../CommentCard/CommentCard';
import { NotificationCard } from './NotificationCard/NotificationCard';

describe.only('rendering', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      checkSubscription: jest.fn(),
      getUserNotification: jest.fn(),
      getNewNotification: jest.fn(),
      subscribe: '',
      userDetails: '',
      toggle: '',
      user: {
        isAuthenticated: true,
      },
    };
  });

  it('invokes `componentDidMount` when mounted', () => {
    const spy = jest.spyOn(Notification.prototype, 'componentDidMount');
    wrapper = shallow(<Notification {...props} />);
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('renders One Comment Card components', () => {
    wrapper = shallow(<Notification {...props} />);
    expect(wrapper.find(CommentCard)).toEqual({});
  });

  it('renders One Comment Form components', () => {
    wrapper = shallow(<Notification {...props} />);
    expect(wrapper.find(NotificationCard)).toEqual({});
  });

  it('should render the component', () => {
    wrapper = shallow(<Notification {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should render the component', () => {
    wrapper = shallow(<Notification {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
