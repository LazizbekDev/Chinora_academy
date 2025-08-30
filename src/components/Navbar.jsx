import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
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

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".menu-items",
        { x: "100%" },
        {
          x: "0%",
          duration: 0.2,
          ease: "back.out(1.7)", // 🔥 bouncing open
        }
      );
    } else {
      gsap.to(".menu-items", {
        x: "100%",
        duration: 0.6,
        ease: "back.in(1.3)", // 🔥 bouncing close
      });
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-2xl font-bold">Jcb.English</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Kim uchun</a>
            <a href="#" className="text-white hover:text-gray-300">Metodning avtori</a>
            <a href="#" className="text-white hover:text-gray-300">Programma</a>
            <a href="#" className="text-white hover:text-gray-300">Narxi</a>
            <a href="#" className="text-white hover:text-gray-300">Ko'p beriladigan savollar</a>
            <a href="#" className="text-white hover:text-gray-300">1 July</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <Menu size={35} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } menu-items`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={35} />
        </button>
        <div className="mt-16 space-y-4 px-4">
          <a href="#" className="block text-white hover:text-gray-300">Kim uchun</a>
          <a href="#" className="block text-white hover:text-gray-300">Metodning avtori</a>
          <a href="#" className="block text-white hover:text-gray-300">Programma</a>
          <a href="#" className="block text-white hover:text-gray-300">Narxi</a>
          <a href="#" className="block text-white hover:text-gray-300">Ko'p beriladigan savollar</a>
          <a href="#" className="block text-white hover:text-gray-300">1 July</a>
          <a href="#" className="block text-white hover:text-gray-300 mt-4">Batafsil ma'lumot olish</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;