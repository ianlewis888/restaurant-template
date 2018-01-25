export const SHOW_MODAL = "SHOW_MODAL";
export const DISMISS_MODAL = "DISMISS_MODAL";

export function showModal(formData) {
  return {
    type: SHOW_MODAL,
    payload: {
      showModal: true,
      formData: formData
    }
  }
}

export function dismissModal() {
  return {
    type: DISMISS_MODAL,
    payload: {
      showModal: false,
      formData: null
    }
  }
}
