
# Callback Functions in JavaScript

## What is a Callback?

A callback is a function that is passed into another function as an argument, which is then executed inside that function. Think of it as giving a specific task (the callback function) to a friend (another function) and saying, "Please run this task for me when you're done with your work."

## Why Do We Need Callbacks?

Callbacks are essential in JavaScript, especially for handling asynchronous operations. They allow us to execute code after a certain task is completed, like waiting for data to load from a server. Without callbacks, we might end up trying to use data that hasn't been loaded yet.

## Simple Example

Imagine you're a teacher asking a student (the callback function) to answer a question (the task). However, the student will only answer (the function gets executed) after you (the main function) finish asking the question.

```javascript
function askQuestion(question, studentAnswer) {
    console.log(question);
    studentAnswer();
}

askQuestion("What is 2 + 2?", function() {
    console.log("The answer is 4");
});
```

In this example, the `askQuestion` function takes two arguments: a question and a function that provides the answer. The student's answer (callback function) is only given after the question is asked.

## Real JavaScript Callback Example with `forEach`

A common use of callbacks is in array methods like `forEach`. This method allows you to execute a function for each element in an array.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2);
});
```

Here, the anonymous function is a callback that gets executed for each element in the `numbers` array. It takes each number and logs its double to the console.

## Conclusion

Callbacks are a fundamental concept in JavaScript, enabling us to handle asynchronous events and ensuring that certain code is executed at the right time.
