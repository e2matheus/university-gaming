import * as actionTypes from '../constants/ActionTypes';

export function showInfoMessage(message, isVisible = true) {
  return {
    type: actionTypes.SHOW_TOAST_MESSAGE,
    toastType: 'info',
    message,
    isVisible,
  };
}

export function closeMessage() {
  return {
    type: actionTypes.CLOSE_TOAST_MESSAGE,
    shouldShowToast: false,
  };
}
