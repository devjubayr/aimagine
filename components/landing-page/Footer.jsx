import { contactSocialLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden px-6 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-16 grid gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-border-dark bg-dark-light/70 p-8">
              <h2 className="flex text-xl capitalize font-semibold">
                <span className="">a</span>
                <span className="bg-linear-to-tl from-blue-primary to-blue-secondary bg-clip-text text-transparent uppercase">
                  imagin
                </span>
              </h2>

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
                    className="flex-1 rounded-lg border border-border-light bg-dark px-4  text-sm placeholder:text-text-gray focus:border-white focus:outline-none transition-colors"
                  />
                  <Button variant="primary">Subscribe</Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-gray">Follow us</span>
                <div className="h-px flex-1 bg-border-dark"></div>
              </div>
              <div className="pt-8">
                <div className="flex gap-3">
                  {contactSocialLinks.map((item) => (
                    <Link
                      href={item.route}
                      className="w-12 h-12 rounded-xl border border-border-dark bg-dark/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center group"
                    >
                      <item.icon />
                    </Link>
                  ))}
                </div>
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
                    href="#pricing"
                    className="group flex items-center gap-2 text-sm text-text-gray transition-colors hover:text-white"
                  >
                    Pricing
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
                    Blogs
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
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center gap-6 text-sm text-text-gray sm:flex-row">
                <p>© {new Date().getFullYear()} AIMAGINE</p>
                <div className="hidden h-1 w-1 rounded-full bg-border-dark sm:block"></div>
                <p>All rights reserved</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-gray">
              Created by
              <Link
                href="https://devjubayr.vercel.app"
                target="_blank"
                className="transition-colors hover:text-white "
              >
                devjubayr
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
