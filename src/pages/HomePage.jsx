import React from "react";
import HeroSection from "../component/HeroSection";
import LanguageSlider from "../component/LanguageSlider";
import Olympaid from "../component/Olympaid";
import WorkSection from "../component/WorkSection";
import Features from "../component/Features";
import Faq from "../component/Faq";
import Enquiry from "../component/Enquiry";
import Feedback from "../component/Feedback";
import Footer from "../component/Footer";

function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <div className="relative">
      <LanguageSlider />
      <Olympaid />
      </div>
      <WorkSection />
      <Features />
      <div className="relative">
        <Faq />
        <Enquiry />
      </div>
      <Feedback />
      <Footer />
    </div>
  );
}

export default HomePage;
