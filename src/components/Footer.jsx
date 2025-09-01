import { Phone, Send, Mail, Users, Clock, Book, Sparkles, MapPin, Info } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#E4DACD] to-[#F1EAE3] text-foreground py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-tarsk text-primary">
            CHINORA FASHION ACADEMY
          </h2>
          <p className="text-muted-foreground mt-2">
            Nafislik, uslub va kasbiy o‘sishga ilhom manzili
          </p>
        </div>

        {/* Main Content - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-sm">
          {/* Column 1 */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Biz haqimizda</h4>
            <p>
              CHINORA FASHION ACADEMY – tikuvchilik va dizaynni zamonaviy
              uslubda o‘rgatadigan ayollar uchun professional kurslar.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Kurs afzalliklari</h4>
            <ul className="space-y-2">
              {[
                { icon: <Users className="w-5 h-5 text-primary flex-shrink-0" />, text: "Amaliy mashg‘ulotlar" },
                { icon: <Clock className="w-5 h-5 text-primary flex-shrink-0" />, text: "Zamonaviy texnikalar" },
                { icon: <Book className="w-5 h-5 text-primary flex-shrink-0" />, text: "Mentor yordamida rivojlanish" },
                { icon: <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />, text: "Moslashuvchan jadval" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-base text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Foydali havolalar</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" /> Kurslar
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" /> Tez-tez so‘raladigan savollar
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Akademiya manzili
              </li>
              <li className="flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" /> Blog
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Aloqa</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> +998 90 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" /> @chinora_support
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> info@chinora.uz
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="border-t border-muted pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CHINORA FASHION ACADEMY. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
