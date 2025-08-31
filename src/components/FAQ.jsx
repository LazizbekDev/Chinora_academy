import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Kurs faqat boshlovchilar uchunmi?",
      answer: "Yo‘q, kursimiz har bir darajadagi o‘quvchilar uchun mo‘ljallangan. Siz 0 dan boshlaysiz va malaka oshirishgacha yetib borasiz. Har bir bosqichda sizga yordam beramiz."
    },
    {
      question: "Videodarslarni qayerdan ko‘raman?",
      answer: "Videodarslarni Telegram va yopiq platformamiz orqali tomosha qilasiz. Istalgan vaqtda ko‘rib, qayta mashq qilishingiz mumkin. Siz uchun qulaylik yaratilgan."
    },
    {
      question: "To‘lov bo‘lib-bo‘lib qilsam bo‘ladimi?",
      answer: "Albatta, admin bilan bog‘lanib bo‘lib-bo‘lib to‘lash shartlarini olishingiz mumkin. Sizga mos va qulay variantlarni taklif qilamiz."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tez-tez <span className="text-primary">so'raladigan savollar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sizning barcha savollaringizga javob berish uchun eng ko'p so'raladigan savollarni to'pladik
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Boshqa savollaringiz bormi?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://t.me/jacobenglish_support"
              className="text-primary hover:text-primary-light transition-colors"
            >
              📱 Telegram orqali yozing
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <a
              href="tel:+998901234567"
              className="text-primary hover:text-primary-light transition-colors"
            >
              📞 Qo'ng'iroq qiling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;