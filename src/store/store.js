import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/combined-reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
