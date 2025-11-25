import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-dark flex items-center justify-center p-6 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[200px] font-black leading-none tracking-tight">
            <span className="bg-linear-to-r from-white to-[#5de0e6] bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-text-gray mb-12 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/dashboard">
            <Button variant="primary" size="dgLG" className="rounded-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
