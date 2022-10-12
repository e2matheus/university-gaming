import { connect } from 'react-redux';

import { closeMessage } from '../../actions/toast';
import UniversityDetails from './UniversityDetails';

const mapDispatchToProps = dispatch => ({
  closeToast: () => {
    dispatch(closeMessage());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(UniversityDetails);
