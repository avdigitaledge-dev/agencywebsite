"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stagger, staggerB, staggerC } from "@/lib/animations";

const variants = { A: stagger, B: staggerB, C: staggerC };

export const ScrollReveal = ({
  children,
  className = "",
  variant = "A",
  margin = "-80px",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "A" | "B" | "C";
  margin?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
};
