"use client";

import { useState } from "react";

import { FilterOptions } from "@/components/search/filter-options";
import { QueryAssistance } from "@/components/search/query-assistance";
import { SearchInput } from "@/components/search/search-input";

export default function SearchQuery() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [authors, setAuthors] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [matchCount, setMatchCount] = useState("10");
  const [matchThreshold, setMatchThreshold] = useState(50);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      query: query,
      category: category,
      authors: authors,
      startDate: startDate,
      endDate: endDate,
      matchCount: matchCount,
      matchThreshold: matchThreshold.toString(),
    });
    window.location.href = `/search/results?${params.toString()}`;
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold">Paper List Query Search</h1>

      <SearchInput
        query={query}
        setQuery={setQuery}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        onSearch={handleSearch}
      />

      {showFilters && (
        <FilterOptions
          category={category}
          setCategory={setCategory}
          authors={authors}
          setAuthors={setAuthors}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          matchCount={matchCount}
          setMatchCount={setMatchCount}
          matchThreshold={matchThreshold}
          setMatchThreshold={setMatchThreshold}
        />
      )}

      <QueryAssistance />
    </div>
  );
}
