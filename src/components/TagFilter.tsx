
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface TagFilterProps {
  allTags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

const TagFilter = ({ allTags, selectedTag, onSelectTag }: TagFilterProps) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef) {
      setIsScrollable(containerRef.scrollWidth > containerRef.clientWidth);
    }
  }, [allTags, containerRef]);

  return (
    <div className="relative mb-6">
      <div 
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
        ref={setContainerRef}
      >
        <Button
          variant={selectedTag === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectTag("All")}
          className="whitespace-nowrap"
        >
          All Posts
        </Button>
        
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            className={`px-3 py-1 cursor-pointer hover:bg-accent hover:text-accent-foreground whitespace-nowrap ${
              selectedTag === tag 
              ? "bg-primary text-primary-foreground" 
              : "bg-background"
            }`}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
      
      {isScrollable && (
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default TagFilter;
