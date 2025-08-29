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
    { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Kasbiy mutaxassislar", description: "Xalqaro kompaniyalarda ishlash, portfolio ko'rsatish va professional muloqot uchun" },
    { icon: <GraduationCap className="w-8 h-8 text-level-intermediate" />, title: "Talabalar", description: "IELTS, TOEFL tayyorlash, xorijda ta'lim olish va stipendiya yutish uchun" },
    { icon: <MapPin className="w-8 h-8 text-accent-red" />, title: "Sayohatchilar", description: "Dunyoni aylanish, boshqa madaniyatlar bilan tanishish va erkin muloqot uchun" },
    { icon: <Building className="w-8 h-8 text-primary-light" />, title: "Tadbirkorlar", description: "Xalqaro biznes, hamkorlik va investitsiya imkoniyatlarini kengaytirish uchun" },
    { icon: <Users className="w-8 h-8 text-level-beginner" />, title: "Oila a'zolari", description: "Farzandlarga yordam berish, oilaviy sayohatlar va madaniy boyitish uchun" },
    { icon: <Heart className="w-8 h-8 text-level-advanced" />, title: "Shaxsiy rivojlanish", description: "O'z-o'zini takomillashtirish, yangi imkoniyatlar ochish va intellektual o'sish uchun" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (window.innerWidth >= 1024) {
        const totalWidth = scrollRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollAmount = totalWidth - windowWidth;

        gsap.to(scrollRef.current, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalWidth}`,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="who-for" className="relative bg-gradient-section py-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Bu kurs <span className="text-primary">kimlar uchun?</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ingliz tilini o'rganishda maqsadi aniq bo'lgan har bir kishi uchun maxsus tuzilgan dastur
        </p>
      </div>

      {/* Mobile/tablet */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {targetAudience.map((item, index) => (
          <Card key={index} className="group hover:shadow-course transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex h-screen items-center relative">
        {/* Scrollable cards */}
        <div ref={scrollRef} className="flex gap-8 px-6">
          {targetAudience.map((item, index) => (
            <Card
              key={index}
              className="min-w-[320px] flex-shrink-0 group hover:shadow-course transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gradient-section to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gradient-section to-transparent" />
      </div>
    </section>
  );
};

export default WhoIsThisFor;
