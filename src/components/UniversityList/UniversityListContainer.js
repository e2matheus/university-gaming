import { connect } from 'react-redux';

import { receiveUniversities } from '../../actions/universities';
import UniversityList from './UniversityList';

const mapStateToProps = state => {

  if (!state) {
    return { stateUniversities: [] };
  }

  return {
    stateUniversities: state,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUniversities: universities => {
    dispatch(receiveUniversities(universities));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UniversityList);
