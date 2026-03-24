"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedStat = ({ value, label, white }: { value: string; label: string; white?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const numMatch = value.match(/([\d.]+)/);
    if (!numMatch) { setDisplay(value); return; }
    const targetStr = numMatch[1];
    const isDecimal = targetStr.includes(".");
    const target = isDecimal ? parseFloat(targetStr) : parseInt(targetStr);
    const prefix = value.slice(0, value.indexOf(targetStr));
    const suffix = value.slice(value.indexOf(targetStr) + targetStr.length);
    let current = 0;
    const steps = 40;
    const step = target / steps;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      const displayVal = isDecimal ? current.toFixed(1) : Math.floor(current).toString();
      setDisplay(`${prefix}${displayVal}${suffix}`);
      if (current >= target) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-2xl md:text-3xl font-extrabold font-display tracking-tight ${white ? "text-white stat-glow" : "text-accent"}`}>{display}</p>
      <p className={`text-xs mt-1 font-medium ${white ? "text-white/60" : "text-muted-foreground"}`}>{label}</p>
    </div>
  );
};

export default AnimatedStat;
