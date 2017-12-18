import { FETCH_ALL_INITIATE, DATA_TRANSFORMATIONS, FETCH_ALL_COMPLETE, FETCH_ALL_ERROR } from '../actions/fetch-all'

function fetchAllReducer(state={ mongoData: null, loading: false }, action) {
  switch(action.type) {
    case FETCH_ALL_INITIATE:
      return { data: null, loading: true };
    case DATA_TRANSFORMATIONS:
      return { data: null, loading: true };
    case FETCH_ALL_COMPLETE:
      return { data: action.payload, loading: false };
    case FETCH_ALL_ERROR:
      return { data: null, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
}

export { fetchAllReducer };
