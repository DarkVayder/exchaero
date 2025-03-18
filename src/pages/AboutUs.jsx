const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-black text-white py-16 text-center">
        <h1 className="text-5xl font-extrabold">About Us</h1>
        <p className="mt-2 text-lg text-gray-300">
          Learn more about our mission and what we offer.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-black text-center">
          Welcome to <span className="text-gray-600">EXchaero</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Your go-to currency exchange platform providing real-time exchange rates for over 200 currencies.  
          We ensure accuracy, reliability, and ease of use for our users.
        </p>

        {/* Grid Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black">🌍 Global Reach</h3>
            <p className="text-gray-600 mt-2">
              We serve users worldwide, offering precise currency conversions for businesses, travelers, and investors.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black">🔍 Real-Time Data</h3>
            <p className="text-gray-600 mt-2">
              Our platform is updated daily with the latest exchange rates, ensuring you make informed decisions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black">🚀 Seamless Experience</h3>
            <p className="text-gray-600 mt-2">
              We prioritize speed and user-friendliness, making currency exchange effortless and accessible to all.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black">🔒 Secure & Reliable</h3>
            <p className="text-gray-600 mt-2">
              Your data is protected with top-tier security, ensuring safe transactions and a trustworthy experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-black">
            Ready to explore real-time currency exchange?
          </h3>
          <p className="text-lg text-gray-600 mt-2">Start converting today and get accurate rates instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
