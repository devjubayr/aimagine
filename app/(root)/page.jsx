import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import Upcoming from "@/components/landing-page/Upcoming";
import { Workflow } from "lucide-react";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Workflow />
      <Upcoming />
    </>
  );
};

export default LandingPage;
