import type { Project } from "@/data/types";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  starCount?: number;
  onTagClick: (tag: string) => void;
  selectedTag: string | null;
}

export default function ProjectCard({
  project,
  starCount,
  onTagClick,
  selectedTag,
}: ProjectCardProps) {
  const hasRust = project.tags.includes("rust");
  const hasReact = project.tags.includes("react");

  return (
    <div className="py-4 border-b last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="mb-2 sm:mb-0 flex-grow">
          <div className="flex items-center">
            <Link
              href={project.link.href}
              className="text-lg font-semibold text-[#900000] hover:underline mr-2"
              target="_blank"
              rel="noopener noreferrer"
              title={project.link.title}
            >
              {project.name}
            </Link>
            {hasRust && (
              <span className="text-sm mr-2" aria-label="Rust">
                🦀
              </span>
            )}
            {hasReact && (
              <span className="text-sm mr-2" aria-label="React">
                ⚛️
              </span>
            )}
            {starCount !== undefined && starCount >= 10 && (
              <span className="mr-1 flex items-center text-xs text-gray-600">
                ({starCount}
                <span className="ml-1" aria-hidden="true">
                  ⭐️
                </span>
                )
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {project.tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => onTagClick(tag)}
              className={`px-2 py-1 rounded text-xs ${
                selectedTag === tag
                  ? "bg-[#900000] text-white hover:bg-opacity-90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
