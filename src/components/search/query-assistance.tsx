"use client";

import { ArrowRight, HelpCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function QueryAssistance() {
  return (
    <Card className="bg-gray-50 dark:bg-gray-800/50">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
            <HelpCircle className="h-5 w-5" />
            Query Assistance
          </h3>

          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Use quotes for exact phrases: &quot;quantum computing&quot;
            </p>
            <p className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Use AND, OR, NOT for boolean logic: AI AND ethics
            </p>
            <p className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Use parentheses for complex queries: (AI OR machine learning) AND
              healthcare
            </p>
            <p className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Use asterisks for wildcards: neuro*
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
