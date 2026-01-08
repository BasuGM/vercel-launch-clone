"use client";

import Header from "../Header";
import HeroSection from "../HeroSection";
import TrustedCompanies from "../TrustedCompanies";
import FeaturesSection from "../FeaturesSection";
import CloudInfoSection from "../CloudInfoSection";
import SupportSection from "../SupportSection";
import EnterpriseSection from "../EnterpriseSection";
import PartialPrerenderingSection from "../PartialPrerenderingSection";
import DeploySection from "../DeploySection";
import CTASection from "../CTASection";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAFAFA]">
        <HeroSection />
        <TrustedCompanies />
        <FeaturesSection />
        <CloudInfoSection />
        <SupportSection />
        <EnterpriseSection />
        <PartialPrerenderingSection />
        <DeploySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
