const Workflow = () => {
  return (
    <section id="how-it-works" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-5xl font-black md:text-6xl">How It Works</h2>
          <p className="text-text-gray text-xl">
            See the transformation in action
          </p>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Description */}
          <div className="lg:sticky lg:top-32">
            <h3 className="mb-6 text-4xl leading-tight font-bold">
              Workflow Storybook with{" "}
              <span className="text-text-gray">smooth interface</span>
            </h3>
            <p className="text-text-gray mb-8 text-lg leading-relaxed">
              Experience instant transformation. Switch between original and
              AI-enhanced content to see the power of professional-grade
              generation.
            </p>

            {/* Process Steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white font-bold text-black">
                  1
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Input Your Content</h4>
                  <p className="text-text-gray text-sm">
                    Paste or type your raw text
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-light bg-dark-lighter font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">AI Processing</h4>
                  <p className="text-text-gray text-sm">
                    Advanced models analyze and enhance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-light bg-dark-lighter font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Get Results</h4>
                  <p className="text-text-gray text-sm">
                    Professional output in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Demo */}
          <div className="border border-border-dark bg-dark-lighter rounded-2xl p-8">
            {/* Toggle Buttons */}
            <div className="mb-8 flex rounded-xl border border-border-dark bg-dark p-1">
              <button
                className={`flex-1 rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                  !showTransformed
                    ? "bg-white text-black"
                    : "text-text-gray hover:text-white"
                }`}
                onClick={() => setShowTransformed(false)}
              >
                Original
              </button>
              <button
                className={`flex-1 rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                  showTransformed
                    ? "bg-white text-black"
                    : "text-text-gray hover:text-white"
                }`}
                onClick={() => setShowTransformed(true)}
              >
                Transformed
              </button>
            </div>

            {/* Content Display Area */}
            <div className="min-h-[400px] rounded-xl border border-border-dark bg-dark p-8">
              {!showTransformed ? (
                /* Original Content */
                <div className="space-y-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-text-gray">
                      INPUT
                    </span>
                    <span className="rounded-full border border-border-dark bg-dark-lighter px-3 py-1 text-xs text-text-gray">
                      Raw Text
                    </span>
                  </div>
                  <p className="leading-relaxed text-text-gray">
                    The subject matter pertaining to the recent advancements in
                    computational linguistics, specifically concerning large
                    language models, suggests a significant paradigm shift in
                    automated content generation capabilities, necessitating a
                    re-evaluation of established content validation protocols
                    and methodological frameworks.
                  </p>
                  <div className="border-t border-border-dark pt-4">
                    <span className="text-xs text-text-gray">
                      Status: Ready for processing
                    </span>
                  </div>
                </div>
              ) : (
                /* Transformed Content */
                <div className="space-y-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-semibold">OUTPUT</span>
                    <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-500">
                      AI Enhanced
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Large Language Models are revolutionizing content creation.
                    These powerful AI tools are changing how we generate and
                    validate content, requiring us to update our quality
                    standards and processes.
                  </p>
                  <div className="flex items-center justify-between border-t border-border-dark pt-4">
                    <span className="text-xs text-text-gray">
                      Processed in 1.2s • Pro Quality
                    </span>
                    <svg
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
