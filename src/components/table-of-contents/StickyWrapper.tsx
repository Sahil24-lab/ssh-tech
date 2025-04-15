"use client";

import React, { useEffect, useRef, useState } from "react";

interface StickyWrapperProps {
  children: React.ReactNode;
  offset: number; // header height + extra spacing
}

export default function StickyWrapper({
  children,
  offset,
}: StickyWrapperProps) {
  const [isSticky, setIsSticky] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const initialTop = useRef<number | null>(null);

  useEffect(() => {
    // Measure initial top position (relative to the document)
    if (wrapperRef.current && initialTop.current === null) {
      const rect = wrapperRef.current.getBoundingClientRect();
      initialTop.current = rect.top + window.scrollY;
    }

    const handleScroll = () => {
      if (initialTop.current !== null) {
        if (window.scrollY + offset >= initialTop.current) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: isSticky ? "fixed" : "relative",
        top: isSticky ? offset : "unset",
        width: "280px",
      }}
    >
      {children}
    </div>
  );
}
