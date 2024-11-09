"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ContentTextBoxProps {
  title: string;
  content: string;
  onContentChange: (content: string) => void;
  onSave: () => void;
}

export default function ContentTextBox({
  title,
  content,
  onContentChange,
  onSave,
}: ContentTextBoxProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="min-h-[200px] font-mono"
        />
        <div className="flex justify-end">
          <Button onClick={onSave}>Save Content</Button>
        </div>
      </CardContent>
    </Card>
  );
}
