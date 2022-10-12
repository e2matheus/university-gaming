import * as actionTypes from '../constants/ActionTypes';

function toast(state = { type: 'info', message: 'Hello', isVisible: false }, action) {
  switch (action.type) {
    case actionTypes.SHOW_TOAST_MESSAGE:
      return {
        ...state,
        ...{
          type: action.toastType,
          message: action.message,
          isVisible: action.isVisible,
        }
      };
    case actionTypes.CLOSE_TOAST_MESSAGE:
      return {
        ...state,
        ...{
          isVisible: action.shouldShowToast,
        }
      };
    default:
      return state;
  }
}

export default toast;
