# JavaScript Console Methods --- Complete Beginner Guide 

## 1. Introduction

JavaScript mein `console` developer ka ek bahut useful tool hai. Iska
use program ke andar ho rahi cheezon ko dekhne, values check karne,
errors/warnings samajhne aur code ko debug karne ke liye kiya jata hai.

Browser mein Console dekhne ke liye:

**Right Click → Inspect → Console**

Ya keyboard se:

-   Chrome/Edge: `F12` ya `Ctrl + Shift + J`
-   Mac: `Cmd + Option + J`

Basic example:

``` javascript
console.log("Hello World");
```

Console mein output:

``` text
Hello World
```

> **Important:** Console methods ka output normally user ko webpage par
> nahi dikhta. Ye mainly developer ke liye hota hai.

------------------------------------------------------------------------

# 2. `console` kya hai?

`console` JavaScript ka ek object hai jo developer ko messages aur
debugging information display karne ke methods provide karta hai.

Example:

``` javascript
console.log("Hello");
```

Yahan:

-   `console` = console object
-   `.` = object ke andar method/property access karne ka syntax
-   `log` = method
-   `()` = method ko call karna

Isliye:

``` javascript
console.log()
```

ka simple meaning hai:

> Console mein kuch information display karo.

------------------------------------------------------------------------

# 3. Console Method kya hota hai?

Method basically ek function hota hai jo kisi object ke andar available
hota hai.

Example:

``` javascript
console.log("Hello");
```

Yahan `log()` ek console method hai.

Common console methods:

``` text
console.log()
console.error()
console.warn()
console.info()
console.debug()
console.table()
console.clear()
console.time()
console.timeEnd()
console.timeLog()
console.count()
console.countReset()
console.assert()
console.group()
console.groupEnd()
console.groupCollapsed()
console.dir()
console.dirxml()
console.trace()
```

Ab hum inhe one-by-one detail mein samjhenge.

------------------------------------------------------------------------

# 4. `console.log()`

## Description

`console.log()` sabse common aur beginner ke liye sabse important
console method hai.

Iska use normal information, variable ki value, calculation ka result ya
debugging information Console mein display karne ke liye hota hai.

## Basic Syntax

``` javascript
console.log(value);
```

## Example

``` javascript
console.log("Hello World");
```

Output:

``` text
Hello World
```

## Variable ke saath

``` javascript
let name = "Shazaib";

console.log(name);
```

Output:

``` text
Shazaib
```

Yahan hum check kar rahe hain ki `name` variable ke andar kya value hai.

## Multiple values

``` javascript
let name = "Shazaib";
let age = 25;

console.log(name, age);
```

Output:

``` text
Shazaib 25
```

Better readable version:

``` javascript
console.log("Name:", name);
console.log("Age:", age);
```

Output:

``` text
Name: Shazaib
Age: 25
```

## Calculation

``` javascript
console.log(10 + 20);
```

Output:

``` text
30
```

## Object

``` javascript
let user = {
    name: "Ali",
    age: 20
};

console.log(user);
```

## Kab use karein?

Jab tumhe kisi cheez ko Console mein dekhna ho:

-   Variable ki value
-   Function ka result
-   Calculation
-   API response
-   Debugging information
-   Code kis point tak execute hua

## Simple meaning

> **`console.log()` = Normal information Console mein dikhana.**

------------------------------------------------------------------------

# 5. `console.error()`

## Description

`console.error()` ka use error ya problem ko Console mein clearly
display karne ke liye hota hai.

Ye developer ko batata hai ki kisi point par kuch wrong hua hai.

## Syntax

``` javascript
console.error(message);
```

## Example

``` javascript
console.error("Something went wrong!");
```

Browser Console mein ye error-style message ke form mein dikhega.

## Real example

``` javascript
let age = 15;

if (age < 18) {
    console.error("User is under 18");
}
```

## Important Difference

`console.error()` khud JavaScript program ko automatically stop nahi
karta.

Example:

``` javascript
console.error("Problem");

console.log("Program continues");
```

Dono messages execute ho sakte hain.

Agar tum actual JavaScript error throw karke execution rokna chahte ho,
wo alag concept hai:

``` javascript
throw new Error("Something went wrong");
```

`console.error()` sirf message report karta hai.

## Kab use karein?

-   API request fail ho
-   Important data missing ho
-   Debugging mein serious problem identify karni ho
-   Developer ko error clearly show karna ho

## Simple meaning

> **`console.error()` = Error/problem ko Console mein dikhana.**

------------------------------------------------------------------------

# 6. `console.warn()`

## Description

`console.warn()` warning message display karta hai.

Warning ka matlab generally:

> "Abhi necessarily fatal problem nahi hai, lekin developer ko is
> situation par attention deni chahiye."

## Syntax

``` javascript
console.warn(message);
```

## Example

``` javascript
console.warn("Your password is weak!");
```

## Real example

``` javascript
let balance = 200;

if (balance < 500) {
    console.warn("Your balance is low.");
}
```

## Error aur Warning ka difference

``` javascript
console.error("Payment failed");
console.warn("Your balance is low");
```

Simple understanding:

-   `error` = problem/error report
-   `warn` = warning/attention required

## Kab use karein?

-   Deprecated feature use ho raha ho
-   User input suspicious ho
-   Data expected format mein nahi ho
-   Low balance type situation ho
-   Developer ko attention dilani ho

## Simple meaning

> **`console.warn()` = Warning ya caution message dikhana.**

------------------------------------------------------------------------

# 7. `console.info()`

## Description

`console.info()` informational message display karta hai.

Modern browser consoles mein `console.info()` aur `console.log()` ka
appearance kai baar almost same ho sakta hai.

Main difference unke intended purpose ka hai.

## Example

``` javascript
console.info("Website loaded successfully.");
```

## Real example

``` javascript
console.info("User successfully logged in.");
```

## Kab use karein?

Jab tum specifically informational message dena chahte ho.

Examples:

``` javascript
console.info("Application started");
console.info("Database connected");
console.info("User logged in");
```

## Simple meaning

> **`console.info()` = Information message dikhana.**

------------------------------------------------------------------------

# 8. `console.debug()`

## Description

`console.debug()` debugging information ke liye use hota hai.

Ye `console.log()` jaisa hi ho sakta hai, lekin iska purpose
specifically debugging information provide karna hai.

## Example

``` javascript
let userId = 101;

console.debug("Current user ID:", userId);
```

## Why use it?

Suppose tum development kar rahe ho aur temporary debugging messages
rakhna chahte ho:

``` javascript
console.debug("Function started");

let total = price + tax;

console.debug("Total:", total);
```

Ye tumhe code ka flow samajhne mein help karta hai.

> Browser ke Console filters/settings ke according debug-level messages
> hide bhi ho sakte hain.

## Simple meaning

> **`console.debug()` = Debugging ke liye detailed information
> dikhana.**

------------------------------------------------------------------------

# 9. `console.table()`

## Description

`console.table()` structured data ko table format mein display karta
hai.

Ye arrays aur objects ke saath especially useful hai.

## Array example

``` javascript
let students = [
    "Ali",
    "Ahmed",
    "Sara"
];

console.table(students);
```

Console mein roughly:

    Index Value
  ------- -------
        0 Ali
        1 Ahmed
        2 Sara

## Objects ke array ke saath

``` javascript
let students = [
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Ahmed",
        age: 22
    },
    {
        name: "Sara",
        age: 21
    }
];

console.table(students);
```

Console mein roughly:

    Index name      age
  ------- ------- -----
        0 Ali        20
        1 Ahmed      22
        2 Sara       21

## Specific columns

``` javascript
console.table(students, ["name", "age"]);
```

Isse selected columns ko table mein dekhna easy hota hai.

## Kab use karein?

-   Student list
-   Products
-   Users
-   API data
-   Database-like records
-   Multiple objects

## Simple meaning

> **`console.table()` = Structured data ko table ke form mein dikhana.**

------------------------------------------------------------------------

# 10. `console.clear()`

## Description

`console.clear()` Console ke existing output ko clear karne ke liye use
hota hai.

## Example

``` javascript
console.log("Hello");
console.log("Welcome");

console.clear();
```

Console clear ho jayega, browser ke behavior ke according.

## Important

Kuch browsers ya environments `console.clear()` ko restrict/ignore kar
sakte hain, especially jab Console protection enabled ho.

## Kab use karein?

Development ke time jab Console bahut cluttered ho jaye.

## Simple meaning

> **`console.clear()` = Console ko clean/clear karna.**

------------------------------------------------------------------------

# 11. `console.time()`

## Description

`console.time()` ek named timer start karta hai.

Iska use measure karne ke liye hota hai ki kisi code ko complete hone
mein kitna time laga.

## Syntax

``` javascript
console.time("timerName");
```

## Example

``` javascript
console.time("MyCode");

for (let i = 0; i < 1000000; i++) {
    // some work
}

console.timeEnd("MyCode");
```

Output kuch aisa ho sakta hai:

``` text
MyCode: 5.23ms
```

Exact time computer aur situation ke according change hoga.

## Important

`console.time()` ko normally `console.timeEnd()` ke saath use karte
hain.

``` javascript
console.time("Test");

// code

console.timeEnd("Test");
```

Timer label same hona chahiye.

## Simple meaning

> **`console.time()` = Code ka timer start karna.**

------------------------------------------------------------------------

# 12. `console.timeEnd()`

## Description

`console.timeEnd()` previously started timer ko stop karta hai aur
elapsed time Console mein display karta hai.

## Example

``` javascript
console.time("Test");

for (let i = 0; i < 1000000; i++) {
}

console.timeEnd("Test");
```

Output:

``` text
Test: 4.8ms
```

## Important

Agar timer start nahi kiya:

``` javascript
console.timeEnd("Test");
```

to browser warning de sakta hai ki matching timer nahi mila.

## Simple meaning

> **`console.timeEnd()` = Timer stop karke total elapsed time dikhana.**

------------------------------------------------------------------------

# 13. `console.timeLog()`

## Description

`console.timeLog()` running timer ko stop nahi karta.

Ye current elapsed time ko log karta hai aur timer ko continue rakhta
hai.

## Example

``` javascript
console.time("Process");

console.log("Step 1 complete");

console.timeLog("Process");

console.log("Step 2 complete");

console.timeLog("Process");

console.timeEnd("Process");
```

Isse tum process ke different stages par elapsed time dekh sakte ho.

Conceptually:

``` text
Timer start
    ↓
Step 1
    ↓
Current time check
    ↓
Step 2
    ↓
Current time check
    ↓
Timer end
```

## Kab use karein?

Long-running process ko stages mein measure karne ke liye.

## Simple meaning

> **`console.timeLog()` = Running timer ka current time dekhna, timer ko
> stop kiye bina.**

------------------------------------------------------------------------

# 14. `console.count()`

## Description

`console.count()` ek named counter maintain karta hai.

Jab same label ke saath method call hota hai, count increase hota hai.

## Example

``` javascript
console.count("Button");
console.count("Button");
console.count("Button");
```

Output:

``` text
Button: 1
Button: 2
Button: 3
```

## Function ke saath

``` javascript
function hello() {
    console.count("hello function");
}

hello();
hello();
hello();
```

Output:

``` text
hello function: 1
hello function: 2
hello function: 3
```

Isse pata chalta hai ki function kitni baar call hua.

## Different labels

``` javascript
console.count("Login");
console.count("Logout");
console.count("Login");
```

Conceptually:

``` text
Login: 1
Logout: 1
Login: 2
```

Har label ka separate counter hota hai.

## Simple meaning

> **`console.count()` = Kisi particular code/label ko kitni baar call
> kiya gaya, ye count karna.**

------------------------------------------------------------------------

# 15. `console.countReset()`

## Description

`console.countReset()` kisi named counter ko reset karta hai.

## Example

``` javascript
console.count("Login");
console.count("Login");
```

Output:

``` text
Login: 1
Login: 2
```

Ab:

``` javascript
console.countReset("Login");
```

Counter reset ho gaya.

Phir:

``` javascript
console.count("Login");
```

Output:

``` text
Login: 1
```

## Simple meaning

> **`console.countReset()` = Named counter ko reset karna.**

------------------------------------------------------------------------

# 16. `console.assert()`

## Description

`console.assert()` ek condition check karta hai.

Agar condition **true** hai, normally kuch output nahi hota.

Agar condition **false** hai, Console mein assertion message display
hota hai.

## Syntax

``` javascript
console.assert(condition, message);
```

## True example

``` javascript
let age = 20;

console.assert(age >= 18, "Age is less than 18");
```

Condition:

``` text
20 >= 18
```

True hai.

Isliye normally assertion failure message nahi aayega.

## False example

``` javascript
let age = 15;

console.assert(age >= 18, "Age is less than 18");
```

Condition false hai.

Console mein assertion failure message aa sakta hai.

## Important

`console.assert()` ka purpose debugging/testing assistance hai.

Ye automatically application ko fix nahi karta.

## Simple meaning

> **`console.assert()` = Check karo condition true hai; false ho to
> message dikhao.**

------------------------------------------------------------------------

# 17. `console.group()`

## Description

`console.group()` related console messages ko ek group ke andar organize
karta hai.

## Example

``` javascript
console.group("Student");

console.log("Name: Ali");
console.log("Age: 20");
console.log("Course: JavaScript");

console.groupEnd();
```

Console mein `Student` naam ka expandable group ban sakta hai.

## Why useful?

Suppose application mein bahut saare logs hain:

``` text
User logs
Payment logs
Product logs
API logs
```

Groups se ye information organized ho jati hai.

## Nested groups

Groups ko nested bhi kiya ja sakta hai:

``` javascript
console.group("User");

console.log("Name: Ali");

console.group("Address");

console.log("City: Delhi");
console.log("Country: India");

console.groupEnd();

console.groupEnd();
```

## Simple meaning

> **`console.group()` = Related messages ko ek group mein organize
> karna.**

------------------------------------------------------------------------

# 18. `console.groupEnd()`

## Description

`console.groupEnd()` current console group ko close karta hai.

## Example

``` javascript
console.group("Student");

console.log("Name: Ali");
console.log("Age: 20");

console.groupEnd();

console.log("This is outside the group");
```

Concept:

``` text
Student
 ├── Name: Ali
 └── Age: 20

This is outside the group
```

## Simple meaning

> **`console.groupEnd()` = Current console group ko close karna.**

------------------------------------------------------------------------

# 19. `console.groupCollapsed()`

## Description

`console.groupCollapsed()` `console.group()` jaisa group create karta
hai, lekin group initially collapsed/closed hota hai.

## Example

``` javascript
console.groupCollapsed("Student Details");

console.log("Name: Ali");
console.log("Age: 20");
console.log("Course: JavaScript");

console.groupEnd();
```

Developer group ko click karke open kar sakta hai.

## Difference

``` javascript
console.group("Student");
```

Group generally open state mein ho sakta hai.

``` javascript
console.groupCollapsed("Student");
```

Group initially closed/collapsed hota hai.

## Simple meaning

> **`console.groupCollapsed()` = Initially closed console group
> banana.**

------------------------------------------------------------------------

# 20. `console.dir()`

## Description

`console.dir()` object ki properties ko inspect karne ke liye useful
hai.

## Example

``` javascript
let student = {
    name: "Ali",
    age: 20,
    course: "JavaScript"
};

console.dir(student);
```

Console mein object ko expandable structure ke form mein inspect kiya ja
sakta hai.

## `console.log()` vs `console.dir()`

``` javascript
console.log(student);
```

Normal object logging.

``` javascript
console.dir(student);
```

Object ki properties/structure ko inspect karne ke purpose se logging.

Modern browsers mein dono ka output kabhi-kabhi visually similar bhi ho
sakta hai.

## HTML element example

``` javascript
let heading = document.querySelector("h1");

console.dir(heading);
```

Isse DOM element ki JavaScript properties inspect karna useful ho sakta
hai.

## Simple meaning

> **`console.dir()` = Object ko detail mein inspect karna.**

------------------------------------------------------------------------

# 21. `console.dirxml()`

## Description

`console.dirxml()` XML/HTML-like object representation inspect karne ke
liye use hota hai.

Browser DevTools mein iska behavior browser ke according vary kar sakta
hai.

HTML element ke saath example:

``` javascript
let heading = document.querySelector("h1");

console.dirxml(heading);
```

Ye DOM/XML-style representation ko inspect karne mein useful ho sakta
hai.

## Important

Beginner level par is method ki daily need bahut kam hoti hai.

DOM debugging mein browser ke Elements panel ke saath `console.log()`,
`console.dir()` aur direct inspection methods zyada common hain.

## Simple meaning

> **`console.dirxml()` = HTML/XML-style object representation inspect
> karna.**

------------------------------------------------------------------------

# 22. `console.trace()`

## Description

`console.trace()` current point tak pahunchne ka **stack trace** show
karta hai.

Simple language mein:

> "Ye function kis function se call hua aur code yahan kaise pahucha?"

## Example

``` javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.trace();
}

first();
```

Console mein call chain dikhegi, conceptually:

``` text
third()
second()
first()
```

Browser aur environment additional information bhi dikha sakte hain.

## Why useful?

Agar ek function bahut jagah se call ho raha hai aur tumhe pata nahi
chal raha ki function kis path se execute hua, `console.trace()` useful
hai.

## Simple meaning

> **`console.trace()` = Code yahan tak kaise pahucha, uski call
> history/stack dikhana.**

------------------------------------------------------------------------

# 23. `console` ke saath Variables

Console methods ka use variables ke saath bahut hota hai.

Example:

``` javascript
let name = "Shazaib";
let age = 25;
let city = "Delhi";

console.log(name);
console.log(age);
console.log(city);
```

Better:

``` javascript
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
```

------------------------------------------------------------------------

# 24. Console mein Different Data Types

JavaScript mein different data types ko console mein print kar sakte ho.

## String

``` javascript
console.log("Hello");
```

## Number

``` javascript
console.log(100);
```

## Boolean

``` javascript
console.log(true);
```

## Null

``` javascript
console.log(null);
```

## Undefined

``` javascript
let x;

console.log(x);
```

## Array

``` javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
```

## Object

``` javascript
let user = {
    name: "Ali",
    age: 20
};

console.log(user);
```

------------------------------------------------------------------------

# 25. Console Methods aur Debugging

Debugging ka simple meaning hai:

> Code mein problem ko find karna aur samajhna.

Example:

``` javascript
let price = 500;
let quantity = 2;

let total = price + quantity;

console.log(total);
```

Agar expected result `1000` tha, lekin result `502` aa gaya, Console se
hume pata chalta hai ki calculation mein problem hai.

Actually correct calculation:

``` javascript
let total = price * quantity;

console.log(total);
```

Output:

``` text
1000
```

Is tarah console developer ko code ke andar ki values dekhne mein help
karta hai.

------------------------------------------------------------------------

# 26. Multiple Console Methods Together

Real project mein multiple methods ek saath use ho sakte hain:

``` javascript
console.log("Application started");

console.info("Loading user data...");

console.warn("Demo mode is enabled");

console.error("Failed to load profile");

console.table([
    { name: "Ali", age: 20 },
    { name: "Sara", age: 21 }
]);
```

Har method ka purpose different hai.

------------------------------------------------------------------------

# 27. `log`, `info`, `warn`, `error`, `debug` --- Difference

  Method              Simple Purpose
  ------------------- -----------------------
  `console.log()`     Normal message
  `console.info()`    Information
  `console.debug()`   Debugging information
  `console.warn()`    Warning
  `console.error()`   Error/problem

Example:

``` javascript
console.log("Normal message");

console.info("Information");

console.debug("Debug information");

console.warn("Warning");

console.error("Error");
```

Browser ke according inke icons, colors aur filtering behavior different
ho sakte hain.

------------------------------------------------------------------------

# 28. `console.log()` vs `console.error()`

### `console.log()`

``` javascript
console.log("User logged in");
```

Meaning:

> Normal information.

### `console.error()`

``` javascript
console.error("Login failed");
```

Meaning:

> Problem/error report.

------------------------------------------------------------------------

# 29. `console.warn()` vs `console.error()`

### Warning

``` javascript
console.warn("Password is weak");
```

Meaning:

> Attention required.

### Error

``` javascript
console.error("Login failed");
```

Meaning:

> Something went wrong.

------------------------------------------------------------------------

# 30. `console.table()` vs `console.log()`

### `console.log()`

``` javascript
console.log(students);
```

Data normal object/array representation mein dikhega.

### `console.table()`

``` javascript
console.table(students);
```

Data table format mein dikhega.

Agar multiple records hain, `console.table()` often easier to read hota
hai.

------------------------------------------------------------------------

# 31. `console.time()` vs `console.timeLog()` vs `console.timeEnd()`

In teenon ko ek flow se samjho:

``` javascript
console.time("Process");

// Step 1
console.timeLog("Process");

// Step 2
console.timeLog("Process");

// Finish
console.timeEnd("Process");
```

Meaning:

``` text
time()     → Timer START
timeLog()  → Current elapsed time SHOW, timer continues
timeEnd()  → Timer STOP + final time SHOW
```

------------------------------------------------------------------------

# 32. `console.count()` ka Practical Example

Suppose button click hone par function execute hota hai:

``` javascript
function buttonClicked() {
    console.count("Button clicked");
}
```

Agar user 4 baar button click kare:

``` text
Button clicked: 1
Button clicked: 2
Button clicked: 3
Button clicked: 4
```

Isse developer ko pata chal sakta hai ki event kitni baar trigger hua.

------------------------------------------------------------------------

# 33. Console Groups ka Practical Example

Suppose tum user information debug kar rahe ho:

``` javascript
console.group("User");

console.log("Name:", "Ali");
console.log("Age:", 20);
console.log("Email:", "ali@example.com");

console.groupEnd();
```

Aur payment information:

``` javascript
console.group("Payment");

console.log("Amount:", 500);
console.log("Status:", "Success");

console.groupEnd();
```

Ab debugging organized rahegi.

------------------------------------------------------------------------

# 34. Console Trace ka Practical Example

``` javascript
function login() {
    validateUser();
}

function validateUser() {
    checkDatabase();
}

function checkDatabase() {
    console.trace();
}

login();
```

`console.trace()` se developer ko call stack ka idea milta hai:

``` text
checkDatabase()
validateUser()
login()
```

Iska benefit large applications mein zyada hota hai.

------------------------------------------------------------------------

# 35. Important Beginner Rule

Console ko **website ka user interface** mat samjho.

Ye primarily developer tool hai.

Example:

``` javascript
console.log("Welcome");
```

Isse `"Welcome"` webpage par automatically nahi dikhega.

Ye Browser Console mein dikhega.

Agar webpage par text dikhana hai, to HTML/DOM ka use karna padega.

Example:

``` javascript
document.body.innerText = "Welcome";
```

------------------------------------------------------------------------

# 36. Console Method ka General Pattern

Most console methods ka basic pattern:

``` javascript
console.method(value);
```

Examples:

``` javascript
console.log("Hello");
console.warn("Warning");
console.error("Error");
console.info("Information");
```

Kuch methods additional arguments bhi accept karte hain.

Example:

``` javascript
console.log("Name:", name, "Age:", age);
```

------------------------------------------------------------------------

# 37. Beginner Practice Exercise

Neeche code run karke Console observe karo:

``` javascript
let name = "Shazaib";
let age = 25;

console.log("Name:", name);
console.log("Age:", age);

console.info("User information loaded");

if (age < 18) {
    console.warn("User is under 18");
}

console.table([
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Sara",
        age: 21
    }
]);

console.group("User Details");
console.log("Name:", name);
console.log("Age:", age);
console.groupEnd();
```

Is exercise mein tumne use kiya:

``` text
console.log()
console.info()
console.warn()
console.table()
console.group()
console.groupEnd()
```

------------------------------------------------------------------------

# 38. Most Important Methods --- Beginner Priority

## Level 1 --- Must Learn

Sabse pehle inhe achhe se samjho:

``` javascript
console.log()
console.error()
console.warn()
console.table()
console.clear()
```

## Level 2 --- Learn Next

``` javascript
console.info()
console.debug()
console.assert()
console.count()
console.countReset()
```

## Level 3 --- After Basics

``` javascript
console.time()
console.timeLog()
console.timeEnd()
console.group()
console.groupEnd()
console.groupCollapsed()
console.dir()
console.trace()
console.dirxml()
```

------------------------------------------------------------------------

# 39. Complete Quick Revision Table

  ----------------------------------------------------------------------------
  Method                       Kya karta hai?          Beginner Use
  ---------------------------- ----------------------- -----------------------
  `console.log()`              Normal output dikhata   ⭐⭐⭐⭐⭐
                               hai                     

  `console.error()`            Error message dikhata   ⭐⭐⭐⭐⭐
                               hai                     

  `console.warn()`             Warning dikhata hai     ⭐⭐⭐⭐⭐

  `console.info()`             Information dikhata hai ⭐⭐⭐⭐

  `console.debug()`            Debug information       ⭐⭐⭐
                               dikhata hai             

  `console.table()`            Data ko table mein      ⭐⭐⭐⭐⭐
                               dikhata hai             

  `console.clear()`            Console clear karta hai ⭐⭐⭐

  `console.time()`             Timer start karta hai   ⭐⭐

  `console.timeLog()`          Running timer ka        ⭐
                               current time dikhata    
                               hai                     

  `console.timeEnd()`          Timer stop karke final  ⭐⭐
                               time dikhata hai        

  `console.count()`            Calls ko count karta    ⭐⭐
                               hai                     

  `console.countReset()`       Counter reset karta hai ⭐

  `console.assert()`           Condition check karta   ⭐⭐
                               hai                     

  `console.group()`            Messages group karta    ⭐⭐
                               hai                     

  `console.groupEnd()`         Group close karta hai   ⭐⭐

  `console.groupCollapsed()`   Initially collapsed     ⭐
                               group banata hai        

  `console.dir()`              Object inspect karta    ⭐⭐
                               hai                     

  `console.dirxml()`           HTML/XML-style          ⭐
                               representation inspect  
                               karta hai               

  `console.trace()`            Call stack/trace        ⭐⭐
                               dikhata hai             
  ----------------------------------------------------------------------------

------------------------------------------------------------------------

# 40. One-Line Memory Trick

Yaad rakhne ke liye:

``` text
log       → normal message
error     → error
warn      → warning
info      → information
debug     → debugging
table     → table
clear     → clear console
time      → timer start
timeLog   → current timer
timeEnd   → timer stop
count     → count
countReset → count reset
assert    → condition check
group     → group start
groupEnd  → group close
dir       → object inspect
dirxml    → HTML/XML inspect
trace     → call history
```

------------------------------------------------------------------------

# 41. Final Recommendation for Beginners

Agar tum JavaScript beginner ho, to saare console methods ek saath
memorize karne ki zarurat nahi hai.

Pehle ye pattern strong karo:

``` javascript
console.log();
console.error();
console.warn();
console.table();
```

Phir debugging ke liye:

``` javascript
console.count();
console.assert();
console.time();
console.timeEnd();
```

Aur baad mein organization/inspection:

``` javascript
console.group();
console.groupEnd();
console.dir();
console.trace();
```

### Sabse important baat

Console methods ka main purpose **developer ko code samajhne aur debug
karne mein help karna** hai.

Agar tum ye samajh gaye:

> **"Console mein kya dikhana hai aur kis purpose se dikhana hai?"**

to console methods ka basic concept clear ho jayega.
