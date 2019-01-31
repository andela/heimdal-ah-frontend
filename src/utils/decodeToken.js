import jwtDecode from 'jwt-decode';

const decodeToken = (user) => {
  const token = localStorage.getItem('access-token');
  if (!token) {
    return false;
  }
  const decoded = jwtDecode(token);
  if (decoded.userId === user) {
    return true;
  }
  return false;
};

export default decodeToken;
