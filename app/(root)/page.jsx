import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import Upcoming from "@/components/landing-page/Upcoming";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <Workflow /> */}
      <Upcoming />
    </>
  );
};

export default LandingPage;
