# DOM Practice Problems and Solutions

## Problem 1: Change Element Color
**Task:** Change h1 color to red on click

```javascript
let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.color = "red";
});
```

## Problem 2: Toggle Class
**Task:** Toggle active class on button click

```javascript
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    btn.classList.toggle("active");
});
```

## Problem 3: Update Text on Input
**Task:** Display input value in real-time

```javascript
let input = document.querySelector("input");
let display = document.querySelector(".display");

input.addEventListener("input", function() {
    display.textContent = input.value;
});
```

## Problem 4: Create Elements Dynamically
**Task:** Add items to list

```javascript
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "New Item";
    list.appendChild(li);
});
```

## Problem 5: Remove Elements
**Task:** Delete item on click

```javascript
let items = document.querySelectorAll("li");
items.forEach(function(item) {
    item.addEventListener("click", function() {
        item.remove();
    });
});
```
