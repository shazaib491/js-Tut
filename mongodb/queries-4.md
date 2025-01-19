### **Querying the Database in MongoDB (Theory in Hinglish)**

MongoDB me data ko retrieve (query) karne ke liye powerful aur flexible query operators ka use hota hai. Queries collections par chalti hain aur documents ko filter karne ke liye conditions lagayi ja sakti hain. MongoDB queries ko specific aur fast banane ke liye alag-alag operators provide karta hai.  

Is section me **comparison operators**, **logical operators**, **element operators**, aur advanced features jaise **projections**, **sorting**, aur **pagination** ko detail me samjhenge.

---

### **Query Operators**

#### **1. Comparison Operators**  
Comparison operators ka use field values ko compare karne ke liye hota hai. Yeh alag-alag conditions ke basis par documents ko filter karte hain.  

| **Operator** | **Description**                                 | **Example**                                   |
|--------------|-------------------------------------------------|----------------------------------------------|
| `$eq`        | Field ki value specified value ke equal ho      | `{"age": {"$eq": 25}}`                       |
| `$gt`        | Field ki value specified value se greater ho    | `{"age": {"$gt": 20}}`                       |
| `$lt`        | Field ki value specified value se less ho       | `{"age": {"$lt": 30}}`                       |
| `$ne`        | Field ki value specified value ke equal na ho   | `{"age": {"$ne": 25}}`                       |
| `$in`        | Field ki value specified array ke kisi bhi value se match kare | `{"age": {"$in": [25, 30, 35]}}`   |
| `$nin`       | Field ki value specified array me na ho         | `{"age": {"$nin": [25, 30]}}`                |

**Examples:**  
```javascript
// Age equal to 25 wale documents dhoondein
db.users.find({"age": {"$eq": 25}})

// Age greater than 20 wale documents dhoondein
db.users.find({"age": {"$gt": 20}})
```

---

#### **2. Logical Operators**  
Logical operators ka use multiple conditions ko combine karne ke liye hota hai. Yeh conditions ko **AND**, **OR**, ya negate karte hain.

| **Operator** | **Description**                                | **Example**                                         |
|--------------|------------------------------------------------|----------------------------------------------------|
| `$and`       | Sabhi conditions match karni chahiye           | `{"$and": [{"age": {"$gt": 20}}, {"city": "Delhi"}]}` |
| `$or`        | Koi bhi ek condition match kare                | `{"$or": [{"age": 25}, {"city": "Delhi"}]}`        |
| `$not`       | Condition ko negate karta hai                 | `{"age": {"$not": {"$gt": 30}}}`                  |
| `$nor`       | Sabhi conditions ko reject karta hai          | `{"$nor": [{"age": 25}, {"city": "Delhi"}]}`       |

**Examples:**  
```javascript
// Age > 20 aur city "Delhi" ho (AND condition)
db.users.find({"$and": [{"age": {"$gt": 20}}, {"city": "Delhi"}]})

// Age 25 ya city "Delhi" ho (OR condition)
db.users.find({"$or": [{"age": 25}, {"city": "Delhi"}]})
```

---

#### **3. Element Operators**  
Element operators ka use yeh check karne ke liye hota hai ki field exist karti hai ya uska data type kya hai.

| **Operator** | **Description**                                  | **Example**                              |
|--------------|--------------------------------------------------|------------------------------------------|
| `$exists`    | Check karta hai ki field exist karti hai ya nahi | `{"email": {"$exists": true}}`           |
| `$type`      | Field ke data type ko check karta hai            | `{"age": {"$type": "int"}}`              |

**Examples:**  
```javascript
// Sirf wahi documents dhoondein jisme "email" field ho
db.users.find({"email": {"$exists": true}})

// Sirf wahi documents dhoondein jisme "age" ka data type integer ho
db.users.find({"age": {"$type": "int"}})
```

---

### **Projections aur Sorting**

#### **1. Projections (Fields Include/Exclude Karna)**  
Projections ka use query result me specific fields ko include ya exclude karne ke liye hota hai.  

| **1** = Include | **0** = Exclude |
|------------------|-----------------|

**Examples:**  
```javascript
// Sirf "name" aur "age" fields show karein
db.users.find({}, {"name": 1, "age": 1})

// "address" field ko exclude karein
db.users.find({}, {"address": 0})
```

---

#### **2. Sorting (Data Ko Arrange Karna)**  
Sorting ka use query ke result ko ascending ya descending order me arrange karne ke liye hota hai.

| **1** = Ascending Order | **-1** = Descending Order |
|--------------------------|---------------------------|

**Examples:**  
```javascript
// Age ke basis par ascending order me sort karein
db.users.find().sort({"age": 1})

// Name ke basis par descending order me sort karein
db.users.find().sort({"name": -1})
```

---

### **Pagination Using `limit` aur `skip`**

Pagination ka use data ko chhote-chhote chunks me fetch karne ke liye hota hai, jisse ek baar me poora data fetch karne ki zarurat nahi hoti.

| **Command**  | **Description**                       |
|--------------|---------------------------------------|
| `limit(n)`   | Query ke result ko n documents tak restrict karta hai. |
| `skip(n)`    | Result me se first n documents ko ignore karta hai.   |

**Examples:**  
```javascript
// Pehle 5 documents fetch karein
db.users.find().limit(5)

// Pehle 5 documents skip karein aur next 5 fetch karein
db.users.find().skip(5).limit(5)
```

**Pagination Use Case:**  
Agar collection me 1000 records hain aur aapko ek page par 10 records dikhane hain, to:
- **Page 1:** `db.users.find().limit(10).skip(0)`
- **Page 2:** `db.users.find().limit(10).skip(10)`
- **Page 3:** `db.users.find().limit(10).skip(20)`

---

### **Combined Query Example**

**Requirement:**  
Find documents where:  
1. Age > 20  
2. City is "Delhi" or "Mumbai"  
3. Sirf "name" aur "city" fields show karni hain  
4. Result ko age ke basis par descending order me sort karein  
5. Sirf 5 documents show karein.  

**Query:**  
```javascript
db.users.find(
    {"$and": [
        {"age": {"$gt": 20}},
        {"city": {"$in": ["Delhi", "Mumbai"]}}
    ]},
    {"name": 1, "city": 1}
).sort({"age": -1}).limit(5)
```

---
