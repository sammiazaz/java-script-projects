# Async/Await and Promises - Advanced JavaScript

## Promises
Represents eventual completion (or failure) of an asynchronous operation.

```javascript
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});
```

## Promise Chaining
```javascript
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

## Promise.all()
Wait for all promises to resolve.

```javascript
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(error => console.log(error));
```

## Async/Await
Cleaner syntax for handling promises.

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

## Key Differences

| Feature | Promises | Async/Await |
|---------|----------|------------|
| Syntax | .then().catch() | await/try-catch |
| Readability | Moderate | Better |
| Error Handling | .catch() | try-catch |
| Chaining | .then() chains | Sequential await |

## Best Practices
- Always handle errors (try-catch or .catch())
- Use async/await for cleaner code
- Avoid mixing promises and async/await
- Remember await only works in async functions
