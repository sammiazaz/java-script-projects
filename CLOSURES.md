# Closures in JavaScript

## What is a Closure?
A closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has finished executing.

## Simple Example
```javascript
function outer() {
    let count = 0;
    
    function inner() {
        count++;
        console.log(count);
    }
    
    return inner;
}

let counter = outer();
counter();  // 1
counter();  // 2
counter();  // 3
```

## Data Privacy
Closures help create private variables.

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = createBankAccount(1000);
account.deposit(500);    // 1500
account.withdraw(200);   // 1300
```

## Function Factory
Closures allow creating specialized functions.

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Key Benefits
- Data encapsulation
- Function factories
- Event handlers with state
- Modules pattern

## Common Mistake: Loop with Closures
```javascript
// Problem
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Prints 3, 3, 3
    }, 1000);
}

// Solution: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);  // Prints 0, 1, 2
    }, 1000);
}
```
