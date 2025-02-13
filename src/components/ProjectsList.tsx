"use client"

import { useState, useEffect, useMemo } from "react"
import { projects } from "@/src/data/projects"
import { oldProjects } from "@/src/data/old-projects"
import ProjectCard from "./ProjectCard"
import OldProjectCard from "./OldProjectCard"
import TagFilter from "./TagFilter"

interface RepoData {
  name: string
  stars: number
}

interface ProjectsListProps {
  selectedTag: string | null
  onTagClick: (tag: string) => void
}

export default function ProjectsList({ selectedTag, onTagClick }: ProjectsListProps) {
  const [repoData, setRepoData] = useState<RepoData[]>([])
  const [isTagFilterVisible, setIsTagFilterVisible] = useState(false)

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/topheman/repos?per_page=100", {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        })
        if (!response.ok) {
          throw new Error("Failed to fetch repo data")
        }
        const repos = await response.json()
        const data = repos.map((repo: any) => ({
          name: repo.name,
          stars: repo.stargazers_count,
        }))
        setRepoData(data)
      } catch (error) {
        console.error("Error fetching repo data:", error)
      }
    }

    fetchRepoData()
  }, [])

  useEffect(() => {
    if (selectedTag) {
      setIsTagFilterVisible(true)
    } else {
      const timer = setTimeout(() => setIsTagFilterVisible(false), 300) // Match this with the animation duration
      return () => clearTimeout(timer)
    }
  }, [selectedTag])

  const getStarCount = (projectName: string) => {
    const repo = repoData.find((r) => r.name === projectName.split("/")[1])
    return repo ? repo.stars : undefined
  }

  const filteredProjects = useMemo(
    () => (selectedTag ? projects.filter((project) => project.tags.includes(selectedTag)) : projects),
    [selectedTag],
  )

  const filteredOldProjects = useMemo(
    () => (selectedTag ? oldProjects.filter((project) => project.tags.includes(selectedTag)) : oldProjects),
    [selectedTag],
  )

  const allTags = useMemo(
    () =>
      Array.from(
        new Set([...projects.flatMap((project) => project.tags), ...oldProjects.flatMap((project) => project.tags)])
      ).sort(),
    [],
  )

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {isTagFilterVisible && (
          <div className={selectedTag ? "animate-slide-down" : "animate-slide-up"}>
            <TagFilter selectedTag={selectedTag} onTagClick={onTagClick} allTags={allTags} />
          </div>
        )}
        {filteredProjects.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6">My Personal Projects</h2>
            <div className="bg-white overflow-hidden mb-12">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  starCount={getStarCount(project.name)}
                  onTagClick={onTagClick}
                  selectedTag={selectedTag}
                />
              ))}
            </div>
          </>
        )}

        {filteredOldProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6">Older Projects</h3>
            <div className="bg-white overflow-hidden">
              {filteredOldProjects.map((project, index) => (
                <OldProjectCard key={index} project={project} onTagClick={onTagClick} selectedTag={selectedTag} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

