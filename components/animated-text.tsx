"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedTextProps {
  text: string;
  className?: string;
  fontSize?: string;
  isLink?: boolean;
  href?: string;
}

export default function AnimatedText({
  text,
  className = "",
  fontSize = "text-xl",
  isLink = false,
  href = "/",
}: AnimatedTextProps) {
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

  const letters = text.split("");
  const AnimatedContent = (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className={letter === " " ? "mr-1" : ""}
          style={{
            display: "inline-block",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );

  if (isLink) {
    return (
      <Link href={href} className={`font-bold ${fontSize} flex ${className}`}>
        {AnimatedContent}
      </Link>
    );
  }

  return (
    <div className={`font-bold ${fontSize} flex ${className}`}>
      {AnimatedContent}
    </div>
  );
}
