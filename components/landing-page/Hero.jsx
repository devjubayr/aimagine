import { SignedIn, SignedOut } from "@clerk/nextjs";
import { DotIcon } from "lucide-react";
import Link from "next/link";
import CountingProgress from "./CountingProgress";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-dark-light rounded-br-[100px] rounded-bl-[100px] px-6 pt-32 pb-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark/20 border border-border-dark rounded-full mb-6">
            <span className="animate-pulse scale-175 text-blue-600">
              <DotIcon />
            </span>
            <span className="text-sm text-text-gray">
              Now Available — Start Building Today
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 text-5xl leading-none font-black tracking-tight md:text-6xl lg:text-7xl">
            Unleash Your Creative Vision
            <br />
            <span className="bg-linear-to-r from-white to-[#5de0e6] bg-clip-text text-transparent">
              With AIMGINE
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-text-gray mx-auto mb-12 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Transform ideas into reality with AI-powered tools. Experience
            seamless content generation with professional quality results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <SignedOut>
              <button className="w-full rounded-full cursor-pointer bg-gradient-to-r from-[#004aad] to-[#039da5] px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-white/10 transition-all duration-200 hover:opacity-90 sm:w-auto">
                Start Free Trial
              </button>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="w-full rounded-full cursor-pointer bg-gradient-to-r from-[#004aad] to-[#039da5] px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-white/10 transition-all duration-200 hover:opacity-90 sm:w-auto"
              >
                Go Dashboard
              </Link>
            </SignedIn>

            <button className="w-full rounded-full border-2 border-border-light bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:border-white sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8 border-t border-border-dark pt-16">
          <CountingProgress label="Generated" end={2} other="M+" duration={2} />
          <CountingProgress label="Active Users" end={500} other="+" />
          <CountingProgress label="Uptime SLA" end={99.9} other="%" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
