const configureLocalStorage = {
  setAuthUser(token) {
    localStorage.setItem('access-token', token);
  },
};

export default configureLocalStorage;
