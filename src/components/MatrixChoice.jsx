import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MatrixChoice = () => {
  const handleChoice = (choice) => {
    if (choice === 'blue') {
      // Simulate staying the same
      alert("Siz hozirgi holatda qolishni tanladingiz. Lekin hech qachon kech emas!");
    } else {
      // Scroll to contact or pricing
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="matrix-choice" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Endi <span className="text-primary-glow">tanlov</span> sizda
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Matrix filmidagi kabi, sizda ikki variant bor. Qaysi birini tanlaysiz?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Blue Pill Card */}
          <Card className="bg-primary-light/20 border-primary-light hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-blue-pill rounded-full flex items-center justify-center shadow-glow">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">💊</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-foreground">Ko'k tabletka</h3>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Hech narsa o'zgarmasdan, hozirgi hayotingizni davom ettiring. 
                Ingliz tilini keyinroq o'rganaman deb o'ylashda davom eting. 
                Imkoniyatlarni o'tkazib yuborishda davom eting.
              </p>
              
              <Button 
                variant="blue-pill" 
                className="w-full text-lg py-4"
                onClick={() => handleChoice('blue')}
              >
                Hozirgi holatda qolish
              </Button>
              
              <p className="text-sm text-primary-foreground/60">
                "Hech qachon kech emas, lekin ertaroq yaxshi"
              </p>
            </CardContent>
          </Card>

          {/* Red Pill Card */}
          <Card className="bg-accent-red/20 border-accent-red hover:shadow-cta transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-cta rounded-full flex items-center justify-center shadow-cta">
                <div className="w-12 h-12 bg-accent-red rounded-full flex items-center justify-center">
                  <span className="text-2xl">💊</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-foreground">Qizil tabletka</h3>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Haqiqatni ko'ring! Ingliz tili o'rganish oson ekanini bilib oling. 
                3 bosqichda professional darajaga yeting. Kelajagingizni o'zgartiring 
                va yangi imkoniyatlar oching.
              </p>
              
              <Button 
                variant="red-pill" 
                className="w-full text-lg py-4"
                onClick={() => handleChoice('red')}
              >
                Haqiqatni ko'rish
              </Button>
              
              <p className="text-sm text-primary-foreground/60">
                "Kelajak bu yerda boshlanadi"
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary-foreground/70 italic">
            "Qizil tabletka - haqiqat, ko'k tabletka - illuziya. Tanlov sizniki." - Morpheus
          </p>
        </div>
      </div>
    </section>
  );
};

export default MatrixChoice;