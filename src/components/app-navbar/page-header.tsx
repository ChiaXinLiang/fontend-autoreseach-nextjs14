import React from "react";

import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  icon?: LucideIcon;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon: Icon }) => {
  return (
    <h1 className="mb-6 flex items-center gap-3 text-3xl font-bold">
      {Icon && <Icon className="h-8 w-8" />}
      {title}
    </h1>
  );
};

export default PageHeader;
