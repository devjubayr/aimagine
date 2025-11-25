import { features } from "@/constants";
import FeatureCard from "./FeatureCard";
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

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

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
