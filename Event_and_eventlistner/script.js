// syntax


// element: The target DOM element you want to attach the listener to (e.g., a button or input field).
// event: A string specifying the name of the event (e.g., 'click', 'keydown', 'submit','dblclick'). Do not use the "on" prefix (use 'click', not 'onclick').
// function: The callback function that runs when the event fires. It receives an optional Event object containing event data.

//------------------- ####### (1) click eventlistner  ########-------------------------------------------
// 1. select the element first (h1)
let h1 =  document.querySelector("h1")

// 2. apply addEventListner
h1.addEventListener("click", function(){
    h1.style.color = "blue"    // changing style of selected element 
}
)
h1.addEventListener("dblclick" , function(){
    h1.style.color = "red"
})


//$$$$$$$$$$$$$-----another method--------$$$$$$$$$$$$$$$
// 1. select Element
let p = document.querySelector("p")
// 2. make a function (jo hame krna hai koi action pr )
function doubleclick (){
    p.style.color = "green"
}
// now call dblclick function using eventlistner
p.addEventListener( "dblclick" , doubleclick);  // we just put the finction out side of event listner 



// ############--------------- (2) input event listner -----------------###########
// let inp = document.querySelector("input")
// inp.addEventListener("input", function(){
//     console.log("typed ")   // open console for output
// })


//advance understanding  of input 
let inp = document.querySelector("input")
// inp.addEventListener("input", function(a){
//     console.log(a.data)   // it gives null also when we hit a backspace 
// })

// inp.addEventListener("input", function(){
//     console.log("sammi")  // print sammmi on console whenever we give input through keyboard
// })

// inp.addEventListener("input", function(a){
//     if(a.data !== null){
//         console.log(a.data);  // not gives null when we hit  backspace
        
//     }
// })


// #############---------------(3) chnage event listner --------------##############
// let sel = document.querySelector("select")
// sel.addEventListener("change", function(a){
//     console.log(a);
// })

// sel.addEventListener("change", function(a){
//     console.log(a.target.value);
// })


// print device selecto when we choose a device
let sel = document.querySelector("select")
let ds = document.querySelector("#ds")
// sel.addEventListener("change", function(a){
//     ds.textContent = "device selected"
// })
sel.addEventListener("change", function(a){
    ds.textContent = `${a.target.value} device selected`
})