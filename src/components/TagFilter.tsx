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
  return (
    <div className="mb-8 animate-slide-down">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Filtered by: {selectedTag}</h2>
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
