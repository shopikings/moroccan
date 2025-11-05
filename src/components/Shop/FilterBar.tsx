import { useState } from "react";
import { ListFilter } from "lucide-react";

const FilterBar = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="flex items-center justify-between py-4">
      <div className="text-sm font-montserrat text-gray-700">73 products</div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 transition-colors ${
              viewMode === "grid"
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
            aria-label="Grid view"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 transition-colors ${
              viewMode === "list"
                ? "text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
            aria-label="List view"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="3.5" height="3.5" rx="0.5" />
              <rect x="7.5" y="2" width="3.5" height="3.5" rx="0.5" />
              <rect x="13" y="2" width="3.5" height="3.5" rx="0.5" />
              <rect x="18.5" y="2" width="3.5" height="3.5" rx="0.5" />

              <rect x="2" y="7.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="7.5" y="7.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="13" y="7.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="18.5" y="7.5" width="3.5" height="3.5" rx="0.5" />

              <rect x="2" y="13" width="3.5" height="3.5" rx="0.5" />
              <rect x="7.5" y="13" width="3.5" height="3.5" rx="0.5" />
              <rect x="13" y="13" width="3.5" height="3.5" rx="0.5" />
              <rect x="18.5" y="13" width="3.5" height="3.5" rx="0.5" />

              <rect x="2" y="18.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="7.5" y="18.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="13" y="18.5" width="3.5" height="3.5" rx="0.5" />
              <rect x="18.5" y="18.5" width="3.5" height="3.5" rx="0.5" />
            </svg>
          </button>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <button className="flex items-center gap-2 text-sm font-montserrat text-gray-700 hover:text-black transition-colors">
          <ListFilter className="w-4 h-4" />
          <span className="text-black text-xs font-family-montserrat">
            Filter & Sort
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
