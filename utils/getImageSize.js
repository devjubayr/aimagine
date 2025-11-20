import { aspectRatioOptions } from "@/constants";

export const getImageSize = (type, image, dimension) => {
  if (type === "fill") {
    return aspectRatioOptions[image.aspectRatio]?.[dimension] || 1000;
  }
  return image?.[dimension] || 1000;
};
