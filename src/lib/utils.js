import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const fadeUp = (delay = 0, options = {}) => {
  const { yOffset = 24, duration = 0.6, useWhileInView = true } = options;

  const baseConfig = {
    initial: { opacity: 0, y: yOffset },
    transition: { duration, ease: [0.22, 1, 0.36, 1], delay }
  };

  if (useWhileInView) {
    return {
      ...baseConfig,
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true }
    };
  }

  return {
    ...baseConfig,
    animate: { opacity: 1, y: 0 }
  };
};
