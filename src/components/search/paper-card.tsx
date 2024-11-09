"use client";

import { BookmarkPlus, Calendar, FileText, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PaperCardProps {
  title: string;
  authors: string;
  year: number;
  description: string;
}

export function PaperCard({
  title,
  authors,
  year,
  description,
}: PaperCardProps) {
  return (
    <Card className="dark:bg-gray-800">
      <CardContent className="pt-6">
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold">
          <FileText className="h-5 w-5" />
          {title}
        </h2>
        <p className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
          <Users className="h-4 w-4" />
          {authors}
          <span className="mx-2">|</span>
          <Calendar className="h-4 w-4" />
          {year}
        </p>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            View Full Paper
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <BookmarkPlus className="h-4 w-4" />
            Add to References
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
