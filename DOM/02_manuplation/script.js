// how to manuplate a element 
// 1. select the element using querySelector
// 2. change what you want 

// let a = document.querySelector('h1');
// console.dir(a);

//1. ***********************Text manuplation *************************** */ // a.textContent = "hi sammi how are you";   //=>  changes text
// a.innerText = "hi sammi how are you";     //=> chnage text
// a.innerHTML = '<u>hi</u>';                //=>changes HTML


//2. *********************** Attribute manuplation *******************/
let a  = document.querySelector("a")
console.dir(a);
a.href = "https://www.google.com"

//2.1 set attribute
let img = document.querySelector('img')
img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1773332611514-238856b76198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    );

//2.2 get attribute
let getAttr = document.querySelector('a')
console.log(a.getAttribute('href'));

//2.3 remove attribute
let r = document.querySelector("a")
r.removeAttribute("href");
