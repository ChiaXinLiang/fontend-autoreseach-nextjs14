"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import ContentTextBox from "@/components/ContentTextBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Paper, paperDatabase } from "@/data/paper-database";
import { sampleOutlines } from "@/data/sample-outlines";
import { getContentForSection } from "@/data/section-content";

export default function GenerateSectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sectionIndex = parseInt(searchParams.get("section") || "0");

  const [sections, setSections] = useState(() => {
    const outline = sampleOutlines[0]; // Using the AI in Healthcare outline
    return outline.sections.map((section) => ({
      title: section.title,
      content: "",
      subsections: section.subsections.map((sub) => ({
        title: sub,
        content: "",
      })),
    }));
  });

  const [currentSection, setCurrentSection] = useState(sectionIndex);
  const [sectionDescription, setSectionDescription] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [citations, setCitations] = useState([
    "Author, A. (2025). Title of the paper. Journal, 10(2), 123-456.",
    "Researcher, B. (2025). Another relevant study. Conference Proceedings, 78-90.",
  ]);
  const [papers, setPapers] = useState(["Paper 1", "Paper 2", "Paper 3"]);
  const [showGeneratedContent, setShowGeneratedContent] = useState(false);

  useEffect(() => {
    setSectionDescription(sections[currentSection].content);
  }, [currentSection, sections]);

  const handleGenerateContent = () => {
    setGeneratedContent(
      `Generated content for ${sections[currentSection].title}:\n\n${sectionDescription}\n\nThis section includes the following subsections:\n${sections[currentSection].subsections.map((sub) => `- ${sub.title}`).join("\n")}`
    );
    setShowGeneratedContent(true);
  };

  const handleSaveContent = () => {
    console.log("Saving generated content...");
    // Implement the logic to save the generated content
    const updatedSections = [...sections];
    updatedSections[currentSection].content = generatedContent;
    setSections(updatedSections);
  };

  const handleSaveProgress = () => {
    console.log("Saving progress...");
    // Implement the logic to save progress here
  };

  const handleReview = () => {
    router.push("/article/review");
  };

  const handleUpdateSubsection = (subIndex: number, newContent: string) => {
    const updatedSections = [...sections];
    updatedSections[currentSection].subsections[subIndex].content = newContent;
    setSections(updatedSections);
  };

  const handleAddCitation = () => {
    setCitations([...citations, ""]);
  };

  const handleGenerateRelatedPapers = () => {
    const relatedPapers = getRelatedPapers(sections[currentSection].title);
    setPapers((prevPapers) => {
      const existingIds = new Set(prevPapers.map((p) => p.id));
      const newPapers = relatedPapers.filter((p) => !existingIds.has(p.id));
      return [...prevPapers, ...newPapers];
    });
  };

  const handleDownloadPrompt = () => {
    console.log("Downloading prompt...");
  };

  const getRelatedPapers = (sectionTitle: string): Paper[] => {
    const sectionData = getContentForSection(sectionTitle);
    if (!sectionData) return [];

    return sectionData.paperIds
      .map((id) => paperDatabase.find((paper) => paper.id === id))
      .filter((paper): paper is Paper => paper !== undefined);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold">Generate Section Content</h1>

      <Select
        value={currentSection.toString()}
        onValueChange={(value) => setCurrentSection(parseInt(value))}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a section" />
        </SelectTrigger>
        <SelectContent>
          {sections.map((section, index) => (
            <SelectItem key={index} value={index.toString()}>
              {section.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Card>
        <CardHeader>
          <CardTitle>{sections[currentSection].title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter section description"
            value={sectionDescription}
            onChange={(e) => setSectionDescription(e.target.value)}
            className="h-32 w-full"
          />
          <div className="space-y-2">
            <h3 className="font-semibold">Reference Papers</h3>
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => console.log("Edit all papers")}
              >
                edit all papers
              </Button>
              <Button onClick={handleGenerateRelatedPapers}>
                Generate Related Papers
              </Button>
            </div>
            {papers.map((paper, index) => (
              <div key={paper.id} className="flex items-center space-x-2">
                <Checkbox id={`paper-${paper.id}`} />
                <label htmlFor={`paper-${paper.id}`} className="text-sm">
                  {paper.title} ({paper.year}) - {paper.authors}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline" onClick={handleDownloadPrompt}>
              Download Prompt
            </Button>
            <Button onClick={handleGenerateContent}>Generate Content</Button>
          </div>
        </CardContent>
      </Card>

      {showGeneratedContent && (
        <ContentTextBox
          title="Generated Content"
          content={generatedContent}
          onContentChange={setGeneratedContent}
          onSave={handleSaveContent}
        />
      )}

      <Accordion type="single" collapsible className="w-full">
        {sections[currentSection].subsections.map((subsection, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{subsection.title}</AccordionTrigger>
            <AccordionContent>
              <Textarea
                value={subsection.content}
                onChange={(e) => handleUpdateSubsection(index, e.target.value)}
                className="h-32 w-full"
                placeholder={`Content for ${subsection.title}`}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Card>
        <CardHeader>
          <CardTitle>Citations</CardTitle>
        </CardHeader>
        <CardContent>
          {citations.map((citation, index) => (
            <Input
              key={index}
              value={citation}
              onChange={(e) => {
                const newCitations = [...citations];
                newCitations[index] = e.target.value;
                setCitations(newCitations);
              }}
              className="mb-2"
            />
          ))}
          <Button variant="outline" onClick={handleAddCitation}>
            Add Citation
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Link href="/article/generate-subsection-content">
          <Button variant="outline">Back</Button>
        </Link>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleSaveProgress}>
            Save Progress
          </Button>
          <Button onClick={handleReview}>Review Article</Button>
        </div>
      </div>
    </div>
  );
}
