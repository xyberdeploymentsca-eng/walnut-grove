/** @format */

"use client";

import { motion } from "framer-motion";

export const DropIn = ({
  children,
  delay = 0,
  stiffness = 70,
  damping = 12,
  yOffset = 150,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ y: yOffset, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        type: "spring",
        stiffness,
        damping,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
