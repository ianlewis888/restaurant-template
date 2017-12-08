import { TEST_FETCH_INITIATE, TEST_FETCH_COMPLETE, TEST_FETCH_ERROR } from '../actions/external-data'

function externalDataReducer(state={ testData: null, loading: false }, action) {
  switch(action.type) {
    case TEST_FETCH_INITIATE:
      return { testData: null, loading: true };
    case TEST_FETCH_COMPLETE:
      return { testData: action.payload, loading: false };
    case TEST_FETCH_ERROR:
      return { testData: null, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export { externalDataReducer };
