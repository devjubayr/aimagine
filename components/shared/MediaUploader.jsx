"use client";
import { dataUrl } from "@/utils/dataUrl";
import { getImageSize } from "@/utils/getImageSize";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { toast } from "sonner";

const MediaUploader = ({
  onValueChange,
  setImage,
  publicId,
  type,
  image,
  isTransforming,
}) => {
  const onUploadSuccessHandler = (result) => {
    setImage((prev) => ({
      ...prev,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));

    onValueChange(result?.info?.public_id);

    toast("Image upload successfully", {
      description: "One credit was conducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast("Something went wrong while uploading", {
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="imaginify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            Original
          </h3>

          {publicId ? (
            <div className="cursor-pointer overflow-hidden rounded-2xl border-2 border-border-dark hover:border-white/40 transition-all duration-300 group relative">
              <CldImage
                width={getImageSize(type, image, "width")}
                height={getImageSize(type, image, "height")}
                src={publicId}
                alt="image"
                sizes={"(max-width: 767px) 100vw, 50vw"}
                placeholder={dataUrl}
                className="w-full h-auto object-contain"
              />

              {/* Hover Overlay */}
              {!isTransforming && (
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button
                    onClick={() => open()}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      ></path>
                    </svg>
                    Upload New Image
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div
              className="min-h-[400px] flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border-dark bg-dark-lighter/50 hover:border-white/40 hover:bg-dark-lighter transition-all duration-300 cursor-pointer group p-8 gap-6"
              onClick={() => open()}
            >
              {/* Upload Icon */}
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-border-dark bg-dark flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src="/assets/icons/add.svg"
                    alt="Add Image"
                    width={48}
                    height={48}
                    className="opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="text-center space-y-3">
                <p className="text-xl font-bold text-white">
                  Click to upload image
                </p>
                <p className="text-sm text-text-gray">
                  JPG, PNG or WebP • Max 10MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
