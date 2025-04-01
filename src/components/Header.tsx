
import { ThemeToggle } from "./ThemeToggle";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple to-accent text-white font-bold text-2xl px-3 py-1 rounded-md">
            TB
          </div>
          <h1 className="text-xl font-bold">
            Truth<span className="text-purple">Bud</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
