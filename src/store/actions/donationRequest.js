import {
  UPDATE_DONATION_REQUEST_TITLE,
  UPDATE_DONATION_REQUEST_DESCRIPTION,
} from '../actionTypes';

export const updateDonationRequestTitle = (title) => (dispatch) => {
  if (title.trim() === '') return;

  dispatch({
    type: UPDATE_DONATION_REQUEST_TITLE,
    payload: title,
  });
};

export const updateDontaionRequestDescription = (description)=> (dispatch) => {
  if (description.trim() === '') return;
  dispatch({
    type: UPDATE_DONATION_REQUEST_DESCRIPTION,
    payload: description,
  });
};