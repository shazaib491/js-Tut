
# Object Destructuring in JavaScript

Object destructuring is a convenient feature in JavaScript that allows you to extract properties from objects and bind them to variables in a concise and readable manner. This feature is part of the ECMAScript 2015 (ES6) standard.

## Basic Usage

Instead of accessing properties one by one, you can extract multiple properties in a single statement.

**Example:**
```javascript
const person = {
  name: 'John Doe',
  age: 30,
  job: 'Developer'
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
const { name, age } = person;
```

## Renaming Variables

You can also rename variables while destructuring.

**Example:**
```javascript
const { name: fullName, age } = person;
console.log(fullName); // Output: John Doe
```

## Default Values

Destructuring allows you to assign default values to variables if the property does not exist.

**Example:**
```javascript
const { name, age, gender = 'Male' } = person;
console.log(gender); // Output: Male
```

## Nested Objects

Destructuring can be used with nested objects as well.

**Example:**
```javascript
const user = {
  id: 1,
  info: {
    name: 'John Doe',
    address: {
      city: 'New York',
      country: 'USA'
    }
  }
};

const { info: { name, address: { city } } } = user;
console.log(name, city); // Output: John Doe New York
```

## Conclusion

Object destructuring simplifies the process of working with objects, making your code more concise and readable. It's especially useful when dealing with complex objects or when you need to extract multiple properties and use them as variables.
