import { Phone, Send, Mail, Users, Clock, Book, Sparkles, MapPin, Info, Instagram, Youtube, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#E4DACD] to-[#F1EAE3] text-foreground pt-16 pb-6">
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
            <h4 className="text-lg font-semibold text-primary">Bizni kuzatib boring</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/chinora_fashion_academy?igsh=NmZhdXR3NGJsMmdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Instagram className="w-4 h-4 text-primary" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/+ZlMsl6Ool8k4Zjdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Send className="w-4 h-4 text-primary" /> Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@chinora_academy_ad?si=HEfAEVD4VtNOnxdW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <Youtube className="w-4 h-4 text-primary" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chinora_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition"
                >
                  <User className="w-4 h-4 text-primary" /> Admin
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-primary">Aloqa</h4>
            <ul className="space-y-2">
              <a
                href="tel:+998335222681"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone className="w-4 h-4 text-primary" /> +998 33 522 26 81
              </a>
              <a
                href="https://t.me/chinora_academy"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <Send className="w-4 h-4 text-primary" /> @chinora_academy
              </a>
              {/* <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> info@chinora.uz
              </li> */}
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="border-t border-muted pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} CHINORA FASHION ACADEMY. Barcha huquqlar himoyalangan.

          <div className="mt-2 text-xs">
            <span className="opacity-70">Developed with ❤️ by </span>
            <a
              href="https://t.me/ideazona"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Laziz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
