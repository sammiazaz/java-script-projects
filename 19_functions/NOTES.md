# Functions in JavaScript - Complete Notes

## What are Functions?
Functions are reusable blocks of code designed to perform specific tasks. They help organize code, make it reusable, and reduce redundancy.

## Function Declaration
```javascript
function greet(name) {
    return "Hello, " + name;
}
```

## Function Expression
```javascript
const greet = function(name) {
    return "Hello, " + name;
};
```

## Arrow Functions
```javascript
const greet = (name) => {
    return "Hello, " + name;
};

// Single line (implicit return)
const greet = (name) => "Hello, " + name;

// Single parameter (parentheses optional)
const greet = name => "Hello, " + name;
```

## Scope

### Global Scope
Variables accessible from anywhere in the code.
```javascript
let globalVar = "I'm global";
```

### Local Scope
Variables accessible only within the function.
```javascript
function test() {
    let localVar = "I'm local";
}
```

### Block Scope (let/const)
Variables accessible only within the block.
```javascript
if (true) {
    let blockVar = "I'm in a block";
}
```

## Parameters and Arguments
```javascript
function add(a, b) {  // a, b are parameters
    return a + b;
}
add(5, 3);           // 5, 3 are arguments
```

## Return Statement
```javascript
function multiply(x, y) {
    return x * y;   // Exits function and returns value
}
```

## Higher-Order Functions
Functions that accept or return other functions.
```javascript
function greet(greeting) {
    return function(name) {
        return greeting + ", " + name;
    };
}
```

## Callback Functions
Functions passed as arguments to other functions.
```javascript
function processArray(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}
```

## Key Concepts
- **Hoisting**: Function declarations are hoisted, function expressions are not
- **Closure**: Inner function accessing outer function variables
- **IIFE**: Immediately Invoked Function Expression for creating isolated scope
