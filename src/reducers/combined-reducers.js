import {combineReducers} from 'redux';
import {externalDataReducer} from './external-data';
import {dataReducer} from './data-reducer';

const reducers = combineReducers({
  data: dataReducer,
  testData: externalDataReducer
});

export default reducers;
