import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Darslar qancha vaqt davom etadi?",
      answer: "Har bir video dars 15-30 daqiqa davom etadi. Siz o'z vaqtingizga mos holda o'rganishingiz mumkin. Haftada kamida 3-4 soat ajrating va natijani ko'rasiz."
    },
    {
      question: "Qanday daraja talab qilinadi?",
      answer: "Beginner kurs uchun hech qanday oldindan bilim talab qilinmaydi. Elementary→Intermediate uchun asosiy grammatika bilimi, Intermediate→Advanced uchun o'rta daraja kerak."
    },
    {
      question: "Pul qaytarish kafolati qanday ishlaydi?",
      answer: "Agar birinchi 2 hafta ichida kurs sizga yoqmasa yoki natija ko'rmasangiz, 100% pul qaytarib beramiz. Hech qanday savol bermaydi."
    },
    {
      question: "Mobil qurilmalarda ishlaydimi?",
      answer: "Ha! Kurs barcha qurilmalarda ishlaydi - telefon, planshet, kompyuter. Internetingiz bo'lsa, istalgan joyda o'rganishingiz mumkin."
    },
    {
      question: "Qancha tez natija kutishim mumkin?",
      answer: "Beginner darajasida 4 haftada oddiy gaplashishni boshlayz. Intermediate darajasida 6 haftada ishda foydalanishingiz mumkin. Advanced darajasida 8 haftada professional darajaga yetasiz."
    },
    {
      question: "Sertifikat berilarmidi?",
      answer: "Ha! Har bir kursni muvaffaqiyatli tugatganingizda rasmiy sertifikat olasiz. Bu sertifikat sizning CV va LinkedIn profilingizga qo'shishingiz mumkin."
    },
    {
      question: "Qo'shimcha to'lovlar bormi?",
      answer: "Yo'q! Bir martalik to'lov qilganingizdan so'ng barcha materiallar, bonuslar va qo'llab-quvvatlash bepul. Hech qanday yashirin to'lov yo'q."
    },
    {
      question: "Mentor yordami bormi?",
      answer: "Ha! Elementary va Advanced kurslarda shaxsiy mentor tayinlanadi. Telegram guruhda 24/7 qo'llab-quvvatlash va haftalik speaking club."
    }
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