import { Mail, Target, TrendingUp, Users, Zap } from "lucide-react"; // Using lucide-react for modern, simple icons

// Helper component for styled icon badges, mimicking the Contact card style
const IconBadge = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0">
    {children}
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-dark-light min-h-screen">
      {/* Hero Section - Mission Statement */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Badge - Mimicking 'Get in Touch' badge style */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-lighter border border-border-dark rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#5de0e6]" />
              <span className="text-sm text-text-gray">Our Story</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-white to-text-gray bg-clip-text text-transparent">
                Creative Vision
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-text-gray max-w-2xl mx-auto leading-relaxed">
              We empower creators and businesses with intelligent tools designed
              for unparalleled efficiency and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
            {/* Value Card 1: Innovation */}
            <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300 space-y-4">
              <IconBadge>
                <Target className="w-6 h-6 text-white" />
              </IconBadge>
              <h3 className="font-semibold text-xl text-white">
                Relentless Innovation
              </h3>
              <p className="text-text-gray leading-relaxed">
                We constantly challenge the status quo, integrating cutting-edge
                technology to keep our users ahead of the curve.
              </p>
              <a
                href="#"
                className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
              >
                Learn about our tech &rarr;
              </a>
            </div>

            {/* Value Card 2: Transparency */}
            <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300 space-y-4">
              <IconBadge>
                <Users className="w-6 h-6 text-white" />
              </IconBadge>
              <h3 className="font-semibold text-xl text-white">
                Community & Trust
              </h3>
              <p className="text-text-gray leading-relaxed">
                Open communication and data security are paramount. We build
                features *with* our users, not just *for* them.
              </p>
              <a
                href="#"
                className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
              >
                Read our charter &rarr;
              </a>
            </div>

            {/* Value Card 3: Growth */}
            <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300 space-y-4">
              <IconBadge>
                <TrendingUp className="w-6 h-6 text-white" />
              </IconBadge>
              <h3 className="font-semibold text-xl text-white">
                Impact & Growth
              </h3>
              <p className="text-text-gray leading-relaxed">
                Our goal is to maximize the success of every user. We measure
                our success only by the impact we create.
              </p>
              <a
                href="#"
                className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
              >
                See our impact report &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Section (Two-Column Layout) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - History Details */}
            <div className="space-y-6">
              <span className="text-sm font-medium text-[#5de0e6] uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight">
                From a simple idea to a global SaaS platform.
              </h2>
              <p className="text-lg text-text-gray leading-relaxed">
                Creative Vision was founded in 2020 by a small team of
                developers frustrated with existing, cumbersome tools. We
                envisioned a single, seamless platform that combined powerful
                automation with intuitive design. Today, we serve over 50,000
                users globally, helping them streamline their workflows and
                unlock new levels of creativity.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                We believe that sophisticated technology shouldn't be
                complicated. That's why every feature we launch is rigorously
                tested for simplicity and performance.
              </p>
            </div>

            {/* Right Side - Trust Badges/Statistics (Uses the same style as the contact section badges) */}
            <div className="space-y-6 p-8 rounded-3xl border border-border-dark bg-dark">
              <div className="space-y-2">
                <div className="text-5xl font-black text-white">50K+</div>
                <p className="text-sm text-text-gray">Active Users Worldwide</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-border-dark">
                <div className="text-5xl font-black text-white">99.9%</div>
                <p className="text-sm text-text-gray">Uptime Reliability</p>
              </div>
              <div className="space-y-2 pt-4 border-t border-border-dark">
                <div className="text-5xl font-black text-white">4.9 / 5</div>
                <p className="text-sm text-text-gray">
                  Average Rating on G2 and Capterra
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-dark-light border border-border-dark rounded-3xl p-12 max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              See how our innovative platform can drive efficiency and growth
              for your team.
            </p>
            {/* Button - Mimics the white button style from the contact form */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.03] shadow-lg"
            >
              <span>Start Your Free Trial</span>
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
