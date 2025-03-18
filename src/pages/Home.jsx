import CurrencyConverter from "../components/CurrencyConverter";
import ExchangeRates from "../components/ExchangeRates";
import Header from "../components/Header";
import RateAlert from "../components/RateAlert";

const Home = () => {
  return (
    <div className="p-6">
      <Header />
      <CurrencyConverter />
      <ExchangeRates />
      <RateAlert />
    </div>
  );
};

export default Home;