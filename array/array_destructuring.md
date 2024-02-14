
# Array Destructuring in JavaScript

Array destructuring is a powerful feature in JavaScript that allows you to unpack values from arrays, or even properties from objects, into distinct variables.

## 1. Basic Destructuring

You can extract values directly into variables:

```javascript
const arr = ["Hello", "World"];
const [greeting, place] = arr;
console.log(greeting); // "Hello"
console.log(place); // "World"
```

## 2. Swap Variables

Destructuring makes swapping values straightforward:

```javascript
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); // 10
```

## 3. Default Values

When unpacking values from an array, you can assign default values to variables if the value unpacked is `undefined`:

```javascript
const [num1, num2 = 5] = [10];
console.log(num1); // 10
console.log(num2); // 5
```

## 4. Nested Destructuring

Destructuring can be nested to unpack values from nested arrays:

```javascript
const arr = [1, [2, 3], 4];
const [, [innerValue]] = arr;
console.log(innerValue); // 3
```

## 5. Rest Operator

The rest operator (`...`) can be used to collect the rest of the array elements into a separate array:

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, second, ...others] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]
```

## 6. Skipping Elements

You can skip elements that you're not interested in:

```javascript
const arr = ["a", "b", "c", "d"];
const [, , third] = arr;
console.log(third); // "c"
```

## 7. Destructuring Assignment in Functions

Return multiple values from a function and then destructuring those values:

```javascript
function getFirstAndLast(arr) {
    return { first: arr[0], last: arr[arr.length - 1] };
}
const [first, last] = getFirstAndLast([1, 2, 3, 4]);
console.log(first); // 1
console.log(last); // 4
```

## 8. Using Destructuring in Function Parameters

Destructure directly in function parameters:

```javascript
function printFirstElement([first]) {
    console.log(first);
}
printFirstElement([10, 20, 30]); // 10
```

## 9. Mixed Destructuring

Combine object and array destructuring:

```javascript
const arr = [{ key: 'value' }, [10, 20, 30]];
const [{ key: str }, [, , num]] = arr;
console.log(str); // "value"
console.log(num); // 30
```

These examples showcase how array destructuring can simplify your code, making it more readable and expressive.


const obj = {
  name: 'John Doe',
  age: 30,
  profession: 'Software Engineer'
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}