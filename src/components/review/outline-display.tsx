"use client";

import { Card } from "@/components/ui/card";
import { Outline } from "@/data/sample-outlines";

interface OutlineDisplayProps {
  outline: Outline;
  onSectionSelect: (section: string) => void;
  selectedSection: string;
}

export default function OutlineDisplay({
  outline,
  onSectionSelect,
  selectedSection,
}: OutlineDisplayProps) {
  return (
    <Card className="bg-white p-6">
      <h2 className="mb-4 text-xl font-medium">Outline</h2>
      <h3 className="mb-4 text-lg font-medium text-gray-700">
        {outline.title}
      </h3>
      <div className="space-y-2">
        {outline.sections.map((section, index) => (
          <div key={index} className="space-y-1">
            <div className="font-medium">{section.title}</div>
            <div className="ml-6 space-y-1">
              {section.subsections.map((subsection, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => onSectionSelect(subsection)}
                  className={`w-full rounded px-2 py-1 text-left hover:bg-gray-100 ${
                    selectedSection === subsection
                      ? "bg-gray-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {subsection}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
