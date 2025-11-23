import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import Upcoming from "@/components/landing-page/Upcoming";
import { Workflow } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Upcoming />
      <Footer />

      <div className="full-grid-bg corner-mask fixed inset-0 z-0" />
    </>
  );
};

export default LandingPage;
