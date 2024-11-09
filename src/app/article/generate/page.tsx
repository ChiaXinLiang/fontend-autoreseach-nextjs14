"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function GenerateSection() {
  const [sectionDescription, setSectionDescription] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerateContent = () => {
    setGeneratedContent("Generated content will appear here.");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-2 text-2xl font-semibold">Generate Section content</h1>
      <p className="mb-6 text-gray-600">
        content of section is based on summary of subsection
      </p>

      <div className="mb-8">
        <h2 className="mb-2 text-gray-700">Current Section</h2>
        <div className="mb-4 rounded-lg border p-4">
          <div className="flex items-center">
            <div className="mr-2 h-4 w-4">▼</div>
            <span className="font-medium">Results</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-gray-700">Subsection Summaries</h2>

        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Subsection 1</h3>
            <p className="mb-2 text-gray-600">Summary of subsection 1</p>
            <p className="text-gray-500">References: [1], [2]</p>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="mb-4 font-medium">Subsection 2</h3>
            <p className="mb-2 text-gray-600">Summary of subsection 2</p>
            <p className="text-gray-500">References: [1], [2]</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-gray-700">Section Content Generator</h2>
        <Textarea
          placeholder="Enter section description..."
          value={sectionDescription}
          onChange={(e) => setSectionDescription(e.target.value)}
          className="mb-4 min-h-[150px]"
        />

        <div className="mb-4 flex justify-between">
          <Button
            className="bg-slate-800 text-white hover:bg-slate-900"
            onClick={handleGenerateContent}
          >
            Generate Content
          </Button>
          <Button variant="outline">Download Prompt</Button>
        </div>

        <div className="text-gray-500">
          {generatedContent || "Generated content will appear here."}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-gray-700">Reference Papers</h2>
        <div className="mb-4 space-y-2">
          <Link href="#" className="block text-blue-500 hover:underline">
            Paper 1
          </Link>
          <Link href="#" className="block text-blue-500 hover:underline">
            Paper 2
          </Link>
          <Link href="#" className="block text-blue-500 hover:underline">
            Paper 3
          </Link>
        </div>

        <div className="flex space-x-4">
          <Button variant="outline" size="sm">
            Show more
          </Button>
          <Button variant="outline" size="sm">
            edit all papers
          </Button>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/article/generate-subsection-content">
          <Button variant="outline">Back</Button>
        </Link>
        <Link href="/article/review">
          <Button className="bg-slate-700 text-white hover:bg-slate-800">
            Review
          </Button>
        </Link>
      </div>
    </div>
  );
}
