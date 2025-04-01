import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Calculator, Table2, Lightbulb } from "lucide-react";

const HowToUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              How to Use Truth<span className="text-purple">Bud</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your friendly guide to mastering boolean logic with our truth table generator
            </p>
          </div>

          <Tabs defaultValue="basics" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="basics" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Basics
              </TabsTrigger>
              <TabsTrigger value="syntax" className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Syntax
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex items-center gap-2">
                <Table2 className="h-4 w-4" />
                Examples
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Tips
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    Learn the basics of using TruthBud
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">1. Enter Your Expression</h3>
                      <p className="text-sm text-muted-foreground">
                        Type your boolean expression in the input field using standard operators (AND, OR, NOT)
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">2. Generate Table</h3>
                      <p className="text-sm text-muted-foreground">
                        Click the generate button to create your truth table instantly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="syntax" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expression Syntax</CardTitle>
                  <CardDescription>
                    Understanding the supported operators and syntax
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Basic Operators</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• AND: & or ∧</li>
                        <li>• OR: | or ∨</li>
                        <li>• NOT: ! or ¬</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Variables</h3>
                      <p className="text-sm text-muted-foreground">
                        Use single letters (A, B, C) as variables in your expressions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Example Expressions</CardTitle>
                  <CardDescription>
                    Try these example expressions to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Simple Examples</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• A & B</li>
                        <li>• A | B</li>
                        <li>• !A</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Complex Examples</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• (A & B) | (!C)</li>
                        <li>• !(A | B) & C</li>
                        <li>• A & (B | C)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pro Tips</CardTitle>
                  <CardDescription>
                    Make the most of TruthBud with these tips
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Best Practices</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Use parentheses for clarity</li>
                        <li>• Start with simple expressions</li>
                        <li>• Check your syntax carefully</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-purple/5">
                      <h3 className="font-semibold mb-2">Common Mistakes</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Missing parentheses</li>
                        <li>• Invalid operators</li>
                        <li>• Incorrect variable names</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-purple hover:bg-purple/90">
              Try It Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowToUse; 