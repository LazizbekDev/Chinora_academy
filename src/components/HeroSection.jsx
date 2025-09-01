import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: .7, ease: "power3.out" } });

      // Title
      tl.fromTo(
        ".hero-title",
        { y: -120, rotate: -5, opacity: 1, scale: 1.05 },
        { y: 0, rotate: 0, opacity: 1, scale: 1, ease: "elastic.out(1, 0.6)" }
      );

      // Highlight
      tl.fromTo(
        ".hero-highlight",
        { x: -200, skewX: 8, rotate: 2, opacity: 0 },
        { x: 0, skewX: 0, rotate: 0, opacity: 1, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Subtitle
      tl.fromTo(
        ".hero-subtitle",
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, ease: "elastic.out(1.2, 0.5)" },
        "-=0.3"
      );

      // Button
      tl.fromTo(
        ".hero-btn",
        { x: -500, skewX: 7, rotate: 2, z: -200 },
        { x: 0, skewX: 0, rotate: 0, z: 0, ease: "back.out(1.5)" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      className="header-background min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="flex-1 max-w-2xl text-left z-10">
        <h1
          className="hero-title text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6 mt-32 sm:mt-20 md:mt-0 text-foreground"
          style={{
            fontFamily: "tarsk, sans-serif",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          Tikuvchilik va Dizaynerlik sohasida{" "}
          <span className="hero-highlight block text-primary">
            0 dan <span className="text-[#C7A27C]">Professional darajaga</span>
            <br />
            chiqish imkoniyati!
          </span>
        </h1>

        <p className="hero-subtitle text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
          CHINORA FASHION ACADEMY orqali siz 3 bosqichli shogirdlik dasturi bilan
          professionallikka erishasiz. O‘zingiz tikkan liboslaringiz orqali
          <span className="font-semibold text-primary"> yuqori daromad</span>{" "}
          topishni boshlang!
        </p>

        <button className="hero-btn mt-10 flex items-center gap-3 bg-primary hover:bg-primary-light transition-colors duration-300 text-primary-foreground font-semibold text-lg px-6 md:px-8 py-3 md:py-4 rounded-full group shadow-md">
          <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary-foreground text-primary transition-transform duration-300 group-hover:rotate-45">
            <Plus size={18} strokeWidth={2.5} />
          </span>
          Batafsil ma'lumot olish
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
