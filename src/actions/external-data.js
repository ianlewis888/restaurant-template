import axios from 'axios';

export const TEST_FETCH_INITIATE = "TEST_FETCH_INITIATED";
export const TEST_FETCH_COMPLETE = "TEST_FETCH_COMPLETE";
export const TEST_FETCH_ERROR = "TEST_FETCH_ERROR";

export function testFetch() {
  return dispatch => {
    dispatch({ type: TEST_FETCH_INITIATE });
    return axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(results => { return results.data.body; })
      .then(data => dispatch(testFetchComplete(data)))
      .catch(e => dispatch(testFetchError(e)));
  }
}

function testFetchComplete(data) {
  return {
    type: TEST_FETCH_COMPLETE,
    payload: data
  };
}

function testFetchError(e) {
  return {
    type: TEST_FETCH_ERROR,
    payload: e
  };
}
