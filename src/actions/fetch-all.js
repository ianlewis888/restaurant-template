import axios from 'axios';

export const FETCH_ALL_INITIATE = "FETCH_ALL_INITIATE";
export const FETCH_ALL_COMPLETE = "FETCH_ALL_COMPLETE";
export const FETCH_ALL_ERROR = "FETCH_ALL_ERROR";

export function fetchAll() {
  return dispatch => {
    dispatch({ type: FETCH_ALL_INITIATE });
    return axios.get("http://node-express-env.333ikdz9bs.us-east-1.elasticbeanstalk.com/api/all")
      .then(results => { return results.data; })
      .then(data => dispatch(fetchAllComplete(data)))
      .catch(e => dispatch(fetchAllError(e)));
  }
}

function fetchAllComplete(data) {
  return {
    type: FETCH_ALL_COMPLETE,
    payload: data
  };
}

function fetchAllError(e) {
  return {
    type: FETCH_ALL_ERROR,
    payload: e
  };
}
