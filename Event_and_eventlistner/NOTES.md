# Events and Event Listeners - Complete Notes

## Table of Contents
1. [Introduction](#introduction)
2. [Event Listener Syntax](#event-listener-syntax)
3. [Common Events](#common-events)
4. [The Event Object](#the-event-object)
5. [Advanced Concepts](#advanced-concepts)
6. [Practical Examples](#practical-examples)
 
---

## Introduction

### What are Events?
Events are actions or occurrences that happen in the browser as a result of user interaction, such as:
- **Click** - User clicks an element
- **Input** - User types in an input field
- **Submit** - User submits a form
- **Mouse Movement** - User moves the mouse
- **Keyboard Press** - User presses a key

### What are Event Listeners?
Event listeners (also called event handlers) are JavaScript functions that execute in response to specific events. They "listen" for an event to occur and then run the associated code.

---

## Event Listener Syntax

### Basic Syntax
```javascript
element.addEventListener(event, callbackFunction);
```

### Parameters
- **element** - The DOM element you want to attach the listener to (e.g., button, input, etc.)
- **event** - String specifying the event name (use lowercase, without "on" prefix)
- **callbackFunction** - The function that runs when the event fires

### Example 1: Inline Function
```javascript
let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.color = "blue";
});
```

### Example 2: Named Function Reference
```javascript
let p = document.querySelector("p");

function changeColor() {
    p.style.color = "green";
}

p.addEventListener("dblclick", changeColor);
```

**Important:** Pass the function reference WITHOUT parentheses. Using `changeColor()` would immediately execute the function instead of waiting for the event.

---

## Common Events

### Mouse Events
| Event | Trigger |
|-------|---------|
| `click` | Single click on element |
| `dblclick` | Double click on element |
| `mouseover` | Mouse moves over element |
| `mouseout` | Mouse leaves element |
| `mousemove` | Mouse moves within element |
| `mousedown` | Mouse button pressed down |
| `mouseup` | Mouse button released |

### Keyboard Events
| Event | Trigger |
|-------|---------|
| `keydown` | Any key pressed down (fires before character is entered) |
| `keyup` | Key released |
| `keypress` | Key pressed (limited support in modern browsers) |

### Form Events
| Event | Trigger |
|-------|---------|
| `input` | User types in input field (real-time) |
| `change` | Input value changes and focus is lost |
| `submit` | Form is submitted |
| `focus` | Element receives focus |
| `blur` | Element loses focus |

---

## The Event Object

When an event fires, the browser automatically passes an **Event object** to the callback function. This object contains useful information about the event.

### Accessing the Event Object
```javascript
element.addEventListener("click", function(event) {
    console.log(event);  // The entire event object
});
```

### Common Event Object Properties

#### Universal Properties
| Property | Description |
|----------|-------------|
| `event.type` | Type of event (e.g., "click", "input") |
| `event.target` | The element that triggered the event |
| `event.currentTarget` | The element the listener is attached to |
| `event.timestamp` | Time the event occurred |

#### Mouse Event Properties
| Property | Description |
|----------|-------------|
| `event.clientX` | X coordinate of mouse (relative to viewport) |
| `event.clientY` | Y coordinate of mouse (relative to viewport) |
| `event.pageX` | X coordinate of mouse (relative to page) |
| `event.pageY` | Y coordinate of mouse (relative to page) |
| `event.button` | Which mouse button was clicked (0=left, 1=middle, 2=right) |

#### Keyboard Event Properties
| Property | Description |
|----------|-------------|
| `event.key` | The actual character pressed (e.g., "a", "Enter", "Shift") |
| `event.code` | The physical key on keyboard (e.g., "KeyA") |
| `event.keyCode` | Deprecated - use `key` instead |
| `event.ctrlKey` | Whether Ctrl key was pressed |
| `event.shiftKey` | Whether Shift key was pressed |
| `event.altKey` | Whether Alt key was pressed |

#### Input Event Properties
| Property | Description |
|----------|-------------|
| `event.data` | The character typed (null when backspace is pressed) |
| `event.target.value` | Current value of input field |

#### Form Event Properties
| Property | Description |
|----------|-------------|
| `event.target.value` | Current value of form field |
| `event.target.checked` | Whether checkbox/radio is checked |

### Example: Using Event Object
```javascript
let input = document.querySelector("input");

// Track typed characters
input.addEventListener("input", function(event) {
    if (event.data !== null) {  // Ignore backspace
        console.log("Typed:", event.data);
    }
});

// Monitor dropdown selection
let select = document.querySelector("select");
select.addEventListener("change", function(event) {
    console.log("Selected:", event.target.value);
});
```

---

## Event Methods

### addEventListener()
Attaches an event listener to an element. Can attach multiple listeners to the same event.

```javascript
element.addEventListener("click", function1);
element.addEventListener("click", function2);  // Both will run
```

### removeEventListener()
Removes a previously attached event listener. **Requires the exact same function reference.**

```javascript
function handleClick() {
    console.log("Clicked!");
}

element.addEventListener("click", handleClick);
// ... later ...
element.removeEventListener("click", handleClick);  // ✓ Works

// ✗ Won't work - anonymous function can't be removed
element.addEventListener("click", function() {
    console.log("Clicked!");
});
```

### preventDefault()
Stops the browser from performing its default action for an event.

```javascript
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents page reload
    console.log("Form submitted!");
});
```

### stopPropagation()
Stops the event from bubbling up to parent elements.

```javascript
element.addEventListener("click", function(event) {
    event.stopPropagation();  // Prevents bubbling
});
```

---

## Advanced Concepts

### 1. Event Bubbling
By default, when an event occurs on an element, it first runs the handler on that element, then on its parent, then all the way up on other ancestors.

```
Target Element → Parent → Grandparent → Body → Html
```

### 2. Event Capturing
The opposite of bubbling: event starts from the root and travels down to the target element.

**Enable by passing `true` as third argument:**

```javascript
element.addEventListener("click", function(event) {
    console.log("Capturing phase");
}, true);  // true = use capturing phase

element.addEventListener("click", function(event) {
    console.log("Bubbling phase");
});  // false (default) = use bubbling phase
```

### 3. Event Delegation
Instead of adding listeners to many child elements, attach a single listener to a parent element and check which child was clicked.

**Advantages:**
- More memory efficient
- Works with dynamically added elements
- Cleaner code

```javascript
// HTML
// <ul id="list">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

// Instead of adding listener to each <li>,
// add to parent <ul>
let list = document.querySelector("#list");
list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration = "line-through";
    }
});
```

---

## Practical Examples

### Example 1: Color Changer
Change element color on click and double-click.

```javascript
let h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
    h1.style.color = "red";
});

h1.addEventListener("dblclick", function() {
    h1.style.color = "yellow";
});
```

### Example 2: Live Input Tracker
Display typed characters in real-time.

```javascript
let input = document.querySelector("input");
input.addEventListener("input", function(event) {
    if (event.data !== null) {  // Ignore backspace
        console.log("Typed:", event.data);
    }
});
```

### Example 3: Dropdown Selection Updater
Update heading when dropdown selection changes.

```javascript
let select = document.querySelector("select");
let heading = document.querySelector("#ds");

select.addEventListener("change", function(event) {
    heading.textContent = `${event.target.value} device selected`;
});
```

### Example 4: Keyboard Key Display
Show which key was pressed on the screen.

```javascript
window.addEventListener("keydown", function(event) {
    let key = event.key === " " ? "Space" : event.key;
    
    let display = document.createElement("h1");
    display.textContent = key;
    display.style.position = "fixed";
    display.style.top = "50%";
    display.style.left = "50%";
    document.body.appendChild(display);
});
```

### Example 5: Mouse Follower
Make element follow mouse cursor.

```javascript
let dot = document.querySelector(".dot");

window.addEventListener("mousemove", function(event) {
    dot.style.top = event.clientY + "px";
    dot.style.left = event.clientX + "px";
});
```

### Example 6: Form Submission Handler
Prevent default form submission and process data.

```javascript
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop page reload
    
    let name = document.querySelector("input[name='name']").value;
    let occupation = document.querySelector("input[name='occupation']").value;
    
    console.log("Name:", name);
    console.log("Occupation:", occupation);
});
```

### Example 7: Event Delegation - List Strike-through
Apply line-through effect to clicked list items.

```javascript
let ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.textDecoration = "line-through";
    }
});
```

### Example 8: Live Character Counter
Count remaining characters (limit: 20).

```javascript
let textarea = document.querySelector("textarea");
let counter = document.querySelector(".counter");

textarea.addEventListener("input", function(event) {
    let remaining = 20 - event.target.value.length;
    counter.textContent = remaining;
    
    if (remaining < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
});
```

### Example 9: Custom File Upload Button
Hide default file input, use custom button.

```javascript
let customBtn = document.querySelector(".custom-file-btn");
let fileInput = document.querySelector("input[type='file']");

// Trigger hidden file input
customBtn.addEventListener("click", function() {
    fileInput.click();
});

// Display selected filename
fileInput.addEventListener("change", function(event) {
    let filename = event.target.files[0].name;
    customBtn.textContent = filename;
});
```

---

## Best Practices

1. **Use named functions when you need to remove listeners**
   ```javascript
   // ✓ Good - can be removed
   function handleClick() { }
   element.addEventListener("click", handleClick);
   
   // ✗ Bad - can't be removed
   element.addEventListener("click", function() { });
   ```

2. **Use event delegation for dynamic content**
   ```javascript
   // Add to parent, works for future child elements
   parent.addEventListener("click", function(event) { });
   ```

3. **Use preventDefault() to stop default behavior**
   ```javascript
   form.addEventListener("submit", function(event) {
       event.preventDefault();
   });
   ```

4. **Check event.target.tagName to identify which element triggered the event**
   ```javascript
   list.addEventListener("click", function(event) {
       if (event.target.tagName === "LI") { }
   });
   ```

5. **Use meaningful event names and keep handlers focused**
   ```javascript
   // ✓ Clear purpose
   button.addEventListener("click", handleFormSubmit);
   
   // ✗ Too broad
   button.addEventListener("click", doEverything);
   ```

---

## Summary

| Concept | Key Point |
|---------|-----------|
| **Event Listener** | Function that runs when an event occurs |
| **addEventListener()** | Method to attach listener to element |
| **Event Object** | Contains info about the event (target, type, etc.) |
| **preventDefault()** | Stops default browser behavior |
| **Event Bubbling** | Event propagates up to parent elements |
| **Event Capturing** | Event propagates down from root to target |
| **Event Delegation** | Single listener on parent handles child events |

---

## Quick Reference Cheat Sheet

```javascript
// Attach listener
element.addEventListener("click", function(event) { });

// Remove listener
element.removeEventListener("click", namedFunction);

// Get event info
event.target        // Element that triggered event
event.type         // Type of event
event.key          // Key pressed (keyboard events)
event.clientX/Y    // Mouse coordinates
event.data         // Character typed (input events)
event.target.value // Input field value

// Stop default behavior
event.preventDefault();

// Stop event bubbling
event.stopPropagation();

// Enable capturing phase (third argument)
element.addEventListener("click", fn, true);
```
