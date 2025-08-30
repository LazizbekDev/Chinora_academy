import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-[#090909] text-white py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">ENGLISH BOOST</h2>
        </div>

        {/* Main Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Xizmat ko'rsatuvchi */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">1. Xizmat ko'rsatuvchi:</h4>
            <p>Jacob English Path - Onlayn ingliz tili kurslari</p>
            <p>Manzil: Toshkent sh., Yunusobod tumani, Abdulla Qodiriy ko'ch., 12-uy</p>
            <p>Telefon: +998 90 123 45 67</p>
            <p>Email: info@jacobenglish.uz</p>
          </div>

          {/* Column 2: Litsenziya va huquqlar */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">2. Litsenziya va huquqlar:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Barcha video materiallar va kurs tarkibi mualliflik huquqi bilan himoyalangan</li>
              <li>Foydalanuvchi shaxsiy o'rganish maqsadida foydalanishi mumkin</li>
              <li>Materiallarni uchinchi shaxslarga tarqatish taqiqlanadi</li>
            </ul>
          </div>

          {/* Column 3: To'lov va qaytarish */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">3. To'lov va qaytarish:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>To'lov O'zbekiston Respublikasi so'mida amalga oshiriladi</li>
              <li>Pul qaytarish 14 kun ichida amalga oshiriladi</li>
              <li>Bank komissiyasi mijoz zimmasisiga yuklanadi</li>
            </ul>
          </div>

          {/* Column 4: Bank ma'lumotlari & Mas'uliyat */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">4. Bank ma'lumotlari:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Karta raqami: 8600 **** **** 1234 (Humo)</li>
              <li>Karta raqami: 9860 **** **** 5678 (Uzcard)</li>
              <li>Click: +998 90 123 45 67</li>
              <li>Payme: +998 90 123 45 67</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4">5. Mas'uliyat:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Xizmat ko'rsatuvchi sifatli ta'lim berishni kafolatlaydi</li>
              <li>Texnik nosozliklar yuz berganda kompensatsiya beriladi</li>
              <li>Force-major holatlar istisno hisoblanadi</li>
            </ul>
          </div>
        </div>

        {/* Subfooter with Divider */}
        <div className="border-t border-[#d9d9d9] pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Contact 1 */}
            <div>
              <p className="font-semibold">+998 90 123 45 67</p>
            </div>
            {/* Contact 2 */}
            <div>
              <p className="font-semibold">Telegram</p>
              <p>@jacobenglish_support</p>
            </div>
            {/* Contact 3 */}
            <div>
              <p className="font-semibold">Email</p>
              <p>info@jacobenglish.uz</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;