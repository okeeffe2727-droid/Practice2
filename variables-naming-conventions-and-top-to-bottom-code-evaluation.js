/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let customerName = "Alice";
let itemsPurchased = 5;
let totalCost = 20;
let firstStatement = customerName + " bought " + itemsPurchased + " items for $" + totalCost + ".";

let averageCostPerItem = totalCost / itemsPurchased;
console.log(firstStatement);
console.log("Average cost per item: $" + averageCostPerItem.toFixed(2));
// Additional variables for enhanced functionality
console.log("Thank you for shopping with us, " + customerName + "!");
