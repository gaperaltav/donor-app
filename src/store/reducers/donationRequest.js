import * as actions from '../actionTypes';

const initalState = {
  meta: null,
  data: {
    title: '',
    description: '',
    bloodType: '',
  }
};

const donationRequest = (state = initalState, action) => {
  switch (action.type) {
    case actions.RESET_DONATION_REQUEST_INITIAL_STATE:
      console.log(' Im in the reducer!!!!');
      console.log(' Im in the reducer!!!!');
      console.log(' Im in the reducer!!!!');
      return {
        ...initalState,
      };

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

    case actions.UPDATE_DONATION_REQUEST_BLOODTYPE:
      return {
        ...state,
        data: {
          ...state.data,
          bloodType: action.payload,
        }
      };
    default:
      break;
  }
  return state;
};


export default donationRequest;