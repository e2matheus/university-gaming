import * as actionTypes from '../constants/ActionTypes';

export function addUniversity(name, country) {
  return {
    type: actionTypes.ADD_UNIVERSITY,
    name,
    country,
  };
}

export function receiveUniversities(universities) {
  return {
    type: actionTypes.RECEIVE_UNIVERSITIES,
    universities,
  };
}
