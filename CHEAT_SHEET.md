# Quick Reference Cheat Sheet

## Operators

### Arithmetic
```javascript
+  - * / %  **  //  **  is exponentiation
```

### Comparison
```javascript
== === != !== < > <= >=
```

### Logical
```javascript
&& (AND)  || (OR)  ! (NOT)
```

### Assignment
```javascript
= += -= *= /= %= **=
```

## Data Types

### Primitives
```javascript
number, string, boolean, null, undefined, symbol, bigint
```

### Non-Primitives
```javascript
object, array, function
```

## Variable Declaration

```javascript
var x = 10;      // Function scoped, hoisted
let y = 20;      // Block scoped, not hoisted
const z = 30;    // Block scoped, immutable (cannot reassign)
```

## Array Methods Cheat Sheet

```javascript
arr.push()        // Add to end
arr.pop()         // Remove from end
arr.shift()       // Remove from start
arr.unshift()     // Add to start
arr.slice()       // Extract portion
arr.splice()      // Add/remove elements
arr.indexOf()     // Find index
arr.includes()    // Check existence
arr.join()        // Convert to string
arr.reverse()     // Reverse array
arr.sort()        // Sort array
arr.map()         // Transform elements
arr.filter()      // Filter elements
arr.reduce()      // Reduce to value
arr.forEach()     // Iterate
arr.find()        // Find element
arr.some()        // Check if any matches
arr.every()       // Check if all match
```

## String Methods Cheat Sheet

```javascript
str.length                // Get length
str.charAt()              // Get char at index
str.indexOf()             // Find index
str.substring()           // Extract substring
str.slice()               // Extract slice
str.toUpperCase()         // Convert to uppercase
str.toLowerCase()         // Convert to lowercase
str.trim()                // Remove whitespace
str.split()               // Split into array
str.replace()             // Replace text
str.includes()            // Check if contains
str.startsWith()          // Check start
str.endsWith()            // Check end
str.repeat()              // Repeat string
str.padStart()            // Pad beginning
str.padEnd()              // Pad end
```

## Object Methods Cheat Sheet

```javascript
Object.keys()             // Get all keys
Object.values()           // Get all values
Object.entries()          // Get [key, value] pairs
Object.assign()           // Merge objects
Object.create()           // Create object
Object.freeze()           // Make immutable
Object.seal()             // Prevent prop deletion
Object.getOwnPropertyNames() // Get all properties
```

## DOM Methods Cheat Sheet

```javascript
document.getElementById()        // Get by ID
document.getElementsByClassName() // Get by class
document.querySelector()         // Get by CSS selector
document.querySelectorAll()      // Get all by selector
element.addEventListener()       // Add event listener
element.removeEventListener()    // Remove listener
element.classList.add()          // Add class
element.classList.remove()       // Remove class
element.classList.toggle()       // Toggle class
element.style.property           // Set style
element.textContent              // Get/set text
element.innerHTML                // Get/set HTML
element.appendChild()            // Add child
element.removeChild()            // Remove child
element.remove()                 // Remove self
```

## Common Patterns

### Check if Value Exists
```javascript
if (value) { }              // Truthy check
if (value !== undefined) { }  // Strict check
if (value != null) { }      // Null/undefined check
```

### Ternary Operator
```javascript
let result = condition ? valueIfTrue : valueIfFalse;
```

### Nullish Coalescing
```javascript
let value = input ?? defaultValue;  // Use if null/undefined
```

### Optional Chaining
```javascript
let name = user?.address?.street?.name;
```

### Template Literals
```javascript
`Hello ${name}, you are ${age} years old`
```

## Common Errors

| Error | Cause |
|-------|-------|
| ReferenceError | Variable not defined |
| TypeError | Wrong data type |
| SyntaxError | Invalid syntax |
| RangeError | Invalid range |
| Cannot read property 'x' of undefined | Accessing property of null/undefined |

## Tips and Tricks

- Use `===` for comparison (strict equality)
- Always declare variables with const first
- Use `console.log()` for debugging
- Use arrow functions for concise code
- Use destructuring for cleaner code
- Use spread operator for copying
- Remember strings are immutable
- Remember arrays are mutable
