### **$lookup**: Explanation with Example

`$lookup` MongoDB Aggregation Pipeline ka ek stage hai jo **two collections** ko SQL-style `JOIN` ki tarah combine karne ke liye use hota hai. Iska use tab hota hai jab aapko ek collection ke data ko doosre collection ke related data ke saath fetch karna ho.

---

### **Syntax:**
```javascript
{
  $lookup: {
    from: "<foreignCollection>",
    localField: "<localField>",
    foreignField: "<foreignField>",
    as: "<outputArrayField>"
  }
}
```

**Parameters:**
1. **from:**  
   - Jo collection join karni hai uska naam (foreign collection).
2. **localField:**  
   - Current collection ka field jo foreign collection ke field se match karega.
3. **foreignField:**  
   - Foreign collection ka field jo match karega.
4. **as:**  
   - Output array ka naam jisme joined data store hoga.

---

### **Example Dataset**

#### Collection 1: `orders`
```json
[
  { "_id": 1, "customerId": 101, "product": "Mobile", "price": 15000 },
  { "_id": 2, "customerId": 102, "product": "Laptop", "price": 45000 },
  { "_id": 3, "customerId": 103, "product": "Shoes", "price": 3000 }
]
```

#### Collection 2: `customers`
```json
[
  { "_id": 101, "name": "Rahul", "city": "Bhopal" },
  { "_id": 102, "name": "Anjali", "city": "Delhi" },
  { "_id": 103, "name": "Rohan", "city": "Mumbai" }
]
```

---

### **Query:** Orders ke saath customers ka data join karna
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",         // Foreign collection
      localField: "customerId",  // Field in orders
      foreignField: "_id",       // Field in customers
      as: "customerDetails"      // Output array field
    }
  }
]);
```

---

### **Output:**
```json
[
  {
    "_id": 1,
    "customerId": 101,
    "product": "Mobile",
    "price": 15000,
    "customerDetails": [
      { "_id": 101, "name": "Rahul", "city": "Bhopal" }
    ]
  },
  {
    "_id": 2,
    "customerId": 102,
    "product": "Laptop",
    "price": 45000,
    "customerDetails": [
      { "_id": 102, "name": "Anjali", "city": "Delhi" }
    ]
  },
  {
    "_id": 3,
    "customerId": 103,
    "product": "Shoes",
    "price": 3000,
    "customerDetails": [
      { "_id": 103, "name": "Rohan", "city": "Mumbai" }
    ]
  }
]
```

---

### **Explanation:**
1. `orders` collection ke `customerId` field ka match `customers` collection ke `_id` field ke saath hota hai.
2. Jo `customers` ka matching document hai, wo `customerDetails` array ke andar add hota hai.

---

### **Example with Unmatched Data**
Agar `customers` collection mein koi matching data na ho to:
```json
{ "_id": 104, "product": "Tablet", "price": 20000 }
```

Is case mein:
```json
{
  "_id": 104,
  "product": "Tablet",
  "price": 20000,
  "customerDetails": []
}
```

`customerDetails` array empty rahega, lekin document still result mein aayega.

---

### **Use Cases of $lookup**
1. E-commerce Applications:
   - Orders ko customers ke details ke saath fetch karna.
2. Social Media:
   - Posts ko users ke profiles ke saath link karna.
3. Reports:
   - Sales reports ko category ke saath join karna.

