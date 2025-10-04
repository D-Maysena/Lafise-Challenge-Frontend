import axios from "axios";

const API_URL = "http://localhost:5566";

export const fetchUserById = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};
