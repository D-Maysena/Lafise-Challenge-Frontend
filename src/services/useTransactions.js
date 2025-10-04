import axios from "axios";

const API_URL = "http://localhost:5566";

export const fetchTransactions = async (account_number) => {
  const response = await axios.get(
    `${API_URL}/accounts/${account_number}/transactions`
  );
  return response.data;
};

export const createTransaction = async ({
  origin,
  destination,
  amount,
  currency,
}) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, {
      origin,
      destination,
      amount: { value: amount, currency },
    });

    return response.data;
  } catch (error) {
   
    throw error;
  }
};
