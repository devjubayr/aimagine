"use client";

import Link from "next/link";

const ErrorPage = ({ error }) => {
  const colors = {
    dark: "#000000",
    darkLight: "#0a0a0a",
    borderDark: "#1f1f1f",
    textGray: "#a3a3a3",
  };

  const ctaGradientStyle = {
    backgroundImage: "linear-gradient(90deg, #004aad, #039da5)",
  };

  const tc = {
    dark: `bg-[${colors.dark}]`,
    darkLight: `bg-[${colors.darkLight}]`,
    borderDark: `border-[${colors.borderDark}]`,
    textGray: `text-[${colors.textGray}]`,
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${tc.darkLight}`}
    >
      <div
        className={`text-center max-w-xl p-10 md:p-16 rounded-3xl border ${tc.borderDark} shadow-2xl shadow-black/50`}
      >
        {/* Error Code: Large, gradient-accented number */}
        <h1 className="text-9xl font-extrabold mb-4">
          <span className="to-[#5de0e6] bg-gradient-to-r from-[#fff] bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Main Heading */}
        <h2 className="text-4xl font-black mb-4">Page Not Found</h2>

        {/* Subheading/Description */}
        <p className={`${tc.textGray} text-lg leading-relaxed mb-10`}>
          Oops! The content you're looking for seems to have gone on a creative
          journey of its own. It might be archived, renamed, or perhaps never
          existed.
        </p>

        <details className="mb-2 text-xs text-red-400 cursor-pointer">
          <summary>Error message</summary>

          <p>{error?.message}</p>
        </details>

        <Link
          href="/"
          className="inline-block w-full sm:w-auto rounded-full px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-cyan-900/40 transition-all duration-300 hover:opacity-90 transform hover:scale-[1.01]"
          style={ctaGradientStyle}
        >
          Return to Homepage
        </Link>

        <div className={`mt-10 pt-6 border-t ${tc.borderDark}`}>
          <p className={`${tc.textGray} text-sm`}>
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
