import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-6 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-lg">
      {/* Footer Text */}
      <p className="mb-4 md:mb-0 text-lg font-semibold tracking-wide">
        EX. &copy; {new Date().getFullYear()} | All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex space-x-6">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transform hover:scale-110 transition-all duration-300"
        >
          <FaFacebook size={28} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
        >
          <FaXTwitter size={28} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
        >
          <FaInstagram size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
