
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function LogicInfo() {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-xl font-semibold mb-4">Logic Operations Reference</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="operators">
          <AccordionTrigger>Logic Operators</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Conjunction (AND, ∧)</h3>
                  <p className="text-sm">Returns true only when both inputs are true.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>A ∧ B = TRUE only when both A and B are TRUE</div>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Disjunction (OR, ∨)</h3>
                  <p className="text-sm">Returns true when at least one input is true.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>A ∨ B = TRUE when either A or B or both are TRUE</div>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Negation (NOT, ¬)</h3>
                  <p className="text-sm">Returns the opposite of the input.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>¬A = TRUE when A is FALSE</div>
                    <div>¬A = FALSE when A is TRUE</div>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Exclusive OR (XOR, ⊕)</h3>
                  <p className="text-sm">Returns true when inputs have different values.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>A ⊕ B = TRUE when exactly one of A or B is TRUE</div>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Implication (→)</h3>
                  <p className="text-sm">Returns false only when the antecedent is true and the consequent is false.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>A → B = FALSE only when A is TRUE and B is FALSE</div>
                  </div>
                </div>
                
                <div className="bg-secondary p-4 rounded-md">
                  <h3 className="font-semibold">Biconditional (↔)</h3>
                  <p className="text-sm">Returns true when both inputs have the same value.</p>
                  <div className="mt-2 text-xs font-mono bg-background p-2 rounded">
                    <div>A ↔ B = TRUE when A and B are both TRUE or both FALSE</div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="syntax">
          <AccordionTrigger>Input Syntax</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <p>TruthBud supports multiple ways to input logical operators:</p>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Standard Symbols</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>AND: ∧</li>
                  <li>OR: ∨</li>
                  <li>NOT: ¬</li>
                  <li>XOR: ⊕</li>
                  <li>IMPLIES: →</li>
                  <li>IFF: ↔</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Text Alternatives</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>AND: AND</li>
                  <li>OR: OR</li>
                  <li>NOT: NOT</li>
                  <li>XOR: XOR</li>
                  <li>IMPLIES: IMP</li>
                  <li>IFF: IFF</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Symbolic Notation</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>AND: &amp;</li>
                  <li>OR: |</li>
                  <li>NOT: !</li>
                  <li>XOR: ^</li>
                  <li>IMPLIES: {'=>'}</li>
                  <li>IFF: {'<=>'}</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Examples</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>(A ∧ B) ∨ ¬C</li>
                  <li>P → (Q ∨ R)</li>
                  <li>A XOR (B AND C)</li>
                  <li>(P | Q) &amp; !R</li>
                  <li>X {'=>'} (Y {'<=>'} Z)</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="examples">
          <AccordionTrigger>Example Expressions</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Basic Examples</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>A ∧ B (AND)</li>
                  <li>P ∨ Q (OR)</li>
                  <li>¬X (NOT)</li>
                  <li>A ⊕ B (XOR)</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Compound Examples</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>(A ∧ B) ∨ C</li>
                  <li>P → (Q ∧ R)</li>
                  <li>¬(X ∨ Y) ↔ (¬X ∧ ¬Y) (De Morgan's Law)</li>
                  <li>(A → B) ∧ (B → C) → (A → C) (Syllogism)</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <h3 className="font-semibold">Practical Examples</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                  <li>(Sunny ∧ Warm) → Outside (If it's sunny and warm, then go outside)</li>
                  <li>Coffee ∨ Tea (Have either coffee or tea)</li>
                  <li>Pass → (Study ∧ Attend) (If you pass, then you studied and attended)</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
