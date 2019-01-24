const configureLocalStorage = {
  setAuthUser(token) {
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('access-token', token);
  },

  removeAuthUser() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('access-token');
  },
};

export default configureLocalStorage;
