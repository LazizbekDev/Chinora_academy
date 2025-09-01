import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Book } from "lucide-react";

const CourseContent = () => {
  const levels = [
    {
      level: "Boshlang‘ich",
      title: "Asosiy tikuvchilik ko‘nikmalari",
      duration: "6 hafta",
      color: "bg-primary",
      textColor: "text-white",
      modules: [
        "Oddiy andoza chizishni o‘rganish",
        "To‘g‘ri mato tanlash va ishlov berish",
        "Oddiy liboslarni tikish (ko‘ylak, yubka)",
        "Qo‘l mehnati va mashina asoslari",
        "Tikuvchilik asbob-uskunalaridan foydalanish",
        "Tikishda eng ko‘p uchraydigan xatolarni tuzatish",
      ],
    },
    {
      level: "O‘rta",
      title: "Murakkab fasonlar va dizayn",
      duration: "8 hafta",
      color: "bg-primary/90",
      textColor: "text-white",
      modules: [
        "Murakkab fasonli andoza tuzish",
        "Karset va noan’anaviy liboslar bichish",
        "Fasonlarni o‘zgartirish va bezash",
        "O‘z dizaynini chizish va tayyorlash",
        "Brend kiyimlari uslublarini o‘rganish",
        "Amaliy mashg‘ulotlar – libos tayyorlash",
      ],
    },
    {
      level: "Yuqori",
      title: "Professional darajaga chiqish",
      duration: "10 hafta",
      color: "bg-primary/80",
      textColor: "text-white",
      modules: [
        "Individual buyurtmalar bilan ishlash",
        "Professional texnikalar va finishing",
        "Mijozlar bilan muloqot va xizmat",
        "O‘z kolleksiyasini yaratish",
        "Fashion ko‘rgazmalarga tayyorlanish",
        "Tikuvchilik biznesi va brend yaratish",
      ],
    },
  ];

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Amaliy mashg‘ulotlar",
      description: "Har bir darsda o‘z qo‘lingiz bilan libos tikasiz."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Zamonaviy texnikalar",
      description: "Eng so‘nggi fashion va tikuvchilik usullari."
    },
    {
      icon: <Book className="w-5 h-5" />,
      title: "Mentor va qo‘llab-quvvatlash",
      description: "Professional ustoz va jamoa yordamida tez o‘sasiz."
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center mb-16">
          {levels.map((level, index) => (
            <Card
              key={index}
              className="group w-full max-w-sm bg-[#FCF7F3] text-card-foreground border border-border rounded-xl shadow-sm hover:shadow-lg hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2"
            >
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

              <CardContent className="p-6 space-y-3">
                {level.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{module}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="w-full max-w-sm text-center bg-[#FCF7F3] text-card-foreground border border-border/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
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