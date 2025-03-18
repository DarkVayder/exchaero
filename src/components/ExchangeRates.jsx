import { useContext, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import SearchBar from "./SearchBar";

const ExchangeRates = () => {
  const { rates } = useContext(CurrencyContext);
  const [filteredRates, setFilteredRates] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();

    if (!query) {
      setFilteredRates([]);
      setSearched(false);
    } else {
      const results = Object.entries(rates).filter(([currency]) =>
        currency.includes(lowerQuery)
      );
      setFilteredRates(results);
      setSearched(true);
    }
  };

  return (
    <div className="p-6 md:p-8 bg-white shadow-xl rounded-xl w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-black">
        Live Exchange Rates
      </h2>
      <SearchBar onSearch={handleSearch} />

      {searched && filteredRates.length === 0 && (
        <p className="text-gray-500 mt-4 text-base md:text-lg">No results found.</p>
      )}

      {filteredRates.length > 0 && (
        <div className="mt-4 w-full max-h-[65vh] overflow-auto border rounded-lg shadow-lg bg-gray-50 text-black">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] border-collapse">
              <thead className="sticky top-0 bg-gray-200 shadow-md">
                <tr className="text-left">
                  <th className="p-3 md:p-5 text-base md:text-lg font-semibold">Currency</th>
                  <th className="p-3 md:p-5 text-base md:text-lg font-semibold">Exchange Rate</th>
                </tr>
              </thead>
              <tbody>
                {filteredRates.map(([currency, rate], index) => (
                  <tr
                    key={currency}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    } hover:bg-gray-200 transition-all`}
                  >
                    <td className="p-3 md:p-5 font-semibold text-black">
                      {currency.toUpperCase()}
                    </td>
                    <td className="p-3 md:p-5 text-black">{rate.toFixed(4)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeRates;
