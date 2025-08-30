import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Globe } from "lucide-react";
import instructorImage from "@/assets/jacob-instructor.jpg";

const AboutInstructor = () => {
  const achievements = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "1700+ muvaffaqiyatli o'quvchi",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "8 yillik xalqaro tajriba",
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "TESOL sertifikati",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "95% o'quvchilar muvaffaqiyat ko'rsatkichi",
    },
  ];

  const stats = [
    { number: "350,000+", label: "Instagram izdoshlari" },
    { number: "50,000+", label: "YouTube obunachilar" },
    { number: "25,000+", label: "Telegram a'zolar" },
    { number: "100%", label: "Natija kafolati" },
  ];

  return (
    <section id="about" className="pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Sizning ustoz <span className="text-primary">Mr. Jacob</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8 yillik xalqaro tajriba va minglab muvaffaqiyatli o'quvchilar bilan isbotlangan metodika
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-course">
                <img 
                  src={instructorImage} 
                  alt="Mr. Jacob - English Instructor"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-accent-red text-accent-red-foreground p-4 rounded-full shadow-cta">
                <Award className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Professional ingliz tili o'qituvchisi
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Xalqaro kompaniyalarda 8 yil ishlagan, TESOL sertifikatiga ega Mr. Jacob 
                  sizga nafaqat grammatika va lug'at, balki real hayotda qo'llaniladigan 
                  ingliz tilini o'rgatadi.
                </p>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">{achievement.icon}</div>
                      <span className="text-foreground font-medium">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-section border-none">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4 text-foreground text-center">
                    Ijtimoiy tarmoqlarda faol
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">Business English</Badge>
                <Badge variant="secondary" className="px-3 py-1">IELTS Preparation</Badge>
                <Badge variant="secondary" className="px-3 py-1">Conversational Practice</Badge>
                <Badge variant="secondary" className="px-3 py-1">Grammar Mastery</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;