"use client";

import { SignUp } from "@clerk/nextjs";
import Link from 'next/link';

const SignInPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-dark flex items-center justify-center p-6">
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#004aad]/30 to-[#039da5]/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#5de0e6]/20 to-[#004aad]/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/50 to-dark"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block space-y-8">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-6xl font-black leading-tight">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-white to-[#5de0e6] bg-clip-text text-transparent">
                AIMAGINE
              </span>
            </h1>
            <p className="text-xl text-text-gray leading-relaxed max-w-xl">
              Sign up to start your journey of transforming ideas into reality
              with AI-powered tools.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl border border-border-dark bg-dark-lighter flex items-center justify-center group-hover:border-white transition-colors">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Lightning Fast</h3>
                <p className="text-sm text-text-gray">
                  Generate content in seconds
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl border border-border-dark bg-dark-lighter flex items-center justify-center group-hover:border-white transition-colors">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Secure & Private</h3>
                <p className="text-sm text-text-gray">
                  Your data is always protected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl border border-border-dark bg-dark-lighter flex items-center justify-center group-hover:border-white transition-colors">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Pro Quality</h3>
                <p className="text-sm text-text-gray">
                  Professional-grade results
                </p>
              </div>
            </div>
          </div>

          {/* Stats
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-dark">
            <div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-text-gray">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">2M+</div>
              <div className="text-sm text-text-gray">Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-text-gray">Uptime</div>
            </div>
          </div> */}
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative group">
              <div className="absolute -inset-0.5  rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative bg-dark-lighter/50 border border-border-dark rounded-3xl p-8 backdrop-blur-xl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-white mb-2">
                    Sign Up
                  </h2>
                  <p className="text-text-gray">
                    Welcome back! Please enter your details.
                  </p>
                </div>

                <div className="clerk-signin-wrapper">
                  <SignUp />
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-text-gray">
                    Already have an account?{" "}
                    <Link
                      href="/sign-in"
                      className="text-white hover:underline font-semibold transition-colors"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-text-gray text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span>SSL Secure</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border-dark"></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
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
                <span>Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-20 h-20 border border-border-dark rounded-2xl rotate-12 opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-border-dark rounded-full opacity-20 animate-float-delayed"></div>
    </div>
  );
};

export default SignInPage;
