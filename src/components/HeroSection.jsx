import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ingliz tilini <span className="text-primary-glow">3 bosqichda</span> mukammal o'rganing
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            8 yillik xalqaro tajriba bilan Mr. Jacob sizga ingliz tilini 
            professional darajada o'rgatadi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection('course-content')}
            >
              Boshlash
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => scrollToSection('about')}
            >
              Ko'proq ma'lumot
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-glow">1700+</div>
              <div className="text-primary-foreground/80">Muvaffaqiyatli o'quvchilar</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-glow">8 yil</div>
              <div className="text-primary-foreground/80">Xalqaro tajriba</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary-glow">350K+</div>
              <div className="text-primary-foreground/80">Ijtimoiy tarmoq izdoshlari</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;