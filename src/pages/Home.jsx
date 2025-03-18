import CurrencyConverter from "../components/CurrencyConverter";
import ExchangeRates from "../components/ExchangeRates";
import Header from "../components/Header";
import RateAlert from "../components/RateAlert";
import TrustedBy from "../components/TrustedBy";
const Home = () => {
  return (
    <div className="p-6">
      <Header />
      <CurrencyConverter />
      <ExchangeRates />
      <RateAlert />
      <TrustedBy />
    </div>
  );
};

export default Home;