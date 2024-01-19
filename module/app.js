// Importing functions from the module
import { add, subtract } from './mathModule.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2


// Importing the default export
import greet from './messageModule.js';

console.log(greet("Alice")); // Output: Hello, Alice!