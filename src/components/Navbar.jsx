import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gradient-to-b from-[#962527] to-[#962527]' : 'bg-gradient-to-b from-[#962527]/70 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <span className="text-white text-2xl font-bold">Jcb.English</span>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Kim uchun</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Metodning avtori</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Programma</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Narxi</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Ko'p savollar</a>

            {/* START DATE badge */}
            <a
              href="#"
              className="flex items-center space-x-2 px-3 py-1 rounded-md transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isScrolled ? "bg-white" : "bg-[#962527]"
                    }`}
                  />
                  <span
                    className={`${
                      isScrolled ? "text-white" : "text-black"
                    } font-semibold`}
                  >
                    Start
                  </span>
                </span>
                <span className="text-white font-medium">1 July</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white focus:outline-none"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black text-white transform transition-all duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} 
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={32} />
        </button>

        <div className="mt-20 space-y-6 px-6 text-lg">
          <a href="#" className="block hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Kim uchun</a>
          <a href="#" className="block hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Metodning avtori</a>
          <a href="#" className="block hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Programma</a>
          <a href="#" className="block hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Narxi</a>
          <a href="#" className="block hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Ko'p savollar</a>

          {/* Start date mobile */}
          <div className="pt-4 border-t border-gray-700 mt-6">
            <span className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-600" />
              <span className="font-semibold">Start</span>
              <span className="text-gray-300">1 July</span>
            </span>
          </div>

          <a
            href="#"
            className="block bg-primary text-white rounded-md px-4 py-2 text-center hover:bg-primary/80 transition-colors mt-6"
            onClick={() => setIsOpen(false)}
          >
            Batafsil ma'lumot olish
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;