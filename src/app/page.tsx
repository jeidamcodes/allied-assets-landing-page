import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsBand from "@/components/StatsBand";
import HowItWorks from "@/components/HowItWorks";
import Situations from "@/components/Situations";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Promise from "@/components/Promise";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <StatsBand />
      <HowItWorks />
      <Situations />
      <Comparison />
      <Testimonials />
      <Promise />
      <FinalCTA />
      <Footer />
    </>
  );
}
