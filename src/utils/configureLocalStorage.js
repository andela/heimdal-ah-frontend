const configureLocalStorage = {
  setAuthUser(token) {
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('access-token', token);
  },
};

export default configureLocalStorage;
