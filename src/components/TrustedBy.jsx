import shopifyLogo from "../assets/shopify.png";
import clearbooksLogo from "../assets/clearbooks.png";
import vistaprintLogo from "../assets/vista.png";

const TrustedBy = () => {
  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Trusted By</h2>
      <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
        {[shopifyLogo, clearbooksLogo, vistaprintLogo].map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img src={logo} alt="Brand Logo" className="h-14 md:h-20 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
