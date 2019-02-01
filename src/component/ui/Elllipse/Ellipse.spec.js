/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Ellipse from './Ellipse';

describe('The MainError Component Test Suite', () => {
  it('should render the MainError component', () => {
    const wrapper = shallow(<Ellipse />);
    expect(wrapper).toMatchSnapshot();
  });
});
