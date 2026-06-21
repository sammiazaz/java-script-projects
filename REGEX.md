# Regular Expressions (Regex) in JavaScript

## What is Regex?
Regular expressions are patterns used to match character combinations in strings.

## Creating Regex

### Literal Notation
```javascript
let pattern = /hello/;
let pattern = /hello/i;  // i = case insensitive
```

### Constructor
```javascript
let pattern = new RegExp("hello", "i");
```

## Flags
- `g` - Global (find all matches)
- `i` - Case insensitive
- `m` - Multiline
- `s` - Dotall
- `u` - Unicode
- `y` - Sticky

## Common Methods

### test()
Check if pattern matches
```javascript
/hello/.test("hello world");  // true
```

### match()
Find matching strings
```javascript
"hello world".match(/l/);    // ["l"]
"hello world".match(/l/g);   // ["l", "l", "l"]
```

### replace()
Replace matching strings
```javascript
"hello world".replace(/world/, "JS");    // "hello JS"
"hello world".replace(/l/g, "L");       // "heLLo worLd"
```

### split()
Split string by pattern
```javascript
"a1b2c3".split(/\d/);  // ["a", "b", "c", ""]
```

## Pattern Examples

### Common Patterns
```javascript
/[0-9]/          // Any digit
/[a-z]/          // Any lowercase letter
/[A-Z]/          // Any uppercase letter
/[a-zA-Z]/       // Any letter
/\d/             // Any digit (\d = [0-9])
/\w/             // Any word character
/\s/             // Any whitespace
/./              // Any character except newline
```

### Quantifiers
```javascript
/a*/             // 0 or more 'a'
/a+/             // 1 or more 'a'
/a?/             // 0 or 1 'a'
/a{2}/           // Exactly 2 'a'
/a{2,}/          // 2 or more 'a'
/a{2,4}/         // 2 to 4 'a'
```

### Anchors
```javascript
/^hello/         // Starts with 'hello'
/world$/         // Ends with 'world'
/^hello world$/  // Exact match
```

## Validation Examples

### Email Validation
```javascript
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailPattern.test("user@example.com");  // true
```

### Phone Number
```javascript
let phonePattern = /^\d{3}-\d{3}-\d{4}$/;
phonePattern.test("123-456-7890");  // true
```

### URL Validation
```javascript
let urlPattern = /^https?:\/\/.+\..+$/;
urlPattern.test("https://example.com");  // true
```

## Best Practices
- Use raw strings for regex
- Test patterns thoroughly
- Comment complex patterns
- Use online regex testers
- Remember escaping special characters
