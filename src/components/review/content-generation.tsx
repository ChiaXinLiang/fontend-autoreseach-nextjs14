"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContentGenerationProps {
  selectedSection: string;
  content: string;
}

export default function ContentGeneration({
  selectedSection,
  content,
}: ContentGenerationProps) {
  return (
    <Card className="bg-white p-6">
      <div className="mb-6">
        <h2 className="text-xl font-medium">Content</h2>
        <p className="mt-1 text-sm text-gray-600">
          Showing content for: {selectedSection}
        </p>
      </div>

      <div className="mb-4 whitespace-pre-wrap rounded-lg bg-gray-50 p-4 text-gray-700">
        {content}
      </div>

      <Button className="bg-slate-800 text-white hover:bg-slate-900">
        Edit Content
      </Button>
    </Card>
  );
}
