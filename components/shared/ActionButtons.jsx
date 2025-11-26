"use client";

import { InfoIcon } from "lucide-react";
import { Button } from "../ui/button";

const ActionButtons = ({
  isSubmitting,
  isTransforming,
  newTransformation,
  onTransformHandler,
  transformationConfig,
  image,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Transform Button */}
      <Button
        type="button"
        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#004aad] to-[#039da5] px-8 py-6 text-base font-semibold text-white shadow-lg  transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-[#5de0e6]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
        disabled={isTransforming || !image || isSubmitting}
        onClick={onTransformHandler}
      >
        {/* Button Content */}
        <span className="relative flex items-center justify-center gap-3">
          {isTransforming ? (
            <>
              <span className="capitalize">Transforming...</span>
            </>
          ) : (
            <>
              <span className="capitalize">Apply Transformation</span>
            </>
          )}
        </span>
      </Button>

      {/* Save Button */}
      <Button
        type="submit"
        className="group relative overflow-hidden rounded-xl border-2 border-border-light bg-dark-lighter px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:border-white hover:bg-dark hover:shadow-2xl hover:shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-border-light disabled:hover:shadow-lg"
        disabled={isTransforming || !transformationConfig || isSubmitting}
      >
        <span className="relative flex items-center justify-center gap-3">
          {isSubmitting ? (
            <>
              <span className="capitalize">Saving...</span>
            </>
          ) : (
            <span className="capitalize">Save Image</span>
          )}
        </span>
      </Button>

      {/* Dynamic Info Text */}
      <div className="flex items-start gap-2 px-2 text-sm text-text-gray">
        <InfoIcon className="size-4" />
        <p>
          {isTransforming ? (
            <span>Please wait while we apply AI transformations...</span>
          ) : isSubmitting ? (
            <span>Saving your transformed image...</span>
          ) : newTransformation === null ? (
            <span>Select a transformation option to begin</span>
          ) : (
            <span>
              <span className="font-medium text-white">Ready!</span> Apply
              transformation then save your image.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
export default ActionButtons;
