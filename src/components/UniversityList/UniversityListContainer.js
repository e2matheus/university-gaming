import { connect } from 'react-redux';

import { receiveUniversities } from '../../actions/universities';
import UniversityList from './UniversityList';

const mapStateToProps = ({ universities }) => {

  if (!universities) {
    return { stateUniversities: [] };
  }

  return {
    stateUniversities: universities,
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
