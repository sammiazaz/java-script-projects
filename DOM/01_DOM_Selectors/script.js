// use to select ID
let abcd = document.getElementById('greet')
console.dir(abcd);

// use to select class
let name = document.getElementsByClassName('name')
console.dir(name);

// querySelector() kisi bhi valid CSS selector ko use karke element select kar sakta hai.
let query_selector = document.querySelector('h2')  // selects 1st element
console.dir(query_selector);

let query_selector_ALl = document.querySelectorAll('h2')
console.dir(query_selector_ALl)


