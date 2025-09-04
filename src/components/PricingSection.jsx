import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, Clock, Plus, Copy } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const pricingPlans = [
    {
      level: "Starter Pack",
      title: "Asosiy tikuvchilik ko‘nikmalari",
      originalPrice: "2,900,000",
      currentPrice: "290,000",
      duration: "8 hafta",
      color: "border-primary",
      popular: false,
      features: [
        "Bolalar va kattalar ssos andazasi va uni qo'llash",
        "Chok turlari",
        "Yeng moduli",
        "Yoqalar moduli",
        "Modellashtirish va amaliy mashg'ulotlar",
        "Murakkab bichimli liboslar bichish",
      ],
      bonus: "Bonus: Maqsad qo'yish va rivojlanish seminari!"
    },
    {
      level: "Fashion Designer",
      title: "Murakkab fason va dizayn",
      originalPrice: "6,500,000",
      currentPrice: "4,999,000",
      duration: "16 hafta",
      color: "border-primary",
      popular: true,
      features: [
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
      level: "Pro Master",
      title: "Professional darajaga chiqish",
      originalPrice: "6,500,000",
      currentPrice: "5,000,000",
      duration: "10 hafta",
      color: "border-primary",
      popular: false,
      features: [
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

  const guarantees = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sifat kafolati",
      description: "Har bir dars professional metodikaga asoslangan"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Moslashuvchan jadval",
      description: "Sizning vaqtingizga mos tarzda qatnashasiz"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Natija kafolati",
      description: "Kursni tugatgach real liboslarni tikib chiqasiz"
    },
  ];

  const scrollToMatrixChoice = () => {
    const element = document.getElementById('matrix-choice');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardNumber = "9860 0000 0000 0000";

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(cardNumber).then(() => {
      alert("Karta raqami nusxalandi!");
    });
  };

  return (
    <section id="pricing" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Sizning <span className="text-primary">investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har bir daraja o'z narxi va maxsus bonuslari bilan. Hoziroq boshlang va kelajagingizga sarmoya kiriting!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-transparent ${plan.popular
                ? "bg-gradient-to-br from-primary to-primary-light text-white"
                : "bg-white text-[hsl(var(--card-foreground))]"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-md glow-effect">
                    Eng mashhur
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <Badge variant="outline" className={`mx-auto mb-4 w-fit cursor-pointer ${plan.popular ? 'bg-black/30 text-white border-white/50' : 'bg-primary/10 text-primary border-primary'}`}>
                  {plan.level}
                </Badge>
                <CardTitle className="text-2xl font-bold mb-3">{plan.title}</CardTitle>
                <div className="space-y-2">
                  <div className={`text-sm text-muted-foreground line-through opacity-70 ${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {plan.originalPrice} so'm
                  </div>
                  <div className={`text-4xl font-extrabold ${plan.popular ? 'text-[#FFE4E4]' : 'text-foreground'}`}>
                    {plan.currentPrice} so'm
                  </div>
                  <div className={`text-sm font-medium ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {plan.duration} davomida
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? "text-primary-foreground" : "text-primary"} mt-1 flex-shrink-0`} />
                      <span className={`text-base ${plan.popular ? 'text-[#FFE4E4]' : 'text-muted-foreground'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleRegisterClick}
                  className={`relative mt-8 w-full flex items-center justify-center gap-4 
                    rounded-lg px-6 py-3 font-bold text-lg leading-tight 
                    transition-all duration-300 shadow-md hover:shadow-lg 
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    ${plan.popular 
                      ? "bg-gradient-section text-secondary-foreground border border-[#C7A27C]/20 hover:bg-[#C7A27C]/90 hover:border-[#C7A27C]" 
                      : "bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-light hover:to-primary-dark"}
                    group`}
                >
                  Kursni tanlash
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full 
                      transition-all duration-300 ease-in-out
                      ${plan.popular 
                        ? "group-hover:bg-[#C7A27C]/10 text-secondary-foreground" 
                        : "text-secondary group-hover:bg-primary/10"}
                    `}
                  >
                    <Plus size={20} strokeWidth={2.5} />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md mx-4 md:mx-auto shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              To'lovni amalga oshirish uchun karta raqamidan foydalaning:
            </h2>
            <div className="flex items-center gap-2 mb-4 cursor-pointer">
              <div onClick={handleCopyCardNumber} className="border border-border w-full p-2 rounded-md bg-[hsl(var(--background))] text-foreground">
                9860 2701 0121 4699
              </div>
              <button
                onClick={handleCopyCardNumber}
                className="text-primary hover:text-primary-light transition-colors"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-muted-foreground mb-4">Ibodullayeva Chinora</div>
            <hr className="border-t border-border mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              To'lov chekini telegram orqali{" "}
              <a href="https://t.me/J99887766" className="text-primary">
                @J99887766
              </a> ga yuboring. To'lov
              o'tgandan so'ng 24 soat ichida sizning EMAlLingizga dostup
              jo'natamiz.
            </p>
            <p className="text-sm text-muted-foreground">
              "Uzum Nasiya" orqali muddatli to'lov uchun telegramga yozing{" "}
              <a href="https://t.me/J99887766" className="text-primary underline">
                https://t.me/J99887766
              </a>
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-light transition-colors"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;