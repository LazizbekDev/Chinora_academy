import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, GraduationCap, MapPin, Building, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoIsThisFor = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const targetAudience = [
    { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Chet davlatlariga sayohat qiladiganlar uchun", description: "Xalqaro kompaniyalarda ishlash, portfolio ko'rsatish va professional muloqot uchun" },
    { icon: <GraduationCap className="w-8 h-8 text-level-intermediate" />, title: "Oʻz ingliz tili darajasini yaxshilamoqchi boʻlganlar uchun", description: "IELTS, TOEFL tayyorlash, xorijda ta'lim olish va stipendiya yutish uchun" },
    { icon: <MapPin className="w-8 h-8 text-accent-red" />, title: "Ingliz tili oʻrganishni boshlamoqchilarga", description: "Dunyoni aylanish, boshqa madaniyatlar bilan tanishish va erkin muloqot uchun" },
    { icon: <Building className="w-8 h-8 text-primary-light" />, title: "Yollanma xodimlar, mutaxassislar va ekspertlar uchun", description: "Xalqaro biznes, hamkorlik va investitsiya imkoniyatlarini kengaytirish uchun" },
    { icon: <Users className="w-8 h-8 text-level-beginner" />, title: "Ingliz tilini yaxshi biladigan, lekin talaffuzni yaxshilab, Advanced darajagacha chiqmoqchi boʻlganlar uchun", description: "Farzandlarga yordam berish, oilaviy sayohatlar va madaniy boyitish uchun" },
    { icon: <Heart className="w-8 h-8 text-level-advanced" />, title: "Talabalar va abituriyentlarga", description: "O'z-o'zini takomillashtirish, yangi imkoniyatlar ochish va intellektual o'sish uchun" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1024 && scrollRef.current) {
        const cards = scrollRef.current;
        const totalWidth = cards.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollAmount = Math.max(0, totalWidth - windowWidth + 32); // Add padding buffer

        gsap.to(cards, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true, // Recalculate on resize
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="who-for" className="relative bg-background py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground font-tarsk gradient-text">
          Bu kurs <span className="text-primary">kimlar uchun?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Ingliz tilini o'rganishda maqsadi aniq bo'lgan har bir kishi uchun maxsus tuzilgan dastur
        </p>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        {targetAudience.map((item, index) => (
          <Card key={index} className="group bg-card border-none shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 text-center space-y-4 relative">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground font-tarsk">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed absolute bottom-0">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block relative max-w-full overflow-x-hidden">
        <div ref={scrollRef} className="flex gap-6 px-6">
          {targetAudience.map((item, index) => (
            <Card
              key={index}
              className="min-w-[300px] flex-shrink-0 bg-card border border-foreground/20 rounded-lg p-4"
            >
              <CardContent className="flex flex-col justify-between h-full p-0 pb-2">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center ml-4 mt-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="pl-4">
                    <h3 className="text-xl font-bold text-foreground font-tarsk leading-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="pl-4 pb-0">
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;