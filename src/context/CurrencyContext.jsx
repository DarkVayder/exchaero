import { createContext, useState, useEffect } from "react";
import { fetchExchangeRates } from "../services/currencyService";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("usd");

  useEffect(() => {
    const getRates = async () => {
      const data = await fetchExchangeRates(baseCurrency);
      if (data) setRates(data);
    };
    getRates();
  }, [baseCurrency]);

  return (
    <CurrencyContext.Provider value={{ rates, baseCurrency, setBaseCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
