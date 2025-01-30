# Null Value Handling in Function foo

This repository demonstrates a common bug in JavaScript related to null value handling. The `foo` function does not correctly handle null values as arguments, leading to unexpected behavior or errors.

## Bug Description
The `foo` function is supposed to perform an operation on input values `a` and `b`. However, if either `a` or `b` is null, the function returns immediately without explicitly handling this case. This could cause problems depending on what the `foo` function is actually doing.  For example, if it relies on those values for calculations, it will likely throw an error.

## Solution
The improved `foo` function checks for null values and handles them appropriately, preventing unexpected errors and providing more robust behavior.

## How to reproduce the bug

1. Clone this repository
2. Navigate to the directory containing `bug.js`
3. Run `node bug.js`
4. Observe the unexpected behavior or error when calling `foo` with null values

## How to fix the bug

1. Replace the `bug.js` file with `bugSolution.js`
2. Run `node bugSolution.js`
3. Observe the improved behavior of the function with null values handled correctly