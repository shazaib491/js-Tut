
# Shallow Copy vs. Deep Copy in JavaScript

Understanding the difference between shallow copy and deep copy is crucial for effectively managing and manipulating objects in JavaScript.

## Shallow Copy

A shallow copy of an object copies all of the original object's properties to a new object. However, if any of those properties are objects themselves, the copy will share references to the same objects rather than duplicating them. This means changes to nested objects in the copied object will affect the original object, and vice versa.

### How to Create a Shallow Copy
You can create a shallow copy using Object.assign() or the spread syntax (...).

**Example using Object.assign():**
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);
```

**Example using spread syntax (...):**
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
```

## Deep Copy

A deep copy creates a new object and recursively copies every object it finds within the original object. Unlike a shallow copy, changes to the deep copy do not affect the original object, and vice versa.

### How to Create a Deep Copy
A common way to create a deep copy is by using JSON.stringify() to serialize the original object to a JSON string, and then JSON.parse() to parse that string back into a new object.

**Example:**
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
```

**Example:**
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = structureClone(original);
```

Note: This method does not copy functions or objects that cannot be serialized (e.g., Date objects, Functions, etc.).

## Conclusion

Choosing between a shallow copy and a deep copy depends on your specific needs. If you are working with simple objects or do not have nested objects, a shallow copy might suffice. However, for more complex objects or when you need to ensure the original object remains unchanged, a deep copy is the way to go.
