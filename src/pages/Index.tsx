import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExpressionInput } from "@/components/ExpressionInput";
import { TruthTable } from "@/components/TruthTable";
import { LogicInfo } from "@/components/LogicInfo";
import { validateExpression } from "@/utils/expressionParser";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Index = () => {
  const [expression, setExpression] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (inputExpression: string) => {
    // Validate the expression
    const validation = validateExpression(inputExpression);
    
    if (!validation.valid) {
      setError(validation.error || "Invalid expression");
      setExpression("");
      toast({
        variant: "destructive",
        title: "Invalid expression",
        description: validation.error || "Please check your syntax and try again.",
      });
      return;
    }
    
    // Clear any previous errors
    setError(null);
    setExpression(inputExpression);
    
    toast({
      title: "Truth table generated",
      description: "Your truth table has been created successfully.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-8 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">
            Truth<span className="text-purple">Bud</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Generate truth tables for any boolean expression
          </p>
          
          <ExpressionInput onSubmit={handleSubmit} />
          
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {expression && <TruthTable expression={expression} />}
        </section>
        
        <LogicInfo />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
