import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#004aad]/10 to-[#039da5]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#5de0e6]/10 to-[#004aad]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[200px] font-black leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white to-text-gray bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-gray mb-12 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#004aad] to-[#039da5] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
            Back to Home
          </Link>

          <button className="w-full sm:w-auto px-8 py-4 border-2 border-border-light bg-transparent text-white font-semibold rounded-xl hover:border-white transition-all duration-200 flex items-center justify-center gap-2">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Go Back
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-border-dark">
          <p className="text-sm text-text-gray">
            Need help?{" "}
            <Link
              href="/contact"
              className="text-[#5de0e6] hover:text-white transition-colors font-medium"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-border-dark rounded-2xl rotate-12 opacity-20 animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-16 h-16 border border-border-dark rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default NotFound;
