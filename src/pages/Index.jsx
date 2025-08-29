import HeroSection from "@/components/HeroSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import AboutInstructor from "@/components/AboutInstructor";
import CourseContent from "@/components/CourseContent";
import PricingSection from "@/components/PricingSection";
import MatrixChoice from "@/components/MatrixChoice";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import LandingPage from "../components/LandingPage";

const Index = () => {
  return (
    <div className="min-h-screen">
        {/* <LandingPage /> */}
      <HeroSection />
      <WhoIsThisFor />
      <AboutInstructor />
      <CourseContent />
      <PricingSection />
      <MatrixChoice />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
