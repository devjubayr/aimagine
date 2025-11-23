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

export const Collection = ({
  hasSearch = false,
  images = [],
  totalPages = 1,
  page,
}) => {
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
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Recent Edits
        </h2>
      </div>

      {/* IMAGE GRID */}
      {images.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <Card image={image} key={image._id} />
          ))}
        </ul>
      ) : (
        /* EMPTY STATE (Minimalist) */
        <div className="flex flex-col items-center justify-center p-20 bg-white rounded-xl shadow-inner border border-dashed border-gray-300 min-h-[300px]">
          <Image
            src="/assets/icons/default.svg"
            alt="Empty"
            width={40}
            height={40}
            className="text-gray-400 mb-4"
          />
          <p className="text-xl font-semibold text-gray-600 mb-2">Empty List</p>
          <p className="text-gray-500 text-sm">
            Your transformation history will appear here.
          </p>
        </div>
      )}

      {/* PAGINATION CONTROLS (Clean, standard buttons) */}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full sm:w-auto">
            {/* Previous Button - Minimalist styling */}
            <Button
              disabled={Number(page) <= 1}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="text-gray-700" />
              <span className="ml-1">Previous</span>
            </Button>

            {/* Page Indicator - Clean, high contrast */}
            <p className="flex items-center justify-center w-fit px-3 py-2 text-base font-semibold text-gray-700">
              {page} / {totalPages}
            </p>

            {/* Next Button - Minimalist styling */}
            <Button
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <span className="mr-1">Next</span>
              <PaginationNext className="text-gray-700" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

const Card = ({ image }) => {
  return (
    <li>
      <Link
        href={`/dashboard/transformations/${image._id}`}
        className="collection-card bg-dark-lighter  border"
      >
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
        <div className="flex-between">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
            {image.title}
          </p>
          <Image
            src={`/assets/icons/${
              transformationTypes[image.transformationType].icon
            }`}
            alt={image.title}
            width={24}
            height={24}
          />
        </div>
      </Link>
    </li>
  );
};
