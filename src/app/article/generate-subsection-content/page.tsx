"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { type Paper, findPaper } from "@/data/paper-database";
import { sampleOutlines } from "@/data/sample-outlines";
import { getContentForSection } from "@/data/section-content";

export default function GenerateSubsectionContent() {
  const defaultSubsection = "Definition of AI in healthcare";
  const defaultSectionData = getContentForSection(defaultSubsection);
  const defaultPapers =
    defaultSectionData?.paperIds
      .map((id) => findPaper(id))
      .filter((paper): paper is Paper => paper !== undefined) || [];

  const [description, setDescription] = useState(
    "Generate content about the definition and basic concepts of AI in healthcare, focusing on how AI technologies are being used to transform healthcare delivery and patient care."
  );
  const [generatedContent, setGeneratedContent] = useState(
    defaultSectionData?.content || ""
  );
  const [summaryText, setSummaryText] = useState("");
  const [citedPapers, setCitedPapers] = useState<Paper[]>(defaultPapers);
  const [selectedSubsection, setSelectedSubsection] =
    useState<string>(defaultSubsection);

  const subsections = sampleOutlines[0].sections[0].subsections;

  const handleGenerateContent = () => {
    const sectionData = getContentForSection(selectedSubsection);

    if (sectionData) {
      setGeneratedContent(sectionData.content);

      const papers = sectionData.paperIds
        .map((id) => findPaper(id))
        .filter((paper): paper is Paper => paper !== undefined);

      setCitedPapers(papers);
    }
  };

  const handleGenerateSummary = () => {
    // For demo purposes, generate a simple summary
    const summary = `This section discusses the fundamental concepts of AI in healthcare,
    highlighting its role in data analysis and clinical decision support. The content
    emphasizes the growing importance of AI technologies in modern healthcare settings.`;

    setSummaryText(summary);
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-2 text-2xl font-semibold">
        Generate Subsection content
      </h1>
      <p className="mb-6 text-gray-600">
        Reference paper list and prompt will influence the content of
        subsection&apos;s result
      </p>

      <div className="mb-6 rounded-lg border">
        <div className="flex items-center border-b p-4">
          <div className="mr-2 h-4 w-4">▼</div>
          <h2 className="font-medium">Introduction</h2>
        </div>

        <div className="p-4">
          <Textarea
            placeholder="Input description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 min-h-[150px]"
          />

          <div className="flex justify-between">
            <Button
              className="bg-slate-800 text-white hover:bg-slate-900"
              onClick={handleGenerateContent}
            >
              Generate Content
            </Button>
            <Button variant="outline">Download Prompt</Button>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-4 flex space-x-4">
          {subsections.map((subsection) => (
            <button
              key={subsection}
              onClick={() => setSelectedSubsection(subsection)}
              className={`font-medium transition-colors duration-200 ${
                selectedSubsection === subsection
                  ? "font-semibold text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {subsection}
            </button>
          ))}
        </div>

        <div className="mb-8 text-gray-500">
          {generatedContent || "Generated content will appear here."}
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Citation</h4>
          <div className="space-y-2">
            {citedPapers.map((paper) => (
              <Link
                key={paper.id}
                href="#"
                className="block text-blue-500 hover:underline"
              >
                {paper.title} ({paper.authors}, {paper.year})
              </Link>
            ))}
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
      </div>

      <div className="mb-8">
        <h4 className="mb-4 font-medium">Summary of subsection 1</h4>
        <Textarea
          placeholder="summary text"
          value={summaryText}
          onChange={(e) => setSummaryText(e.target.value)}
          className="mb-4 min-h-[150px]"
        />
        <Button
          className="bg-slate-800 text-white hover:bg-slate-900"
          onClick={handleGenerateSummary}
        >
          Generate Summary
        </Button>
      </div>

      <div className="flex justify-between">
        <Link href="/article/input-outline">
          <Button variant="outline">Back</Button>
        </Link>
        <Link href="/article/generate">
          <Button className="bg-slate-700 text-white hover:bg-slate-800">
            Generate Section
          </Button>
        </Link>
      </div>
    </div>
  );
}
