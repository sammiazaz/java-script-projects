# DOM (Document Object Model) - Complete Notes

## What is DOM?
The Document Object Model (DOM) is a programming interface that allows JavaScript to interact with HTML documents. It represents the page as a tree structure of objects that JavaScript can access and manipulate.

## DOM Selectors

### 1. getElementById()
Selects a single element by its ID.
```javascript
let element = document.getElementById("myId");
```

### 2. getElementsByClassName()
Selects all elements with a specific class (returns HTMLCollection).
```javascript
let elements = document.getElementsByClassName("myClass");
```

### 3. getElementsByTagName()
Selects all elements of a specific tag (returns HTMLCollection).
```javascript
let paragraphs = document.getElementsByTagName("p");
```

### 4. querySelector()
Selects the first element matching a CSS selector.
```javascript
let element = document.querySelector(".myClass");
let element = document.querySelector("#myId");
let element = document.querySelector("p");
```

### 5. querySelectorAll()
Selects all elements matching a CSS selector (returns NodeList).
```javascript
let elements = document.querySelectorAll(".myClass");
```

## DOM Manipulation

### Changing Text Content
```javascript
element.textContent = "New text";
element.innerText = "New text";
```

### Changing HTML Content
```javascript
element.innerHTML = "<h1>New HTML</h1>";
```

### Changing Attributes
```javascript
element.setAttribute("class", "newClass");
element.getAttribute("id");
element.removeAttribute("class");
```

### Changing Styles
```javascript
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
```

### Adding/Removing Classes
```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");
```

## Creating and Appending Elements

### Creating Elements
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Hello";
```

### Appending Elements
```javascript
parent.appendChild(newDiv);          // Add as last child
parent.insertBefore(newDiv, sibling); // Insert before sibling
```

### Removing Elements
```javascript
element.remove();
parent.removeChild(element);
```

## DOM Navigation

```javascript
element.parentElement      // Parent element
element.children           // Direct children (HTMLCollection)
element.childNodes         // Direct children (includes text nodes)
element.firstChild         // First child
element.lastChild          // Last child
element.nextSibling        // Next sibling
element.previousSibling    // Previous sibling
element.nextElementSibling // Next element sibling
element.previousElementSibling // Previous element sibling
```

## Key Concepts

- **Static vs Live Collections**: getElementsByClassName returns live collections; querySelectorAll returns static NodeLists
- **Performance**: querySelector is slower than getElementById for large datasets
- **Accessibility**: Always use semantic HTML for better accessibility
