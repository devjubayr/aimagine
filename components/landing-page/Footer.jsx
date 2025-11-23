import Logo from "../shared/Logo";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden px-6 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-16 grid gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-border-dark bg-dark-light p-8">
              <Logo />
              <p className="mb-8 text-lg leading-relaxed text-text-gray">
                Transform your creative workflow with AI-powered tools. Built
                for creators, designers, and innovators.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <label className="mb-3 block text-sm font-semibold">
                  Stay Updated
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg border border-border-light bg-dark px-4 py-3 text-sm placeholder:text-text-gray focus:border-white focus:outline-none transition-colors"
                  />
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-100">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-gray">Follow us</span>
                <div className="h-px flex-1 bg-border-dark"></div>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border-dark bg-dark transition-all duration-300 hover:border-white hover:bg-white"
                >
                  <svg
                    className="h-5 w-5 transition-colors group-hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border-dark bg-dark transition-all duration-300 hover:border-white hover:bg-white"
                >
                  <svg
                    className="h-5 w-5 transition-colors group-hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-border-dark bg-dark transition-all duration-300 hover:border-white hover:bg-white"
                >
                  <svg
                    className="h-5 w-5 transition-colors group-hover:text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Product Links */}
            <div>
              <h4 className="mb-6 flex items-center gap-2 text-lg font-bold">
                Product
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    API Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-6 flex items-center gap-2 text-lg font-bold">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="mb-6 flex items-center gap-2 text-lg font-bold">
                Support
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-border-dark to-transparent"></div>
          <div className="flex flex-col items-center justify-between gap-6 pt-8 lg:flex-row">
            <div className="flex flex-col items-center gap-6 text-sm text-text-gray sm:flex-row">
              <p>© 2024 CreativeVision</p>
              <div className="hidden h-1 w-1 rounded-full bg-border-dark sm:block"></div>
              <p>All rights reserved</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-text-gray">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <div className="h-1 w-1 rounded-full bg-border-dark"></div>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
              <div className="h-1 w-1 rounded-full bg-border-dark"></div>
              <a href="#" className="transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
