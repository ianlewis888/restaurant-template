import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { fetchAllReducer } from '../reducers/fetch-all';
import { dataReducer } from '../reducers/data-reducer';

const reducers = combineReducers({
  data: dataReducer,
  testData: fetchAllReducer
});

const loggerMiddleware = createLogger();

export const store = createStore(
  reducers,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
