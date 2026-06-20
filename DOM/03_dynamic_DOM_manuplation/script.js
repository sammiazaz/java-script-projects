//1. ****************create element */
// let h1 = document.createElement("h1")
// h1.textContent = "hi how are you";
// console.log(h1); // print on console not in html
// document.body.append(h1) 
 // or
// document.querySelector("body").append(h1);

//2. *************Append child on div ************
// let h1 = document.createElement("h1")
// h1.textContent =  "hi 3"
// document.querySelector("div").appendChild(h1);

//3. ************prepend*************************
// let h1 = document.createElement("h1")
// h1.textContent =  "hi how are u"
// document.querySelector("div").prepend(h1);

//4. remove childe
let div = document.querySelector("div")
div.remove();
