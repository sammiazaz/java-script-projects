# ES6 Features - Modern JavaScript Guide

## 1. Arrow Functions
Shorter syntax for function expressions.

```javascript
// Traditional
const add = function(a, b) {
    return a + b;
};

// Arrow Function
const add = (a, b) => a + b;
```

## 2. Template Literals
Use backticks for string interpolation.

```javascript
let name = "John";
let message = `Hello, ${name}!`;
```

## 3. Destructuring
Extract values from arrays/objects.

```javascript
// Array Destructuring
const [a, b] = [1, 2];

// Object Destructuring
const { name, age } = person;
```

## 4. Spread Operator
Expand elements.

```javascript
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };  // { a: 1, b: 2 }
```

## 5. Let and Const
Block-scoped variable declaration.

```javascript
let x = 10;  // Can be reassigned
const y = 20;  // Cannot be reassigned
```

## 6. Classes
Object-oriented programming support.

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + " makes a sound");
    }
}
```

## 7. Default Parameters
Set default values for function parameters.

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}`;
}
```

## 8. Rest Parameters
Collect multiple arguments.

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

## 9. For...of Loop
Iterate over iterable objects.

```javascript
for (let item of array) {
    console.log(item);
}
```

## 10. Promises
Handle asynchronous operations.

```javascript
let promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("Done!");
    } else {
        reject("Error!");
    }
});
```
