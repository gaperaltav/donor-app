import { UPDATE_DONATION_REQUEST_TITLE } from "../actionTypes";


export const updateDonationrequestTitle = (title) => (dispatch) => {
  if (title.trim() === "") return;

  dispatch({
    type: UPDATE_DONATION_REQUEST_TITLE,
    payload: title,
  });
};