import { Plus } from "lucide-react";
import flag from "@/assets/flag.svg"; // kerak bo'lmasa olib tashlaymiz

const HeroSection = () => {
  return (
    <section className="header-background min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-white z-10 text-left">
        <h1
          style={{
            fontFamily: "tarsk, sans-serif",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6 mt-32 sm:mt-20 md:mt-0"
        >
          Tikuvchilik va Dizaynerlik sohasida{" "}
          <span className="block text-white">
            0 dan <span className="text-[#FFD700]">Professional darajaga</span>
            <br />
            chiqish imkoniyati!
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-lg">
          CHINORA FASHION ACADEMY orqali siz 3 bosqichli shogirdlik dasturi bilan
          professionallikka erishasiz. O‘zingiz tikkan liboslaringiz orqali
          <span className="font-semibold text-white"> yuqori daromad</span> topishni boshlang!
        </p>

        {/* CTA Button */}
        <button className="mt-10 flex items-center gap-3 bg-[#5A1313] hover:bg-[#8B2323] transition-colors duration-300 text-white font-semibold text-lg px-6 md:px-8 py-3 md:py-4 rounded-full group">
          <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#5A1313] transition-transform duration-300 group-hover:rotate-45">
            <Plus size={18} strokeWidth={2.5} />
          </span>
          Batafsil ma'lumot olish
        </button>
      </div>

      {/* Right Content (Responsive image or illustration) */}
      {/* <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/images/sewing-illustration.jpg" // bu joyga tikuv mashinasi, dizaynerlik rasmi yoki kursga mos image qo'yiladi
          alt="Fashion Design"
          className="absolute bottom-0 w-[240px] md:w-[320px] lg:w-[420px] object-contain"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
