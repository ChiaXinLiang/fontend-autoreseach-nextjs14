"use client";

import { BarChart, BarChart2, ChartPie, PieChart } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResultsAnalytics() {
  return (
    <Card className="dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ChartPie className="h-5 w-5" />
          Results Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <BarChart2 className="h-5 w-5" />
              Distribution by Year
            </h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
              <BarChart className="h-12 w-12 text-gray-400" />
              <span className="text-muted-foreground ml-2">
                Chart: Publication Year Distribution
              </span>
            </div>
          </div>
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <ChartPie className="h-5 w-5" />
              Top Categories
            </h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
              <PieChart className="h-12 w-12 text-gray-400" />
              <span className="text-muted-foreground ml-2">
                Chart: Top Research Categories
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
