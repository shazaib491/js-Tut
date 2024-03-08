# JavaScript Assessment

**Total Marks:** 50  
**Duration:** 4 hours  
**Passing Marks:** 20  
**Instructions:** Read the questions carefully.  

## Questions

### Part 1: Basic Understanding (Each question carries 1 mark. Total: 10)

1. **Hoisting and Variable Declaration**
   - What would be the output of the following JavaScript code and why?
     ```javascript
     console.log(myVar);
     var myVar = 10;

     function myFunction() {
       console.log('Hello World!');
     }

     console.log(myVar2);
     let myVar2 = 20;
     ```
   - Explain the concept of hoisting in JavaScript, especially focusing on how it applies to the `var` keyword and function declarations.

2. **Variable Hoisting and Scope**
   - What will be the output of the following JavaScript code and why?
     ```javascript
     for (var i = 0; i < 3; i++) {
       console.log(i);
     }
     console.log(i);
     ```
   - How does the concept of variable hoisting and scope come into play here?

3. **Block Scope and Hoisting**
   - What will be the output of the following JavaScript code and why?
     ```javascript
     {
       var a = 100;
     }
     console.log(a);
     ```
   - Explain how the `var` keyword behaves with respect to block scope and hoisting.

4. **Ternary Operator**
   - Use the ternary operator to rewrite the following if-else statement in a more concise form:
     ```javascript
     var result;
     if (x > 10) {
       result = "greater";
     } else {
       result = "smaller";
     }
     ```
   - Your answer must use the ternary operator and assign the result to the same variable `result`.

5. **Deep Cloning Objects**
   - How can you store the following object in a new variable named `sampleObject` so that `sampleObject` refers to a different memory location?
     ```javascript
     let object = {
       name: 'test',
       email: 'test@example.com',
       password: 'test@123'
     };
     ```
   - Use JavaScript to deep clone `object` into `sampleObject` and provide code that verifies that `object` and `sampleObject` refer to different memory locations.

6. **Equality Operators**
   - Explain the difference between the `==` and `===` operators in JavaScript. Provide an example to demonstrate each operator's behavior.

7. **Immediately Invoked Function Expression (IIFE)**
   - Write an Immediately Invoked Function Expression (IIFE) in JavaScript that calculates the square of a given number and logs the result to the console.
   - Your function should take one parameter for the number to be squared and be immediately invoked with a number of your choice.

8. **Adding Fields to Objects**
   - Is it possible to add a new field, say `occupation`, to `myObject` after its declaration? Explain your answer.
     ```javascript
     const myObject = {
       name: 'John',
       age: 30
     };
     myObject.email = "admin@gmail.com";
     ```

9. **setTimeout and Closures**
   - What will the following JavaScript code output to the console and why?
     ```javascript
     for (var i = 0; i < 3; i++) {
       setTimeout(function() {
         console.log(i);
       }, 1000);
     }
     ```

10. **Data Types**
    - What are the data types of variables `a` and `name`?
      ```javascript
      var a = 17;
      let name = "rahim";
      ```
      Options:
      - A) `a` is a number and `name` is a string
      - B) `a` is a string and `name` is a number
      - C) `a` is an object and `name` is undefined
      - D) `a` is undefined and `name` is a boolean

### Part 2: Intermediate (Each question carries 2 marks. Total: 20)

1. **Usage of var, let, and const**
   - Write code snippets to demonstrate the usage of `var`, `let`, and `const` in JavaScript.
   - Explain how `let` and `const` overcome the hoisting issue commonly associated with `var`.

2. **Sorting Algorithm**
   - Write a sorting algorithm in JavaScript that sorts an array of numbers in ascending order.
```markdown
   - Your function should return a new array that contains all the numbers from the input array, but sorted in ascending order.
   - Do not use JavaScript's built-in `.sort()` method; implement the algorithm manually.

3. **Linear Search**
   - Write a function named `linearSearch` that takes in an array of integers and a target integer. The function should return the index of the target integer if it exists in the array; otherwise, return -1.
   - Your function must iterate through the array to search for the target integer.
   - Do not use any built-in search functions.

4. **Prime Number Checker**
   - Write a program in JavaScript that takes an integer as input and returns `true` if the number is prime and `false` otherwise.
   - Your function should check whether the integer is a prime number.

5. **Factorial Calculation**
   - Write a function named `calculateFactorial` in JavaScript that takes a non-negative integer `n` as an argument and returns the factorial of `n`.
   - The factorial of a non-negative integer `n`, denoted by `n!`, is the product of all positive integers less than or equal to `n`.
   - You may use either loops or recursion to implement the function. Do not use any built-in factorial functions.

### Part 3: Advanced (Each question carries 3 marks. Total: 15)

1. **Simple Promise**
   - Write a JavaScript function named `simplePromise` that returns a new Promise. The Promise should perform the following:
     - Resolve with the string "Resolved" after 2 seconds if the input boolean is `true`.
     - Reject with the string "Rejected" in case of any errors or if the input boolean is `false`.
   - Use `setTimeout` to simulate the 2-second delay.

2. **Callback Function**
   - Write a JavaScript function named `performCalculation` that takes two numbers and a callback function. The function should perform the addition of the two numbers and pass the result to the provided callback function.

3. **Fetch API**
   - Write a JavaScript function named `fetchTODO` that uses the Fetch API to retrieve data from the endpoint `https://jsonplaceholder.typicode.com/todos/1` and logs the title and completed status of the todo item to the console.

4. **Fibonacci Series**
   - Write a function named `printFibonacci` in JavaScript that takes an integer `n` as an argument and prints the first `n` numbers in the Fibonacci series.

5. **Guessing Game**
   - Create a JavaScript program that allows a user to guess 5 numbers between 1 and 100. Generate an array of 10 random numbers in the same range. For each correct guess, the user earns 2 points. For each incorrect guess, the user loses 1 point. After all 5 guesses are made, print the generated random list and the user's score.

### Part 4: Project (Total: 10 marks)

**Task:** Create a JavaScript Program to Document Sultan Abdul Hamid II's Achievements

**Objective:** Your task is to create a simple JavaScript program that allows the user to store and display the titles and descriptions of Sultan Abdul Hamid II's significant works. The program should provide an easy way to add new achievements and view the existing list.

**Requirements:**
1. **Data Storage:** Create an array to store the achievements. Each achievement should be an object with two properties: `title` and `description`.
2. **Adding Achievements:** Implement a function `addAchievement(title, description)` that takes the title and description as arguments and adds a new achievement to the array.
3. **Displaying Achievements:** Implement a function `displayAchievements()` that logs each achievement's title and description to the console.
4. **User Interaction:** Allow the user to add new achievements through prompt inputs and display the updated list of achievements after each addition.

**Bonus:** Enhance the program with additional features such as the ability to delete achievements or save the list to local storage.

**Evaluation Criteria:**
- Functionality: The program meets all the requirements and correctly stores and displays achievements.
- Code Quality: The code is well-organized, readable, and follows JavaScript best practices.
- User Experience: The program provides a clear and intuitive interface for adding and viewing achievements.
