"use client";

import { useState } from "react";

import ContentGeneration from "@/components/review/content-generation";
import OutlineDisplay from "@/components/review/outline-display";
import ReferencesSection from "@/components/review/references-section";
import { paperDatabase } from "@/data/paper-database";
import { sampleOutlines } from "@/data/sample-outlines";
import { getContentForSection } from "@/data/section-content";

export default function ReviewArticle() {
  const [selectedSection, setSelectedSection] = useState(
    "Definition of AI in healthcare"
  );

  // Use the first sample outline
  const currentOutline = sampleOutlines[0];

  // Get content and papers for selected section
  const sectionData = getContentForSection(selectedSection);
  const content = sectionData?.content || "Select a section to view content";
  const relevantPaperIds = sectionData?.paperIds || [];

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  // Filter papers to show only those relevant to the selected section
  const relevantPapers = paperDatabase.filter((paper) =>
    relevantPaperIds.includes(paper.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left Column - Outline */}
        <OutlineDisplay
          outline={currentOutline}
          onSectionSelect={handleSectionSelect}
          selectedSection={selectedSection}
        />

        {/* Right Column - Content and References */}
        <div className="space-y-6">
          <ContentGeneration
            selectedSection={selectedSection}
            content={content}
          />
          <ReferencesSection
            papers={relevantPapers}
            selectedPapers={relevantPaperIds}
            onPaperSelect={() => {}} // Papers are now automatically selected based on section
          />
        </div>
      </div>
    </div>
  );
}
