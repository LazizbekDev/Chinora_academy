import HeroSection from "@/components/HeroSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import AboutInstructor from "@/components/AboutInstructor";
import CourseContent from "@/components/CourseContent";
import PricingSection from "@/components/PricingSection";
// import MatrixChoice from "@/components/MatrixChoice";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import CourseBenefits from "@/components/CourseBenefits";
// import Header from "../components/Header";
// import LandingPage from "../components/LandingPage";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <LandingPage /> */}
      {/* <Header /> */}
      <Navbar />
      <HeroSection />
      <div className="overflow-hidden">
        <WhoIsThisFor />
      </div>
      <AboutInstructor />
      <CourseContent />
      <PricingSection />
      {/* <div className="overflow-hidden">
        <CourseBenefits />
      </div> */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
