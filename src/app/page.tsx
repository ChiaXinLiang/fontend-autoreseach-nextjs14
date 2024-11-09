import { BookOpenText, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Card className="bg-white shadow-sm dark:bg-gray-800">
        <CardContent className="pb-8 pt-8">
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <BookOpenText className="h-12 w-12 text-primary" />
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="mb-3 text-4xl font-bold">AutoResearch Writer</h1>
              <p className="text-muted-foreground text-xl">
                Intelligent Research Assistant & Writing Companion
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
