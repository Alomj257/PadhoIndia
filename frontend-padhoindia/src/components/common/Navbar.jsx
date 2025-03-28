import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";  // Importing logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 left-0 w-full z-50">  {/* Removed shadow */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />  {/* Logo */}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[17px] font-medium">  
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/scholarship" className="hover:text-blue-500 transition">Scholarship</Link>
          <Link to="/events" className="hover:text-blue-500 transition">Events</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact Us</Link>
        </div>

        {/* Right Side - Login Button */}
        <div className="hidden md:block">
          <Link 
            to="/login" 
            className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition" 
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-blue-600">
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 px-8 text-[17px] font-medium">
          <Link to="/" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/scholarship" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Scholarship</Link>
          <Link to="/events" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/about" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Contact Us</Link>

          {/* Login Button in Mobile Menu */}
          <Link 
            to="/login" 
            className="bg-blue-600 text-white text-center py-3 px-8 rounded-lg hover:bg-blue-700 transition" 
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
