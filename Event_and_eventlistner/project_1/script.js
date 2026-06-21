let h1 =  document.querySelector('h1')
window.addEventListener("keydown", function(a){
    // console.log(a.key);
    h1.textContent = a.key;  // when we click space nothing print 
    
    if(a.key === " "){
        h1.textContent = "space"
    }
    else{
        h1.textContent = a.key
    }
})