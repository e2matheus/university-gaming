
let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_UNIVERSITY":
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          country: action.payload.country,
          onLibrary: false
        }
      ];
    default:
      return state;
  }
}

export default reducer;
