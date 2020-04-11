import * as actions from '../actionTypes';
import api from 'services/api';

export const getDonationList = () => async (dispatch) => {

  const request = await api.fetchDonations();

  if (request) {
    const payload = request.data;
    dispatch({
      type: actions.FETCH_DONATIONS_SUCCEED,
      payload: payload
    });
  }
};

export const resetDonationList = () => async (dispatch) => {
  dispatch({
    type: actions.RESET_DONATIONS_INITIAL_STATE,
    payload: null,
  });
};