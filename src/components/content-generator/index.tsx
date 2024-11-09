"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { type OutlineSection } from "@/data/sample-outlines";

interface ContentGeneratorProps {
  type: "section" | "subsection";
  title: string;
  currentItem: string;
  inputText: string;
  items: OutlineSection[];
  onInputChange: (text: string) => void;
  onApply: () => void;
  onDownloadPrompt: () => void;
  onSaveItem: (title: string) => void;
  onRemoveItem: (title: string) => void;
  onAddItem: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  onBack: () => void;
  onSaveProgress: () => void;
  onGenerate: () => void;
}

export function ContentGenerator({
  type,
  title,
  currentItem,
  inputText,
  items,
  onInputChange,
  onApply,
  onDownloadPrompt,
  onSaveItem,
  onRemoveItem,
  onAddItem,
  onPrevious,
  onNext,
  onBack,
  onSaveProgress,
  onGenerate,
}: ContentGeneratorProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">{title}</h2>
        <Button variant="secondary">
          Save {type === "section" ? "Section" : "Subsection"}
        </Button>
      </div>

      {/* Navigation (only for subsections) */}
      {type === "subsection" && (
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={onPrevious}
            className="flex items-center"
          >
            ← Previous Chapter
          </Button>
          <h3 className="text-xl font-medium">{currentItem}</h3>
          <Button
            variant="outline"
            onClick={onNext}
            className="flex items-center"
          >
            Next Chapter →
          </Button>
        </div>
      )}

      {/* Input Section */}
      <div className="space-y-4">
        <Textarea
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Input text"
          className="min-h-[200px]"
        />
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={onApply}
            className="bg-gray-600 text-white"
          >
            Apply
          </Button>
          <Button
            variant="outline"
            onClick={onDownloadPrompt}
            className="text-red-500 hover:text-red-600"
          >
            Download Prompt
          </Button>
        </div>
      </div>

      {/* Content Items */}
      <div className="space-y-4">
        <h3 className="text-xl">
          {type === "section"
            ? "Outline of Chapters"
            : "Subsections Suggestions"}
        </h3>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-lg bg-gray-50 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.subsections.join(", ")}
                  </p>
                </div>
                <div className="flex-col-2 flex space-x-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onSaveItem(item.title)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => onRemoveItem(item.title)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Button */}
        <Button
          variant="outline"
          className="flex w-full items-center justify-center"
          onClick={onAddItem}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add {type === "section" ? "Chapter" : "Subsection"}
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <div className="space-x-2">
          <Button variant="outline" onClick={onSaveProgress}>
            Save Progress
          </Button>
          <Button onClick={onGenerate}>
            Generate {type === "section" ? "Outline" : "Subsection"}
          </Button>
        </div>
      </div>
    </div>
  );
}
