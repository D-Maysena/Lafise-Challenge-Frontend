import axios from "axios";

const API_URL = "http://localhost:5566";

export const fetchAccountsById = async (accountId) => {
  const response = await axios.get(`${API_URL}/accounts/${accountId}`);
  return response.data;
};
