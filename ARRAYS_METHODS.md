# Arrays and Array Methods - Study Notes

## What are Arrays?
Arrays are collections of elements stored in a single variable. Each element has an index starting from 0.

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // "apple"
```

## Array Methods

### Adding/Removing Elements
- `push()` - Add to end
- `pop()` - Remove from end
- `unshift()` - Add to beginning
- `shift()` - Remove from beginning
- `splice()` - Add/remove at specific position

### Iterating Arrays
- `forEach()` - Execute function for each element
- `map()` - Create new array by transforming elements
- `filter()` - Create new array with filtered elements
- `reduce()` - Reduce array to single value

### Searching Arrays
- `indexOf()` - Find index of element
- `includes()` - Check if array contains element
- `find()` - Find first element matching condition
- `findIndex()` - Find index of first matching element

### Sorting/Reversing
- `sort()` - Sort array
- `reverse()` - Reverse array

### Array Properties
- `length` - Number of elements
- `Array.isArray()` - Check if variable is array

## Examples

### forEach()
```javascript
let numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num * 2);
});
```

### map()
```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
    return num * 2;
});
```

### filter()
```javascript
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(function(num) {
    return num % 2 === 0;
});
```

### reduce()
```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(acc, num) {
    return acc + num;
}, 0);
```
