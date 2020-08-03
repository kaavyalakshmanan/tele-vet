// Entry point to redux store
// Holds state tree of application
// Change state by dispatching action
// Reducer does stuff to frontend app (add, delete, etc)
// Middleware acts as bridge btwn OS/db and application
// Spread operator creates shallow clone of original object

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    ))

export default store;