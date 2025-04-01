// Define the supported operators and their precedence
const OPERATORS = {
  // Precedence: higher number = higher precedence
  "¬": { precedence: 5, unary: true, evaluate: (a: boolean) => !a },
  "NOT": { precedence: 5, unary: true, evaluate: (a: boolean) => !a },
  "!": { precedence: 5, unary: true, evaluate: (a: boolean) => !a },
  
  "∧": { precedence: 4, unary: false, evaluate: (a: boolean, b: boolean) => a && b },
  "AND": { precedence: 4, unary: false, evaluate: (a: boolean, b: boolean) => a && b },
  "&": { precedence: 4, unary: false, evaluate: (a: boolean, b: boolean) => a && b },
  
  "∨": { precedence: 3, unary: false, evaluate: (a: boolean, b: boolean) => a || b },
  "OR": { precedence: 3, unary: false, evaluate: (a: boolean, b: boolean) => a || b },
  "|": { precedence: 3, unary: false, evaluate: (a: boolean, b: boolean) => a || b },
  
  "⊕": { precedence: 2, unary: false, evaluate: (a: boolean, b: boolean) => a !== b },
  "XOR": { precedence: 2, unary: false, evaluate: (a: boolean, b: boolean) => a !== b },
  "^": { precedence: 2, unary: false, evaluate: (a: boolean, b: boolean) => a !== b },
  
  "→": { precedence: 1, unary: false, evaluate: (a: boolean, b: boolean) => !a || b },
  "IMP": { precedence: 1, unary: false, evaluate: (a: boolean, b: boolean) => !a || b },
  "=>": { precedence: 1, unary: false, evaluate: (a: boolean, b: boolean) => !a || b },
  
  "↔": { precedence: 0, unary: false, evaluate: (a: boolean, b: boolean) => a === b },
  "IFF": { precedence: 0, unary: false, evaluate: (a: boolean, b: boolean) => a === b },
  "<=>": { precedence: 0, unary: false, evaluate: (a: boolean, b: boolean) => a === b },
};

// Normalize operators to their canonical form
const OPERATOR_ALIASES = {
  "AND": "∧",
  "&": "∧",
  
  "OR": "∨",
  "|": "∨",
  
  "NOT": "¬",
  "!": "¬",
  
  "XOR": "⊕",
  "^": "⊕",
  
  "IMP": "→",
  "=>": "→",
  
  "IFF": "↔",
  "<=>": "↔",
};

// Expression evaluation functions
const evaluateExpression = (
  expression: string,
  variables: string[],
  values: boolean[]
): boolean => {
  // Create a lookup map for variable values
  const variableValues: Record<string, boolean> = {};
  variables.forEach((variable, index) => {
    variableValues[variable] = values[index];
  });
  
  // Tokenize and parse the expression
  const tokens = tokenizeExpression(expression);
  
  // Convert infix to postfix notation using Shunting Yard algorithm
  const postfix = shuntingYard(tokens);
  
  // Evaluate the postfix expression
  return evaluatePostfix(postfix, variableValues);
};

// Tokenize the expression into variables, operators, and parentheses
const tokenizeExpression = (expression: string): string[] => {
  const tokens: string[] = [];
  const regex = /([A-Za-z][A-Za-z0-9_]*)|([∧∨¬⊕→↔&|!^=><=>()])|(\s+)/g;
  let match;

  while ((match = regex.exec(expression)) !== null) {
    if (match[1]) { // Variable
      tokens.push(match[1]);
    } else if (match[2]) { // Operator or parenthesis
      tokens.push(match[2]);
    }
    // Skip whitespace (match[3])
  }

  return tokens;
};

// Shunting Yard algorithm to convert infix to postfix notation
const shuntingYard = (tokens: string[]): string[] => {
  const output: string[] = [];
  const operators: string[] = [];
  
  for (const token of tokens) {
    if (/^[A-Za-z][A-Za-z0-9_]*$/.test(token)) {
      output.push(token);
      continue;
    }
    
    if (token === "(") {
      operators.push(token);
      continue;
    }
    
    if (token === ")") {
      while (operators.length && operators[operators.length - 1] !== "(") {
        output.push(operators.pop()!);
      }
      if (operators.length && operators[operators.length - 1] === "(") {
        operators.pop();
      } else {
        throw new Error("Mismatched parentheses");
      }
      continue;
    }
    
    const normalizedOp = token in OPERATOR_ALIASES ? OPERATOR_ALIASES[token as keyof typeof OPERATOR_ALIASES] : token;
    if (normalizedOp in OPERATORS) {
      const op1 = OPERATORS[normalizedOp as keyof typeof OPERATORS];
      
      if (op1.unary) {
        operators.push(normalizedOp);
        continue;
      }
      
      while (
        operators.length &&
        operators[operators.length - 1] !== "(" &&
        operators[operators.length - 1] in OPERATORS
      ) {
        const op2 = OPERATORS[operators[operators.length - 1] as keyof typeof OPERATORS];
        if (op2.precedence >= op1.precedence) {
          output.push(operators.pop()!);
        } else {
          break;
        }
      }
      
      operators.push(normalizedOp);
      continue;
    }
  }
  
  while (operators.length) {
    if (operators[operators.length - 1] === "(") {
      throw new Error("Mismatched parentheses");
    }
    output.push(operators.pop()!);
  }
  
  return output;
};

// Optimized postfix evaluation
const evaluatePostfix = (
  postfix: string[],
  variableValues: Record<string, boolean>
): boolean => {
  const stack: boolean[] = [];
  
  for (const token of postfix) {
    if (/^[A-Za-z][A-Za-z0-9_]*$/.test(token)) {
      if (token in variableValues) {
        stack.push(variableValues[token]);
      } else {
        throw new Error(`Unknown variable: ${token}`);
      }
      continue;
    }
    
    if (token in OPERATORS) {
      const op = OPERATORS[token as keyof typeof OPERATORS];
      
      if (op.unary) {
        if (stack.length < 1) {
          throw new Error(`Not enough operands for operator: ${token}`);
        }
        stack.push(op.evaluate(stack.pop()!, false)); // Provide default value for second argument
        continue;
      }
      
      if (stack.length < 2) {
        throw new Error(`Not enough operands for operator: ${token}`);
      }
      
      const rightOperand = stack.pop()!;
      const leftOperand = stack.pop()!;
      stack.push(op.evaluate(leftOperand, rightOperand));
      continue;
    }
  }
  
  return stack[0];
};

// Extract unique variables from an expression
const extractVariables = (expression: string): string[] => {
  const variables = new Set<string>();
  const regex = /[A-Za-z][A-Za-z0-9_]*/g;
  let match;

  while ((match = regex.exec(expression)) !== null) {
    const variable = match[0];
    if (!(variable in OPERATORS || variable in OPERATOR_ALIASES)) {
      variables.add(variable);
    }
  }

  return Array.from(variables).sort();
};

// Validate expression syntax
const validateExpression = (expression: string): { valid: boolean; error?: string } => {
  try {
    const tokens = tokenizeExpression(expression);
    if (tokens.length === 0) {
      return { valid: false, error: "Empty expression" };
    }

    const variables = extractVariables(expression);
    if (variables.length === 0) {
      return { valid: false, error: "No variables found in expression" };
    }

    // Test evaluation with sample values
    const sampleValues = variables.map(() => false);
    evaluateExpression(expression, variables, sampleValues);

    return { valid: true };
  } catch (error) {
    return { valid: false, error: error instanceof Error ? error.message : "Invalid expression" };
  }
};

// Optimized truth table generation
const generateTruthTable = (
  expression: string
): { variables: string[]; rows: { values: boolean[]; result: boolean }[] } => {
  const variables = extractVariables(expression);
  const rows: { values: boolean[]; result: boolean }[] = [];
  const numRows = Math.pow(2, variables.length);

  // Generate all possible combinations
  for (let i = 0; i < numRows; i++) {
    const values = variables.map((_, j) => Boolean((i >> j) & 1)); // Convert to boolean array
    const result = evaluateExpression(expression, variables, values);
    rows.push({ values, result });
  }

  return { variables, rows };
};

export {
  evaluateExpression,
  extractVariables,
  validateExpression,
  generateTruthTable,
};
