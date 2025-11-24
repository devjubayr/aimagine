import { getUserById } from "@/actions/user.actions";
import Checkout from "@/components/shared/CheckOut";
import { plans } from "@/constants";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const PlansPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

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

      {/* Plans Section */}
      <section className="py-20 px-6 bg-dark-light">
        <div className="max-w-7xl mx-auto">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {plans.map((plan, index) => (
              <li
                key={plan.name}
                className={`relative group rounded-3xl border-2 transition-all duration-300 ${
                  plan.name === "Pro Package"
                    ? "border-[#5de0e6] bg-gradient-to-br from-[#004aad]/10 to-[#5de0e6]/10 shadow-sm shadow-[#5de0e6]/20 scale-105"
                    : "border-border-dark bg-dark hover:border-white/40"
                } p-8`}
              >
                {/* Plan Header */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={plan.icon}
                      alt={plan.name}
                      width={32}
                      height={32}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-black text-white">
                      ${plan.price}
                    </span>
                    <span className="text-text-gray text-sm">one-time</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-lighter border border-border-dark rounded-full">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    <span className="text-sm font-semibold text-white">
                      {plan.credits} Credits
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border-dark to-transparent mb-8"></div>

                {/* Inclusions */}
                <ul className="space-y-4 mb-8">
                  {plan.inclusions.map((inclusion) => (
                    <li
                      key={plan.name + inclusion.label}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          inclusion.isIncluded
                            ? "bg-green-500/20 border border-green-500/40"
                            : "bg-dark-lighter border border-border-dark"
                        }`}
                      >
                        {inclusion.isIncluded ? (
                          <svg
                            className="w-3 h-3 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 text-text-gray"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          inclusion.isIncluded ? "text-white" : "text-text-gray"
                        }`}
                      >
                        {inclusion.label}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {plan.name === "Free" ? (
                  <button className="w-full py-4 rounded-xl border-2 border-border-light bg-dark-lighter text-white font-semibold hover:border-white transition-all duration-200 cursor-default">
                    Current Plan
                  </button>
                ) : (
                  <SignedIn>
                    <div>
                      <Checkout
                        plan={plan.name}
                        amount={plan.price}
                        credits={plan.credits}
                        buyerId={user._id}
                      />
                    </div>
                  </SignedIn>
                )}
              </li>
            ))}
          </ul>

          {/* FAQ Section */}
          <div className=" text-center max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl border border-border-dark bg-dark-lighter/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-text-gray mb-6">
                Not sure which plan is right for you? Our team is here to help
                you find the perfect fit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#004aad] to-[#039da5] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Contact Sales
                </a>
                <a
                  href="/faq"
                  className="px-6 py-3 border-2 border-border-light bg-transparent text-white font-semibold rounded-xl hover:border-white transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansPage;
