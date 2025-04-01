import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OperatorButtonProps {
  symbol: string;
  name: string;
  description: string;
  onClick: () => void;
}

const getOperatorStyle = (symbol: string) => {
  switch (symbol) {
    case "¬":
      return "bg-gradient-to-r from-red-500/40 to-pink-500/40 hover:from-red-500/60 hover:to-pink-500/60";
    case "∧":
      return "bg-gradient-to-r from-blue-500/40 to-indigo-500/40 hover:from-blue-500/60 hover:to-indigo-500/60";
    case "∨":
      return "bg-gradient-to-r from-green-500/40 to-emerald-500/40 hover:from-green-500/60 hover:to-emerald-500/60";
    case "⊕":
      return "bg-gradient-to-r from-purple-500/40 to-violet-500/40 hover:from-purple-500/60 hover:to-violet-500/60";
    case "→":
      return "bg-gradient-to-r from-yellow-500/40 to-orange-500/40 hover:from-yellow-500/60 hover:to-orange-500/60";
    case "↔":
      return "bg-gradient-to-r from-cyan-500/40 to-teal-500/40 hover:from-cyan-500/60 hover:to-teal-500/60";
    case "(":
    case ")":
      return "bg-gradient-to-r from-gray-500/40 to-slate-500/40 hover:from-gray-500/60 hover:to-slate-500/60";
    default:
      return "bg-secondary hover:bg-secondary/80";
  }
};

export function OperatorButton({ symbol, name, description, onClick }: OperatorButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={onClick}
            className={`font-mono text-lg font-bold px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 ${getOperatorStyle(symbol)}`}
          >
            {symbol}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
