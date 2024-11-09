import React from "react";

import { FileTextIcon, SaveIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ContentTextBoxProps {
  title: string;
  content: string;
  onContentChange: (newContent: string) => void;
  onSave: () => void;
}

const ContentTextBox: React.FC<ContentTextBoxProps> = ({
  title,
  content,
  onContentChange,
  onSave,
}) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileTextIcon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="h-64 w-full"
          placeholder="Generated content will appear here"
        />
        <div className="flex justify-end">
          <Button onClick={onSave} className="flex items-center gap-2">
            <SaveIcon className="h-4 w-4" />
            Save Content
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentTextBox;
