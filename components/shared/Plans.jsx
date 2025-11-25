import { getUserById } from "@/actions/user.actions";
import Checkout from "@/components/shared/CheckOut";
import { plans } from "@/constants";
import { SignedIn, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { CircleQuestionMarkIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Plans = async () => {
  const { userId } = await auth();

  let user;
  if (userId) {
    user = await getUserById(userId);
  }
  return (
    <div className="max-w-7xl mx-auto relative z-10">
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
                <Image src={plan.icon} alt={plan.name} width={32} height={32} />
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
              <SignInButton
                disabled={user}
                className={
                  "rounded-full border-2 border-border-light bg-transparent font-semibold text-white transition-all duration-200 hover:border-white  py-3 text-lg  w-full"
                }
              >
                Free Plan
              </SignInButton>
            ) : (
              <SignedIn>
                {plan.name !== "Premium Package" ? (
                  <div>
                    <Checkout
                      plan={plan.name}
                      amount={plan.price}
                      credits={plan.credits}
                      buyerId={user?._id}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
              </SignedIn>
            )}
          </li>
        ))}
      </ul>

      {/* FAQ  */}
      <div className=" text-center max-w-3xl mx-auto">
        <div className="p-8 rounded-2xl border border-border/30 bg-dark/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-text-gray mb-6">
            Not sure which plan is right for you? Our team is here to help you
            find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="flex" size="lg">
                <MailIcon size="18" />
                Contact Sales
              </Button>
            </Link>
            <Link href="#">
              <Button variant="outline" size="lg">
                <CircleQuestionMarkIcon size="18" />
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
