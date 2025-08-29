import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Legal Contract Section */}
          <Card className="mb-12 bg-primary-light/20 border-primary-light">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary-foreground">
                Shartnoma (Oferta)
              </h3>
              
              <div className="space-y-6 text-sm text-primary-foreground/90">
                <div>
                  <h4 className="font-semibold mb-2">1. Xizmat ko'rsatuvchi:</h4>
                  <p>Jacob English Path - Onlayn ingliz tili kurslari</p>
                  <p>Manzil: Toshkent sh., Yunusobod tumani, Abdulla Qodiriy ko'ch., 12-uy</p>
                  <p>Telefon: +998 90 123 45 67</p>
                  <p>Email: info@jacobenglish.uz</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Litsenziya va huquqlar:</h4>
                  <p>• Barcha video materiallar va kurs tarkibi mualliflik huquqi bilan himoyalangan</p>
                  <p>• Foydalanuvchi shaxsiy o'rganish maqsadida foydalanishi mumkin</p>
                  <p>• Materiallarni uchinchi shaxslarga tarqatish taqiqlanadi</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. To'lov va qaytarish:</h4>
                  <p>• To'lov O'zbekiston Respublikasi so'mida amalga oshiriladi</p>
                  <p>• Pul qaytarish 14 kun ichida amalga oshiriladi</p>
                  <p>• Bank komissiyasi mijoz zimmasisiga yuklanadi</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">4. Bank ma'lumotlari:</h4>
                  <p>Karta raqami: 8600 **** **** 1234 (Humo)</p>
                  <p>Karta raqami: 9860 **** **** 5678 (Uzcard)</p>
                  <p>Click: +998 90 123 45 67</p>
                  <p>Payme: +998 90 123 45 67</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">5. Mas'uliyat:</h4>
                  <p>• Xizmat ko'rsatuvchi sifatli ta'lim berishni kafolatlaydi</p>
                  <p>• Texnik nosozliklar yuz berganda kompensatsiya beriladi</p>
                  <p>• Force-major holatlar istisno hisoblanadi</p>
                </div>

                <div className="border-t border-primary-light/30 pt-4">
                  <p className="text-xs text-primary-foreground/70">
                    Ushbu shartnoma O'zbekiston Respublikasi qonunlariga muvofiq tuzilgan va 
                    to'lov amalga oshirilgan paytdan boshlab amal qiladi. Nizolar sudda hal qilinadi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact and Social Links */}
          <div className="text-center space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-4">Biz bilan bog'laning</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p>+998 90 123 45 67</p>
                </div>
                <div>
                  <p className="font-semibold">Telegram</p>
                  <p>@jacobenglish_support</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@jacobenglish.uz</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Ijtimoiy tarmoqlar</h4>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="hover:text-primary-glow transition-colors">
                  📱 Instagram: @jacobenglish_uz
                </a>
                <a href="#" className="hover:text-primary-glow transition-colors">
                  📺 YouTube: Jacob English Path
                </a>
                <a href="#" className="hover:text-primary-glow transition-colors">
                  ✈️ Telegram: @jacobenglish_channel
                </a>
                <a href="#" className="hover:text-primary-glow transition-colors">
                  💼 LinkedIn: Jacob English Teacher
                </a>
              </div>
            </div>

            <div className="border-t border-primary-light/30 pt-6">
              <p className="text-sm text-primary-foreground/70">
                © 2024 Jacob English Path. Barcha huquqlar himoyalangan.
              </p>
              <p className="text-xs text-primary-foreground/60 mt-2">
                Bu sayt Lovable platform orqali yaratilgan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;