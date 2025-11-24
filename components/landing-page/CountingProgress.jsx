"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

const CountingProgress = ({
  start = 0,
  end = 100,
  duration = 5,
  other = "+",
  label,
}) => {
  const count = useMotionValue(start);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, end, { duration });
    return () => controls.stop();
  }, []);
  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-bold">
        {<motion.span>{rounded}</motion.span>}
        {other}
      </div>
      <div className="text-text-gray text-sm">{label}</div>
    </div>
  );
};
export default CountingProgress;
