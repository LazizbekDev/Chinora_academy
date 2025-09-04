import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Kim uchun", id: "who-for" },
    { name: "Metodning avtori", id: "about" },
    { name: "Programma", id: "course-content" },
    { name: "Narxi", id: "pricing" },
    { name: "Ko'p savollar", id: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // navbar balandligi (80px)
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false); // mobile menu yopiladi
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled
        ? "bg-primary shadow-md"
        : "bg-gradient-to-b from-[#EADBCF]/80 to-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          {/* Logo */}
          <div className="flex flex-col leading-tight select-none">
            <img src={isScrolled ? '/logo/chinora-secondary.svg' : '/logo/chinora-main.png'} width={80} className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => handleScroll(link.id)}
                className={`hover:text-[#C7A27C] transition-colors ${isScrolled ? "text-[hsl(var(--secondary))]" : "text-[hsl(var(--secondary-foreground))]"
                  }`}
              >
                {link.name}
              </button>
            ))}

            {/* START DATE badge */}
            <a href="#" className="flex items-center space-x-2 px-3 py-1 rounded-md">
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1">
                  <span
                    className={`w-3 h-3 rounded-full ${isScrolled ? "bg-secondary" : "bg-primary"
                      }`}
                  />
                  <span
                    className={`font-semibold ${isScrolled ? "text-secondary" : "text-[hsl(var(--secondary-foreground))]"
                      }`}
                  >
                    Start
                  </span>
                </span>
                <span className="text-[#C7A27C] font-medium">1 July</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
            >
              <Menu size={32} className={`font-semibold ${isScrolled ? "text-white" : "text-[hsl(var(--secondary-foreground))]"
                }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#EADBCF] text-[hsl(var(--secondary-foreground))] transform transition-all duration-300 ease-in-out 
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} 
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[hsl(var(--secondary-foreground))]"
        >
          <X size={32} />
        </button>

        <div className="mt-20 space-y-6 px-6 text-lg">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScroll(link.id)}
              className="block hover:text-[#C7A27C] transition-colors"
            >
              {link.name}
            </button>
          ))}

          {/* Start date mobile */}
          <div className="pt-4 border-t border-[#C7A27C]/30 mt-6">
            <span className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#C7A27C]" />
              <span className="font-semibold">Start</span>
              <span className="text-[#C7A27C]">1 July</span>
            </span>
          </div>

          <a
            href="#"
            className="block bg-[#C7A27C] text-white rounded-md px-4 py-2 text-center hover:bg-[#C7A27C]/90 transition-colors mt-6 font-semibold"
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