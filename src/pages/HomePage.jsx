import React from "react";
import HeroSection from "../component/HeroSection";
import LanguageSlider from "../component/LanguageSlider";
import Olympaid from "../component/Olympaid";
import WorkSection from "../component/WorkSection";
import Features from "../component/Features";
import Faq from "../component/Faq";
import Enquiry from "../component/Enquiry";
import Feedback from "../component/Feedback";

function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <LanguageSlider />
      <Olympaid />
      <WorkSection />
      <Features />
      <div className="relative">
        <Faq />
        <Enquiry />
      </div>
      <Feedback />
    </div>
  );
}

export default HomePage;
