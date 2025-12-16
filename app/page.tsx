import Navigation from "@/components/sections/Navigation";
import { Hero } from "./Hero";
import { ControlCenter } from "./ControlCenter";
import { SecurityGuarantees } from "@/components/sections/SecurityGuarantees";
import { TransactionManagement } from "@/components/sections/TransactionManagement";
import { Comparison } from "@/components/sections/Comparison";
import { Metrics } from "@/components/sections/Metrics";
import { DeveloperSection } from "@/components/sections/DeveloperSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { MobileSection } from "@/components/sections/MobileSection";
import { SecondAuthorityPeak } from "@/components/sections/SecondAuthorityPeak";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ControlCenter />
      <SecurityGuarantees />
      <TransactionManagement />
      <Comparison />
      <Metrics />
      <DeveloperSection />
      <Testimonials />
      <Ecosystem />
      <MobileSection />
      <SecondAuthorityPeak />
      <FinalCTA />
      <Footer />
    </div>
  );
}
