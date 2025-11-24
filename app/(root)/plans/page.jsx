import Plans from "@/components/shared/Plans";

const PlansPage = async () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="mx-auto w-[95%] px-6 lg:px-8 2xl:max-w-[1400px]">
          {/* Background Grid */}
          <div className="absolute inset-0 grid-bg opacity-10"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#004aad]/20 to-[#039da5]/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-lighter border border-border-dark rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-[#5de0e6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm text-text-gray">Flexible Pricing</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
                Choose Your
                <br />
                <span className="bg-gradient-to-r from-white to-text-gray bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-text-gray max-w-3xl mx-auto leading-relaxed">
                Start with our free plan or unlock unlimited possibilities with
                premium credits. Scale as you grow.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border-dark bg-dark-lighter/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div>
                  <p className="text-sm font-semibold text-white">
                    No Hidden Fees
                  </p>
                  <p className="text-xs text-text-gray">
                    Pay only for what you use
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-border-dark bg-dark-lighter/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Secure Payment
                  </p>
                  <p className="text-xs text-text-gray">
                    SSL encrypted checkout
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-border-dark bg-dark-lighter/50">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Cancel Anytime
                  </p>
                  <p className="text-xs text-text-gray">
                    No long-term commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-dark-light">
        <Plans />
      </section>
    </>
  );
};

export default PlansPage;
