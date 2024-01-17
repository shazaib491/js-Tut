# JavaScript Operators

This document lists the various operators used in JavaScript, categorized by type, along with examples and their outputs.

## Arithmetic Operators

| Operator | Description     | Example          | Output |
|----------|-----------------|------------------|--------|
| `+`      | Addition        | `5 + 3`          | `8`    |
| `-`      | Subtraction     | `10 - 5`         | `5`    |
| `*`      | Multiplication  | `4 * 2`          | `8`    |
| `/`      | Division        | `20 / 4`         | `5`    |
| `%`      | Modulus         | `7 % 2`          | `1`    |
| `++`     | Increment       | `let a = 5; a++` | `6`    |
| `--`     | Decrement       | `let b = 5; b--` | `4`    |
| `**`     | Exponentiation  | `2 ** 3`         | `8`    |

## Assignment Operators

| Operator | Description               | Example          | Output |
|----------|---------------------------|------------------|--------|
| `=`      | Assignment                | `let a = 10`     | `10`   |
| `+=`     | Addition assignment       | `a += 3`         | `13`   |
| `-=`     | Subtraction assignment    | `a -= 2`         | `8`    |
| `*=`     | Multiplication assignment | `a *= 2`         | `20`   |
| `/=`     | Division assignment       | `a /= 5`         | `2`    |
| `%=`     | Remainder assignment      | `a %= 4`         | `2`    |
| `**=`    | Exponentiation assignment | `a **= 2`        | `100`  |

## Comparison Operators

| Operator | Description                        | Example         | Output  |
|----------|------------------------------------|-----------------|---------|
| `==`     | Equal to                           | `5 == '5'`      | `true`  |
| `===`    | Strictly equal to                  | `5 === '5'`     | `false` |
| `!=`     | Not equal to                       | `5 != '5'`      | `false` |
| `!==`    | Strictly not equal to              | `5 !== '5'`     | `true`  |
| `>`      | Greater than                       | `5 > 3`         | `true`  |
| `<`      | Less than                          | `5 < 3`         | `false` |
| `>=`     | Greater than or equal to           | `5 >= 5`        | `true`  |
| `<=`     | Less than or equal to              | `5 <= 3`        | `false` |

## Logical Operators

| Operator | Description | Example          | Output   |
|----------|-------------|------------------|----------|
| `&&`     | Logical AND | `true && false`  | `false`  |
| `\|\|`    | Logical OR  | `true \|\| false` | `true`   |
| `!`      | Logical NOT | `!true`          | `false`  |

## String Operator

| Operator | Description     | Example             | Output       |
|----------|-----------------|---------------------|--------------|
| `+`      | Concatenation   | `'Hello ' + 'World'`| `'Hello World'` |

## Bitwise Operators

| Operator | Description          | Example       | Output |
|----------|----------------------|---------------|--------|
| `&`      | AND                  | `5 & 1`       | `1`    |
| `\|`     | OR                   | `5 \| 1`      | `5`    |
| `^`      | XOR                  | `5 ^ 1`       | `4`    |
| `~`      | NOT                  | `~5`          | `-6`   |
| `<<`     | Left shift           | `5 << 1`      | `10`   |
| `>>`     | Right shift          | `5 >> 1`      | `2`    |
| `>>>`    | Unsigned right shift | `5 >>> 1`     | `2`    |

## Conditional Operator

| Operator                      | Description    | Example                    | Output     |
|-------------------------------|----------------|----------------------------|------------|
| `condition ? value1 : value2` | Ternary operator | `5 > 3 ? 'yes' : 'no'`      | `'yes'`    |

## Type Operators

| Operator     | Description                         | Example           | Output       |
|--------------|-------------------------------------|-------------------|--------------|
| `typeof`     | Returns the type of a variable      | `typeof 'hello'`  | `'string'`   |
| `instanceof` | Checks if an object is an instance  | `[] instanceof Array` | `true` |

## Special Operators

| Operator | Description                    | Example             | Output     |
|----------|--------------------------------|---------------------|------------|
| `delete` | Deletes an object property     | `var obj = { a: 1 }; delete obj.a` | `true` |
| `in`     | Checks if a property exists    | `'a' in obj`        | `false`    |
| `new`    | Creates an instance            | `new Array()`       | `[]`       |
| `void`   | Discards a return value        | `void(0)`           | `undefined`|
| `this`   | Refers to the current object   | `console.log(this)` | `global`   |
| `super`  | Refers to the parent class     | -                   | -          |

## Spread Operator

| Operator | Description                           | Example                       | Output          |
|----------|---------------------------------------|-------------------------------|-----------------|
| `...`    | Expands an iterable into elements     | `Math.max(...[1, 2, 3])`      | `3`             |
