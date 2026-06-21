# Performance Optimization in JavaScript

## Minimizing Reflows and Repaints

### Bad Practice
```javascript
let element = document.getElementById("box");
element.style.width = "100px";
element.style.height = "100px";
element.style.backgroundColor = "red";
// Each line causes reflow/repaint
```

### Good Practice
```javascript
let element = document.getElementById("box");
element.style.cssText = "width: 100px; height: 100px; background-color: red;";
// Single reflow/repaint
```

## DOM Optimization

### Batch DOM Operations
```javascript
// Bad - Multiple DOM manipulations
let list = document.getElementById("list");
for (let i = 0; i < 1000; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
}

// Good - Use DocumentFragment
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    fragment.appendChild(li);
}
list.appendChild(fragment);
```

## Event Delegation
```javascript
// Bad - Listener on each item
document.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", handler);
});

// Good - Single listener on parent
document.getElementById("list").addEventListener("click", handler);
```

## Debouncing and Throttling

### Debounce - Wait for pause
```javascript
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

let debouncedSearch = debounce(search, 300);
```

### Throttle - Limit frequency
```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

let throttledScroll = throttle(onScroll, 500);
```

## Lazy Loading

### Images
```javascript
<img loading="lazy" src="image.jpg">
```

### JavaScript Modules
```javascript
import("./module.js").then(module => {
    // Use module
});
```

## Best Practices
- Minimize DOM queries
- Cache DOM references
- Use event delegation
- Debounce/throttle scroll and resize
- Lazy load images and scripts
- Minimize reflows and repaints
- Use CSS classes instead of inline styles
- Avoid memory leaks in event listeners
