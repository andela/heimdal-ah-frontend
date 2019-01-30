import jwt_decode from 'jwt-decode';

const decodeToken = (user) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoic2VndW4iLCJlbWFpbCI6InVzZXJAaGVpbWRhbC5jb20iLCJpbWFnZSI6Imh0dHA6Ly90ZWxlY29tbXN1bHQubmwvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDcvYnJhZC1wcm9maWxlLXNxdWFyZS5qcGciLCJyb2xlSWQiOjIsImlhdCI6MTU0ODYzNTMxNiwiZXhwIjoxNTQ4NzIxNzE2fQ.8OoDYh8jQ0Bb8Ft8YriKvX5bm-k1bUsTjeuwCEEn7rQ';
  const decoded = jwt_decode(token);
  if (decoded.userId === user) {
    return true;
  }
  return false;
};

export default decodeToken;
