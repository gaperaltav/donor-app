import { combineReducers } from 'redux';
import donationRequests from './donationRequests';
import donationRequest from './donationRequest';

export default combineReducers({
  donationRequests,
  donationRequest,
});