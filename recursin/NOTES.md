# Recursion in JavaScript - Complete Notes

## What is Recursion?
Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. Every recursive function must have a base case to stop the recursion.

## Components of Recursion

### 1. Base Case
The condition that stops the recursion.
```javascript
if (n === 0) {
    return 1;  // Base case
}
```

### 2. Recursive Case
The function calls itself with modified arguments.
```javascript
return n * factorial(n - 1);  // Recursive case
```

## Examples

### Example 1: Factorial
```javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}
```

### Example 2: Fibonacci
```javascript
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Example 3: Sum of Array
```javascript
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
```

### Example 4: Search in Array
```javascript
function search(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1;
    }
    if (arr[index] === target) {
        return index;
    }
    return search(arr, target, index + 1);
}
```

## Advantages of Recursion
- Clean and elegant code for certain problems
- Natural for tree/graph traversal
- Reduces code complexity
- Easier to understand problem structure

## Disadvantages of Recursion
- Can be slower than iteration
- Uses more memory (call stack)
- Risk of stack overflow for deep recursion
- Harder to debug

## When to Use Recursion
- Tree/Graph traversal
- Divide and conquer problems
- Dynamic programming
- Backtracking algorithms

## Tail Recursion
Optimization where recursive call is the last operation.
```javascript
function sum(arr, index = 0, acc = 0) {
    if (index >= arr.length) {
        return acc;
    }
    return sum(arr, index + 1, acc + arr[index]);
}
```

## Key Points
- Always define a base case
- Ensure recursive case moves toward base case
- Watch out for stack overflow
- Consider performance implications
