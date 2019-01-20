import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducer from '../reducers/rootReducer';

const middleware = [thunk];
const configureStore = () => createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default configureStore;
