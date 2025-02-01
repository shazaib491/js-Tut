---

# **📌 JavaScript: Handling Null, Undefined & Function Calls Efficiently**
This note explains how to handle `null`, `undefined`, and function calls safely using modern JavaScript features.

---

## **1️⃣ Using Logical OR (`||`) for Default Values**
```javascript
const obj = {
  name: "handle",
  Name: "Amaan",
  email: "admin@gmail.com",
  age: 0,
  detail: {
    mobile: "123456",
    age: 17,
    department: "sales",
  },
};

// Example
console.log(obj.age || obj.Name); // Output: "Amaan"
```
### 🔹 **Explanation:**
- `obj.age` is `0`, which is a falsy value.
- `||` (logical OR) returns `"Amaan"` because `0` is falsy.
- **🚨 Issue:** This approach treats `0`, `false`, and `""` as falsy, which may not be ideal.

---

## **2️⃣ Using Optional Chaining (`?.`) with Nullish Coalescing (`??`)**
```javascript
console.log(obj?.detail?.mobile ?? "Na"); // Output: "123456"
```
### 🔹 **Explanation:**
- `?.` ensures safe access without throwing an error.
- `??` provides `"Na"` only if the value is `null` or `undefined`.

**🚀 Best Practice:** Prefer `??` instead of `||` when dealing with possible `null` or `undefined` values.

---

## **3️⃣ Conditional Property Access & Ternary Operator**
### ✅ Traditional Approach:
```javascript
if (obj && obj?.detail && obj?.detail?.mobile) {
  console.log(obj?.detail?.mobile);
} else {
  console.log("Na");
}
```
### ✅ Optimized Using Ternary Operator:
```javascript
console.log(obj?.detail?.mobile ? obj?.detail?.mobile : "N/A");
```
- More concise & readable.

---

## **4️⃣ Default Parameters in Functions**
```javascript
function print(name = "Amaan Tanker") {
  console.log(name);
}

print("Dr Safi"); // Output: "Dr Safi"
print(); // Output: "Amaan Tanker"
```
### 🔹 **Explanation:**
- If no argument is passed, `"Amaan Tanker"` is used as the default value.

---

## **5️⃣ Safe Array Access with Optional Chaining (`?.[]`)**
```javascript
const users = [{ name: "John" }];

console.log(users[0].name); // Output: "John"
console.log(users?.[0]?.name); // Output: "John"
console.log(users?.[1]?.name ?? "Na"); // Output: "Na"
```
### 🔹 **Explanation:**
- `users?.[0]?.name`: Avoids errors if `users` is empty or `undefined`.
- `??` ensures `"Na"` is displayed instead of `undefined`.

---

## **6️⃣ Safe Function Calls & Type Checking**
```javascript
const obj = {
  greet: () => "Hello!",
  sayBye: "hello",
};

console.log(obj.greet?.()); // Output: "Hello!"

// Safe function execution
console.log(typeof obj?.sayBye === "function" ? obj.sayBye() : "Function not found");
// Output: "Function not found"
```
### 🔹 **Explanation:**
- `obj.greet?.()` ensures `greet` exists before calling.
- `typeof obj?.sayBye === "function"` prevents errors if `sayBye` is not a function.

---

## **🎯 Key Takeaways**
✔ Use **optional chaining (`?.`)** to avoid errors from accessing undefined properties.  
✔ Use **nullish coalescing (`??`)** instead of `||` to handle only `null` and `undefined`.  
✔ Use **default parameters** to provide fallback values in functions.  
✔ Use **optional chaining with arrays (`?.[]`)** to avoid accessing missing elements.  
✔ Always **check `typeof` before calling a function** to avoid `TypeError`.

**✅ Follow these best practices for cleaner and more reliable JavaScript code!** 🚀🔥

---
