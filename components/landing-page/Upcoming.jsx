import { upcomingFeatures } from "@/constants";
import Link from "next/link";
import CTASection from "../shared/CTASection";
import { Button } from "../ui/button";
import Heading from "./Heading";

const UpcomingFeatures = () => {
  return (
    <section id="upcoming" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark"></div>
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Heading
          title1="What We are"
          title2="Working on?"
          description="Advanced AI-powered image transformation features currently in
            development to expand your creative possibilities"
        />

        {/* Upcoming Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-dark/30 border border-border-dark rounded-3xl p-8 hover:border-white/40 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-text-gray leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Arrow Icon */}
              <Link
                href="#"
                className="mt-6 flex cursor-pointer items-center text-text-gray group-hover:text-white transition-colors"
              >
                <span className="text-sm font-medium mr-2">Get Notified</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <CTASection
          title="Join the Beta Testing Program"
          description="Be among the first to test these advanced AI image features and help shape their development"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl">
              Join Beta Program
            </Button>
          </div>
        </CTASection>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
