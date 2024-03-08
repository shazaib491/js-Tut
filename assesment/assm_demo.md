Here's the markdown file for your JavaScript assessment:

```markdown
# JavaScript Assessment

**Total Marks:** 50  
**Duration:** 4 hours  
**Passing Marks:** 20  
**Note:** 5 marks are based on your class performance.

## Instructions

- Read the questions carefully.
- Each question carries 1 mark.

---

### Question 1

Consider the following JavaScript code:

```javascript
console.log(myVar);
var myVar = 10;

function myFunction() {
    console.log('Hello, World!');
}

console.log(myVar2);
let myVar2 = 20;
```

What would be the output of the code above, and why? Explain the concept of hoisting in JavaScript, especially focusing on how it applies to the `var` keyword and function declarations.

### Question 2

Consider the following JavaScript code snippet:

```javascript
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
```

What will be the output of the code, and why? How does the concept of variable hoisting and scope come into play here?

### Question 3

Consider the following JavaScript code snippet:

```javascript
{
    var a = 100;
}

console.log(a);
```

What will be the output of this code, and why? Explain how the `var` keyword behaves with respect to block scope and hoisting.

### Question 4

Consider the following if-else statement:

```javascript
if (x > 10) {
    result = "greater";
} else {
    result = "smaller";
}
```

Use the ternary operator to rewrite this if-else statement in a more concise form.

### Question 5

How can you store the following object in a new variable named `sampleObject` so that `sampleObject` refers to a different memory location?

```javascript
let object = {
    name: 'test',
    email: 'test@example.com',
    password: 'test@123'
};
```

### Question 6

Explain the difference between the `==` and `===` operators in JavaScript. Provide an example to demonstrate each operator's behavior.

### Question 7

Write an Immediately Invoked Function Expression (IIFE) in JavaScript that calculates the square of a given number and logs the result to the console.

### Question 8

Consider the following JavaScript code snippet:

```javascript
const myObject = {
    name: 'John',
    age: 30
};
myObject.email = "admin@gmail.com";
```

Is it possible to add a new field, say `occupation`, to `myObject` after its declaration? Explain your answer.

### Question 9

Consider the following JavaScript code snippet:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

What will this code output to the console, and why?

### Question 10

Consider the following JavaScript declarations:

```javascript
var a = 17;
let name = "rahim";
```

What are the data types of variables `a` and `name`?

- A) `a` is a number and `name` is a string
- B) `a` is a string and `name` is a number
- C) `a` is an object and `name` is undefined
- D) `a` is undefined and `name` is a boolean
```

This markdown file should resemble a paper format with all the required elements aligned automatically when rendered.