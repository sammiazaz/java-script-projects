let inpbtn = document.querySelector("#inp-btn")   // select button we created 
let inpfile =  document.querySelector("#inp-file") // select input of type file 

inpbtn.addEventListener("click" ,function (){  
    inpfile.click();
})

inpfile.addEventListener("change", function(a){
    inpbtn.textContent = a.target.files[0].name;    // print the file what we chose

})


// to print wall file 
// let filelist = document.querySelector("#file-list")

// inpfile.addEventListener("change", function(e){
//     let p = document.createElement("p");
//     p.textContent = e.target.files[0].name;

//     filelist.appendChild(p);
//     });

