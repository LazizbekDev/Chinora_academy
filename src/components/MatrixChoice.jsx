import { Button } from "@/components/ui/button";
import pills from "../assets/morpheus-pills.png";
import { Pill } from "lucide-react";

const MatrixChoice = () => {
  const handleChoice = (choice) => {
    if (choice === "blue") {
      alert("Siz hozirgi holatda qolishni tanladingiz. Lekin hech qachon kech emas!");
    } else {
      const element = document.getElementById("faq");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="matrix-choice"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4 py-16"
    >
      {/* Background Morpheus image */}
      <div className="absolute inset-0">
        <img
          src={pills}
          alt="Morpheus"
          className="matrix-bg w-full h-full object-cover scale-x-[-1] opacity-30 hover:opacity-20 transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-primary/40 to-black/80" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 gap-12 max-w-7xl mx-auto">
        {/* Left side: Header + Blue Pill */}
        <div className="space-y-8 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight text-white animate-fade-in lg:pb-20">
            Sahifani <br/> yopishdan oldin...
          </h2>

          <div className="space-y-6 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-[#2086BB] flex items-center justify-center lg:justify-start gap-2">
              <Pill className="w-8 h-8" /> Ko'k tabletka
            </h3>
            <p className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed lg:mr-50">
              Hech narsa o‘zgarmaydi. Hozirgi hayotingizni davom ettirasiz. <br /><br />
              Koʻk tabletkani tanlang - hammasi oldingidek qoladi, uygʻonasiz va oldin ishongan haqiqatingizga ishonishda davom etasiz.
            </p>
          </div>
        </div>

        {/* Right side: Red Pill */}
        <div className="space-y-8 text-center lg:text-left red-pill-group lg:ml-50">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 lg:pb-12 animate-fade-in">
            Sizning oldingizda <br/>2 ta yo‘l bor:
          </h3>

          <div className="space-y-6 transform transition-transform duration-300 hover:-translate-y-1 lg:mt-35">
            <h3 className="text-3xl font-bold text-[#962527] flex items-center justify-center lg:justify-start gap-2">
              <Pill className="w-8 h-8" /> Qizil tabletka
            </h3>
            <p className="text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Haqiqatni ko‘rasiz. Ingliz tilini tez va samarali o‘rganishingiz mumkinligini bilasiz. <br /><br />
              Qizil tabletkani tanlang va sizga ingliz tilini oʻrganish qanchalik oson ekanini ko‘rsataman.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={() => handleChoice("red")}
            >
              Haqiqatni ko‘rish
            </Button>
          </div>
        </div>
      </div>

      {/* Custom styles for animations and hover effects */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .red-pill-group:hover ~ .matrix-bg {
            opacity: 0.2 !important;
          }
        `}
      </style>
    </section>
  );
};

export default MatrixChoice;