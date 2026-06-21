# Best Practices and Code Style Guide

## Naming Conventions

### Variables and Functions
```javascript
// camelCase for variables and functions
let userName = "John";
function calculateTotalPrice() {}
```

### Constants
```javascript
// UPPER_SNAKE_CASE for constants
const MAX_USERS = 100;
const API_KEY = "secret-key";
```

### Classes
```javascript
// PascalCase for classes
class UserAccount {}
class ShoppingCart {}
```

## Code Organization

### Group Related Code
```javascript
// Separate concerns
// 1. Constants
const API_URL = "https://api.example.com";

// 2. Helper functions
function formatDate(date) {}

// 3. Main functions
function fetchData() {}
```

## Error Handling

### Always Handle Errors
```javascript
// Bad
let data = JSON.parse(string);

// Good
try {
    let data = JSON.parse(string);
} catch (error) {
    console.error("Parse error:", error);
}
```

## Comments and Documentation

### Meaningful Comments
```javascript
// Good - explains WHY
// Calculate discount for bulk orders
let discount = quantity > 100 ? 0.1 : 0;

// Bad - explains WHAT (code already does that)
// Multiply price by quantity
let total = price * quantity;
```

### JSDoc
```javascript
/**
 * Calculate total price with tax
 * @param {number} price - Base price
 * @param {number} taxRate - Tax percentage (0-1)
 * @returns {number} Total price with tax
 */
function calculateWithTax(price, taxRate) {
    return price * (1 + taxRate);
}
```

## Function Best Practices

### Keep Functions Small
- Do one thing well
- Easy to test
- Easy to understand

### Use Default Parameters
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
```

### Avoid Global Variables
```javascript
// Bad
let globalCount = 0;

// Good
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
}
```

## Performance Tips

### Use const by Default
```javascript
const MAX_SIZE = 100;  // Won't change
let counter = 0;       // Will change
```

### Destructuring
```javascript
// Less repetition
const { name, age } = user;
console.log(name, age);
```

### Array Methods
```javascript
// Prefer array methods
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

## Testing

### Write Testable Code
- Keep functions pure when possible
- Avoid side effects
- Make dependencies clear

### Unit Tests
```javascript
function add(a, b) {
    return a + b;
}

// Test
console.assert(add(2, 3) === 5, "Add test failed");
```

## Security

### Sanitize User Input
```javascript
function sanitize(input) {
    let div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
}
```

### Avoid eval()
```javascript
// Bad - security risk
eval(userInput);

// Good - parse or use safe alternative
JSON.parse(userInput);
```

### HTTPS Only
- Always use HTTPS for secure data

## Version Control

### Meaningful Commit Messages
```
Good: "Fix login validation error"
Bad: "Fixed stuff"
```

### Commit Frequently
- Small, focused commits
- Easy to review and revert
