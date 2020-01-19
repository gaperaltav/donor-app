import { FETCH_DONATIONS_SUCCEED } from '../actionTypes';
import api from 'services/api';

export const getDonationRequests = () => async (dispatch) => {

  const request = await api.fetchDonations();

  if (request) {
    const payload = request.data;
    dispatch({
      type: FETCH_DONATIONS_SUCCEED,
      payload: payload
    });
  }
};