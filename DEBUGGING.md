# Debugging JavaScript

## Console Methods

### console.log()
Log messages to console
```javascript
console.log("Message", variable);
```

### console.error()
Log errors in red
```javascript
console.error("Error occurred:", error);
```

### console.warn()
Log warnings in yellow
```javascript
console.warn("Warning:", message);
```

### console.table()
Display data as table
```javascript
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);
```

### console.group()
Group related logs
```javascript
console.group("User Info");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd();
```

### console.time()
Measure execution time
```javascript
console.time("timer");
// Some code
console.timeEnd("timer");
```

### console.count()
Count how many times called
```javascript
console.count("click");  // click: 1
console.count("click");  // click: 2
```

## Browser DevTools

### Breakpoints
- Set breakpoints to pause execution
- Inspect variables at that point
- Step through code line by line

### Call Stack
- Shows function call sequence
- Helps trace execution flow

### Watch Expressions
- Monitor variables as you step through code
- Check variable values at each step

### Network Tab
- View HTTP requests/responses
- Check request headers and data
- Monitor performance

## Debugging Techniques

### Add Debugger Statement
```javascript
function problematicFunction() {
    debugger;  // Pauses execution here
    // rest of code
}
```

### Conditional Breakpoints
- Set breakpoints with conditions
- Only pause when condition is true

### Event Listener Breakpoints
- Pause on specific events (click, submit, etc.)
- Useful for event-related bugs

### Source Maps
- For minified code, use source maps
- Maps minified code to original
