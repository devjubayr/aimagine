import Link from "next/link";
import Heading from "./Heading";

const UpcomingFeatures = () => {
  const upcomingFeatures = [
    {
      id: 1,
      title: "AI Image Recolor",
      description:
        "Intelligent color transformation for images. Change color schemes while preserving details and textures perfectly.",
    },
    {
      id: 2,
      title: "Custom Image Generation",
      description:
        "Create unique images from text prompts. Generate custom visuals tailored to your specific needs and style preferences.",
    },
    {
      id: 3,
      title: "HD Quality Enhancement",
      description:
        "Transform low-resolution images into high-definition masterpieces. AI-powered upscaling with detail reconstruction.",
    },
  ];

  return (
    <section id="upcoming" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark"></div>
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="absolute inset-0 grid-bg opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Heading
          title1="Next Generation"
          title2="AI Image Tools"
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-dark/30 border border-border-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the Beta Testing Program
            </h3>
            <p className="text-text-gray mb-6 max-w-md mx-auto">
              Be among the first to test these advanced AI image features and
              help shape their development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Join Beta Program
              </button>
              <button className="px-6 py-3 border border-border-dark text-white font-semibold rounded-xl hover:border-white transition-colors">
                View Technical Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingFeatures;
