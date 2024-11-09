import Link from "next/link";

import { BookOpenText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ArticleHome() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-4xl font-bold">Generate Article</h1>
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-4 text-center">
            <BookOpenText className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-2xl font-semibold">Create Your Article</h2>
            <p className="text-muted-foreground">
              Transform your outline into a fully-fledged article with our
              AI-powered writing assistant.
            </p>
            <Link href="/article/input-outline">
              <Button className="mt-4">Start Writing</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
