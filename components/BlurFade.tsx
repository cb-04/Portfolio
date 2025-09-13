"use client";

import { motion } from "framer-motion";

export default function BlurFade({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.5, filter: "blur(8px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.2, delay }}
      viewport={{ once: true, amount: 0.2 }} 
      // once: true → animates only the first time it comes into view
      // amount: 0.2 → triggers when 20% of the element is visible
    >
      {children}
    </motion.div>
  );
}
