import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Shield, Clock } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      level: "Beginner",
      title: "Asoslarni o'rganing",
      originalPrice: "500,000",
      currentPrice: "350,000",
      duration: "8 hafta",
      color: "border-level-beginner",
      popular: false,
      features: [
        "40+ video dars",
        "Interaktiv mashqlar",
        "Grammar asoslari",
        "500+ so'z lug'ati",
        "Haftalik test",
        "Telegram guruh",
        "Sertifikat",
        "24/7 qo'llab-quvvatlash"
      ],
      bonus: "Bonus: Audio darslari + Flashcard lug'at"
    },
    {
      level: "Elementary → Intermediate",
      title: "Amaliy ko'nikmalar",
      originalPrice: "750,000",
      currentPrice: "525,000",
      duration: "10 hafta",
      color: "border-level-intermediate",
      popular: true,
      features: [
        "60+ video dars",
        "Speaking practice",
        "Writing mashqlari",
        "1000+ so'z lug'ati",
        "Haftalik speaking club",
        "Personal mentor",
        "IELTS tayyorgarlik",
        "Ishga tuzatmalar"
      ],
      bonus: "Bonus: Business English moduli + CV yozish darsi"
    },
    {
      level: "Intermediate → Advanced",
      title: "Professional daraja",
      originalPrice: "1,000,000",
      currentPrice: "700,000",
      duration: "12 hafta",
      color: "border-level-advanced",
      popular: false,
      features: [
        "80+ video dars",
        "Native speaker sessiyalari",
        "Academic writing",
        "2000+ so'z lug'ati",
        "Interview practice",
        "Job search guidance",
        "Networking skills",
        "Lifetime access"
      ],
      bonus: "Bonus: TOEFL strategiyalari + LinkedIn profil optimizatsiyasi"
    },
  ];

  const guarantees = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "100% pul qaytarish",
      description: "Agar natijadan qoniqmasangiz"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Moslashuvchan jadval",
      description: "Sizning vaqtingizga mos"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Sifat kafolati",
      description: "Professional sertifikat"
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
            <Card key={index} className={`relative group hover:shadow-course transition-all duration-300 transform hover:-translate-y-2 ${plan.color} border-2 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
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
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gradient-section rounded-lg border">
                  <div className="text-sm font-medium text-primary mb-1">Bonus:</div>
                  <div className="text-sm text-muted-foreground">{plan.bonus}</div>
                </div>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "cta" : "hero"}
                  onClick={scrollToMatrixChoice}
                >
                  Kursni tanlash
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