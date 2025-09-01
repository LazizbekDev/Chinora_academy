import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, Clock, Plus } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      level: "Starter Pack",
      title: "Asosiy tikuvchilik ko‘nikmalari",
      originalPrice: "1,200,000",
      currentPrice: "990,000",
      duration: "6 hafta",
      color: "border-primary",
      popular: false,
      features: [
        "Oddiy andoza chizish",
        "Ko‘ylak va yubka tikish",
        "Tikuv mashinasidan foydalanish",
        "500+ asosiy texnika",
        "Haftalik amaliy topshiriqlar",
        "Telegram qo‘llab-quvvatlash guruhi",
        "Sertifikat"
      ],
      bonus: "Bonus: Professional mato tanlash bo‘yicha mini-guide"
    },
    {
      level: "Fashion Designer",
      title: "Murakkab fason va dizayn",
      originalPrice: "1,800,000",
      currentPrice: "1,499,000",
      duration: "8 hafta",
      color: "border-primary",
      popular: true,
      features: [
        "Murakkab fasonlar andozasi",
        "Karset va noodatiy liboslar",
        "Brend kiyimlari texnikasi",
        "Amaliy fashion loyihalar",
        "Haftalik mentor sessiyalari",
        "Personal feedback",
        "Professional sertifikat"
      ],
      bonus: "Bonus: Karset masterklass + brend libos andozalari"
    },
    {
      level: "Pro Master",
      title: "Professional daraja va biznes",
      originalPrice: "2,500,000",
      currentPrice: "1,999,000",
      duration: "10 hafta",
      color: "border-primary",
      popular: false,
      features: [
        "Mijoz uchun individual buyurtmalar",
        "Fashion ko‘rgazmalarga tayyorlanish",
        "Professional finishing texnikalari",
        "Networking va brend yaratish",
        "Portfolio to‘plash",
        "Fashion biznes strategiyalari",
        "Lifetime access"
      ],
      bonus: "Bonus: Tikuvchilik biznesini boshlash bo‘yicha qo‘llanma"
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

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sizning <span className="text-primary">investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Har bir daraja o'z narxi va maxsus bonuslari bilan. Hoziroq boshlang va kelajagingizga sarmoya kiriting!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-course transition-all duration-300 transform hover:-translate-y-2 border-2 ${plan.popular
                ? "bg-gradient-to-br from-card to-primary-light text-white"
                : "bg-secondary text-foreground"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    Eng mashhur
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="mx-auto mb-4 w-fit">
                  {plan.level}
                </Badge>
                <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground line-through">
                    {plan.originalPrice} so'm
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {plan.currentPrice} so'm
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.duration} davomida
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${ plan.popular ? 'text-[#ffe4e4]': 'text-muted-foreground'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-gradient-section rounded-lg border">
                  <div className="text-sm font-medium text-primary mb-1">Bonus:</div>
                  <div className="text-sm text-muted-foreground">{plan.bonus}</div>
                </div>

                <Button
                  className="hero-btn mt-10 flex items-center gap-3 bg-primary hover:bg-primary-light transition-colors duration-300 text-primary-foreground font-semibold text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl group shadow-md w-full justify-between"
                  variant={plan.popular ? "cta" : "hero"}
                  onClick={scrollToMatrixChoice}
                >
                  Kursni tanlash <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary-foreground text-primary transition-transform duration-300 group-hover:rotate-45">
                    <Plus size={18} strokeWidth={2.5} />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="text-primary">{guarantee.icon}</div>
              </div>
              <h3 className="font-bold text-foreground">{guarantee.title}</h3>
              <p className="text-sm text-muted-foreground">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            To'lov usullari: Click, Payme, Uzcard, Humo
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center text-sm text-muted-foreground">
            <span>📞 +998 90 123 45 67</span>
            <span className="hidden sm:block">•</span>
            <span>✈️ @jacobenglish_support</span>
            <span className="hidden sm:block">•</span>
            <span>📧 info@jacobenglish.uz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;