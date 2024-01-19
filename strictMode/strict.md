
# Understanding "use strict" in JavaScript

## What is "use strict"?
`"use strict"` is a phrase you can add to the top of your JavaScript files or functions to make the code more strict. This means JavaScript will be more careful and let you know about mistakes you might not be aware you're making. It helps catch errors and prevents you from using some of the more confusing parts of JavaScript.

## Why Use "use strict"?
- It catches common coding mistakes, making your code safer and less prone to run-time errors.
- It prevents you from using features of JavaScript that are considered bad or outdated.
- It can make your code run a bit faster since JavaScript knows it can be more strict with your code.

### 1. Variables with `var`, `let`, `const`
Without "use strict":
```javascript
x = 3.14;  // This creates a global variable implicitly.
```
With "use strict":
```javascript
"use strict";
x = 3.14;  // Error: x is not defined. You must declare variables before using them.
```

### 2. Global Variables and `window` Object
Without "use strict":
```javascript
function myFunction() {
  value = 9; // Implicitly creates a global variable (added to the `window` object in browsers).
}
```
With "use strict":
```javascript
"use strict";
function myFunction() {
  value = 9; // Error: `value` is not defined. No implicit global variable creation.
}
```

### 3. Functions and `this` Keyword
Without "use strict":
```javascript
function myFunction() {
  this.value = 9; // `this` refers to the global object (window in browsers).
}
```
With "use strict":
```javascript
"use strict";
function myFunction() {
  this.value = 9; // Error: `this` is `undefined` in strict mode for standalone functions.
}
```

### 4. The `with` Keyword
Without "use strict":
```javascript
let person = { name: 'John', age: 30 };
with (person) {
    console.log(name); // Outputs 'John'
    console.log(age);  // Outputs 30
}
```
With "use strict":
```javascript
"use strict";
let person = { name: 'John', age: 30 };
with (person) {
    console.log(name); // Error: with statements are not allowed in strict mode
}
```


## Example 5: Assignment to an Undeclared Variable
```javascript
// Without "use strict"
function assignValue() {
    undeclaredVar = 10; // Implicitly creates a global variable
}

// With "use strict"
function assignValueStrict() {
    "use strict";
    undeclaredVar = 10; // Error: undeclaredVar is not defined
}
```

## Example 6: Assignment to a Non-Writable Global Variable
```javascript
// Without "use strict"
function modifyUndefined() {
    undefined = 5; // No error, but it's a bad practice
}

// With "use strict"
function modifyUndefinedStrict() {
    "use strict";
    undefined = 5; // Error: Can't assign to 'undefined'
}
```

## Example 7: Duplicate Parameter Names
```javascript
// Without "use strict"
function duplicateParams(a, a) {
    return a + a;
} // No immediate error, but can lead to confusing bugs

// With "use strict"
function duplicateParamsStrict(a, a) {
    "use strict";
    return a + a; // Error: Syntax error, duplicate parameter name not allowed
}
```

## Example 8: Deleting Variables, Functions, or Function Arguments
```javascript
// Without "use strict"
function deleteVar() {
    var myVar = 10;
    delete myVar; // No error, but delete doesn't have any effect on variables

// With "use strict"
function deleteVarStrict() {
    "use strict";
    var myVar = 10;
    delete myVar; // Error: Can't delete a variable in strict mode
}
```



## Conclusion
Using `"use strict"` in your JavaScript code helps catch common coding mistakes and unsafe actions. It enforces you to declare variables before using them, prevents the use of global variables by mistake, ensures proper usage of the `this` keyword in functions, and disallows the `with` statement, leading to cleaner and more reliable code.
