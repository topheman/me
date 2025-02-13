"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface ScrollChevronProps {
  onClick: () => void;
}

export default function ScrollChevron({ onClick }: ScrollChevronProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 md:hidden z-50">
      <button
        onClick={onClick}
        className="bg-[#900000] rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#900000]"
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-10 h-10 text-white animate-bounce" />
      </button>
    </div>
  );
}
