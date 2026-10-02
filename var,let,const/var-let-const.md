
# JavaScript `var`, `let` aur `const`

## 1. Introduction

JavaScript me **variable** ek naam hota hai jiske through hum data ko program me store aur access karte hain.

Example:

```javascript
let age = 25;
```

Yahan:

* `let` → variable declare karne ka keyword
* `age` → variable ka naam
* `25` → variable ki value
* `=` → value assign karne ka operator

JavaScript me variables declare karne ke liye mainly teen keywords use hote hain:

```javascript
var
let
const
```

Teeno ka purpose variable banana hai, lekin inke **scope, redeclaration, reassignment, hoisting aur Temporal Dead Zone (TDZ)** ke rules different hain.

---

# 2. Basic Difference

| Feature                                | `var`     | `let` | `const` |
| -------------------------------------- | --------- | ----- | ------- |
| Variable declare kar sakte hain        | ✅         | ✅     | ✅       |
| Value change/reassign kar sakte hain   | ✅         | ✅     | ❌       |
| Same scope me redeclare kar sakte hain | ✅         | ❌     | ❌       |
| Block scoped                           | ❌         | ✅     | ✅       |
| Function scoped                        | ✅         | ✅     | ✅       |
| TDZ                                    | ❌         | ✅     | ✅       |
| Hoisting                               | ✅         | ✅*    | ✅*      |
| Initialization ke bina declare         | ✅         | ✅     | ❌       |
| Modern JS me preferred                 | Usually ❌ | ✅     | ✅       |

> `let` aur `const` technically hoist hote hain, lekin initialization se pehle access karne par TDZ ki wajah se error aata hai.

---

# 3. `var`

`var` JavaScript me variable declare karne ka **old/traditional** method hai.

Example:

```javascript
var age = 20;

console.log(age);
```

Output:

```text
20
```

---

## 3.1 `var` ki value change kar sakte hain

```javascript
var age = 20;

age = 25;

console.log(age);
```

Output:

```text
25
```

Yahan humne existing variable ki value change ki.

Isko **reassignment** kehte hain.

---

# 4. `var` Redeclaration

`var` ki ek important property hai:

**Same scope me variable ko dobara declare kar sakte hain.**

Example:

```javascript
var age = 20;

var age = 25;

console.log(age);
```

Output:

```text
25
```

JavaScript ne error nahi diya.

### Ye possible hai:

```javascript
var x = 10;
var x = 20;
var x = 30;
```

Final value:

```text
30
```

---

# 5. `var` aur Block Scope

`var` **block scoped nahi hai**.

Example:

```javascript
if (true) {
    var age = 20;
}

console.log(age);
```

Output:

```text
20
```

Normally `{ }` ek block create karta hai.

Lekin `var` block ke bahar bhi accessible hai.

### Isliye:

```text
if block
┌──────────────────┐
│ var age = 20     │
└──────────────────┘
         ↓
   block ke bahar
         ↓
   age accessible
```

Ye `let` aur `const` se different hai.

---

# 6. `var` Function Scope

`var` **function scoped** hota hai.

Example:

```javascript
function test() {
    var age = 20;

    console.log(age);
}

test();
```

Output:

```text
20
```

Lekin function ke bahar:

```javascript
function test() {
    var age = 20;
}

console.log(age);
```

Error:

```text
ReferenceError
```

Kyunki `age` function ke andar create hua tha.

---

# 7. `let`

`let` modern JavaScript me variable declare karne ka common method hai.

Example:

```javascript
let age = 20;

console.log(age);
```

Output:

```text
20
```

---

# 8. `let` ki Value Change Kar Sakte Hain

```javascript
let age = 20;

age = 25;

console.log(age);
```

Output:

```text
25
```

Isliye jab variable ki value future me change honi ho, `let` useful hai.

Example:

```javascript
let score = 0;

score = 10;
score = 20;
score = 30;
```

---

# 9. `let` Redeclaration

`let` ko same scope me dobara declare nahi kar sakte.

```javascript
let age = 20;

let age = 25;
```

Error:

```text
SyntaxError: Identifier 'age' has already been declared
```

Lekin alag scope me same naam use kar sakte hain:

```javascript
let age = 20;

{
    let age = 30;

    console.log(age);
}

console.log(age);
```

Output:

```text
30
20
```

Dono `age` alag variables hain.

---

# 10. `let` Block Scope

`let` **block scoped** hota hai.

Example:

```javascript
if (true) {
    let age = 20;

    console.log(age); // 20
}

console.log(age); // Error
```

Kyun?

Kyuki `age` sirf `{ }` wale block ke andar available hai.

Visual:

```text
┌───────────────────────────┐
│ if block                  │
│                           │
│   let age = 20;           │
│                           │
│   age available ✅         │
│                           │
└───────────────────────────┘
          ↓
     age unavailable ❌
```

---

# 11. `const`

`const` ka use tab hota hai jab variable ko **reassign nahi karna ho**.

Example:

```javascript
const country = "India";

console.log(country);
```

Output:

```text
India
```

---

# 12. `const` ki Value Reassign Nahi Kar Sakte

```javascript
const age = 20;

age = 25;
```

Error:

```text
TypeError: Assignment to constant variable.
```

Simple rule:

```text
const → reassign ❌
```

---

# 13. `const` ko Declare Karte Time Value Deni Padti Hai

Ye allowed nahi hai:

```javascript
const age;
```

Error:

```text
SyntaxError: Missing initializer in const declaration
```

Correct:

```javascript
const age = 20;
```

### Compare:

```javascript
var age;
```

✅ Allowed

```javascript
let age;
```

✅ Allowed

```javascript
const age;
```

❌ Not allowed

---

# 14. `const` Redeclaration

`const` ko same scope me dobara declare nahi kar sakte.

```javascript
const age = 20;

const age = 25;
```

Error:

```text
SyntaxError
```

---

# 15. `const` Block Scope

`const` bhi `let` ki tarah block scoped hai.

```javascript
if (true) {
    const country = "India";

    console.log(country);
}

console.log(country);
```

First `console.log()`:

```text
India
```

Second:

```text
ReferenceError
```

---

# 16. Reassignment vs Redeclaration

Ye difference beginner ke liye bahut important hai.

## Reassignment

Existing variable ki value change karna:

```javascript
let age = 20;

age = 25;
```

Yahan variable dobara create nahi hua.

Sirf value change hui.

---

## Redeclaration

Same naam se variable dobara declare karna:

```javascript
let age = 20;

let age = 25;
```

Yahan dobara `let age` likha gaya.

Ye `let` ke saath allowed nahi hai.

---

# 17. Simple Difference

```javascript
let age = 20;

age = 25;       // Reassignment ✅

let age = 30;   // Redeclaration ❌
```

Yaad rakho:

```text
Reassignment
↓
value change

Redeclaration
↓
variable dobara declare
```

---

# 18. Temporal Dead Zone (TDZ)

`let` aur `const` ke saath **Temporal Dead Zone** hota hai.

Example:

```javascript
console.log(age);

let age = 20;
```

Error:

```text
ReferenceError:
Cannot access 'age' before initialization
```

### Beginner language me:

JavaScript ko `age` variable ke baare me pata hota hai, lekin `let age = 20` execute hone se pehle `age` ko access karne ki permission nahi hoti.

Is waiting period ko:

**Temporal Dead Zone (TDZ)** kehte hain.

---

# 19. TDZ Visual Example

```javascript
console.log(age); // ❌ TDZ

let age = 20;     // TDZ ends

console.log(age); // ✅ 20
```

Visual:

```text
Scope start
    │
    ▼
┌───────────────────────┐
│       TDZ             │
│                       │
│ console.log(age) ❌    │
│                       │
├───────────────────────┤
│ let age = 20          │
│ Initialization ✅      │
├───────────────────────┤
│ console.log(age) ✅    │
└───────────────────────┘
```

---

# 20. `var` vs `let` Hoisting

Example:

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

Conceptually, `var` ko initialization se pehle `undefined` mil jata hai.

Isliye error nahi aata.

---

## `let` ke saath

```javascript
console.log(x);

let x = 10;
```

Error:

```text
ReferenceError
```

Kyun?

Kyuki `let` TDZ me hai.

---

# 21. `var` vs `let` Example

### `var`

```javascript
console.log(name);

var name = "Ali";
```

Output:

```text
undefined
```

### `let`

```javascript
console.log(name);

let name = "Ali";
```

Output:

```text
ReferenceError
```

### `const`

```javascript
console.log(name);

const name = "Ali";
```

Output:

```text
ReferenceError
```

---

# 22. `var`, `let`, `const` Scope Comparison

Example:

```javascript
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // Error
console.log(c); // Error
```

Reason:

| Variable  | Block ke bahar  |
| --------- | --------------- |
| `var a`   | ✅ Available     |
| `let b`   | ❌ Not available |
| `const c` | ❌ Not available |

---

# 23. Memory ko Simple Way me Samjho

Jab hum likhte hain:

```javascript
let age = 20;
```

Conceptually JavaScript ko variable ke liye ek binding create karni hoti hai.

```text
Variable
   ↓
age
   ↓
Value
   ↓
20
```

`let` aur `const` ke case me initialization se pehle binding ko access nahi kar sakte.

```text
let age = 20
│
├── binding create
├── TDZ
└── initialization → 20
```

---

# 24. `const` ka Important Point: Object

`const` ka matlab ye nahi hai ki object ke andar ki properties change nahi ho sakti.

Example:

```javascript
const user = {
    name: "Ali",
    age: 20
};
```

Ye allowed hai:

```javascript
user.age = 25;
```

Ab:

```javascript
console.log(user.age);
```

Output:

```text
25
```

Lekin ye allowed nahi hai:

```javascript
user = {
    name: "Ahmed",
    age: 30
};
```

Kyunki hum `user` variable ko ek completely new object se reassign kar rahe hain.

---

# 25. `const` Array Example

```javascript
const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

Output:

```text
[10, 20, 30, 40]
```

Ye allowed hai.

Lekin:

```javascript
numbers = [1, 2, 3];
```

❌ Error.

### Important:

```text
const
 ↓
variable binding ko reassign nahi kar sakte

Object/Array ke andar mutation
 ↓
possible hai
```

---

# 26. Practical Example

Suppose ek website me user ka naam fixed hai:

```javascript
const websiteName = "My Website";
```

User ka score change ho sakta hai:

```javascript
let score = 0;

score = 10;
score = 20;
```

Purane code me:

```javascript
var username = "Ali";
```

Lekin modern JavaScript me generally:

```javascript
const websiteName = "My Website";
let score = 0;
```

prefer kiya jata hai.

---

# 27. Kab `var`, `let`, `const` Use Karein?

## `const`

Agar variable ko reassign nahi karna:

```javascript
const pi = 3.14159;
const name = "Ali";
const country = "India";
```

---

## `let`

Agar value future me change hogi:

```javascript
let score = 0;

score = 10;
score = 20;
```

---

## `var`

Modern JavaScript me generally new code ke liye `var` avoid karna better practice hai.

Old JavaScript code me `var` bahut commonly mil sakta hai, isliye usko samajhna important hai.

---

# 28. Golden Rule

Beginner ke liye ye rule yaad rakho:

```text
                Variable
                   │
             ┌─────┴─────┐
             │           │
       Value change?     No
             │           │
            Yes         const
             │
            let
```

Aur:

```text
var → old style
let → value change ho sakti hai
const → reassignment nahi
```

---

# 29. Complete Comparison

| Concept                   | `var` | `let` | `const` |
| ------------------------- | ----: | ----: | ------: |
| Declare variable          |     ✅ |     ✅ |       ✅ |
| Reassign value            |     ✅ |     ✅ |       ❌ |
| Redeclare same scope      |     ✅ |     ❌ |       ❌ |
| Block scoped              |     ❌ |     ✅ |       ✅ |
| Function scoped           |     ✅ |     ✅ |       ✅ |
| TDZ                       |     ❌ |     ✅ |       ✅ |
| Declaration without value |     ✅ |     ✅ |       ❌ |
| Modern code me common     |     ❌ |     ✅ |       ✅ |

---

# 30. One Example Showing Everything

```javascript
var a = 10;
var a = 20; // ✅ Redeclaration

let b = 10;
b = 20;     // ✅ Reassignment

// let b = 30; // ❌ Redeclaration

const c = 10;

// c = 20;    // ❌ Reassignment
// const c = 30; // ❌ Redeclaration
```

---

# 31. Interview-Style Answer

Agar interviewer puche:

**"What is the difference between var, let and const?"**

Aap bol sakte ho:

> `var`, `let`, and `const` are used to declare variables in JavaScript. `var` is function-scoped and allows redeclaration and reassignment. `let` is block-scoped and allows reassignment but not redeclaration in the same scope. `const` is also block-scoped, but it does not allow reassignment or redeclaration. `let` and `const` also have a Temporal Dead Zone before initialization.

---

# 32. Sabse Easy Revision

```text
var
│
├── Function scoped
├── Reassign ✅
├── Redeclare ✅
├── TDZ ❌
└── Old style

let
│
├── Block scoped
├── Reassign ✅
├── Redeclare ❌
├── TDZ ✅
└── Modern JS ✅

const
│
├── Block scoped
├── Reassign ❌
├── Redeclare ❌
├── TDZ ✅
└── Modern JS ✅
```

## 🧠 Final Memory Trick

**`var` = old**

**`let` = let it change**

**`const` = constant reference / don't reassign**

```javascript
const name = "Ali";  // change nahi karni
let score = 0;       // change karni hai
var oldCode = true;  // old style
```

### Short Formula

```text
const → No Reassignment
let   → Reassignment allowed
var   → Reassignment + Redeclaration allowed
```
