import CurrencyConverter from "../components/CurrencyConverter";
import ExchangeRates from "../components/ExchangeRates";
import Header from "../components/Header";
import RateAlert from "../components/RateAlert";
import TrustedBy from "../components/TrustedBy";
import Reviews from "../components/Reviews";
const Home = () => {
  return (
    <div className="p-6">
      <Header />
      <CurrencyConverter />
      <ExchangeRates />
      <RateAlert />
      <TrustedBy />
      <Reviews />
    </div>
  );
};

export default Home;