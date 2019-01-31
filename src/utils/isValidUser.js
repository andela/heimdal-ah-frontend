import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('access-token');

export default () => token && [1, 2, 3].includes(jwtDecode(token).roleId);
