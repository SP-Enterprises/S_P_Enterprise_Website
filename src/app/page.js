"use client";
import React, { useState } from "react";
import AboutUs from "@/components/AboutUs";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Pricing from "@/components/Pricing";
import QualityFeatures from "@/components/QualityFeatures";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Faqs from "@/components/faqs";
import PrivacyPolicy from "@/components/privacy-policy";
import TermsAndConditions from "@/components/terms-conditions";
import ReturnsPolicy from "@/components/returns-policy";
import Accessibility from "@/components/accessibility";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients"
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import Script from 'next/script';

export default function Home() {
  const [activeLegalSection, setActiveLegalSection] = useState("");
  const [isLegalSectionVisible, setIsLegalSectionVisible] = useState(false);

  const handleLegalLinkClick = (section) => {
    setActiveLegalSection(section);
    setIsLegalSectionVisible(true);
    document.getElementById("legal-content").scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseLegalSection = () => {
    setIsLegalSectionVisible(false);
    setActiveLegalSection(""); // Optionally clear the active section
  };

  return (
    <>
     <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-W0PHS9BQGP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0PHS9BQGP');
          `,
        }}
      />
      <section id="home">
        <div className="flex flex-col gap-16 md:gap-32">
          <HeroSection />
          <Features />
          <QualityFeatures />
          <CoreFeatures />
          <Work />
          <Pricing />
          <Subscribe />
          <Clients />
          <Team />
          <AboutUs />
          <Analytics />
        </div>
      </section>

      {/* Footer is placed after the main content */}
      <Footer onLegalLinkClick={handleLegalLinkClick} />

      {/* Hidden Legal Section */}
      {isLegalSectionVisible && (
        <div id="legal-content" className="mt-16 p-8 bg-white border-t border-neutral-200 relative">
          <button
            onClick={handleCloseLegalSection}
            className="absolute top-4 right-4 text-purple-600 hover:text-red-600"
          >
            Close
          </button>
          {activeLegalSection === "faqs" && <Faqs />}
          {activeLegalSection === "privacy-policy" && <PrivacyPolicy />}
          {activeLegalSection === "terms-and-conditions" && <TermsAndConditions />}
          {activeLegalSection === "returns-policy" && <ReturnsPolicy />}
          {activeLegalSection === "accessibility" && <Accessibility />}
        </div>
      )}
    </>
  );
}
