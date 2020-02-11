import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
});

const fetchDonations = () => api.get('/donations');

const newDonation = (donation) => api.post('/donations', donation);

export default {
  fetchDonations,
  newDonation,
};