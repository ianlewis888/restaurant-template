import { FETCH_ALL_INITIATE, FETCH_ALL_COMPLETE, FETCH_ALL_ERROR } from '../actions/fetch-all'

function fetchAllReducer(state={ testData: null, loading: false }, action) {
  switch(action.type) {
    case FETCH_ALL_INITIATE:
      return { testData: null, loading: true };
    case FETCH_ALL_COMPLETE:
      return { testData: action.payload, loading: false };
    case FETCH_ALL_ERROR:
      return { testData: null, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export { fetchAllReducer };
