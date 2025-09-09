import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Sparkles } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const CourseContent = () => {
  const levels = [
    {
      level: "Boshlang‘ich",
      title: "Asosiy tikuvchilik ko‘nikmalari",
      duration: "8 hafta",
      color: "bg-primary",
      textColor: "text-white",
      modules: [
        {
          title: "Bolalar va kattalar ssos andazasi va uni qo'llash",
          subModules: [
            "Bolalardan o'lcham olish va bolalar asos andazasini tayyorlash.",
            "Bolalar uchun asos andazadan foydalanib koketkali libos bichib tikish.",
            "Standart va nostandart qomatli ayollardan o'lcham olish sirlari.",
            "Qolibdek ayollar asos andazasini tayyorlash",
            "Asos andazadan foydalanib primoy ko'ylak bichib tikish.",
          ]
        },
        {
          title: "Chok turlari",
          subModules: []
        },
        {
          title: "Yeng moduli",
          subModules: [
            "Oson usulda yeng tayyorlash texnikasi",
            "Qolibdek yeng asosini tayyorlash",
            "Yeng asosini matoga qo'yib bichish va tikish. Yengni proymaga o'rnatish",
            "Lola yeng va balon yeng modellashtirish va bichib tikish",
            "o'zbekcha kostyum yoqa konstruksiyasi, bichib tikish texnologiyasi",
            "Aylana yoqa konstruksiyasi va bichib tikish texnologiyasi",
            "Mujskoy rubashka yoqa"
          ]
        },
        {
          title: "Yoqalar moduli",
          subModules: [
            "o'zbekcha kostyum yoqa konstruksiyasi, bichib tikish texnologiyasi",
            "Aylana yoqa konstruksiyasi va bichib tikish texnologiyasi",
            "Mujskoy rubashka yoqa"
          ]
        },
        {
          title: "Modellashtirish va amaliy mashg'ulotlar",
          subModules: [
            "o'zbekcha koketkali ko'ylak bichib tikish.",
            "6 klenli ko'ylak bichib tikish texnologiyasi",
            "Kilot, shalvar, lozim bichib tikish texnologiyasi.",
            "abaya bichib tikish texnologiyasi"
          ]
        },
        {
          title: "Murakkab bichimli liboslar bichish",
          subModules: [
            "klassik shim andazasini tayyorlash",
            "klassik shim bichib tikish",
            "kostyum uchuna andaza tayyorlash",
            "klassik kostyum bichib tikish."
          ]
        },
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
        {
          title: "Jahon standartidagi bazaviy asoslar konstruksiyasi va ulardan texnikas",
          subModules: [
            "Ayollar qomatida toʻg'ri o'lcham olish sirlari: Standart va nostandart qommatdan o'lcham olish",
            "2 ta o'lcham bilan mijozni ko'rmasdan razmer chiqarish",
            "Myuller metodikasi asosida tor liboslar uchun bazaviy asos tayyorlash",
            "Myuller metodikasi asosida o'rta keng va keng liboslar uchun bazaviy asos tayyorlash",
            "Korreksiya va kontrol darsi",
            "Tor libos asosidan keng libos modellashtirish",
            "Ko'krak vitechkali va ko'krak vetichkasiz 2 xil kofta bluzkalar uchun bazaviy asos andaza tayyorlash"
          ]
        },
        {
          title: "Jahon standartida tikish texnologiyalari",
          subModules: [
            "Chok turlari, to'g'ri tikish texnologiyasi",
            "Zamok turlari va ularni tikish texnologiyasi",
            "Cho'ntak turlari va ularni tikish texnologiyasi",
            "Yoqalar turlari va plankalar bilan ishlash",
            "Fazoviy yoqalar, ularning konstruksiyasi (30 xilga yaqin) va tikish texnologiyasi",
          ]
        },
        {
          title: "Modellashtirish (ayollar ko'ylagi va bluzkalar)",
          subModules: [
            "Vetichka madellashtirish nazariy va amaliy (10 xil)",
            "15 xil brend libos konstruksiyasini tayyorlash. + 1 ta amaliy dars",
            "10 xil klenli ko'ylak modellashtirish nazariy va amaliy",
            "10 xil brend libos modellashtirish + 1 ta amaliy dars",
            "10 xil bluzka modellashtirish",
            "Ro'mol yoqali va kostyum yoqali ko'ylak konstruksiyasi",
            "Ko'ylak-bruk konstruksiyasi"
          ]
        },
        {
          title: "Yeng mavzusi",
          subModules: [
            "Oson usulda qolibdek turadigan yeng asosini modellashtirish",
            "Myuller metodikasi asosida yeng andazasini qurish",
            "Yeng asosini qurishda muhim omillar va kontrol qilish",
            "Ikki chokli yenglar",
            "Yenglarni modellashtirish konstruksiyalari va kitobda ko'rsatilmagan trend yenglarni modellashtirish",
            "Yengni amaliyotda bichib tikish",
            "Yeng va proyma bog'liqligi",
            "Reglan yeng konstruksiyasi",
            "Reglan yeng bichib tikish",
            "Proymasi kengaytirilgan yeng konstruksiyasi",
            "Yaxlit yeng va ularni modellashtirsh",
          ]
        },
        {
          title: "Nostandarst qomatlar bilan ishlash",
          subModules: [
            "Ayollar qomati turlari va ularga obraz yartishi",
            "Ko'kragi katta kekkaygan gavda bilan ishlash",
            "Bukchaygan figura bilan ishlash",
            "Buksasi katta figura bilan ishlash",
            "Qorni katta figura bilan ishlash"
          ]
        },
        {
          title: "Oqshom liboslari. Drapirovka",
          subModules: [
            "Korset andaza asosini tayyorlash",
            "Klassik korset modellashtirish va bichib tikish",
            "Yelkali korset modellashtirish va bichib tikish",
            "Ko'krakdan pastda turuvchi korset modellashtirish va bichib tikish",
            "Chashkali korset",
            "Drapirovka nazariy va amaliy",
            "Ansambl va baza ko'ylak bichib tikish"
          ]
        },
        {
          title: "Dizaynerlik. Eskiz chizish",
          subModules: [
            "Dizaynerlaga xos xususiyatlar",
            "Moda etaplari",
            "Moda bilan contact",
            "Figura chizish",
            "Figura ustida libos chizish"
          ]
        },
        {
          title: "Psixologik darslar",
          subModules: [
            "Maqsad qo'yish va harakat qilish (3 ta dars)",
            "Mijozlar bilan munosabat (1 ta dars)",
            "Mijoz stilini hal qilish va o'rganish",
            "Ranglar bilan ishlash",
            "Mato fakturalari bilan tanishish",
            "Tikuvchilik sohasiga oid biznes g'oyalar",
            "Shaxsiy brend qurishni boshlash"
          ]
        },
        {
          title: "Marketing va brending asoslari",
          subModules: []
        }
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
        {
          title: "Myuller metodikasida ustki kiyimlar asosi moduli",
          subModules: []
        },
        {
          title: "Myuller metodikasida yubka va shim moduli",
          subModules: []
        },
        {
          title: "Yubka va shim amaliyotlari",
          subModules: []
        },
        {
          title: "Ustki kiyimlar uchun yeng moduli",
          subModules: []
        },
        {
          title: "Kostyum modellashtirish moduli",
          subModules: []
        },
        {
          title: "Palto modellashtirish moduli",
          subModules: []
        },
        {
          title: "Yoqalar konstruksiyalari va amaliyoti moduli",
          subModules: []
        },
        {
          title: "Astarli liboslarda nostandart figuralar bilan ishlash",
          subModules: []
        },
        {
          title: "Klassik astarli kostyumlar bichish tikish texnologiyalari",
          subModules: []
        },
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
              className={`w-full bg-white text-card-foreground border border-border rounded-xl shadow-none hover:shadow-sm hover:bg-[#fffdfb] transition-all duration-300 ${levels.length === 3 && index === levels.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''}`}
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

              <CardContent className="p-3 sm:p-6 space-y-4">
                {level.modules.map((module, mIndex) =>
                  module.subModules && module.subModules.length > 0 ? (
                    <Accordion
                      key={mIndex}
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      <AccordionItem className="border-none" value={`module-${mIndex}`}>
                        <AccordionTrigger className="text-left py-0">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{module.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-8 list-disc text-sm text-muted-foreground space-y-1">
                            {module.subModules.map((sub, sIndex) => (
                              <li key={sIndex}>{sub}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                  ) : (
                    // Agar subModules yo‘q bo‘lsa => oddiy item
                    <div key={mIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{module.title}</span>
                    </div>
                  )
                )}

                {level.bonus && (
                  <div
                    className={`flex items-start gap-3 ${!level.modules.some((m) => m.subModules && m.subModules.length > 0)
                      ? "pt-4 border-t border-border"
                      : ""
                      }`}
                  >
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
