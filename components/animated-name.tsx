"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnimatedName() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = mounted && resolvedTheme === "dark";

  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -5, 0],
      transition: {
        delay: i * 0.05,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const nameLetters = "MARK ANTHONY NAVARRO".split("");

  return (
    <Link href="/" className="font-bold text-xl flex">
      {nameLetters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className={letter === " " ? "mr-1" : ""}
          style={{
            display: "inline-block",
            textShadow: isDarkTheme ? "0 0 8px rgba(6, 182, 212, 0.5)" : "none",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </Link>
  );
}
