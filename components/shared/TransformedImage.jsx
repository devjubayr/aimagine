"use client";

import { dataUrl } from "@/utils/dataUrl";
import { debounce } from "@/utils/debounce";
import { download } from "@/utils/download";
import { getImageSize } from "@/utils/getImageSize";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false,
}) => {
  const downloadHandler = (e) => {
    e.preventDefault();

    download(
      getCldImageUrl({
        width: image?.width,
        height: image?.height,
        src: image?.publicId,
        ...transformationConfig,
      }),
      title
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
          Transformed
        </h3>

        {hasDownload && (
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl hover:opacity-90 transition-all disabled:bg-gray-400  duration-200 shadow-lg"
            onClick={downloadHandler}
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
          </button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border-2 border-border-dark hover:border-white/40 transition-all duration-300">
            <CldImage
              width={getImageSize(type, image, "width")}
              height={getImageSize(type, image, "height")}
              src={image?.publicId}
              alt={image.title}
              sizes={"(max-width: 767px) 100vw, 50vw"}
              placeholder={dataUrl}
              className="w-full h-auto object-contain"
              onLoad={() => {
                setIsTransforming && setIsTransforming(false);
              }}
              onError={() => {
                debounce(() => {
                  setIsTransforming && setIsTransforming(false);
                }, 8000)();
              }}
              {...transformationConfig}
            />
          </div>

          {isTransforming && (
            <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 z-10 rounded-2xl">
              {/* Animated Spinner */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-border-dark"></div>
                <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-[#5de0e6] border-r-[#004aad] animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/icons/spinner.svg"
                    width={50}
                    height={50}
                    alt="spinner"
                    className="opacity-80"
                  />
                </div>
              </div>

              <div className="text-center space-y-2">
                <p className="text-white font-medium text-lg">Please wait...</p>
                <p className="text-text-gray text-sm">
                  It will take a few seconds
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="min-h-[400px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border-dark bg-dark-lighter/50 gap-4 p-8">
          <div className="w-20 h-20 rounded-full border-2 border-border-dark flex items-center justify-center">
            <svg
              className="w-10 h-10 text-text-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div className="text-center space-y-2">
            <p className="text-lg font-semibold text-white">
              Transformed Image
            </p>
            <p className="text-sm text-text-gray max-w-xs">
              Your AI-transformed image will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransformedImage;
