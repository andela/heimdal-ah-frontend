const configureLocalStorage = {
  setAuthUser(token) {
    localStorage.setItem('isAuthenticated', true);
    localStorage.setItem('token', token);
  },

  removeAuthUser() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
  },
};

export default configureLocalStorage;
