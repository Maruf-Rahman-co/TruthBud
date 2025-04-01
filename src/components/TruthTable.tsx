import { Check, Copy, FileDown, X, Lightbulb, Calculator, BookOpen, Brain } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { generateTruthTable } from "@/utils/expressionParser";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TruthTableProps {
  expression: string;
}

export function TruthTable({ expression }: TruthTableProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  let table;
  try {
    table = generateTruthTable(expression);
  } catch (error) {
    return (
      <div className="p-6 border border-destructive/50 bg-destructive/10 rounded-md">
        <h3 className="font-medium text-lg text-destructive mb-2">Error Generating Table</h3>
        <p>{error instanceof Error ? error.message : "Unknown error occurred"}</p>
      </div>
    );
  }

  const { variables, rows } = table;

  const copyToClipboard = async () => {
    try {
      // Format table as CSV
      let csv = [...variables, expression].join(',') + '\n';
      rows.forEach(row => {
        const values = row.values.map(v => v ? 'T' : 'F');
        csv += [...values, row.result ? 'T' : 'F'].join(',') + '\n';
      });
      
      // Try using the modern clipboard API first
      try {
        await navigator.clipboard.writeText(csv);
      } catch (err) {
        // Fallback to the older method
        const textarea = document.createElement('textarea');
        textarea.value = csv;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      
      setCopied(true);
      
      toast({
        title: "Table copied to clipboard",
        description: "The truth table has been copied as CSV.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Could not copy table to clipboard. Please try again.",
      });
    }
  };

  const downloadCSV = () => {
    try {
      // Format table as CSV
      let csv = [...variables, expression].join(',') + '\n';
      rows.forEach(row => {
        const values = row.values.map(v => v ? 'T' : 'F');
        csv += [...values, row.result ? 'T' : 'F'].join(',') + '\n';
      });
      
      // Create a download link
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      // Set and trigger download
      link.href = url;
      link.download = `truth-table-${expression.replace(/[^a-zA-Z0-9]/g, '_')}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started",
        description: "The truth table CSV is being downloaded.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Could not download the truth table.",
      });
    }
  };

  // Generate a step-by-step explanation with modern bento grid layout
  const renderStepByStepSolution = () => {
    if (variables.length === 0) return null;
    
    return (
      <div className="mt-8 space-y-6">
        <h3 className="text-2xl font-bold text-center mb-6">Understanding the Solution</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Overview Card */}
          <Card className="col-span-full md:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Expression Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                We're evaluating the expression: <span className="font-mono font-bold">{expression}</span>
              </p>
              <p className="mt-2">
                Variables involved: <span className="font-semibold">{variables.join(', ')}</span>
              </p>
            </CardContent>
          </Card>

          {/* Step-by-Step Card */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Step-by-Step Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-4 space-y-3">
                <li>
                  <span className="font-semibold">List all possible truth values</span> for {variables.join(', ')}.
                </li>
                
                {expression.includes('¬') && (
                  <li>
                    <span className="font-semibold">Calculate negations</span> (¬X is T when X is F, and F when X is T).
                  </li>
                )}
                
                {expression.includes('∧') && (
                  <li>
                    <span className="font-semibold">Calculate AND operations</span> (A ∧ B is T only when both A and B are T).
                  </li>
                )}
                
                {expression.includes('∨') && (
                  <li>
                    <span className="font-semibold">Calculate OR operations</span> (A ∨ B is T if at least one of A or B is T).
                  </li>
                )}
                
                {expression.includes('⊕') && (
                  <li>
                    <span className="font-semibold">Calculate XOR operations</span> (A ⊕ B is T when exactly one of A or B is T).
                  </li>
                )}
                
                {expression.includes('→') && (
                  <li>
                    <span className="font-semibold">Calculate implications</span> (A → B is F only when A is T and B is F).
                  </li>
                )}
                
                {expression.includes('↔') && (
                  <li>
                    <span className="font-semibold">Calculate biconditionals</span> (A ↔ B is T when A and B have the same truth value).
                  </li>
                )}
                
                <li>
                  <span className="font-semibold">Compute the final result</span> for each combination.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Operator Guide Card */}
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Operator Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mobile Operator Strip */}
              <div className="md:hidden mb-4 overflow-x-auto pb-2 -mx-4 px-4">
                <div className="flex gap-3 min-w-max">
                  {expression.includes('¬') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-red-500/40 to-pink-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">¬</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">Negation (NOT)</p>
                          <p className="text-sm text-muted-foreground">¬X is T when X is F</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {expression.includes('∧') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">∧</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">AND</p>
                          <p className="text-sm text-muted-foreground">A ∧ B is T only when both A and B are T</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {expression.includes('∨') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">∨</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">OR</p>
                          <p className="text-sm text-muted-foreground">A ∨ B is T if at least one of A or B is T</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {expression.includes('⊕') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-purple-500/40 to-violet-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">⊕</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">XOR (Exclusive OR)</p>
                          <p className="text-sm text-muted-foreground">A ⊕ B is T when exactly one of A or B is T</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {expression.includes('→') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">→</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">Implication</p>
                          <p className="text-sm text-muted-foreground">A → B is F only when A is T and B is F</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {expression.includes('↔') && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/40 to-teal-500/40 rounded-full whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
                            <span className="font-mono text-2xl font-bold">↔</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="bg-background/95 backdrop-blur-sm">
                          <p className="font-medium">Biconditional</p>
                          <p className="text-sm text-muted-foreground">A ↔ B is T when A and B have the same value</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>

              {/* Desktop Operator Guide */}
              <div className="hidden md:block space-y-4">
                {expression.includes('¬') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Negation (¬)</h4>
                    <p className="text-sm">¬X is T when X is F, and F when X is T</p>
                  </div>
                )}
                
                {expression.includes('∧') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">AND (∧)</h4>
                    <p className="text-sm">A ∧ B is T only when both A and B are T</p>
                  </div>
                )}
                
                {expression.includes('∨') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">OR (∨)</h4>
                    <p className="text-sm">A ∨ B is T if at least one of A or B is T</p>
                  </div>
                )}
                
                {expression.includes('⊕') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">XOR (⊕)</h4>
                    <p className="text-sm">A ⊕ B is T when exactly one of A or B is T</p>
                  </div>
                )}
                
                {expression.includes('→') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Implication (→)</h4>
                    <p className="text-sm">A → B is F only when A is T and B is F</p>
                  </div>
                )}
                
                {expression.includes('↔') && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Biconditional (↔)</h4>
                    <p className="text-sm">A ↔ B is T when A and B have the same truth value</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="col-span-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Tips & Tricks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-4 space-y-2">
                <li>Start by listing all possible combinations of truth values for the variables</li>
                <li>Evaluate operations in order of precedence: ¬, ∧, ∨, ⊕, →, ↔</li>
                <li>Use parentheses to clarify the order of operations</li>
                <li>Double-check your results by verifying each row</li>
                <li>Look for patterns in the results to understand the logical relationships</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="my-6 animate-fade-in space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Truth Table: <span className="font-mono">{expression}</span>
        </h2>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy table as CSV</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={downloadCSV}
                  className="flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download as CSV file</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* Truth Table Display */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              {variables.map((variable) => (
                <th key={variable} className="border p-2 text-center font-semibold">
                  {variable}
                </th>
              ))}
              <th className="border p-2 text-center font-semibold">{expression}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                {row.values.map((value, i) => (
                  <td key={i} className="border p-2 text-center">
                    {value ? "T" : "F"}
                  </td>
                ))}
                <td className="border p-2 text-center font-semibold">
                  {row.result ? "T" : "F"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Step-by-step solution explanation */}
      {renderStepByStepSolution()}
    </div>
  );
}
