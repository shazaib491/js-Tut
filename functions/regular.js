// Regular functions are the most basic way to define a function in JavaScript. They are versatile and fundamental to JavaScript programming.
//regular function
function setName() {
  console.log("setName");
}

setName();


//                      anonymous function 
// ----------------------------------------------------------------
// Function expressions are a way to define functions in JavaScript. They offer a more flexible approach compared to regular function declarations.
// function expression 
const sayHello = function () {
  return "Hello";
}; 

//arrow function
const sayHellWorld = ()=>{
    console.log("Hello world!");
}


//IIFE function 
(function() {
    var message = 'Hello, World!';
    console.log(message);
})();
  