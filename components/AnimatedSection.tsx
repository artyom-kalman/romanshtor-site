"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
