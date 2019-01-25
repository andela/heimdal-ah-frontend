import { toastr as feedback } from 'react-redux-toastr';

const Alert = ({ type, title, message }) => {
  if (type === 'warning') {
    return (feedback.warning(title, message));
  }
  return feedback.success(title, message);
};

export default Alert;
