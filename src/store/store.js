import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { fetchAllReducer } from '../reducers/fetch-all';
import { dataReducer } from '../reducers/data-reducer';
import { reservationFormReducer } from '../reducers/reservation-form';

const reducers = combineReducers({
  data: dataReducer,
  mongoData: fetchAllReducer,
  reservationForm: reservationFormReducer
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
