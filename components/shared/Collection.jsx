"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { transformationTypes } from "@/constants";

import { Button } from "../ui/button";

import { formUrlQuery } from "@/utils/formUrlQuery";

export const Collection = ({ images = [], totalPages = 1, page }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // PAGINATION HANDLER
  const onPageChange = (action) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className=" pb-20 bg-dark min-h-screen">
      <div>
        {/* IMAGE GRID */}
        {images.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {images.map((image) => (
              <Card image={image} key={image._id} />
            ))}
          </ul>
        ) : (
          /* EMPTY STATE (Updated to match theme) */
          <div className="flex flex-col items-center justify-center p-12 bg-dark-light border border-border-dark rounded-3xl shadow-inner min-h-[400px]">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#004aad]/20 to-[#5de0e6]/20 border border-border-light flex items-center justify-center mb-6">
              <Image
                src="/assets/icons/default.svg"
                alt="Empty"
                width={32}
                height={32}
                className="text-[#5de0e6]"
              />
            </div>
            <p className="text-2xl font-bold text-white mb-3">No Images Yet</p>
            <p className="text-text-gray text-center max-w-md">
              Your transformation history will appear here once you start
              editing images.
            </p>
          </div>
        )}

        {/* PAGINATION CONTROLS (Updated to match theme) */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-border-dark">
            <Pagination>
              <PaginationContent className="flex w-full justify-center items-center gap-4">
                {/* Previous Button */}
                <Button
                  disabled={Number(page) <= 1}
                  className="group px-6 py-3 bg-dark-light border border-border-dark text-white rounded-xl hover:border-white/40 hover:bg-dark-lighter transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border-dark disabled:hover:bg-dark-light flex items-center gap-2"
                  onClick={() => onPageChange("prev")}
                >
                  <PaginationPrevious className="text-white group-hover:scale-110 transition-transform" />
                  <span>Previous</span>
                </Button>

                {/* Page Indicator */}
                <div className="flex items-center gap-4 mx-6">
                  <span className="text-sm text-text-gray">Page</span>
                  <div className="px-4 py-2 bg-dark-light border border-border-dark rounded-xl">
                    <p className="text-base font-semibold text-white">
                      {page} <span className="text-text-gray">of</span>{" "}
                      {totalPages}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <Button
                  onClick={() => onPageChange("next")}
                  disabled={Number(page) >= totalPages}
                  className="group px-6 py-3 bg-dark-light border border-border-dark text-white rounded-xl hover:border-white/40 hover:bg-dark-lighter transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border-dark disabled:hover:bg-dark-light flex items-center gap-2"
                >
                  <span>Next</span>
                  <PaginationNext className="text-white group-hover:scale-110 transition-transform" />
                </Button>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = ({ image }) => {
  return (
    <li className="group">
      <Link
        href={`/dashboard/transformations/${image._id}`}
        className="block p-4 bg-dark-light border border-border-dark rounded-2xl hover:border-white/40 transition-all duration-300  group-hover:shadow-lg"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <CldImage
            src={image.publicId}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image.config}
            loading="lazy"
            className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-white mr-3 line-clamp-1 group-hover:text-[#5de0e6] transition-colors">
            {image.title}
          </p>
          <div className="w-10 h-10 rounded-xl bg-dark-lighter flex items-center justify-center flex-shrink-0 transition-transform">
            <Image
              src={`/assets/icons/${
                transformationTypes[image.transformationType].icon
              }`}
              alt={image.title}
              width={20}
              height={20}
              className="text-white"
            />
          </div>
        </div>
      </Link>
    </li>
  );
};
