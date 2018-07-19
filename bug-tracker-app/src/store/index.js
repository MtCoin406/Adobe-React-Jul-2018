import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from './middlewares/logger';
import func from './middlewares/func';

let appStore = createStore(rootReducer, applyMiddleware(logger, func));

export default appStore;