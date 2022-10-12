import * as actionTypes from '../constants/ActionTypes';

let lastId = 0;

function universities(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_UNIVERSITY:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          country: action.payload.country,
          onLibrary: false
        }
      ];
    case actionTypes.RECEIVE_UNIVERSITIES:
      return [
        ...action.universities,
      ];
    default:
      return state;
  }
}

export default universities;
