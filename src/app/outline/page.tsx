import Link from "next/link";

import { PenTool } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OutlineHome() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-4xl font-bold">Generate Outline</h1>
      <Card className="bg-white shadow-sm dark:bg-gray-800">
        <CardContent className="pt-6">
          <div className="space-y-4 text-center">
            <PenTool className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Create Your Outline</h2>
            <p className="text-muted-foreground">
              Generate a structured outline for your research paper or article.
            </p>
            <Link href="/outline/topic">
              <Button className="mt-4">Start Outline</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
