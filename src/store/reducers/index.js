import { combineReducers } from 'redux';
import donationList from './donationList';
import donationRequest from './donationRequest';

export default combineReducers({
  donationList,
  donationRequest,
});