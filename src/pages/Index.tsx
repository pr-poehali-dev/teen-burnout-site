
import AboutSection from "@/components/teen-burnout/AboutSection";
import CtaSection from "@/components/teen-burnout/CtaSection";
import Footer from "@/components/teen-burnout/Footer";
import Header from "@/components/teen-burnout/Header";
import HelpSection from "@/components/teen-burnout/HelpSection";
import HeroBanner from "@/components/teen-burnout/HeroBanner";
import PreventionSection from "@/components/teen-burnout/PreventionSection";
import SymptomsSection from "@/components/teen-burnout/SymptomsSection";
import TestimonialsSection from "@/components/teen-burnout/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2FCE2] to-[#E5DEFF]">
      <Header />
      <HeroBanner />
      <AboutSection />
      <SymptomsSection />
      <PreventionSection />
      <HelpSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
