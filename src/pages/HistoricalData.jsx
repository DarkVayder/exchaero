import { useState, useEffect, useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import axios from "axios";

const HistoricalData = () => {
  const { baseCurrency } = useContext(CurrencyContext);
  const [historicalData, setHistoricalData] = useState([]);
  const [targetCurrency, setTargetCurrency] = useState(""); 
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [error, setError] = useState(null);

  // Load saved currency preference from localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem("favoriteCurrency");
    if (savedCurrency) {
      setTargetCurrency(savedCurrency);
    } else {
      setTargetCurrency("eur"); // Default to EUR if no saved preference
    }
  }, []);

  // Fetch all available currencies
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
        );
        setAllCurrencies(Object.keys(response.data)); // Store all available currencies
      } catch (err) {
        console.error("Error fetching currencies:", err);
      }
    };
    fetchCurrencies();
  }, []);

  // Fetch historical exchange rate data
  useEffect(() => {
    if (!targetCurrency) return;

    const fetchHistoricalData = async () => {
      try {
        const today = new Date();
        const dates = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(today.getDate() - i);
          return date.toISOString().split("T")[0];
        });

        const dataPromises = dates.map(async (date) => {
          try {
            const response = await axios.get(
              `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${baseCurrency}.json`
            );

            return {
              date,
              rate: response.data[baseCurrency]?.[targetCurrency] || null,
            };
          } catch (err) {
            console.error(`Error fetching data for ${date}:`, err);
            return { date, rate: null };
          }
        });

        const fetchedData = await Promise.all(dataPromises);
        const validData = fetchedData.filter(entry => entry.rate !== null);
        setHistoricalData(validData.reverse());
      } catch (err) {
        console.error("Failed to fetch historical data:", err);
        setError("Failed to load historical data. Please try again later.");
      }
    };

    fetchHistoricalData();
  }, [baseCurrency, targetCurrency]);

  // Save selected currency preference to localStorage
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    setTargetCurrency(newCurrency);
    localStorage.setItem("favoriteCurrency", newCurrency);
  };

  return (
    <div className="p-6 md:p-8 bg-white shadow-lg rounded-xl w-full max-w-4xl mx-auto mt-8 z-0 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center">
        {baseCurrency.toUpperCase()} to {targetCurrency.toUpperCase()} Exchange Rate (Last 7 Days)
      </h2>

      {/* Currency Selection Dropdown */}
      <div className="mb-4 flex justify-center">
        <label className="text-lg font-semibold text-gray-700 mr-3">Select Currency:</label>
        
        <select
          value={targetCurrency}
          onChange={handleCurrencyChange}
          className="border p-2 rounded-lg bg-gray-100 focus:ring focus:ring-blue-300 text-black"
        >
          {allCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="date" tick={{ fill: "#4b5563", fontSize: 12 }} />
            <YAxis tick={{ fill: "#4b5563", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
              labelStyle={{ fontWeight: "bold", color: "#374151" }}
              itemStyle={{ color: "#2563eb" }}
            />
            <Bar dataKey="rate" fill="#2563eb" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default HistoricalData;
