import { useEffect, useRef } from "react";

import { MOBILE_HEADER_HEIGHT } from "@/constants/layout";
import { useIsMobile } from "@/hooks/useIsMobile";

interface TagFilterProps {
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
  allTags: string[];
}

export default function TagFilter({
  selectedTag,
  onTagClick,
  allTags,
}: TagFilterProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    if (selectedTag && headingRef.current) {
      const elementPosition = headingRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - MOBILE_HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (!selectedTag) {
      // When filter is cleared, scroll to "My Personal Projects" heading
      const projectsHeading = document.querySelector("#projects");
      if (projectsHeading) {
        // Scroll with offset to account for fixed header
        const elementPosition = projectsHeading.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - MOBILE_HEADER_HEIGHT;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [isMobile, selectedTag]);

  return (
    <div className="mb-8 animate-slide-down">
      <div className="flex items-center justify-between mb-4">
        <h2 ref={headingRef} className="text-2xl font-bold">
          Filtered by: {selectedTag}
        </h2>
        <button
          onClick={() => onTagClick(selectedTag!)}
          className="bg-[#900000] text-white rounded-full px-4 py-2 transition-opacity duration-300 hover:opacity-70"
        >
          Clear filter
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag
                ? "bg-[#900000] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
