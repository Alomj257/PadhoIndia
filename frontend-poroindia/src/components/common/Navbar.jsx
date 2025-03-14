import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">Poro India</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-indigo-600 focus:outline-none"
        >
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
          <Link to="/scholarship" className="hover:text-indigo-500 transition">Scholarship</Link>
          <Link to="/events" className="hover:text-indigo-500 transition">Events</Link>
          <Link to="/about" className="hover:text-indigo-500 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-500 transition">Contact Us</Link>
        </div>

        {/* Right Side - Login Button */}
        <div className="hidden md:block">
          <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Sliding in from Right with More Width) */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-indigo-600">
            <X size={28} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 px-8 text-lg font-medium">
          <Link to="/" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/scholarship" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Scholarship</Link>
          <Link to="/events" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/about" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/login" className="bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
