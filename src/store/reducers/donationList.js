import * as actions from '../actionTypes';

const initialState = {
  meta: null,
  data: []
};

const donationList = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DONATIONS_SUCCEED: {
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload,
        ]
      };
    }

    case actions.CREATE_DONATION_REQUEST_SUCCEED:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ]
      };

    default:
      break;
  }

  return state;
};


export default donationList;