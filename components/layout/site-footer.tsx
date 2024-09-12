import * as React from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container flex max-w-6xl items-center justify-end py-4">
        <ModeToggle />
      </div>
    </footer>
  );
}
