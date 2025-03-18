import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white text-black flex justify-between items-center border-b border-gray-300 relative z-50">
      <Link to="/">
      <h1 className="text-lg font-bold">
        EX <span className="text-gray-500">chaero</span>
      </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 font-semibold">
        <Link to="/" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/history" className="relative group">
          Historical Data
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="relative group">
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Desktop "Get App" Button */}
      <button className="bg-black text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-800 hidden md:block">
        Get App
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="bg-black text-white px-4 py-2 rounded-md mr-4 transition-all duration-300 hover:bg-gray-800">
          Get App
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="transition-all duration-300">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu (Fixes Chart Overlapping) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6 transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
          <X size={30} />
        </button>
        <Link to="/" className="text-2xl font-semibold relative group" onClick={() => setIsOpen(false)}>
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/history" className="text-2xl font-semibold relative group" onClick={() => setIsOpen(false)}>
          Historical Data
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="text-2xl font-semibold relative group" onClick={() => setIsOpen(false)}>
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="text-2xl font-semibold relative group" onClick={() => setIsOpen(false)}>
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
