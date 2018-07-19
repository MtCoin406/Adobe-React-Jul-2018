import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

//import logger from './middlewares/logger';
//import func from './middlewares/func';
import defaultLogger from 'redux-logger';
import thunk from 'redux-thunk'

let appStore = createStore(rootReducer, applyMiddleware(defaultLogger, thunk));

export default appStore;