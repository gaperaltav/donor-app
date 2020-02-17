import api from '../../services/api';
import {
  UPDATE_DONATION_REQUEST_TITLE,
  UPDATE_DONATION_REQUEST_DESCRIPTION,
  UPDATE_DONATION_REQUEST_BLOODTYPE,
  CREATE_DONATION_REQUEST_SUCCEED,
  RESET_DONATION_REQUEST_INITIAL_STATE,
} from '../actionTypes';

export const resetDonationRequestToinitalState = () => (dispatch) => {
  dispatch({
    type: RESET_DONATION_REQUEST_INITIAL_STATE,
    payload: null,
  });
};

export const updateDonationRequestTitle = (title) => (dispatch) => {
  dispatch({
    type: UPDATE_DONATION_REQUEST_TITLE,
    payload: title,
  });
};

export const updateDontaionRequestDescription = (description) => (dispatch) => {
  dispatch({
    type: UPDATE_DONATION_REQUEST_DESCRIPTION,
    payload: description,
  });
};

export const updateDontaionRequestBloodType = (bloodType) => (dispatch) => {
  dispatch({
    type: UPDATE_DONATION_REQUEST_BLOODTYPE,
    payload: bloodType,
  });
};

export const createDonationRequest = (donation) => async (dispatch) => {
  const payload = {
    ...donation,
    //TODO: get the doneedID by the current user
    bloodDoneeId: '5d2bc2680ef58a2f8a24d438'
  };

  const result = await api.newDonation(payload);

  if (result.data) {
    dispatch({
      type: CREATE_DONATION_REQUEST_SUCCEED,
      payload: result.data,
    });
  }
};
