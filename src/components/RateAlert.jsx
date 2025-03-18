import { ArrowRight } from "lucide-react";

const RateAlert = () => {
  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center">
      <div className="bg-white px-6 py-10 md:px-12 md:py-14 rounded-xl shadow-2xl text-center max-w-4xl w-full mx-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Stay Updated with Rate Alerts
        </h2>
        <p className="text-base md:text-lg text-gray-700 mt-3">
          Get notified when your preferred exchange rate is available.
        </p>
        <button className="mt-6 flex items-center mx-auto bg-black text-white px-6 py-3 md:py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
          Learn More
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default RateAlert;
