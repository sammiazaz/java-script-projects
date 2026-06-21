# Error Handling in JavaScript

## Try...Catch...Finally

### Basic Syntax
```javascript
try {
    // Code that might throw an error
} catch (error) {
    // Handle error
} finally {
    // Code that runs regardless
}
```

### Example
```javascript
try {
    let result = JSON.parse("invalid json");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup done");
}
```

## Throwing Errors
```javascript
function validateAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return age;
}
```

## Error Types
- `Error` - General error
- `TypeError` - Wrong data type
- `ReferenceError` - Variable not defined
- `SyntaxError` - Invalid syntax
- `RangeError` - Invalid range
- `TypeError` - Unexpected type

## Handling Different Errors
```javascript
try {
    // Some code
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error:", error.message);
    } else if (error instanceof ReferenceError) {
        console.log("Reference error:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}
```

## Custom Errors
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

throw new ValidationError("Input is invalid");
```

## Best Practices
- Use specific error types
- Always catch errors in async functions
- Provide meaningful error messages
- Use finally for cleanup
- Log errors for debugging
