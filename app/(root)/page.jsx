import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const searchQuery = searchParams?.query || "";

  return (
    <>
      <section className="home bg-purple-700">
        <h1 className="home-heading text-4xl font-bold text-center mx-auto">
          Unleash Your Creative Vision with Imaginify
        </h1>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2 "
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection />
      </section>
    </>
  );
}
