import { createStore, combineReducers } from 'redux';

import AccountReducer from '../reducers/';

import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  states: AccountReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
