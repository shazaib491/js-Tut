JavaScript Data Types — Detailed Explanation in Hinglish

JavaScript mein Data Type batata hai ki kisi variable ke andar kis type ki value store hai.

Example:

let name = "Shazaib";
let age = 25;
let isStudent = true;

Yahan:

* name → String
* age → Number
* isStudent → Boolean

⸻

1. JavaScript Data Types ke Main Categories

JavaScript mein data types ko mainly 2 categories mein divide kiya jata hai:

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

Primitive vs Non-Primitive

Primitive	Non-Primitive
Single value represent karta hai	Multiple/complex data represent kar sakta hai
Immutable hote hain	Generally mutable hote hain
Direct value concept	Reference concept
String, Number, Boolean etc.	Object, Array, Function etc.

⸻

2. String

String ka use text store karne ke liye hota hai.

String ko:

* " " double quotes
* ' ' single quotes
* ` ` backticks

mein likh sakte hain.

let name = "Shazaib";
let city = 'Bhopal';
let message = `Hello World`;

Example

let firstName = "Shazaib";
let lastName = "Rahman";
console.log(firstName);
console.log(lastName);

Output:

Shazaib
Rahman

String ki type check karna

let name = "Shazaib";
console.log(typeof name);

Output:

string

Important

Number ko quotes mein likh diya to woh String ban jayega.

let age = 25;      // Number
let age2 = "25";   // String
console.log(typeof age);
console.log(typeof age2);

Output:

number
string

⸻

3. Number

JavaScript mein Number integers aur decimal numbers dono ko represent karta hai.

let age = 25;
let marks = 85.5;
let temperature = -10;

Sabka type:

console.log(typeof age);
console.log(typeof marks);
console.log(typeof temperature);

Output:

number
number
number

Integer

let age = 25;

Decimal

let price = 99.99;

Negative Number

let balance = -500;

Mathematical Operations

let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

⸻

4. BigInt

BigInt ka use bahut bade integers ko store karne ke liye hota hai.

Normal JavaScript Number ki safe integer limit hoti hai.

BigInt banane ke liye number ke end mein n lagate hain:

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

Type:

console.log(typeof bigNumber);

Output:

bigint

Example

let population = 12345678901234567890n;
console.log(population);

Important

BigInt aur Number ko directly mix nahi kar sakte:

let a = 10n;
let b = 5;
console.log(a + b); // Error

Agar dono ko calculate karna hai to same type mein convert karna padega.

⸻

5. Boolean

Boolean ke andar sirf do values hoti hain:

true
false

Boolean ka use mostly conditions mein hota hai.

let isLoggedIn = true;
let isAdmin = false;

Example:

let age = 20;
console.log(age >= 18);

Output:

true

Another example:

let isRaining = false;
console.log(isRaining);

Output:

false

Real-life example

let hasTicket = true;
if (hasTicket) {
    console.log("You can enter.");
}

⸻

6. Undefined

undefined ka matlab hai:

Variable declare hua hai, lekin uske andar abhi koi value assign nahi hui.

Example:

let name;
console.log(name);

Output:

undefined

Type:

console.log(typeof name);

Output:

undefined

Example

let age;
console.log(age);

Yahan age exist karta hai, lekin uski value assign nahi hui.

⸻

7. Null

null ka matlab hota hai:

Intentionally koi value nahi hai.

Example:

let user = null;

Yahan hum intentionally bata rahe hain ki user ki currently koi value nahi hai.

console.log(user);

Output:

null

undefined vs null

let a;
let b = null;

Difference:

a → undefined
b → null

Simple language mein:

* undefined → value assign nahi hui
* null → intentionally empty value di gayi

Interesting JavaScript behavior

console.log(typeof null);

Output:

object

Ye JavaScript ka historical/legacy behavior hai.

Technically null primitive value hai, lekin:

typeof null

"object" return karta hai.

⸻

8. Symbol

Symbol JavaScript ka ek special primitive data type hai.

Iska use mostly unique identifiers/keys create karne ke liye hota hai.

let id = Symbol("id");
console.log(id);

Type:

console.log(typeof id);

Output:

symbol

Symbols unique hote hain

let a = Symbol("id");
let b = Symbol("id");
console.log(a === b);

Output:

false

Although dono ka description "id" hai, dono symbols different hain.

Symbol("id") !== Symbol("id")

⸻

9. Object

Object ek non-primitive/reference data type hai.

Object ka use related data ko ek jagah store karne ke liye hota hai.

Example:

let student = {
    name: "Shazaib",
    age: 25,
    marks: 85
};

Yahan ek student ki multiple information ek object mein hai.

Access kar sakte hain:

console.log(student.name);
console.log(student.age);
console.log(student.marks);

Output:

Shazaib
25
85

Object ki type

console.log(typeof student);

Output:

object

⸻

10. Array

Array technically JavaScript mein object ka special type hai.

Array ka use multiple values store karne ke liye hota hai.

let fruits = ["Apple", "Banana", "Mango"];

Index 0 se start hota hai:

console.log(fruits[0]);

Output:

Apple
console.log(fruits[1]);

Output:

Banana

Array ki type

console.log(typeof fruits);

Output:

object

Important:

typeof []

returns:

object

Array check karne ke liye:

Array.isArray(fruits);

Output:

true

⸻

11. Function

Function ko bhi JavaScript mein technically object maana jata hai, lekin typeof karne par special result milta hai:

function greet() {
    console.log("Hello");
}
console.log(typeof greet);

Output:

function

Function ka use reusable code banane ke liye hota hai.

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

Output:

30

⸻

12. typeof Operator

JavaScript mein kisi value ka data type check karne ke liye typeof use karte hain.

typeof value

Examples:

console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123n);
console.log(typeof Symbol("id"));

Output:

string
number
boolean
undefined
object
bigint
symbol

⸻

13. Complete Data Type Example

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

Types:

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

⸻

14. Primitive Data Types

JavaScript ke 7 primitive data types hain:

Data Type	Example
String	"Hello"
Number	100
BigInt	100n
Boolean	true
Undefined	undefined
Null	null
Symbol	Symbol("id")

⸻

15. Non-Primitive / Reference Types

Common non-primitive types:

Object
Array
Function
Date
Map
Set

Example:

let person = {
    name: "Ali"
};
let numbers = [10, 20, 30];
function greet() {
    console.log("Hello");
}

⸻

16. Primitive vs Reference — Important Concept

Ye JavaScript mein bahut important concept hai.

Primitive

let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

Output:

10
20

a ki value change nahi hui.

Concept:

a → 10
b → 10
b → 20

Dono independent values hain.

⸻

Reference Example

let person1 = {
    name: "Ali"
};
let person2 = person1;
person2.name = "Ahmed";
console.log(person1.name);

Output:

Ahmed

Kyun?

Kyuki object ke case mein variable ke paas object ka reference hota hai.

Conceptually:

person1 ──┐
          ↓
       Object
       name: "Ali"
          ↑
person2 ──┘

person1 aur person2 same object ko refer kar rahe hain.

⸻

17. Quick Revision

Primitive
│
├── String       → "Hello"
├── Number       → 100
├── BigInt       → 100n
├── Boolean      → true / false
├── Undefined    → undefined
├── Null         → null
└── Symbol       → Symbol("id")
Non-Primitive
│
└── Object
    ├── Object
    ├── Array
    ├── Function
    ├── Date
    ├── Map
    └── Set

Ek line mein yaad rakho:

Primitive = simple/single value
Reference = object/complex data ko refer karta hai.

Most important typeof examples

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
