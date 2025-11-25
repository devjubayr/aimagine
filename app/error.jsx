"use client";

import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/Divider";
import EmailIcon from "@/components/ui/EmailIcon";
import HomeIcon from "@/components/ui/HomeIcon";
import { IconRestore } from "@tabler/icons-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen w-full bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-2xl">
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
          <Button
            onClick={() => reset()}
            variant="primary"
            size="dgLG"
            className="rounded-full"
          >
            <IconRestore />
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline" size="dgLG">
              <HomeIcon />
              Go Home
            </Button>
          </Link>
        </div>

        <Divider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <Link href="/contact">
            <Button className="opacity-80 hover:opacity-100">
              <EmailIcon />
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
