"use client";

import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  onSearch: (e: React.FormEvent) => void;
}

export function SearchInput({
  query,
  setQuery,
  showFilters,
  setShowFilters,
  onSearch,
}: SearchInputProps) {
  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Enter your research query (e.g., Machine learning in healthcare)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-lg"
      />

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
          {showFilters ? "Hide Filter" : "Show Filter"}
        </Button>

        <Button
          type="submit"
          onClick={onSearch}
          className="flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
