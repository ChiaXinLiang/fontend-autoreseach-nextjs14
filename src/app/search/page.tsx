"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState("all");
  const [authors, setAuthors] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [matchCount, setMatchCount] = useState("10");
  const [matchThreshold, setMatchThreshold] = useState(50);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const searchParams = {
      query,
      ...(showFilters && {
        category,
        authors,
        startDate,
        endDate,
        matchCount,
        matchThreshold,
      }),
    };

    // Convert params to query string
    const queryString = new URLSearchParams(
      Object.entries(searchParams).reduce(
        (acc, [key, value]) => {
          if (value) acc[key] = value.toString();
          return acc;
        },
        {} as Record<string, string>
      )
    ).toString();

    // Redirect to results page with search params
    window.location.href = `/search/results?${queryString}`;
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header Section */}
      <div>
        <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-200">
          Section I: Paper List Query Search
        </h1>

        <p className="mb-2 text-red-500">
          This tool generates a list of papers based on your query input. You
          can also click on &apos;Top Research Queries&apos; to explore popular
          topics.
        </p>

        <p className="text-red-500">
          At the end, you&apos;ll receive a paper list, which you can upload to
          help generate an outline in the next step.
        </p>
      </div>

      {/* Research Query Section */}
      <div className="space-y-6">
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">
          Research Query
        </h2>

        <div className="relative">
          <Input
            type="text"
            placeholder="Machine learning in healthcare"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-14 pr-12 text-lg text-gray-400"
          />
          <Search className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400" />
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleSearch}
            className="h-12 bg-gray-900 px-8 text-white hover:bg-gray-800"
          >
            Search
          </Button>

          <Button
            variant="secondary"
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-12 items-center gap-2 bg-gray-100 px-8 text-gray-700 hover:bg-gray-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-700"
            >
              <path
                d="M3 4.5h10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9.5h10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 14.5h10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 4.5L16.5 7.5L19.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          <Button
            variant="link"
            className="h-auto p-0 font-medium text-red-500 hover:text-red-600"
          >
            Top Research Query
          </Button>
        </div>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <Card className="bg-gray-50 p-6 dark:bg-gray-800/50">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Categories
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ml">Machine Learning</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="nlp">
                    Natural Language Processing
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Authors</label>
              <Input
                type="text"
                placeholder="Enter author names"
                value={authors}
                onChange={(e) => setAuthors(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Match Count
              </label>
              <Input
                type="number"
                value={matchCount}
                onChange={(e) => setMatchCount(e.target.value)}
                min="1"
                placeholder="10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Match Threshold
              </label>
              <div className="space-y-2">
                <Slider
                  value={[matchThreshold]}
                  onValueChange={(value) => setMatchThreshold(value[0])}
                  max={100}
                  step={1}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Query Assistance Section */}
      <div className="space-y-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Query Assistance
        </h3>

        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>Use quotes for exact phrases: quantum computing</p>
          <p>Use AND, OR, NOT for boolean logic: AI AND ethics</p>
          <p>
            Use parentheses for complex queries: (AI OR machine learning) AND
            healthcare
          </p>
          <p>Use asterisks for wildcards: neuro*</p>
        </div>
      </div>
    </div>
  );
}
