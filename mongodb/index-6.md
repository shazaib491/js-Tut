### **Aggregation Kya Hai?**
**Aggregation** ek process hai jo documents ka data process karta hai, summarize karta hai aur complex queries ko efficiently execute karta hai. Iska use tab hota hai jab humein data ko filter, group, calculate, ya summarize karna ho.

For example:
- Total sales ka calculation
- Average marks nikalna
- Data ko sort aur group karna

---

### **Aggregation Pipeline Find Method Se Better Kyu Hai?**

| **Find Method**                     | **Aggregation Pipeline**                     |
|-------------------------------------|---------------------------------------------|
| **Simple Filtering:** Sirf documents ko filter kar sakta hai. | **Advanced Operations:** Filtering ke saath group, sort, aur transformations karta hai. |
| **Limited Functionality:** Basic queries ke liye useful. | **Complex Functionality:** Data ko summarize aur analyze kar sakta hai. |
| **Step-by-Step Na Ho Pana:** Find ek baar mein result dega. | **Stage-Wise Processing:** Har stage ek specific task handle karta hai. |
| **Static Results:** Dynamic transformations possible nahi. | **Dynamic Results:** Fields ko modify aur create kar sakte hain. |

---

### **Dummy Data Example**
Collection: `orders`
```json
[
  { "_id": 1, "product": "Mobile", "category": "Electronics", "price": 15000, "quantity": 2 },
  { "_id": 2, "product": "Laptop", "category": "Electronics", "price": 45000, "quantity": 1 },
  { "_id": 3, "product": "Shirt", "category": "Clothing", "price": 1000, "quantity": 5 },
  { "_id": 4, "product": "Shoes", "category": "Clothing", "price": 3000, "quantity": 3 },
  { "_id": 5, "product": "Headphones", "category": "Electronics", "price": 2000, "quantity": 4 }
]
```

---

### **10 Important Aggregation Pipeline Stages**

#### **1. $match**
Documents ko filter karta hai, like `find`. 
**Example:** Sirf `Electronics` category ke products:
```javascript
db.orders.aggregate([{ $match: { category: "Electronics" } }]);
```

**Output:**
```json
[
  { "_id": 1, "product": "Mobile", "category": "Electronics", "price": 15000, "quantity": 2 },
  { "_id": 2, "product": "Laptop", "category": "Electronics", "price": 45000, "quantity": 1 },
  { "_id": 5, "product": "Headphones", "category": "Electronics", "price": 2000, "quantity": 4 }
]
```

---

#### **2. $group**
Data ko group karke aggregate operations perform karta hai, jaise sum, avg.
**Example:** Total quantity per category:
```javascript
db.orders.aggregate([
  { 
    $group: { 
      _id: "$category", 
      totalQuantity: { $sum: "$quantity" } 
    } 
  }
]);
```

**Output:**
```json
[
  { "_id": "Electronics", "totalQuantity": 7 },
  { "_id": "Clothing", "totalQuantity": 8 }
]
```

---

#### **3. $project**
Fields ko select ya transform karna.
**Example:** Sirf product aur price show karna:
```javascript
db.orders.aggregate([
  { 
    $project: { 
      product: 1, 
      price: 1, 
      _id: 0 
    } 
  }
]);
```

**Output:**
```json
[
  { "product": "Mobile", "price": 15000 },
  { "product": "Laptop", "price": 45000 },
  { "product": "Shirt", "price": 1000 },
  { "product": "Shoes", "price": 3000 },
  { "product": "Headphones", "price": 2000 }
]
```

---

#### **4. $sort**
Data ko sort karta hai ascending (1) ya descending (-1) order mein.
**Example:** Price ke hisaab se descending order mein sort:
```javascript
db.orders.aggregate([
  { $sort: { price: -1 } }
]);
```

---

#### **5. $limit**
Sirf n number of documents return karta hai.
**Example:** Top 2 expensive products:
```javascript
db.orders.aggregate([
  { $sort: { price: -1 } },
  { $limit: 2 }
]);
```

**Output:**
```json
[
  { "_id": 2, "product": "Laptop", "price": 45000 },
  { "_id": 1, "product": "Mobile", "price": 15000 }
]
```

---

#### **6. $skip**
N number of documents ko skip karta hai.
**Example:** 2 documents skip karke baaki:
```javascript
db.orders.aggregate([
  { $sort: { price: -1 } },
  { $skip: 2 }
]);
```

---

#### **7. $unwind**
Array ko "flatten" karta hai, har element ko alag document banata hai.
**Example:** Agar `tags` field ek array hai:
```json
{ "product": "Mobile", "tags": ["Electronics", "Gadgets"] }
```
Query:
```javascript
db.orders.aggregate([
  { $unwind: "$tags" }
]);
```

---

#### **8. $lookup**
Do collections ko join karta hai.
**Example:** `orders` aur `customers` ko join karna.
```javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
]);
```

---

#### **9. $addFields**
Nayi fields ko add karta hai ya existing ko modify karta hai.
**Example:** Total price calculate karna:
```javascript
db.orders.aggregate([
  { 
    $addFields: { 
      totalPrice: { $multiply: ["$price", "$quantity"] } 
    } 
  }
]);
```

**Output:**
```json
[
  { "_id": 1, "product": "Mobile", "totalPrice": 30000 },
  { "_id": 2, "product": "Laptop", "totalPrice": 45000 }
]
```

---

#### **10. $out**
Result ko nayi collection mein save karta hai.
**Example:** Result ko `summary` collection mein save karna:
```javascript
db.orders.aggregate([
  { $group: { _id: "$category", totalSales: { $sum: "$price" } } },
  { $out: "summary" }
]);
```

---

Aap Aggregation Pipeline ka use karke apni queries ko highly optimized aur powerful bana sakte hain! Koi specific query chahiye ho to batayein. 🙂
