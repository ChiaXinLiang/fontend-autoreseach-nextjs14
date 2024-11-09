"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface TitleGeneratorProps {
  onConfirm: (title: string) => void;
  className?: string;
}

export function TitleGenerator({
  onConfirm,
  className = "",
}: TitleGeneratorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [suggestedTitles] = useState([
    "Revolutionizing Patient Care: AI's Role in Medical Diagnosis",
    "AI in Healthcare: Challenges and Opportunities for the Future",
    "example 2",
    "example 3",
  ]);

  const handleConfirm = () => {
    if (selectedTitle) {
      onConfirm(selectedTitle);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-2xl text-gray-600 dark:text-gray-400">
        Title Generation
      </h2>

      {/* Search Input */}
      <div className="relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="h-14 pr-12 text-lg"
        />
        <Search className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-gray-400" />
      </div>

      {/* Suggested Titles */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Suggested Titles
        </h3>
        <RadioGroup
          value={selectedTitle}
          onValueChange={setSelectedTitle}
          className="space-y-3"
        >
          {suggestedTitles.map((title, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={title} id={`title-${index}`} />
              <Label
                htmlFor={`title-${index}`}
                className="text-gray-600 dark:text-gray-400"
              >
                {title}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Selected Title Display */}
      {selectedTitle && (
        <Card className="border-red-200 bg-red-50 p-4">
          <p className="font-medium text-red-600">{selectedTitle}</p>
        </Card>
      )}

      {/* Confirm Button */}
      <Button
        onClick={handleConfirm}
        disabled={!selectedTitle}
        className="h-12 w-full bg-gray-900 text-white hover:bg-gray-800"
      >
        Confirm Title
      </Button>
    </div>
  );
}
