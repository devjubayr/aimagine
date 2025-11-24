"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen w-full bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-border-dark flex items-center justify-center">
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-semibold">
            SERVER ERROR
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-lg text-text-gray mb-8 max-w-md mx-auto leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry, it&apos;s not
          your fault.
        </p>

        {error && (
          <div className="mb-8 p-4 bg-dark-lighter border border-border-dark rounded-xl max-w-lg mx-auto">
            <details className="text-left">
              <summary className="text-sm font-medium text-text-gray cursor-pointer hover:text-white transition-colors">
                Error Details
              </summary>
              <p className="mt-2 text-xs text-red-400 font-mono break-all">
                {error.message || "An unknown error occurred"}
              </p>
            </details>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              ></path>
            </svg>
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 border-2 border-border-light bg-transparent text-white font-semibold rounded-xl hover:border-white transition-all duration-200 flex items-center justify-center gap-2"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Go Home
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-border-light"></div>
          <span className="text-xs text-text-gray">OR</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-border-light"></div>
        </div>

        {/* Help Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-text-gray hover:text-white transition-colors"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Contact Support
          </Link>

          <div className="w-1 h-1 rounded-full bg-border-dark"></div>

          <Link
            href="/help"
            className="flex items-center gap-2 text-text-gray hover:text-white transition-colors"
          >
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Help Center
          </Link>

          <div className="w-1 h-1 rounded-full bg-border-dark"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
