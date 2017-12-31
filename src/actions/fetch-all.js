import axios from 'axios';

export const FETCH_ALL_INITIATE = "FETCH_ALL_INITIATE";
export const DATA_TRANSFORMATIONS = "DATA_TRANSFORMATIONS";
export const FETCH_ALL_COMPLETE = "FETCH_ALL_COMPLETE";
export const FETCH_ALL_ERROR = "FETCH_ALL_ERROR";

export function fetchAll() {
  return dispatch => {
    dispatch({ type: FETCH_ALL_INITIATE });
    return axios.get("http://localhost:5000/api/all")
      .then(results => { return results.data; })
      .then(data => dispatch(dataTransformations(data)))
      .then(data => dispatch(fetchAllComplete(data.payload)))
      .catch(e => { dispatch(fetchAllError(e)); console.log(e); });
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

function dataTransformations(data) {
  const menuData = {};
  data.menuItems.forEach(function(item) {
    const name = item.menuName;
    const section = item.section;

    if (menuData[name] === undefined) {
      menuData[name] = {};
    }

    if (menuData[name][section] === undefined) {
      menuData[name][section] = [];
    }

    menuData[name][section].push(item);
  });

  const hoursData = data.hours.sort((a, b) => {
    const val = (a.index > b.index) ? 1 : -1;
    return val;
  });

  return {
    type: DATA_TRANSFORMATIONS,
    payload: {
      menus: menuData,
      blockquotes: data.blockquotes,
      contactInfo: data.contactInfo,
      hours: hoursData
    }
  };
}
