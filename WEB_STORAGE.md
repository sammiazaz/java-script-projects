# Local Storage and Session Storage

## What is Web Storage?
Web Storage allows storing data locally in the browser without sending it to the server.

## Types of Storage

### Local Storage
- Persists even after browser is closed
- Can store up to 5-10MB
- No expiration time

### Session Storage
- Cleared when tab is closed
- Can store up to 5-10MB
- Per-tab storage

## Local Storage Methods

### Setting Data
```javascript
localStorage.setItem("key", "value");
localStorage.name = "John";  // Also works
```

### Getting Data
```javascript
let value = localStorage.getItem("key");
let name = localStorage.name;  // Also works
```

### Removing Data
```javascript
localStorage.removeItem("key");
localStorage.clear();  // Remove all
```

### Checking if Key Exists
```javascript
if (localStorage.getItem("key")) {
    console.log("Key exists");
}
```

## Session Storage
Same methods as Local Storage but data clears on tab close.

```javascript
sessionStorage.setItem("tempData", "value");
let data = sessionStorage.getItem("tempData");
sessionStorage.removeItem("tempData");
```

## Storing Objects
Local Storage only stores strings, so convert objects to JSON.

```javascript
// Storing
let user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving
let retrievedUser = JSON.parse(localStorage.getItem("user"));
```

## Practical Example

### Todo List with Local Storage
```javascript
let todos = [];

function addTodo(task) {
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    let stored = localStorage.getItem("todos");
    if (stored) {
        todos = JSON.parse(stored);
    }
}

// Load on page load
loadTodos();
```

## Storage Events
Listen for storage changes across tabs.

```javascript
window.addEventListener("storage", function(event) {
    console.log("Storage changed:", event.key);
    console.log("New value:", event.newValue);
});
```

## Best Practices
- Always use JSON.stringify() for objects
- Check for storage availability
- Handle storage quota exceptions
- Clear sensitive data
- Don't store passwords
