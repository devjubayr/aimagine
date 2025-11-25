import { rooNavLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-dark-light/80 backdrop-blur-xl border-b border-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-5">
        <nav className="flex h-20 items-center justify-between">
          <div className="flex gap-10">
            <div className="font-poppins font-semibold ">
              <h2 className="flex text-2xl capitalize">
                <span className="">a</span>
                <span className="bg-linear-to-tl from-blue-primary to-blue-secondary bg-clip-text text-transparent uppercase">
                  imagine
                </span>
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="hidden items-center space-x-8 md:flex">
              {rooNavLinks.map((link) => (
                <Link
                  href={link.route}
                  className="text-text-gray text-sm font-medium uppercase transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <SignedOut>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden text-sm font-medium text-text-gray transition-colors hover:text-white sm:block">
                Login
              </button>
              <Link
                href="/sign-up"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-100"
              >
                Sign Up Free
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};
export default Header;
