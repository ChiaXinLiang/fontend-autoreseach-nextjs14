"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { ArrowLeft, Search } from "lucide-react";

import { PaperCard } from "@/components/search/paper-card";
import { ResultsAnalytics } from "@/components/search/results-analytics";
import { Button } from "@/components/ui/button";

interface SearchResult {
  title: string;
  authors: string;
  year: number;
  description: string;
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Simulating API call for results
    setResults([
      {
        title:
          "Machine Learning Applications in Healthcare: A Comprehensive Review",
        authors: "John Doe, Jane Smith",
        year: 2025,
        description:
          "This paper provides a comprehensive review of machine learning applications in healthcare, covering areas such as diagnosis, treatment planning, and patient monitoring.",
      },
      {
        title:
          "Deep Learning for Medical Image Analysis: Current Trends and Future Directions",
        authors: "Alice Johnson, Bob Williams",
        year: 2025,
        description:
          "This study explores the current trends and future directions of deep learning applications in medical image analysis, focusing on areas such as radiology, pathology, and ophthalmology.",
      },
    ]);
  }, [query]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="space-y-2">
        <h1 className="flex items-center gap-3 text-4xl font-bold">
          <Search className="h-8 w-8" />
          Search Results
        </h1>
        <p className="text-muted-foreground flex items-center gap-2">
          <Search className="h-4 w-4" />
          Showing results for: {query}
        </p>
      </div>

      <div className="space-y-6">
        {results.map((paper, index) => (
          <PaperCard key={index} {...paper} />
        ))}
      </div>

      <ResultsAnalytics />

      <div className="text-center">
        <Link href="/search/query">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </Link>
      </div>
    </div>
  );
}
