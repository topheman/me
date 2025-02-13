import Link from "next/link";

import type { OldProject } from "@/data/types";

interface OldProjectCardProps {
  project: OldProject;
  onTagClick: (tag: string) => void;
  selectedTag: string | null;
}

export default function OldProjectCard({
  project,
  onTagClick,
  selectedTag,
}: OldProjectCardProps) {
  return (
    <div className="py-4 border-b last:border-b-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="mb-2 sm:mb-0 flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.name}
          </h3>
          <p className="text-sm text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.links.demo && (
              <Link
                href={project.links.demo.href}
                className="text-xs text-[#900000] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                title={project.links.demo.title}
              >
                demo
              </Link>
            )}
            {project.links.repo && (
              <Link
                href={project.links.repo.href}
                className="text-xs text-[#900000] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                title={project.links.repo.title}
              >
                repo
              </Link>
            )}
            {project.links.post && (
              <Link
                href={project.links.post.href}
                className="text-xs text-[#900000] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                title={project.links.post.title}
              >
                post
              </Link>
            )}
          </div>
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
