"use client"

import { useState, useMemo, useRef } from "react"
import HeroBanner from "@/src/components/HeroBanner"
import ProjectsList from "@/src/components/ProjectsList"
import ScrollChevron from "@/src/components/ScrollChevron"

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const projectsListRef = useRef<HTMLDivElement>(null)

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag ? null : tag))
  }

  const handleChevronClick = () => {
    projectsListRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Memoize the HeroBanner component to prevent unnecessary rerenders
  const MemoizedHeroBanner = useMemo(() => <HeroBanner />, [])

  return (
    <div className="bg-white">
      {MemoizedHeroBanner}
      <div ref={projectsListRef}>
        <ProjectsList selectedTag={selectedTag} onTagClick={handleTagClick} />
      </div>
      <ScrollChevron onClick={handleChevronClick} />
    </div>
  )
}

