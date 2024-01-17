
# Control Structures in JavaScript

Control structures in programming dictate the flow of control in a program. In JavaScript, these structures allow for decision-making with conditional statements and executing code repeatedly with loops. This document focuses on conditional statements: `if`, `else if`, `else`, nested `if`, and `else if` ladder.

## 1. `if` Statement

The `if` statement executes a block of code if a specified condition is true.

### Theory:
- Syntax: `if (condition) { /* code to execute if condition is true */ }`
- The condition is evaluated, and if the condition is true, the code within the block is executed.

### Example:
```javascript
if (temperature > 30) {
    console.log("It's a hot day.");
}
```

## 2. `if...else` Statement

This structure allows executing one block of code if the condition is true, and another block if it's false.

### Theory:
- Syntax: `if (condition) { /* code if true */ } else { /* code if false */ }`
- If the condition is true, the first block is executed; otherwise, the else block is executed.

### Example:
```javascript
if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("Enjoy the sun!");
}
```

## 3. Nested `if` Statement

Nested `if` statements allow using an `if` or `if...else` statement inside another `if` or `if...else` statement.

### Theory:
- Syntax: `if (condition1) { if (condition2) { /* code */ } }`
- The inner `if` statement is only executed if the outer `if` condition is true.

### Example:
```javascript
if (isLoggedIn) {
    if (userRole === 'admin') {
        console.log("Access to all systems.");
    }
}
```

## 4. `else if` Ladder

This structure is a series of `if` statements, where each `if` statement has an `else if` clause.

### Theory:
- Syntax: `if (condition1) { /* code */ } else if (condition2) { /* code */ } ... else { /* code */ }`
- It's used to differentiate between multiple conditions.

### Example:
```javascript
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Try harder next time.");
}
```

## Comparison Table for Control Structures

| Structure     | Purpose                                             | Syntax Example                                 |
|---------------|-----------------------------------------------------|------------------------------------------------|
| `if`          | Execute code if condition is true                   | `if (condition) {...}`                         |
| `if...else`   | Execute code if condition is true, else other code  | `if (condition) {...} else {...}`              |
| Nested `if`   | Execute inner `if` if outer `if` condition is true  | `if (condition1) { if (condition2) {...} }`    |
| `else if`     | Differentiate multiple conditions                   | `if (condition1) {...} else if (condition2) {...}` |

This format should offer a comprehensive yet concise overview of control structures in JavaScript, making it suitable for educational or reference purposes.
```

