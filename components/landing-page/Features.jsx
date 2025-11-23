const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark border border-border-dark rounded-full mb-6">
            <span className="text-sm text-text-gray">Core Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Generate Smarter,
            <br />
            <span className="text-text-gray">Not Harder</span>
          </h2>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Powerful AI-driven features designed to transform your creative
            workflow and boost productivity
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-dark border border-border-dark rounded-3xl p-8 hover:border-white transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Container */}
            <div className="relative mb-8">
              <div className="w-16 h-16 bg-dark-lighter border-2 border-border-light rounded-2xl flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <svg
                  className="w-8 h-8 group-hover:text-black transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              {/* Feature Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                01
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
              AI Image Generator
            </h3>
            <p className="text-text-gray leading-relaxed mb-6">
              Create stunning visuals from simple text prompts. Our advanced
              models deliver professional-grade images in seconds.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-dark-lighter border border-border-dark rounded-full text-xs text-text-gray group-hover:border-white group-hover:text-white transition-all">
                Text-to-Image
              </span>
              <span className="px-3 py-1 bg-dark-lighter border border-border-dark rounded-full text-xs text-text-gray group-hover:border-white group-hover:text-white transition-all">
                HD Quality
              </span>
            </div>

            {/* Arrow Icon */}
            <div className="mt-6 flex items-center text-text-gray group-hover:text-white transition-colors">
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
            </div>
          </div>
        </div>

        {/* Additional Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/50">
            <div className="text-4xl font-black mb-2">10x</div>
            <div className="text-text-gray text-sm">Faster Output</div>
          </div>
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/50">
            <div className="text-4xl font-black mb-2">99.9%</div>
            <div className="text-text-gray text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 border border-border-dark rounded-2xl bg-dark/50">
            <div className="text-4xl font-black mb-2">24/7</div>
            <div className="text-text-gray text-sm">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
