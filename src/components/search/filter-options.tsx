"use client";

import { Calendar, Filter, Hash, Percent, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface FilterOptionsProps {
  category: string;
  setCategory: (value: string) => void;
  authors: string;
  setAuthors: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  matchCount: string;
  setMatchCount: (value: string) => void;
  matchThreshold: number;
  setMatchThreshold: (value: number) => void;
}

export function FilterOptions({
  category,
  setCategory,
  authors,
  setAuthors,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  matchCount,
  setMatchCount,
  matchThreshold,
  setMatchThreshold,
}: FilterOptionsProps) {
  return (
    <Card className="bg-gray-50 dark:bg-gray-800/50">
      <CardContent className="pt-6">
        <h2 className="mb-6 text-xl font-semibold">Filter Options</h2>
        <div className="space-y-6">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Filter className="h-4 w-4" />
              Categories
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Categories">All Categories</SelectItem>
                <SelectItem value="Machine Learning">
                  Machine Learning
                </SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Natural Language Processing">
                  Natural Language Processing
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Users className="h-4 w-4" />
              Authors
            </label>
            <Input
              type="text"
              placeholder="Enter author names"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="yyyy/mm/dd"
              />
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="yyyy/mm/dd"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Hash className="h-4 w-4" />
              Match Count
            </label>
            <Input
              type="number"
              value={matchCount}
              onChange={(e) => setMatchCount(e.target.value)}
              min="1"
              placeholder="10"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium">
              <Percent className="h-4 w-4" />
              Match Threshold
            </label>
            <div className="space-y-2">
              <Slider
                value={[matchThreshold]}
                onValueChange={(value) => setMatchThreshold(value[0])}
                max={100}
                step={1}
                className="py-4"
              />
              <div className="text-muted-foreground flex justify-between text-sm">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
