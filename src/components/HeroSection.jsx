import { useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";

const HeroSection = () => {
  const titleRef = useRef(null);
  const highlightRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current || !highlightRef.current || !subtitleRef.current || !btnRef.current) return;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Title: yuqoridan dup + rotation
    tl.from(titleRef.current, {
      y: -120,
      rotate: -5,
      scale: 1.05,
      ease: "elastic.out(1, 0.6)",
      clearProps: "all"
    });

    // Highlight: chapdan kiradi, biroz skew bilan
    tl.from(highlightRef.current, {
      x: -200,
      skewX: 8,
      rotate: 2,
      ease: "back.out(1.7)",
      clearProps: "all"
    }, "-=0.5");

    // Subtitle: pastdan chiqadi, scale bounce bilan
    tl.from(subtitleRef.current, {
      y: 100,
      scale: 0.9,
      ease: "elastic.out(1.2, 0.5)",
      clearProps: "all"
    }, "-=0.3");

    // Button: depth effect (zoom out + rotate)
    tl.from(btnRef.current, {
      y: 80,
      scale: 0.7,
      rotate: 8,
      transformPerspective: 600,
      ease: "back.out(2)",
      clearProps: "all"
    }, "-=0.2");

    return () => tl.kill();
  }, []);


  return (
    <section className="header-background min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="flex-1 max-w-2xl text-left z-10">
        <h1
          ref={titleRef}
          style={{
            fontFamily: "tarsk, sans-serif",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6 mt-32 sm:mt-20 md:mt-0 text-foreground"
        >
          Tikuvchilik va Dizaynerlik sohasida{" "}
          <span
            ref={highlightRef}
            className="block text-primary"
          >
            0 dan{" "}
            <span className="text-[#C7A27C]">Professional darajaga</span>
            <br />
            chiqish imkoniyati!
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
        >
          CHINORA FASHION ACADEMY orqali siz 3 bosqichli shogirdlik dasturi bilan
          professionallikka erishasiz. O‘zingiz tikkan liboslaringiz orqali
          <span className="font-semibold text-primary"> yuqori daromad</span> topishni boshlang!
        </p>

        {/* CTA Button */}
        <button
          ref={btnRef}
          className="mt-10 flex items-center gap-3 bg-primary hover:bg-primary-light transition-colors duration-300 text-primary-foreground font-semibold text-lg px-6 md:px-8 py-3 md:py-4 rounded-full group shadow-md"
        >
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
