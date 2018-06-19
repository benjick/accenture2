/* eslint-disable no-console */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
import {setupWebsocket} from './actions';

const store = createStore(reducer, applyMiddleware(thunk));

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setupWebsocket());

export default store;
