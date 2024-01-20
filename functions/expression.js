//  function expression
let print=function(nm){
    console.warn("Printing",nm);
}

// call 
print("username");
// pass something return nothing



// regular function 
let printOne=function(nm){
    return "MR"+nm;
}

// call 
printOne("username");
// pass something return something

// regular function 
let printTwo=function(){
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