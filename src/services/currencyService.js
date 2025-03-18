import axios from "axios";

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

export const fetchExchangeRates = async (baseCurrency = "usd") => {
  try {
    const response = await axios.get(`${BASE_URL}/currencies/${baseCurrency}.json`);
    return response.data[baseCurrency];
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
