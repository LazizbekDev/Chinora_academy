// src/components/CourseBenefits.jsx
import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  Zap,
  Users,
  ShieldCheck,
  Clock,
  CheckCircle,
  CreditCard,
  Phone,
  Send,
  Mail,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CourseBenefits = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const benefits = [
    {
      icon: <Scissors className="w-6 h-6 text-primary" />,
      title: "Amaliy mashg‘ulotlar",
      description: "Har bir darsda o‘z qo‘lingiz bilan libos tikasiz.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Zamonaviy texnikalar",
      description: "Eng so‘nggi fashion va tikuvchilik usullari.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Mentor va qo‘llab-quvvatlash",
      description: "Professional ustoz va jamoa yordamida tez o‘sasiz.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Sifat kafolati",
      description: "Har bir dars professional metodikaga asoslangan.",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Moslashuvchan jadval",
      description: "Sizning vaqtingizga mos tarzda qatnashasiz.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Natija kafolati",
      description: "Kursni tugatgach real liboslarni tikib chiqasiz.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = scrollRef.current;
      const totalWidth = cards.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollAmount = Math.max(0, totalWidth - windowWidth + 32);

      gsap.to(cards, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative bg-background pt-32 lg:pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground font-tarsk gradient-text">
          Nega <span className="text-primary">bizni tanlashadi?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          CHINORA FASHION ACADEMY kursi sizga real natija va professional
          yondashuvni taklif etadi.
        </p>
      </div>

      {/* Horizontal scroll cards */}
      <div className="lg:block relative max-w-full overflow-x-hidden">
        <div ref={scrollRef} className="flex gap-6 px-6">
          {benefits.map((item, index) => (
            <Card
              key={index}
              className="min-w-[280px] flex-shrink-0 group bg-gradient-section hover:bg-primary-foreground border border-foreground/20 rounded-xl p-4 transition-all duration-300 max-w-xs"
            >
              <CardContent className="flex flex-col justify-between h-full p-0 pb-2">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center ml-4 mt-4">
                    {item.icon}
                  </div>
                  <div className="pl-4">
                    <h3 className="text-lg font-bold text-foreground font-tarsk leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="pl-4 pb-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
