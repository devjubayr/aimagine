import CTASection from "@/components/shared/CTASection";
import PageHeading from "@/components/shared/PageHeading";
import { aboutFeatured } from "@/constants";
import { connectDB } from "@/lib/connectDB";
import { UserModel } from "@/models/user.model";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Mail, Zap } from "lucide-react";
import Link from "next/link";

const IconBadge = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0">
    {children}
  </div>
);

const AboutPage = async () => {
  await connectDB();
  const users = await UserModel.countDocuments();

  const userCount = users * 200; // to show fake user initially
  return (
    <div className="bg-dark-light min-h-screen">
      <PageHeading
        badge="About Us"
        title1="The Story "
        title2="of AIMAGINE"
        description="We empower creators and businesses with intelligent tools designed
            for unparalleled efficiency and growth."
        Icon={<Zap className="w-4 h-4 text-[#5de0e6]" />}
      />
      {/* Core Values Section */}
      <section className="py-20 px-6 bg-dark">
        <div className="max-w-7xl mx-auto relative z-9999">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Driven by Core Values
            </h2>
            <p className="text-lg text-text-gray max-w-2xl mx-auto leading-relaxed">
              These principles guide every decision we make, ensuring we deliver
              value and maintain trust with our community.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {aboutFeatured.map((feat) => (
              <div
                key={feat.title}
                className="group p-6 relative z-10 rounded-2xl border bg-dark/40 border-border-dark hover:border-white/40 transition-all duration-300 space-y-4"
              >
                <IconBadge>
                  <feat.icon className="w-6 h-6 text-white" />
                </IconBadge>
                <h3 className="font-semibold text-xl text-white">
                  {feat.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {feat.description}
                </p>
                {/* Arrow Icon */}
                <Link
                  href={feat.linkUrl}
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
        </div>
      </section>
      {/* History Section (Two-Column Layout) */}
      <section className="py-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - History Details */}
            <div className="space-y-6">
              <span className="text-sm font-medium text-[#5de0e6] uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Bringing from a simple idea to a global SaaS platform.
              </h2>
              <p className="text-lg text-text-gray leading-relaxed">
                AIMAGINE was founded in 2025 by a{" "}
                <Link
                  href="https://devjuabayr.vercel.app"
                  className="text-white"
                  target="_blank"
                >
                  devjuabyr
                </Link>{" "}
                frustrated with existing, cumbersome tools. We envisioned a
                single, seamless platform that combined powerful automation with
                intuitive tools. Today, we serve over {userCount - 1}+ users
                globally, helping them streamline their workflows and unlock new
                levels of creativity.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                We believe that sophisticated technology shouldn't be
                complicated. That's why every feature we launch is rigorously
                tested for simplicity and performance.
              </p>
            </div>

            {/* Right Side - Trust Badges/Statistics (Uses the same style as the contact section badges) */}
            <div className="space-y-6 p-8 rounded-3xl border border-border-dark bg-dark/30">
              <div className="space-y-2">
                <div className="text-5xl font-black text-white">
                  {userCount - 1}+
                </div>
                <p className="text-sm text-text-gray">Active Users Worldwide</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-border-dark">
                <div className="text-5xl font-black text-white">99.9%</div>
                <p className="text-sm text-text-gray">Uptime Reliability</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-border-dark">
                <div className="text-5xl font-black text-white">4.9 / 5</div>
                <p className="text-sm text-text-gray">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignedOut>
        <CTASection
          title="Ready to Transform Your Workflow?"
          description="See how our innovative platform can drive efficiency and growth for your team."
        >
          <SignInButton className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.03] shadow-lg cursor-pointer">
            <div>
              <span>Start Your Free Trial</span>
              <Mail className="w-5 h-5" />
            </div>
          </SignInButton>
        </CTASection>
      </SignedOut>
    </div>
  );
};

export default AboutPage;
