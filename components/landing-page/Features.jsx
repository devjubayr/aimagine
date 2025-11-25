import { features } from "@/constants";
import Link from "next/link";
import Heading from "./Heading";

const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <Heading
          title1="Generate Smarter"
          title2="Not Harder"
          description="Powerful AI-driven features designed to transform your creative
            workflow and boost productivity"
        />

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-dark/40 border border-border-dark rounded-3xl p-8 hover:border-white transition-all duration-500 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-dark-lighter border-2 border-border-light rounded-2xl flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {feature.icon}
                </div>
                {/* Feature Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  0{feature.id}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-gray leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-lighter border border-border-dark rounded-full text-xs text-text-gray group-hover:border-white group-hover:text-white transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow Icon */}
              <Link
                href={feature.detailsLink}
                className="mt-6 flex items-center text-text-gray group-hover:text-white transition-colors"
              >
                <span className="text-sm font-medium mr-2">Learn more</span>
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

        {/* Additional Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/20">
            <div className="text-4xl font-black mb-2">10x</div>
            <div className="text-text-gray text-sm">Faster Output</div>
          </div>
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/20">
            <div className="text-4xl font-black mb-2">99.9%</div>
            <div className="text-text-gray text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/20">
            <div className="text-4xl font-black mb-2">24/7</div>
            <div className="text-text-gray text-sm">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
