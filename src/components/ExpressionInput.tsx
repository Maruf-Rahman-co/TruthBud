import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OperatorButton } from "./OperatorButton";
import { useToast } from "@/components/ui/use-toast";
import { Brackets, Send } from "lucide-react";

const OPERATORS = [
  { symbol: "∧", name: "AND", description: "Logical AND (conjunction)" },
  { symbol: "∨", name: "OR", description: "Logical OR (disjunction)" },
  { symbol: "¬", name: "NOT", description: "Logical NOT (negation)" },
  { symbol: "⊕", name: "XOR", description: "Exclusive OR" },
  { symbol: "→", name: "IMPLIES", description: "Logical implication" },
  { symbol: "↔", name: "IFF", description: "Biconditional (if and only if)" },
  { symbol: "(", name: "Open Bracket", description: "Group expressions" },
  { symbol: ")", name: "Close Bracket", description: "Close grouping" },
];

interface ExpressionInputProps {
  onSubmit: (expression: string) => void;
}

export function ExpressionInput({ onSubmit }: ExpressionInputProps) {
  const [expression, setExpression] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const insertOperator = (operator: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      
      const newExpression = 
        expression.substring(0, start) + 
        operator + 
        expression.substring(end);
      
      setExpression(newExpression);
      
      // Set focus back to input with cursor after the inserted operator
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          const newPosition = start + operator.length;
          inputRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!expression.trim()) {
      toast({
        variant: "destructive",
        title: "Expression required",
        description: "Please enter a boolean expression before submitting.",
      });
      return;
    }
    
    onSubmit(expression.trim());
  };

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Brackets className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">Operators</span>
        </div>
        
        {/* Operator Buttons */}
        <div className="flex flex-wrap gap-1">
          {OPERATORS.map((op) => (
            <OperatorButton
              key={op.symbol}
              symbol={op.symbol}
              name={op.name}
              description={op.description}
              onClick={() => insertOperator(op.symbol)}
            />
          ))}
        </div>
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
          <Input
            ref={inputRef}
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Enter boolean expression (e.g., A ∧ B, P → Q)"
            className="font-mono text-base h-12 flex-1"
          />
          <Button 
            type="submit" 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12"
          >
            <Send className="w-5 h-5 mr-2" />
            Generate
          </Button>
        </form>
        
        {/* Help Text */}
        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <p>
            Use capital letters for variables (A, B, C, ...) and 
            the operators above or alternatives (AND, OR, NOT, etc).
          </p>
        </div>
      </div>
    </div>
  );
}
