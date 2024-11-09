"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Paper } from "@/data/paper-database";

interface PaperListProps {
  papers: Paper[];
  onRemove: (id: string) => void;
  onSearch: (query: string) => void;
}

export function PaperList({ papers, onRemove, onSearch }: PaperListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">Paper List Generation</h2>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search papers."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full"
      />

      {/* Paper List */}
      <div className="space-y-4">
        {papers.map((paper) => (
          <div key={paper.id} className="rounded-lg bg-gray-100 p-4">
            <h3 className="font-medium">{paper.title}</h3>
            <p className="mt-1 text-sm text-gray-600">
              Authors: {paper.authors}
            </p>
            <p className="mt-2 text-sm text-gray-500">{paper.description}</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onRemove(paper.id)}
              className="mt-2"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
