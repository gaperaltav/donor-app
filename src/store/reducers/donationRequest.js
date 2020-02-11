import * as actions from '../actionTypes';

const initalState = {
  meta: null,
  data: {
    title: '',
    description: '',
  }
};

const donationRequest = (state = initalState, action) => {
  switch (action.type) {
    case actions.UPDATE_DONATION_REQUEST_TITLE:
      return {
        ...state,
        data: {
          ...state.data,
          title: action.payload,
        }
      };

      case actions.UPDATE_DONATION_REQUEST_DESCRIPTION: 
      return {
        ...state,
        data: {
          ...state.data,
          description: action.payload,
        }
      };
    default:
      break;
  }
  return state;
};


export default donationRequest;