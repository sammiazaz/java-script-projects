# DOM (Document Object Model) Learning Guide

Welcome to the DOM learning journey! This guide covers the fundamental concepts and methods for manipulating the DOM using JavaScript.

---

## 01_DOM_Selectors

### What I Learned

DOM Selectors are the foundation of JavaScript DOM manipulation. They allow you to select HTML elements from the page so you can interact with them. There are multiple ways to select elements, each with different use cases and advantages.

### Key Methods

#### getElementById()

##### What is it?

Selects a single HTML element by its unique ID attribute. Since IDs must be unique on a page, this method returns only one element (or null if not found).

##### Syntax

```javascript
document.getElementById('elementId')
```

##### Example

```javascript
let greet = document.getElementById('greet')
console.dir(greet);
```

##### Output

```javascript
// Returns the element object with id='greet'
<div id="greet">...</div>
```

---

#### getElementsByClassName()

##### What is it?

Selects all elements that have a specific CSS class. Returns an HTMLCollection (array-like object) containing all matching elements.

##### Syntax

```javascript
document.getElementsByClassName('className')
```

##### Example

```javascript
let name = document.getElementsByClassName('name')
console.dir(name);
```

##### Output

```javascript
// Returns HTMLCollection with all elements having class='name'
HTMLCollection [ <p class="name">, <p class="name">, ... ]
```

---

#### querySelector()

##### What is it?

Selects the **first** element that matches a valid CSS selector. It's very flexible because it accepts any CSS selector (ID, class, element name, attribute, pseudo-selectors, etc.).

##### Syntax

```javascript
document.querySelector('CSS selector')
```

##### Example

```javascript
let heading = document.querySelector('h2')  // selects 1st h2 element
console.dir(heading);
```

##### Output

```javascript
// Returns first h2 element found
<h2>First Heading</h2>
```

---

#### querySelectorAll()

##### What is it?

Selects **all** elements that match a valid CSS selector. Returns a NodeList containing all matching elements.

##### Syntax

```javascript
document.querySelectorAll('CSS selector')
```

##### Example

```javascript
let allHeadings = document.querySelectorAll('h2')
console.dir(allHeadings)
```

##### Output

```javascript
// Returns NodeList with all h2 elements
NodeList(3) [ <h2>, <h2>, <h2> ]
```

---

## 02_Manipulation

### What I Learned

After selecting elements, you need to manipulate them. Manipulation includes changing text content, modifying HTML, and working with attributes (properties like href, src, class, id, etc.).

### Key Methods

#### textContent

##### What is it?

Changes or retrieves the text content of an element. It only works with plain text and ignores any HTML tags.

##### Syntax

```javascript
element.textContent = "New text"
```

##### Example

```javascript
let heading = document.querySelector('h1');
heading.textContent = "hi sammi how are you";
```

##### Output

```javascript
// HTML Page:
<h1>hi sammi how are you</h1>

// textContent property shows:
"hi sammi how are you"
```

---

#### innerText

##### What is it?

Similar to textContent, but it renders text as it appears visually on the page (respects CSS like display:none). It only works with plain text.

##### Syntax

```javascript
element.innerText = "New text"
```

##### Example

```javascript
let heading = document.querySelector('h1');
heading.innerText = "hi sammi how are you";
```

##### Output

```javascript
// HTML Page:
<h1>hi sammi how are you</h1>

// innerText property shows:
"hi sammi how are you"
```

---

#### innerHTML

##### What is it?

Changes or retrieves the HTML content of an element. Unlike textContent and innerText, it interprets and renders HTML tags.

##### Syntax

```javascript
element.innerHTML = "<tag>content</tag>"
```

##### Example

```javascript
let heading = document.querySelector('h1');
heading.innerHTML = '<u>hi</u>';  // Creates underlined text
```

##### Output

```javascript
// HTML Page:
<h1><u>hi</u></h1>

// innerHTML property shows:
"<u>hi</u>"
```

---

#### Direct Attribute Assignment

##### What is it?

Directly change element properties by assigning values to them. Common properties include href, src, disabled, etc.

##### Syntax

```javascript
element.propertyName = value
```

##### Example

```javascript
let link = document.querySelector("a")
link.href = "https://www.google.com"
```

##### Output

```javascript
// HTML Page:
<a href="https://www.google.com">Link</a>

// link.href shows:
"https://www.google.com"
```

---

#### setAttribute()

##### What is it?

Sets or modifies an attribute on an element. This method works for any attribute (standard or custom).

##### Syntax

```javascript
element.setAttribute("attributeName", "value")
```

##### Example

```javascript
let img = document.querySelector('img')
img.setAttribute("src", "https://images.unsplash.com/photo-1773332611514-238856b76198?w=500")
```

##### Output

```javascript
// HTML Page:
<img src="https://images.unsplash.com/photo-1773332611514-238856b76198?w=500">

// Attribute is now set
```

---

#### getAttribute()

##### What is it?

Retrieves the value of a specific attribute from an element.

##### Syntax

```javascript
element.getAttribute("attributeName")
```

##### Example

```javascript
let link = document.querySelector('a')
console.log(link.getAttribute('href'));
```

##### Output

```javascript
// Console shows:
"https://www.google.com"
```

---

#### removeAttribute()

##### What is it?

Removes a specific attribute from an element completely.

##### Syntax

```javascript
element.removeAttribute("attributeName")
```

##### Example

```javascript
let link = document.querySelector("a")
link.removeAttribute("href");
```

##### Output

```javascript
// Before:
<a href="https://www.google.com">Link</a>

// After:
<a>Link</a>
// href attribute is completely removed
```

---

## 03_Dynamic_DOM_Manipulation

### What I Learned

This section covers creating, adding, and removing elements dynamically. This allows you to generate HTML elements programmatically using JavaScript instead of writing them in the HTML file.

### Key Methods

#### createElement()

##### What is it?

Creates a new HTML element in memory (not added to the page yet). You can then modify it and add it to the DOM later.

##### Syntax

```javascript
document.createElement("tagName")
```

##### Example

```javascript
let h1 = document.createElement("h1")
h1.textContent = "hi how are you";
console.log(h1);  // prints in console, not visible on page yet
```

##### Output

```javascript
// Console shows the element (not yet on page):
<h1>hi how are you</h1>

// HTML Page: (no change yet)
// Element exists in memory only
```

---

#### appendChild()

##### What is it?

Adds a created element as the last child of a parent element. The new element becomes the last child in that parent.

##### Syntax

```javascript
parentElement.appendChild(childElement)
```

##### Example

```javascript
let h1 = document.createElement("h1")
h1.textContent = "hi 3"
document.querySelector("div").appendChild(h1);
```
##### Output

```javascript
// HTML Page (h1 added as last child of div):
<div>
  <p>Some content</p>
  <h1>hi 3</h1>
</div>
```
---

#### append()

##### What is it?

Similar to appendChild(), but more flexible. It adds one or more elements as children of a parent element. Works with both elements and text.

##### Syntax

```javascript
parentElement.append(element1, element2, ...)
```

##### Example

```javascript
let h1 = document.createElement("h1")
h1.textContent = "hi";
document.body.append(h1)
```

##### Output

```javascript
// HTML Page (h1 added to body):
<body>
  <p>Other content</p>
  <h1>hi</h1>
</body>
```

---

#### prepend()

##### What is it?

Adds an element as the **first** child of a parent element, before all other children.

##### Syntax

```javascript
parentElement.prepend(childElement)
```

##### Example

```javascript
let h1 = document.createElement("h1")
h1.textContent = "hi how are u"
document.querySelector("div").prepend(h1);
```

##### Output

```javascript
// HTML Page (h1 added as first child of div):
<div>
  <h1>hi how are u</h1>
  <p>Some content</p>
</div>
```

---

#### remove()

##### What is it?

Removes an element completely from the DOM. The element and all its children are deleted from the page.

##### Syntax

```javascript
element.remove()
```

##### Example

```javascript
let div = document.querySelector("div")
div.remove();  // Deletes the div from the page
```

##### Output

```javascript
// HTML Page (before):
<div>
  <p>Some content</p>
</div>

// HTML Page (after remove()):
// div is completely gone
```

---

## 04_Style_Update

### What I Learned

You can modify CSS styles directly from JavaScript. There are two main approaches: directly manipulating the style object, or using CSS classes. This allows you to change how elements look based on user interaction or other events.

### Key Methods

#### style (Direct Style Manipulation)

##### What is it?

Access the style object of an element to directly change CSS properties. CSS properties are written in camelCase in JavaScript (e.g., backgroundColor instead of background-color).

##### Syntax

```javascript
element.style.propertyName = "value"
```

##### Example

```javascript
let h1 = document.querySelector('h1')
h1.style.color = "red"
h1.style.backgroundColor = "beige"
```

##### Output

```javascript
// HTML Page:
<h1 style="color: red; background-color: beige;">Heading</h1>

// Inline styles are applied directly to the element
```

---

#### classList.add()

##### What is it?

Adds one or more CSS class names to an element. This is useful when you have multiple style properties grouped in a CSS class.

##### Syntax

```javascript
element.classList.add("className")
```

##### Example

```javascript
let h2 = document.querySelector("h2")
h2.classList.add("bold")  // Applies the 'bold' class from CSS
```

##### Output

```javascript
// HTML Page:
<h2 class="bold">Heading</h2>

// CSS class 'bold' is now applied
// Styles from .bold { } are now visible
```

---

#### classList.remove()

##### What is it?

Removes one or more CSS class names from an element. Useful for toggling styles on and off.

##### Syntax

```javascript
element.classList.remove("className")
```

##### Example

```javascript
let p = document.querySelector("p")
p.classList.remove("bold")  // Removes the 'bold' class
```

##### Output

```javascript
// HTML Page (before):
<p class="bold">Paragraph</p>

// HTML Page (after remove):
<p>Paragraph</p>

// 'bold' class is removed, styles no longer applied
```

---

## Learning Path Summary

1. **Start with Selectors**: Learn how to find elements on the page
2. **Learn Manipulation**: Change text, HTML, and attributes of selected elements
3. **Master Dynamic DOM**: Create and remove elements programmatically
4. **Apply Styles**: Update the appearance of elements dynamically

## Best Practices

- Use `querySelector()` and `querySelectorAll()` for flexibility and modern syntax
- Prefer `classList` for managing multiple styles instead of directly modifying `style`
- Use `innerHTML` carefully to avoid security issues (XSS attacks)
- Always select elements before manipulating them
- Use semantic HTML and meaningful class names for easier DOM manipulation

---

Happy Learning! 🚀
