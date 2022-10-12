import { connect } from 'react-redux';

import Toast from './Toast';

const mapStateToProps = ({ toast }) => {

  if (!toast) {
    return { type: 'error', isVisible: false };
  }

  const { type, message, isVisible } = toast;

  return {
    type,
    message,
    isVisible,
  };
};

export default connect(
  mapStateToProps,
)(Toast);
