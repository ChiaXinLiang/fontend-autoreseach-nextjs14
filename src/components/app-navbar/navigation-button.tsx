import { Route } from "next";
import Link from "next/link";
import React from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface NavigationButtonsProps {
  backHref: string;
  backText: string;
  nextAction?: () => void;
  nextText?: string;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  backHref,
  backText,
  nextAction,
  nextText,
}) => {
  return (
    <div className="mt-6 flex justify-between">
      <Link href={backHref as Route}>
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4" />
          {backText}
        </Button>
      </Link>
      {nextAction && nextText && (
        <Button onClick={nextAction} className="flex items-center gap-2">
          {nextText}
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
