import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe, GraduationCap } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import instructorImage from "/images/hero.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutInstructor = () => {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const achievements = [
    { icon: <Users className="w-5 h-5" />, text: "500+ muvaffaqiyatli shogird" },
    { icon: <Globe className="w-5 h-5" />, text: "8 yillik tajriba" },
    { icon: <Award className="w-5 h-5" />, text: "Dimlom sertifikatlar" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "98% muvaffaqiyat darajasi" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Professional jahon standartiga mos metodika" },
  ];

  const stats = [
    { number: "200,000+", label: "Instagram izdoshlari" },
    { number: "100,000+", label: "YouTube obunachilar" },
    { number: "30,000+", label: "Telegram a'zolar" },
    { number: "100%", label: "Natija kafolati" },
    { number: "15+", label: "Master-klasslar" },
    { number: "50+", label: "Moda loyihalari" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".instructor-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".instructor-image",
          start: "top 80%",
        },
      });

      gsap.from(".instructor-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".instructor-heading",
          start: "top 85%",
        },
      });

      gsap.from(".achievement-item", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".achievement-item",
          start: "top 90%",
        },
      });

      gsap.from(".stats-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-card",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground instructor-heading">
              Kurs asoschisi <span className="text-primary">Ibodullayeva Chinora</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              8 yildan ortiq tajribaga ega tikuvchilik va dizaynerlik ustozasi.
              O‘zining noyob metodikasi va Müller andazalari orqali yuzlab
              shogirdlarni moda sanoatida muvaffaqiyatga yetaklagan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative instructor-image">
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Skeleton shimmer */}
                {!loaded && (
                  <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/60 to-muted animate-[shimmer_2s_infinite] bg-[length:200%_100%]" />
                )}

                <LazyLoadImage
                  src={instructorImage}
                  alt="Ibodullayeva Chinora"
                  className={`w-full h-auto object-cover transition-all duration-700 ease-out 
                    ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  afterLoad={() => setLoaded(true)}
                />

                {/* Luxury gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-accent-red text-accent-red-foreground p-4 rounded-full shadow-xl">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Professional tikuvchilik va dizaynerlik ustozasi
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Chinora opa tikuvchilikdan tashqari professional tafakkur va
                  bozor strategiyalarini o‘rgatadi. Uning metodikasi shogirdlarga
                  o‘z moda brendlarini yaratish va xalqaro bozorda raqobatlashish
                  imkonini beradi.
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 w-[48%] achievement-item">
                      <div className="text-primary">{achievement.icon}</div>
                      <span className="text-foreground font-medium text-sm">
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <Card className="w-full border-t border-border pt-6 stats-card bg-gradient-to-r from-background via-muted/40 to-background">
                <CardContent className="p-6 w-full">
                  <h4 className="text-lg font-bold mb-4 text-foreground text-center">
                    Ijtimoiy tarmoqlarda faol
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-primary">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;
