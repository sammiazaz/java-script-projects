// // scope let, var, const
// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);



// scope level and mini hosting -----------------
function one(){
    const username = "sammi"

    function two(){
        const web = "youtube"
        console.log(web);
        
    }
    two()
    
}
one()

// done