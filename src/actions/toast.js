import * as actionTypes from '../constants/ActionTypes';

export function messageAction(message, toastType, isVisible = true) {
  return {
    type: actionTypes.SHOW_TOAST_MESSAGE,
    toastType,
    message,
    isVisible,
  };
}

export function showInfoMessage(message, isVisible = true) {
  return messageAction(message, 'info', isVisible);
}

export function showSuccessMessage(message, isVisible = true) {
  return messageAction(message, 'success', isVisible);
}

export function showErrorMessage(message, isVisible = true) {
  return messageAction(message, 'error', isVisible);
}

export function closeMessage() {
  return {
    type: actionTypes.CLOSE_TOAST_MESSAGE,
    shouldShowToast: false,
  };
}
