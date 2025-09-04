import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Book, Sparkles } from "lucide-react";

const CourseContent = () => {
  const levels = [
    {
      level: "Boshlang‘ich",
      title: "Asosiy tikuvchilik ko‘nikmalari",
      duration: "8 hafta",
      color: "bg-primary",
      textColor: "text-white",
      modules: [
        "Bolalar va kattalar ssos andazasi va uni qo'llash",
        "Chok turlari",
        "Yeng moduli",
        "Yoqalar moduli",
        "Modellashtirish va amaliy mashg'ulotlar",
        "Murakkab bichimli liboslar bichish",
      ],
      bonus: "Bonus:Maqsad qo'yish va rivojlanish seminari!"
    },
    {
      level: "O‘rta",
      title: "Murakkab fasonlar va dizayn",
      duration: "16 hafta",
      color: "bg-primary/90",
      textColor: "text-white",
      modules: [
        "Jahon standartidagi bazaviy asoslar konstruksiyasi va ulardan texnikas",
        "Jahon standartida tikish texnologiyalari",
        "Modellashtirish (ayollar ko'ylagi va bluzkalar)",
        "Yeng mavzusi",
        "Nostandarst qomatlar bilan ishlash",
        "Oqshom liboslari. Drapirovka",
        "Dizaynerlik. Eskiz chizish",
        "Psixologik darslar",
        "Marketing va brending asoslari",
      ],
      bonus: "Bonus modul: Shaxsiy brending va ijtimoiy tarmoqlarda marketing"
    },
    {
      level: "Yuqori",
      title: "Professional darajaga chiqish",
      duration: "10 hafta",
      color: "bg-primary/80",
      textColor: "text-white",
      modules: [
        "Myuller metodikasida ustki kiyimlar asosi moduli",
        "Myuller metodikasida yubka va shim moduli",
        "Yubka va shim amaliyotlari",
        "Ustki kiyimlar uchun yeng moduli",
        "Kostyum modellashtirish moduli",
        "Palto modellashtirish moduli",
        "Yoqalar konstruksiyalari va amaliyoti moduli",
        "Astarli liboslarda nostandart figuralar bilan ishlash",
        "Klassik astarli kostyumlar bichish tikish texnologiyalari"
      ],
      bonus: "Palto bichish tikish texnologiyalari"
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
        <div className="grid gap-6 max-w-7xl mx-auto [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {levels.map((level, index) => (
            <Card
              key={index}
              className={`group w-full bg-white text-card-foreground border border-border rounded-xl shadow-none hover:shadow-sm hover:bg-[#fffdfb] transition-all duration-300 ${levels.length === 3 && index === levels.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''}`}
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

              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  {level.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{module}</span>
                    </div>
                  ))}
                </div>

                {level.bonus && (
                  <div className="flex items-start gap-3 pt-4 border-t border-border">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground font-semibold">
                      {level.bonus}
                    </span>
                  </div>
                )}
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
