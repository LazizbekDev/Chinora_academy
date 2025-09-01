import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Book, Sparkles } from "lucide-react";

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

  return (
    <section id="course-content" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Kurs <span className="text-primary">tarkibi</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Har bir bosqich alohida maqsadga yo'naltirilgan va amaliy natijalar beradi
          </p>
        </div>

        {/* Course Levels */}
        <div className="grid gap-10 max-w-7xl mx-auto [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {levels.map((level, index) => (
            <Card
              key={index}
              className={`group w-full bg-[#FCF7F3] text-card-foreground border border-border rounded-xl shadow-sm hover:shadow-lg hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2 ${levels.length === 3 && index === levels.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''}`}
            >
              <CardHeader className={`${level.color} ${level.textColor} p-6`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30"
                  >
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
      </div>
    </section>
  );
};

export default CourseContent;
