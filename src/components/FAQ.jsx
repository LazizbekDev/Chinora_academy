import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, Phone, Send, Mail } from "lucide-react";

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
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tez-tez <span className="text-primary">so'raladigan savollar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sizning barcha savollaringizga javob berish uchun eng ko'p so'raladigan savollarni to'pladik
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="relative">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-0 text-left hover:no-underline font-semibold text-foreground text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                {index < faqs.length - 1 && (
                  <hr className="border-t border-secondary mt-6" />
                )}
              </div>
            ))}
          </Accordion>
        </div>

        {/* Payment & contacts */}
        <div className="container mx-auto px-6 mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <CreditCard className="w-5 h-5" />
                To‘lov usullari
              </div>
              <p className="text-muted-foreground mt-2">
                Click, Payme, Uzcard, Humo
              </p>
            </div>
            <div>
              <a
                href="tel:+998335222681"
                className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
              >
                <Phone className="w-5 h-5" /> +998 33 522 26 81
              </a>
            </div>
            <div>
              <a
                href="https://t.me/chinora_academy"
                target="_blank"
                className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
              >
                <Send className="w-5 h-5" /> @chinora_academy
              </a>
            </div>
            {/* <div>
              <a
                href="mailto:info@chinora.uz"
                className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
              >
                <Mail className="w-5 h-5" /> info@chinora.uz
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
