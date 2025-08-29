import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Book } from "lucide-react";

const CourseContent = () => {
  const levels = [
    {
      level: "Beginner",
      title: "Asoslarni mukammal egallash",
      duration: "8 hafta",
      color: "bg-level-beginner",
      textColor: "text-white",
      modules: [
        "Ingliz alifbosi va tovush tizimi",
        "Asosiy grammatika qoidalari",
        "Kundalik hayot lug'ati (500+ so'z)",
        "Oddiy gaplar tuzish",
        "O'zini tanishtirish va tanishish",
        "Vaqt, sana, raqamlar",
        "Oila va do'stlar haqida gaplashish",
        "Asosiy savollar va javoblar"
      ],
    },
    {
      level: "Elementary → Intermediate",
      title: "Amaliy til ko'nikmalarini rivojlantirish",
      duration: "10 hafta",
      color: "bg-level-intermediate",
      textColor: "text-white",
      modules: [
        "Murakkab grammatik tuzilmalar",
        "Professional lug'at (1000+ so'z)",
        "Telefon va email yozish",
        "Prezentatsiya tayyorlash",
        "Nashr va maqolalar o'qish",
        "Audio va video materiallar",
        "Ijtimoiy vaziyatlarda muloqot",
        "Kelajak rejalari va orzular"
      ],
    },
    {
      level: "Intermediate → Advanced",
      title: "Professional darajaga yetish",
      duration: "12 hafta",
      color: "bg-level-advanced",
      textColor: "text-white",
      modules: [
        "Business English va professional lug'at",
        "Idioma va frazeologik so'zlar",
        "Argumentatsiya va munozara",
        "Academic writing va research",
        "Madaniyatlararo muloqot",
        "IELTS/TOEFL strategiyalari",
        "Interview va networking",
        "Native speaker darajasida gaplashish"
      ],
    },
  ];

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Interaktiv darslar",
      description: "Jonli muloqot va amaliy mashqlar"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Moslashuvchan jadval",
      description: "Sizning vaqtingizga mos keladi"
    },
    {
      icon: <Book className="w-5 h-5" />,
      title: "Zamonaviy materiallar",
      description: "Eng so'nggi o'qitish metodikalari"
    },
  ];

  return (
    <section id="course-content" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kurs <span className="text-primary">tarkibi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har bir bosqich alohida maqsadga yo'naltirilgan va amaliy natijalar beradi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {levels.map((level, index) => (
            <Card key={index} className="group hover:shadow-course transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <CardHeader className={`${level.color} ${level.textColor} p-6`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {level.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="w-4 h-4" />
                    {level.duration}
                  </div>
                </div>
                <CardTitle className="text-xl">{level.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  {level.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none bg-background shadow-course">
              <CardContent className="p-8">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;