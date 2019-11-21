import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { notesReducer } from '../reducers/CrudReducer';

export default createStore(notesReducer, applyMiddleware(thunk, logger));
