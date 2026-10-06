# JavaScript Data Types — Detailed Explanation 

JavaScript mein **Data Type** batata hai ki kisi variable ke andar kis type ki value store hai.

## Example

```javascript
let name = "Shazaib";
let age = 25;
let isStudent = true;
```

Yahan:

- `name` → **String**
- `age` → **Number**
- `isStudent` → **Boolean**

---

# 1. JavaScript Data Types ke Main Categories

JavaScript mein data types ko mainly **2 categories** mein divide kiya jata hai:

```text
Data Types
│
├── Primitive Data Types
│   ├── String
│   ├── Number
│   ├── BigInt
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   └── Symbol
│
└── Non-Primitive / Reference Data Type
    └── Object
```

## Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|---|---|
| Single value represent karta hai | Multiple/complex data represent kar sakta hai |
| Immutable hote hain | Generally mutable hote hain |
| Value-based concept | Reference-based concept |
| String, Number, Boolean etc. | Object, Array, Function etc. |

---

# 2. String

**String** ka use text store karne ke liye hota hai.

String ko:

- Double quotes `" "`
- Single quotes `' '`
- Backticks `` ` ` ``

mein likh sakte hain.

## Example

```javascript
let name = "Shazaib";
let city = 'Bhopal';
let message = `Hello World`;
```

### Another Example

```javascript
let firstName = "Shazaib";
let lastName = "Rahman";

console.log(firstName);
console.log(lastName);
```

### Output

```text
Shazaib
Rahman
```

## String ki Type Check Karna

```javascript
let name = "Shazaib";

console.log(typeof name);
```

### Output

```text
string
```

## Important

Agar number ko quotes ke andar likh diya, to woh **String** ban jayega.

```javascript
let age = 25;      // Number
let age2 = "25";   // String

console.log(typeof age);
console.log(typeof age2);
```

### Output

```text
number
string
```

---

# 3. Number

JavaScript mein **Number** integers aur decimal numbers dono ko represent karta hai.

```javascript
let age = 25;
let marks = 85.5;
let temperature = -10;
```

Teeno ka type `number` hoga.

```javascript
console.log(typeof age);
console.log(typeof marks);
console.log(typeof temperature);
```

### Output

```text
number
number
number
```

## Integer

```javascript
let age = 25;
```

## Decimal

```javascript
let price = 99.99;
```

## Negative Number

```javascript
let balance = -500;
```

## Mathematical Operations

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
```

---

# 4. BigInt

**BigInt** ka use bahut bade integers ko store karne ke liye hota hai.

JavaScript ke normal `Number` ki safe integer limit hoti hai.

BigInt banane ke liye number ke end mein **`n`** lagate hain.

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
```

## Type Check Karna

```javascript
console.log(typeof bigNumber);
```

### Output

```text
bigint
```

## Example

```javascript
let population = 12345678901234567890n;

console.log(population);
```

## Important

`BigInt` aur `Number` ko directly mix nahi kar sakte.

```javascript
let a = 10n;
let b = 5;

console.log(a + b);
```

Ye **Error** dega.

Agar dono ko calculate karna hai, to same type mein convert karna padega.

---

# 5. Boolean

Boolean ke andar sirf **do values** hoti hain:

```text
true
false
```

Boolean ka use mostly **conditions** mein hota hai.

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

## Example

```javascript
let age = 20;

console.log(age >= 18);
```

### Output

```text
true
```

### Another Example

```javascript
let isRaining = false;

console.log(isRaining);
```

### Output

```text
false
```

## Real-Life Example

```javascript
let hasTicket = true;

if (hasTicket) {
    console.log("You can enter.");
}
```

---

# 6. Undefined

`undefined` ka matlab hai:

> Variable declare hua hai, lekin uske andar abhi koi value assign nahi hui.

## Example

```javascript
let name;

console.log(name);
```

### Output

```text
undefined
```

## Type Check Karna

```javascript
console.log(typeof name);
```

### Output

```text
undefined
```

### Another Example

```javascript
let age;

console.log(age);
```

Yahan `age` variable exist karta hai, lekin uski value assign nahi hui.

---

# 7. Null

`null` ka matlab hota hai:

> Intentionally koi value nahi hai.

## Example

```javascript
let user = null;

console.log(user);
```

### Output

```text
null
```

Yahan hum intentionally bata rahe hain ki `user` ki currently koi value nahi hai.

## Undefined vs Null

```javascript
let a;
let b = null;
```

Difference:

```text
a → undefined
b → null
```

Simple language mein:

- `undefined` → value assign nahi hui
- `null` → intentionally empty value di gayi

## Interesting JavaScript Behavior

```javascript
console.log(typeof null);
```

### Output

```text
object
```

Ye JavaScript ka **historical/legacy behavior** hai.

Technically `null` ek **primitive value** hai, lekin:

```javascript
typeof null
```

`"object"` return karta hai.

---

# 8. Symbol

`Symbol` JavaScript ka ek special **primitive data type** hai.

Iska use mostly **unique identifiers/keys** create karne ke liye hota hai.

## Example

```javascript
let id = Symbol("id");

console.log(id);
```

## Type Check Karna

```javascript
console.log(typeof id);
```

### Output

```text
symbol
```

## Symbols Unique Hote Hain

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

### Output

```text
false
```

Although dono ka description `"id"` hai, dono symbols alag hain.

```javascript
Symbol("id") !== Symbol("id")
```

---

# 9. Object

**Object** ek non-primitive/reference data type hai.

Object ka use related data ko ek jagah store karne ke liye hota hai.

## Example

```javascript
let student = {
    name: "Shazaib",
    age: 25,
    marks: 85
};
```

Yahan ek student ki multiple information ek object mein store hai.

## Object ki Properties Access Karna

```javascript
console.log(student.name);
console.log(student.age);
console.log(student.marks);
```

### Output

```text
Shazaib
25
85
```

## Object ki Type

```javascript
console.log(typeof student);
```

### Output

```text
object
```

---

# 10. Array

Array technically JavaScript mein **Object ka special type** hai.

Array ka use multiple values store karne ke liye hota hai.

## Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Array ka index **0 se start** hota hai.

```javascript
console.log(fruits[0]);
```

### Output

```text
Apple
```

```javascript
console.log(fruits[1]);
```

### Output

```text
Banana
```

## Array ki Type

```javascript
console.log(typeof fruits);
```

### Output

```text
object
```

### Important

```javascript
typeof []
```

returns:

```text
object
```

Array check karne ke liye:

```javascript
Array.isArray(fruits);
```

### Output

```text
true
```

---

# 11. Function

Function ko JavaScript mein technically **object** maana jata hai, lekin `typeof` karne par special result milta hai.

## Example

```javascript
function greet() {
    console.log("Hello");
}

console.log(typeof greet);
```

### Output

```text
function
```

Function ka use **reusable code** banane ke liye hota hai.

## Example

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

### Output

```text
30
```

---

# 12. `typeof` Operator

JavaScript mein kisi value ka **data type check** karne ke liye `typeof` operator use karte hain.

## Syntax

```javascript
typeof value
```

## Examples

```javascript
console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123n);
console.log(typeof Symbol("id"));
```

### Output

```text
string
number
boolean
undefined
object
bigint
symbol
```

> **Note:** `typeof null` ka result `"object"` hota hai, jo JavaScript ka historical/legacy behavior hai.

---

# 13. Complete Data Type Example

```javascript
let name = "Shazaib";
let age = 25;
let isStudent = true;
let salary;
let data = null;
let bigNumber = 12345678901234567890n;
let id = Symbol("id");

let person = {
    name: "Shazaib",
    age: 25
};

let subjects = ["JavaScript", "HTML", "CSS"];

function greet() {
    console.log("Hello");
}
```

## Types Check Karna

```javascript
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof isStudent);  // boolean
console.log(typeof salary);     // undefined
console.log(typeof data);       // object
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol
console.log(typeof person);     // object
console.log(typeof subjects);   // object
console.log(typeof greet);      // function
```

---

# 14. Primitive Data Types

JavaScript ke **7 primitive data types** hain:

| Data Type | Example |
|---|---|
| String | `"Hello"` |
| Number | `100` |
| BigInt | `100n` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| Symbol | `Symbol("id")` |

### Primitive Data Types

```text
Primitive
│
├── String
├── Number
├── BigInt
├── Boolean
├── Undefined
├── Null
└── Symbol
```

---

# 15. Non-Primitive / Reference Types

Common non-primitive/reference types:

- Object
- Array
- Function
- Date
- Map
- Set

## Examples

### Object

```javascript
let person = {
    name: "Ali"
};
```

### Array

```javascript
let numbers = [10, 20, 30];
```

### Function

```javascript
function greet() {
    console.log("Hello");
}
```

---

# 16. Primitive vs Reference — Important Concept

Ye JavaScript ka bahut important concept hai.

## Primitive Example

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);
```

### Output

```text
10
20
```

Yahan `a` ki value change nahi hui.

Conceptually:

```text
a → 10

b → 10

b = 20

a → 10
b → 20
```

Dono **independent values** hain.

---

# 17. Reference Example

Ab object ka example dekho:

```javascript
let person1 = {
    name: "Ali"
};

let person2 = person1;

person2.name = "Ahmed";

console.log(person1.name);
```

### Output

```text
Ahmed
```

## Kyun?

Kyuki object ke case mein variables same object ko **refer** kar sakte hain.

Conceptually:

```text
person1 ──┐
          ↓
       Object
       name: "Ali"
          ↑
person2 ──┘
```

`person1` aur `person2` same object ko refer kar rahe hain.

Isliye:

```javascript
person2.name = "Ahmed";
```

karne par `person1.name` bhi `"Ahmed"` ho jata hai.

---

# 18. Quick Revision

## Primitive

```text
Primitive
│
├── String       → "Hello"
├── Number       → 100
├── BigInt       → 100n
├── Boolean      → true / false
├── Undefined    → undefined
├── Null         → null
└── Symbol       → Symbol("id")
```

## Non-Primitive

```text
Non-Primitive
│
└── Object
    ├── Object
    ├── Array
    ├── Function
    ├── Date
    ├── Map
    └── Set
```

---

# 19. One-Line Revision

| Type | Simple Meaning |
|---|---|
| String | Text store karta hai |
| Number | Numbers store karta hai |
| BigInt | Very large integers store karta hai |
| Boolean | `true` / `false` |
| Undefined | Value assign nahi hui |
| Null | Intentionally empty value |
| Symbol | Unique identifier |
| Object | Complex/related data |
| Array | Multiple values ka collection |
| Function | Reusable block of code |

### Ek Line Mein Yaad Rakho

> **Primitive = simple/single value**

> **Reference = object/complex data ko refer karta hai**

---

# 20. Most Important `typeof` Examples

```javascript
typeof "Hello"       // "string"

typeof 100           // "number"

typeof 100n          // "bigint"

typeof true          // "boolean"

typeof undefined     // "undefined"

typeof null          // "object"  ← JavaScript legacy behavior

typeof Symbol("id")  // "symbol"

typeof {}            // "object"

typeof []            // "object"

typeof function(){}  // "function"
```

---

# Final Summary

JavaScript mein **7 primitive data types** hote hain:

```text
String
Number
BigInt
Boolean
Undefined
Null
Symbol
```

Aur complex/reference data ke liye commonly:

```text
Object
Array
Function
Date
Map
Set
```

Sabse important baat:

```text
Primitive
    ↓
Value-based

Reference
    ↓
Object/reference-based
```

Aur data type check karne ke liye:

```javascript
typeof value
```

use kiya jata hai.
