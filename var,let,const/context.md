### **Execution Context in JavaScript (Hinglish Explanation)**

---

### **What is Execution Context?**

- **Execution Context** is an environment in JavaScript **where the code is executed and evaluated**.
- Whenever JavaScript code runs, it runs inside an **execution context**. It defines:
  1. **What data is accessible** (variables, functions, etc.).
  2. **What is the value of `this`**.

---

### **Types of Execution Context**

JavaScript has **three types of execution contexts**:

1. **Global Execution Context (GEC):**
   - Ye tab create hota hai jab JavaScript file load hoti hai.
   - Isme global code run hota hai (wo code jo kisi function ke andar nahi hai).
   - Default me `this` keyword **global object** ko point karta hai:
     - Browser me: `window`.
     - Node.js me: `global`.

2. **Function Execution Context (FEC):**
   - Jab koi function call hota hai, tab ek **naya execution context** banta hai.
   - Iska apna **scope**, variables, aur `this` hota hai.

3. **Eval Execution Context:**
   - Jab `eval()` function ka use hota hai, tab ek naya execution context banta hai.
   - Eval ka use kam hi hota hai, aur mostly avoid kiya jata hai.

---

### **How Execution Context Works?**

Har execution context ke **do phases** hote hain:
1. **Creation Phase**
2. **Execution Phase**

---

### **1. Creation Phase:**
   - JavaScript interpreter is phase me code ko scan karta hai aur:
     1. **Memory Allocate karta hai:**
        - Sabhi variables aur functions ko memory me allocate karta hai.
        - Variables ka value initially `undefined` hota hai (hoisting ke wajah se).
     2. **`this` ka value define karta hai:**
        - Global context me: `this = window`.
        - Function context me: `this` function ke caller pe depend karta hai.

#### Example:
```javascript
console.log(a); // Output: undefined (hoisted, but not assigned)
var a = 10;
function greet() {
    console.log("Hello");
}
```

**During Creation Phase:**
- `a` ka memory allocate hoga aur value `undefined` hogi.
- `greet` function ka pura definition memory me store hoga.

---

### **2. Execution Phase:**
   - Is phase me code line-by-line execute hota hai.
   - Variables ko unki actual values assign hoti hain.

#### Example:
```javascript
var a = 10;
function greet() {
    console.log("Hello");
}
greet();
```

**Execution Phase:**
- `a = 10` assign hota hai.
- `greet()` function call hota hai aur uska execution context create hota hai.

---

### **Call Stack aur Execution Context**

JavaScript **call stack** ko use karta hai execution contexts ko manage karne ke liye.

- **Call Stack** ek stack-like structure hai jo execution contexts ko track karta hai.
- Jab koi function call hota hai:
  1. Ek naya **Function Execution Context (FEC)** call stack me push hota hai.
  2. Jab function execute ho jata hai, context ko stack se **pop** kar diya jata hai.

#### Example:
```javascript
function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}

first();
```

**Call Stack Flow:**
1. **Global Execution Context (GEC)** push hota hai.
2. `first()` call hota hai → `first()` ka execution context stack me push hota hai.
3. `second()` call hota hai → `second()` ka execution context stack me push hota hai.
4. `second()` execute hone ke baad pop hota hai.
5. `first()` execute hone ke baad pop hota hai.
6. Finally, GEC bhi pop hota hai.

---

### **Execution Context ke Andar Kya Hota Hai?**

Har execution context ke paas 3 cheezein hoti hain:

1. **Variable Environment:**
   - Yeh variables aur functions ki memory ko track karta hai jo execution context me defined hote hain.
   - **Hoisting** isi ka hissa hai.

2. **Lexical Environment:**
   - Yeh variables aur outer (parent) scope ka access track karta hai.
   - Closures ka concept yahin se aata hai.

3. **`this` Binding:**
   - `this` ka value execution context pe depend karta hai.

---

### **Example with Detailed Breakdown**

```javascript
var a = 10;

function outer() {
    var b = 20;

    function inner() {
        var c = 30;
        console.log(a, b, c); // Accesses a, b, c
    }

    inner();
}

outer();
```

**Step-by-Step Execution:**

1. **Global Execution Context (GEC):**
   - `a` ko memory allocate hota hai aur value `10` set hoti hai.
   - `outer` function ka definition memory me store hota hai.

2. **When `outer()` is Called:**
   - Ek naya **Function Execution Context (FEC)** create hota hai:
     - `b = 20` memory me store hota hai.
     - `inner` ka definition memory me store hota hai.

3. **When `inner()` is Called:**
   - Ek aur **Function Execution Context** banta hai:
     - `c = 30` memory me store hota hai.
     - `a`, `b`, aur `c` lexical environment ke through accessible hote hain.

4. **Call Stack Process:**
   - `inner()` execute hone ke baad uska context pop ho jata hai.
   - `outer()` execute hone ke baad uska context pop ho jata hai.

---

### **Key Points for Beginners:**
1. **Global Execution Context:** Sabse pehle load hota hai, aur sabse aakhri me pop hota hai.
2. **Function Execution Context:** Har function call ke liye naya execution context banta hai.
3. **Call Stack:** Execution contexts ko manage karta hai.
4. **Two Phases:** Creation Phase (memory allocation) aur Execution Phase (code execution).

---

### **Cheat Sheet:**
| **Context**            | **What Happens?**                                                            |
|-------------------------|------------------------------------------------------------------------------|
| **Global Context**      | JavaScript file load hone par banta hai.                                     |
| **Function Context**    | Function call hone par naya context create hota hai.                        |
| **Call Stack**          | Execution contexts ko manage karta hai (push/pop).                          |
| **Phases**              | Creation Phase: Memory allocation, Execution Phase: Code execution.         |
| **`this` Binding**      | Context ke hisaab se `this` ka value define hota hai.                       |

---

