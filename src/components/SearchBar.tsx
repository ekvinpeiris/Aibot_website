
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const SearchBar = ({ onSearch, searchQuery }: SearchBarProps) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    onSearch(newQuery);
  };
  
  const clearSearch = () => {
    setLocalQuery("");
    onSearch("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        ref={inputRef}
        className="pl-10 pr-10"
        placeholder="Search articles..."
        value={localQuery}
        onChange={handleSearch}
      />
      {localQuery && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-0 top-0 h-full rounded-l-none"
          onClick={clearSearch}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
