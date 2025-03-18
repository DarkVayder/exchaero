import { useState, useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { ArrowRight } from "lucide-react";

const CurrencyConverter = () => {
  const { rates, baseCurrency, setBaseCurrency } = useContext(CurrencyContext);
  const [amount, setAmount] = useState(1);
  const [targetCurrency, setTargetCurrency] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const convertCurrency = () => {
    if (rates[targetCurrency]) {
      setConvertedAmount((amount * rates[targetCurrency]).toFixed(2));
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6 text-black">Currency Converter</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-4 rounded-lg w-full md:w-1/3 text-xl focus:ring focus:ring-gray-800 outline-none text-black"
        />
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          className="border p-4 rounded-lg w-full md:w-1/3 text-xl bg-gray-100 focus:ring focus:ring-gray-800 text-black"
        >
          {Object.keys(rates).map((cur) => (
            <option key={cur} value={cur}>{cur.toUpperCase()}</option>
          ))}
        </select>
        <ArrowRight size={32} className="hidden md:block text-black" />
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          className="border p-4 rounded-lg w-full md:w-1/3 text-xl bg-gray-100 focus:ring focus:ring-gray-800 text-black"
        >
          {Object.keys(rates).map((cur) => (
            <option key={cur} value={cur}>{cur.toUpperCase()}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={convertCurrency} 
        className="mt-6 w-full max-w-xs bg-black text-white py-4 rounded-lg font-semibold text-xl hover:bg-gray-900 transition"
      >
        Convert
      </button>
      {convertedAmount && (
        <p className="mt-6 text-center text-xl font-medium bg-gray-100 p-4 rounded-lg text-black">
          Converted: <span className="font-bold">{convertedAmount} {targetCurrency.toUpperCase()}</span>
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
