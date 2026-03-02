"use client";
import { useEffect, useRef } from "react";

import useGetWidth from "@/hooks/useGetWidth";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const width = useGetWidth();

  const amount = width > 640 ? 0.5 : 0.2;

  const isInView = useInView(ref, {
    once: true,
    amount: amount
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <div className="flex items-center justify-center overflow-hidden py-4">
      <motion.div
        ref={ref}
        initial={
          children.props.id % 2 === 0
            ? { opacity: 0, x: "50%" }
            : { opacity: 0, x: "-50%" }
        }
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
