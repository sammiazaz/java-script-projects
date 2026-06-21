# String Methods and Manipulation

## String Properties and Methods

### Length
```javascript
let str = "Hello";
console.log(str.length);  // 5
```

### Case Conversion
```javascript
let str = "Hello World";
str.toUpperCase();  // "HELLO WORLD"
str.toLowerCase();  // "hello world"
```

### Extracting Substrings
```javascript
str.charAt(0);          // "H"
str.charCodeAt(0);      // 72 (ASCII code)
str.substring(0, 5);    // "Hello"
str.substr(0, 5);       // "Hello" (deprecated)
str.slice(0, 5);        // "Hello"
```

### Finding Substrings
```javascript
str.indexOf("World");        // 6
str.lastIndexOf("l");        // 9
str.includes("World");       // true
str.startsWith("Hello");     // true
str.endsWith("World");       // true
```

### String Modification
```javascript
str.replace("World", "JS");           // "Hello JS"
str.replaceAll("l", "L");             // "HeLLo WorLd"
str.trim();                           // Remove whitespace
str.split(" ");                       // ["Hello", "World"]
str.repeat(2);                        // "Hello WorldHello World"
str.padStart(20, "*");                // Pad beginning
str.padEnd(20, "*");                  // Pad end
```

### String Concatenation
```javascript
str.concat(" Awesome");               // "Hello World Awesome"
str + " Awesome";                     // Same result
```

### Template Literals
```javascript
let name = "John";
let age = 30;
`Hello ${name}, you are ${age} years old`  // "Hello John, you are 30 years old"
```

## Common String Operations

### Convert String to Array
```javascript
let chars = "Hello".split("");  // ["H", "e", "l", "l", "o"]
```

### Reverse String
```javascript
let reversed = "Hello".split("").reverse().join("");  // "olleH"
```

### Count Characters
```javascript
let count = "Hello World".split("l").length - 1;  // 3 (count of 'l')
```

## Best Practices
- Use let/const instead of var
- Use template literals for clarity
- Be aware of case sensitivity
- Strings are immutable
- Use appropriate methods for each task
