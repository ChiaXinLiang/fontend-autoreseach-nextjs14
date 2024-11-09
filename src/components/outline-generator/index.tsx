"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Chapter {
  id: string;
  title: string;
  description: string;
}

interface OutlineGeneratorProps {
  markdownContent: string;
  chapters: Chapter[];
  onMarkdownChange: (content: string) => void;
  onApply: () => void;
  onDownloadPrompt: () => void;
  onSaveChapter: (id: string) => void;
  onRemoveChapter: (id: string) => void;
  onAddChapter: () => void;
}

export function OutlineGenerator({
  markdownContent,
  chapters,
  onMarkdownChange,
  onApply,
  onDownloadPrompt,
  onSaveChapter,
  onRemoveChapter,
  onAddChapter,
}: OutlineGeneratorProps) {
  return (
    <div className="space-y-8">
      {/* Generated Outline Section */}
      <div>
        <h2 className="text-2xl">Outline Generator</h2>
        <p className="mb-4 text-gray-500">Generated Outline</p>
        <Textarea
          value={markdownContent}
          onChange={(e) => onMarkdownChange(e.target.value)}
          className="min-h-[200px] font-mono"
          placeholder="markdown format"
        />
        <div className="mt-4 flex justify-between">
          <Button variant="outline" onClick={onApply}>
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

      {/* Outline of Chapters Section */}
      <div>
        <h2 className="mb-6 text-2xl">Outline of Chapters</h2>
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="flex items-start justify-between rounded-lg bg-gray-50 p-4"
            >
              <div>
                <h3 className="font-medium">{chapter.title}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {chapter.description}
                </p>
              </div>
              <div className="flex-col-2 flex space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onSaveChapter(chapter.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onRemoveChapter(chapter.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Chapter Button */}
        <Button
          variant="outline"
          className="mt-4 flex w-full items-center justify-center"
          onClick={onAddChapter}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Chapter
        </Button>
      </div>
    </div>
  );
}
