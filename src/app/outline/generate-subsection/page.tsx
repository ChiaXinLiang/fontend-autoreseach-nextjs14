"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ContentGenerator } from "@/components/content-generator";
import { type OutlineSection, sampleOutlines } from "@/data/sample-outlines";

export default function GenerateSubsectionPage() {
  const router = useRouter();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [inputText, setInputText] = useState("");
  const [subsections, setSubsections] = useState<OutlineSection[]>(() => {
    // Initialize with subsections from the first outline's first section
    const currentSection = sampleOutlines[0].sections[currentChapterIndex];
    return currentSection.subsections.map((subsection, index) => ({
      title: `${currentSection.title} - Subsection ${index + 1}`,
      subsections: [subsection],
    }));
  });

  const currentChapter = sampleOutlines[0].sections[currentChapterIndex];

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      const newSection = sampleOutlines[0].sections[currentChapterIndex - 1];
      setSubsections(
        newSection.subsections.map((subsection, index) => ({
          title: `${newSection.title} - Subsection ${index + 1}`,
          subsections: [subsection],
        }))
      );
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < sampleOutlines[0].sections.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      const newSection = sampleOutlines[0].sections[currentChapterIndex + 1];
      setSubsections(
        newSection.subsections.map((subsection, index) => ({
          title: `${newSection.title} - Subsection ${index + 1}`,
          subsections: [subsection],
        }))
      );
    }
  };

  const handleApply = () => {
    // Split input text by newlines and update subsections
    const newSubsections = inputText.split("\n").filter((text) => text.trim());
    setSubsections(
      newSubsections.map((subsection, index) => ({
        title: `${currentChapter.title} - Subsection ${index + 1}`,
        subsections: [subsection.trim()],
      }))
    );
  };

  const handleDownloadPrompt = () => {
    const prompt = `Generate subsections for the chapter: ${currentChapter.title}\n\nCurrent subsections:\n${currentChapter.subsections.join("\n")}`;
    const blob = new Blob([prompt], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentChapter.title}-prompt.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveSubsection = (title: string) => {
    const subsectionToEdit = subsections.find((s) => s.title === title);
    if (subsectionToEdit) {
      setInputText(subsectionToEdit.subsections[0]);
    }
  };

  const handleRemoveSubsection = (title: string) => {
    setSubsections(subsections.filter((s) => s.title !== title));
  };

  const handleAddSubsection = () => {
    const newSubsection: OutlineSection = {
      title: `${currentChapter.title} - Subsection ${subsections.length + 1}`,
      subsections: ["New subsection content"],
    };
    setSubsections([...subsections, newSubsection]);
  };

  const handleBack = () => {
    router.push("/outline/generate-section");
  };

  const handleSaveProgress = () => {
    localStorage.setItem(
      "subsections",
      JSON.stringify({
        chapterIndex: currentChapterIndex,
        subsections: subsections,
      })
    );
  };

  const handleGenerate = () => {
    router.push("/outline/final-confirmation");
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <ContentGenerator
        type="subsection"
        title="Subsections Generator"
        currentItem={currentChapter.title}
        inputText={inputText}
        items={subsections}
        onInputChange={setInputText}
        onApply={handleApply}
        onDownloadPrompt={handleDownloadPrompt}
        onSaveItem={handleSaveSubsection}
        onRemoveItem={handleRemoveSubsection}
        onAddItem={handleAddSubsection}
        onPrevious={handlePreviousChapter}
        onNext={handleNextChapter}
        onBack={handleBack}
        onSaveProgress={handleSaveProgress}
        onGenerate={handleGenerate}
      />
    </div>
  );
}
