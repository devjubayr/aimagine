const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 ">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-sm text-text-gray">Get in Touch</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
              We&apos;d Love to
              <br />
              <span className="bg-gradient-to-r from-white to-text-gray bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-text-gray max-w-2xl mx-auto leading-relaxed">
              Have a question or feedback? Our team is here to help you succeed
              with our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-dark-light relative  ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Let&apos;s Talk
                </h2>
                <p className="text-text-gray leading-relaxed">
                  Whether you have a question about features, pricing, or
                  anything else, our team is ready to answer all your questions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Email Us
                      </h3>
                      <p className="text-sm text-text-gray mb-2">
                        Our team will respond within 24 hours
                      </p>
                      <a
                        href="mailto:support@creativevision.com"
                        className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
                      >
                        support@creativevision.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Call Us</h3>
                      <p className="text-sm text-text-gray mb-2">
                        Mon-Fri from 8am to 5pm
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-[#5de0e6] hover:text-white transition-colors text-sm font-medium"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group p-6 rounded-2xl border border-border-dark bg-dark hover:border-white/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Visit Us
                      </h3>
                      <p className="text-sm text-text-gray mb-2">
                        Come say hello at our office
                      </p>
                      <p className="text-sm text-white">
                        100 Smith Street
                        <br />
                        Melbourne VIC 3000, AU
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl border border-border-dark bg-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl border border-border-dark bg-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl border border-border-dark bg-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl border border-border-dark bg-dark hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative z-10">
              <div className="relative bg-dark-light border border-border-dark rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  {/* Subject Select */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="5"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 bg-dark border border-border-light rounded-xl text-white placeholder:text-text-gray focus:outline-none focus:border-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 rounded border-border-light bg-dark focus:ring-0 focus:ring-offset-0"
                    />
                    <label htmlFor="terms" className="text-sm text-text-gray">
                      I agree to receive communications from CreativeVision and
                      understand that I can opt out at any time.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-border-dark">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">
                  &lt; 1 Hour
                </div>
                <p className="text-sm text-text-gray">Average Response Time</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">24/7</div>
                <p className="text-sm text-text-gray">Support Available</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-black text-white">98%</div>
                <p className="text-sm text-text-gray">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
