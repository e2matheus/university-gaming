
export function addUniversity(name, country) {
  return {
    type: 'ADD_UNIVERSITY',
    name,
    country,
  };
}

export function receiveUniversities(universities) {
  return {
    type: 'RECEIVE_UNIVERSITIES',
    universities,
  };
}
