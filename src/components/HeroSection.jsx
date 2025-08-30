import { Plus } from "lucide-react";
import flag from "@/assets/flag.svg";

const HeroSection = () => {
  return (
    <section className="header-background min-h-screen flex items-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-white z-10 text-left">
        <h1
          style={{ fontFamily: "tarsk, sans-serif", fontSize: 51, fontWeight: 400, lineHeight: 1.4 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-8"
        >
          Ingliz tili darajangizni{" "}
          <span className="block text-white">
            3 bosqichga ko'taring <br />
            <span className="flex items-center gap-3 bg-white text-[#962527] transition-colors font-semibold text-lg rounded-full group inline-block px-4" style={{ fontSize: 51 }}>
              va Amerikancha <img src={flag} width={40} className="inline-block" />
            </span>{" "}
            <br />aksenda qo'ramasdan gapirishni boshlang!
          </span>
        </h1>

        {/* CTA Button */}
        <button className="mt-12 flex items-center gap-3 bg-[#5A1313] hover:bg-[#8B2323] transition-colors duration-300 text-white font-semibold text-lg px-8 py-4 rounded-full group">
          <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#5A1313] transition-transform duration-300 group-hover:rotate-45">
            <Plus size={18} strokeWidth={2.5} />
          </span>
          Batafil ma'lumot olish
        </button>
      </div>

      {/* Right Side Left Empty for Now */}
    </section>
  );
};

export default HeroSection;