# Objects and Object Methods - Complete Guide

## What are Objects?
Objects are collections of key-value pairs. They store data and functionality in a structured way.

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
};
```

## Creating Objects

### Object Literal
```javascript
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023
};
```

### Constructor Function
```javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

let car = new Car("Toyota", "Camry");
```

### Object.create()
```javascript
let proto = { greet: function() { return "Hi"; } };
let obj = Object.create(proto);
```

## Accessing Properties

```javascript
obj.name              // Dot notation
obj["name"]           // Bracket notation
obj["dynamic-key"]    // For keys with special characters
```

## Common Object Methods

### Object.keys()
Returns array of keys
```javascript
let keys = Object.keys(obj);
```

### Object.values()
Returns array of values
```javascript
let values = Object.values(obj);
```

### Object.entries()
Returns array of [key, value] pairs
```javascript
let entries = Object.entries(obj);
```

### Object.assign()
Copies properties
```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2);
```

## This Keyword
In objects, `this` refers to the object itself.

```javascript
let person = {
    name: "John",
    greet: function() {
        return this.name;  // Refers to person.name
    }
};
```

## Key Concepts
- **Mutable**: Objects can be modified
- **Reference Type**: Variables store reference, not value
- **Methods**: Functions defined in objects
- **Properties**: Data stored in objects
