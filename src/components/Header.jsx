const Header = () => {
  return (
    <header className="text-center py-10 md:py-16 bg-gray-100 shadow-md">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black animate-fade-in">
        Exchange Rate Currency Converter
      </h1>
      <p className="text-base md:text-lg text-gray-600 font-semibold mt-2 md:mt-3 animate-fade-in delay-100">
        Check live foreign currency exchange rates all over the world!
      </p>
    </header>
  );
};

export default Header;
