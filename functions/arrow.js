// arrow function 
let print=(nm)=>console.warn("Printing",nm);


// call 
print("username");
// pass something return nothing



// regular function 
let printOne=(nm)=>{
    return "MR"+nm;
}

// call 
printOne("username");
// pass something return something

// regular function 
let printTwo=()=>{
    return "admin";
}

// call 
printTwo();
// pass nothing return something



//pass nothing return nothing
let printThree=function(){
    console.log("Hello world")
}

printThree()