import { SHOW_MODAL, DISMISS_MODAL } from '../actions/reservation-form';

function reservationFormReducer(state={ showModal: false, formData: null }, action) {
  switch(action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        ...action.payload
      };
    case DISMISS_MODAL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export { reservationFormReducer };
