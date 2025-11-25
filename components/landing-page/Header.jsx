import { rooNavLinks } from "@/constants";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import Banner from "./Banner";

const Header = async () => {
  return (
    <div className="fixed z-99999 top-0 right-0 left-0">
      <Banner />

      <header className=" bg-dark-light/80 backdrop-blur-xl border-b border-border-dark">
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

              <div className="hidden items-center space-x-8 md:flex">
                {rooNavLinks.map((link) => (
                  <Link
                    key={link.route}
                    href={link.route}
                    className="text-text-gray text-sm font-medium uppercase transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <SignedOut>
              <div className="flex items-center space-x-4">
                <SignInButton className="hidden text-sm font-medium text-text-gray transition-colors hover:text-white sm:block">
                  Login
                </SignInButton>
                <SignUpButton className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-gray-100">
                  Sign Up Free
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="primary" size="lg">
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
