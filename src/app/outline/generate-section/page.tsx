"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ContentGenerator } from "@/components/content-generator";
import { type OutlineSection, sampleOutlines } from "@/data/sample-outlines";

export default function GenerateSectionPage() {
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const [sections, setSections] = useState<OutlineSection[]>(() => {
    return sampleOutlines[0].sections;
  });

  const handleApply = () => {
    // Parse input text and update sections
    console.log("Applying input text:", inputText);
  };

  const handleDownloadPrompt = () => {
    // Download prompt logic
    console.log("Downloading prompt");
  };

  const handleSaveSection = (title: string) => {
    // Save section logic
    console.log("Saving section:", title);
  };

  const handleRemoveSection = (title: string) => {
    setSections(sections.filter((s) => s.title !== title));
  };

  const handleAddSection = () => {
    const newSection: OutlineSection = {
      title: `Section ${sections.length + 1}`,
      subsections: [],
    };
    setSections([...sections, newSection]);
  };

  const handleBack = () => {
    router.push("/outline/papers");
  };

  const handleSaveProgress = () => {
    // Save progress logic
    console.log("Saving progress");
  };

  const handleGenerate = () => {
    router.push("/outline/generate-subsection");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <ContentGenerator
        type="section"
        title="Outline Generator"
        currentItem=""
        inputText={inputText}
        items={sections}
        onInputChange={setInputText}
        onApply={handleApply}
        onDownloadPrompt={handleDownloadPrompt}
        onSaveItem={handleSaveSection}
        onRemoveItem={handleRemoveSection}
        onAddItem={handleAddSection}
        onBack={handleBack}
        onSaveProgress={handleSaveProgress}
        onGenerate={handleGenerate}
      />
    </div>
  );
}
