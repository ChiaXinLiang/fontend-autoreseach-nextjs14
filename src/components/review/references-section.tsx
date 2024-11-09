"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Paper } from "@/data/paper-database";

interface ReferencesSectionProps {
  papers: Paper[];
  selectedPapers: string[];
  onPaperSelect: (paperId: string) => void;
}

export default function ReferencesSection({
  papers,
  selectedPapers,
  onPaperSelect,
}: ReferencesSectionProps) {
  const generateBibTeX = (paper: Paper) => {
    return `@article{${paper.id},
  title={${paper.title}},
  author={${paper.authors}},
  year={${paper.year}}
}`;
  };

  const selectedPapersData = papers.filter((paper) =>
    selectedPapers.includes(paper.id)
  );
  const bibTeX = selectedPapersData.map(generateBibTeX).join("\n\n");

  return (
    <Card className="bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-medium">References</h2>
        <Button variant="outline" size="sm">
          Show all papers
        </Button>
      </div>

      <div className="mb-6 space-y-2">
        {papers.map((paper) => (
          <div key={paper.id} className="flex items-center space-x-2">
            <Checkbox
              id={paper.id}
              checked={selectedPapers.includes(paper.id)}
              onCheckedChange={() => onPaperSelect(paper.id)}
            />
            <label htmlFor={paper.id} className="text-gray-700">
              {`${paper.authors} (${paper.year}). ${paper.title}`}
            </label>
          </div>
        ))}
      </div>

      {selectedPapers.length > 0 && (
        <div className="mb-4 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 text-lg font-medium">BibTeX</h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-600">
            {bibTeX}
          </pre>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline">Upload BibTeX</Button>
        <Button className="bg-slate-700 text-white hover:bg-slate-800">
          Download Paper
        </Button>
      </div>
    </Card>
  );
}
