import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';
import {connectToWebsocket} from '../actions';

const store = createStore(appReducer, applyMiddleware(thunk));

store.dispatch(connectToWebsocket());

export default store;
