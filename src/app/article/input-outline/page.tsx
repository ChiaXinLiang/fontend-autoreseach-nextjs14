"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function InputOutline() {
  const [outline, setOutline] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        setOutline(content);
        setError("");
      } catch (error) {
        setError(
          `Failed to read the uploaded file: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    };
    reader.onerror = () => {
      setError("Failed to read the uploaded file. Please try again.");
    };
    reader.readAsText(file);
  };

  const handleProcessOutline = () => {
    if (!outline.trim()) {
      setError("Please enter or upload an outline before proceeding.");
      return;
    }

    // Store the outline in localStorage for persistence
    localStorage.setItem("currentOutline", outline);

    // Navigate to the generate content page with the outline
    router.push(
      `/article/generate-subsection-content?outline=${encodeURIComponent(outline)}`
    );
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-red-500">
        Edit Your Outline
      </h1>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Enter your outline:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your outline here..."
            value={outline}
            onChange={(e) => {
              setOutline(e.target.value);
              setError("");
            }}
            className="min-h-[300px] font-mono"
          />

          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="flex-1">
              <input
                type="file"
                accept=".txt,.md"
                onChange={handleFileUpload}
                className="hidden"
                id="outline-upload"
              />
              <label htmlFor="outline-upload">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("outline-upload")?.click()
                  }
                >
                  Upload Outline
                </Button>
              </label>
            </div>

            <Button
              onClick={handleProcessOutline}
              className="flex-1 bg-slate-700 hover:bg-slate-800"
            >
              Process Outline
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500">
        <p>Tips:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            You can either paste your outline directly or upload a text file
          </li>
          <li>
            Make sure your outline is properly formatted with clear sections and
            subsections
          </li>
          <li>Each section should be on a new line</li>
        </ul>
      </div>
    </div>
  );
}
