### **MongoDB Basics (Theory in Hinglish)**

MongoDB ek **NoSQL, document-oriented database** hai jo high performance, scalability, aur flexibility ke liye design kiya gaya hai. Relational databases (SQL) ke unlike, MongoDB tables aur rows par depend nahi karta. Yeh **collections aur documents** ka use karta hai.

---

#### **Features of MongoDB**

1. **Document-Oriented Storage**  
   MongoDB data ko JSON-like documents (BSON format) me store karta hai. Yeh documents nested aur dynamic structure ko support karte hain, jo real-world data ke liye kaafi useful hai.  
   **Example:**  
   ```json
   {
       "name": "Aman",
       "age": 28,
       "skills": ["JavaScript", "MongoDB"]
   }
   ```

### **BSON Kya Hai?**

**BSON (Binary JSON)** ek binary format hai jo MongoDB internally data store karne ke liye use karta hai. Yeh JSON (JavaScript Object Notation) ka ek optimized version hai jo faster data processing aur more functionality provide karta hai.

---

### **BSON Ke Features**
1. **Binary Format**:  
   - BSON ko binary format me encode kiya jata hai, jo MongoDB ko data ko fast store aur retrieve karne me madad karta hai.
   - Binary format ka size chhota hota hai, isliye performance better hoti hai.

2. **JSON-Like Structure**:  
   - BSON JSON ki tarah hi document-oriented structure ko support karta hai, jaise key-value pairs, arrays, aur nested objects.

3. **Additional Data Types**:  
   - BSON JSON se zyada data types ko support karta hai, jaise:
     - **Date**: Date aur time values ke liye.
     - **Binary Data**: Images, files, aur binary content ke liye.
     - **ObjectId**: Unique IDs ke liye.

4. **Efficient Size and Traversal**:  
   - BSON compressed aur lightweight hai, jo large-scale applications ke liye perfect hai.
   - Nested documents aur arrays ka traversal fast hota hai.

---

### **JSON vs BSON Comparison**

| **Feature**          | **JSON**                                  | **BSON**                                      |
|-----------------------|-------------------------------------------|-----------------------------------------------|
| **Format**           | Text-based                                | Binary-based                                  |
| **Size**             | Larger file size                          | Compact and optimized size                   |
| **Data Types**       | Limited (string, number, boolean, array)  | Advanced (date, binary, ObjectId, etc.)      |
| **Speed**            | Slower parsing and serialization          | Faster due to binary encoding                |
| **Use Case**         | Data interchange (API communication)      | Data storage in MongoDB                      |

---

### **BSON Example**

**JSON Document** (Readable format):  
```json
{
    "name": "Aman",
    "age": 28,
    "skills": ["MongoDB", "Node.js"]
}
```

**BSON Document** (Binary format, internal representation):  
- Binary data (unreadable as text) with additional metadata like size, data types, etc.  

---

### **Why BSON in MongoDB?**

1. **Compact Size**:  
   Data ka size kam hone ki wajah se MongoDB storage efficient ho jata hai.  

2. **Faster Performance**:  
   Binary format ka processing aur traversal JSON ke comparison me faster hota hai.  

3. **Rich Data Types**:  
   BSON advanced data types (Date, ObjectId, Binary) support karta hai, jo JSON se zyada functional aur useful hai.

4. **Cross-Platform Compatibility**:  
   BSON ka format alag-alag programming languages ke saath compatible hai.

---

#### **2. Schema-less (Flexible Structure)**
- MongoDB schema-less hai, matlab yeh **fixed table structure** ki tarah kaam nahi karta, jaise relational databases me hota hai.
- Har document apne structure ke hisaab se unique ho sakta hai. Aapko pehle se data ka structure define karne ki zarurat nahi hoti.
- **Example:**  
   Collection `users` me alag-alag structure ke documents ho sakte hain:
   ```json
   {
       "name": "Aman",
       "age": 28
   }
   ```
   ```json
   {
       "name": "Riya",
       "skills": ["Python", "Django"],
       "city": "Delhi"
   }
   ```
   - Is flexibility se aap dynamically changing data ko easily handle kar sakte hain.

---

#### **3. Scalability (Sharding for Large Applications)**
- MongoDB ka **horizontal scaling** feature isse large-scale applications ke liye ideal banata hai.
- **Sharding** ka use karke MongoDB ek bade database ko multiple smaller parts me todta hai (shards), jo alag-alag servers par store hote hain.
- Yeh scaling ka best method hai jab data aur traffic bohot zyada ho jata hai.

- **Example:**  
   Agar ek application ka data 1 billion records ka hai, to MongoDB usse 3 shards me divide karega:
   - Shard 1: Users from `A to F`
   - Shard 2: Users from `G to L`
   - Shard 3: Users from `M to Z`

- **Benefits:**  
   - Workload har server par evenly distribute hota hai.
   - System ka performance aur speed better hoti hai.

---

#### **4. Indexing (Faster Queries)**
- MongoDB me indexes create karke aap query performance ko improve kar sakte ho.
- Index ek shortcut ki tarah kaam karta hai jo MongoDB ko specific data ko faster search karne me help karta hai.
- **Without Index:**  
   MongoDB pura collection scan karega (slow performance).
- **With Index:**  
   MongoDB directly specific data par jump karega (fast performance).
- **Example:**  
   ```bash
   db.users.createIndex({name: 1})
   ```
   - Is command se `name` field par ek index ban jayega, aur ab queries like `db.users.find({name: "Aman"})` kaafi fast chalengi.

---

#### **5. Replication (High Availability)**
- MongoDB replication ke through data redundancy aur high availability ensure karta hai.
- **Replica Set:** Ek group of MongoDB servers jo same data ko store karte hain:
   - **Primary Server:** Main server jo read/write requests handle karta hai.
   - **Secondary Servers:** Backup servers jo primary ka data copy karte hain. Agar primary server fail ho jaye, to ek secondary server automatically primary ban jata hai.
- **Benefits:**
   - System failure ke baad bhi data accessible rehta hai.
   - Application downtime kaafi kam hota hai.

---

#### **6. High Performance**
- MongoDB ka design high-speed data handling ke liye bana hai:
   - Large data volumes ko process karne me efficient.
   - Dynamic schema aur indexing queries ko faster banate hain.
   - Real-time analytics aur big data processing ke liye kaafi suitable hai.
   
**Example Use Cases:**
- E-commerce websites me product catalogs aur user activities ka data fast retrieve karna.
- Real-time data analytics systems me log data process karna.

---

---

### **MongoDB vs SQL (MongoDB kyu use karein?)**

| **Aspect**               | **SQL (MySQL)**                               | **MongoDB**                             |
|--------------------------|-----------------------------------------------|-----------------------------------------|
| **Data Model**           | Relational (tables ke rows aur columns)       | Document-based (JSON-like documents)    |
| **Schema**               | Fixed schema (pehle se structure define karna) | Dynamic schema (schema-less)            |
| **Relationships**        | Foreign keys ka use karke relationships       | Documents me embedding ya referencing   |
| **Scalability**          | **Vertical scaling** (better hardware chahiye) | **Horizontal scaling** (sharding ka use)|
| **Flexibility**          | Structured aur fixed                         | Dynamic aur flexible                    |
| **Performance**          | Complex queries me slow                      | High performance, especially for large datasets |

---

### **MongoDB over MySQL kyun prefer karein?**

1. **Dynamic Data Handling:**  
   Agar aapka data dynamic aur real-time hai, MongoDB better choice hai kyunki schema pehle se define karne ki zarurat nahi hoti.  

2. **Faster Development:**  
   MongoDB me schema changes asaan hai, jo faster development process ko enable karta hai.  

3. **Large-Scale Applications:**  
   MongoDB horizontal scaling ke through large-scale distributed systems ko easily handle karta hai.  

4. **Real-Time Use Cases:**  
   Real-time analytics aur IoT applications ke liye MongoDB ka performance SQL se better hota hai.

---

### **What is Horizontal and Vertical Scaling?**

#### **1. Horizontal Scaling (Sharding)**  
- Horizontal scaling ka matlab hai ki aap apne database ko multiple servers me divide karte ho, jisse workload share hota hai.  
- MongoDB sharding ka use karta hai horizontal scaling ke liye.  
- **Example:**  
   Ek database ko 3 shards (servers) me tod diya:
   - Shard 1: Users A to F
   - Shard 2: Users G to L
   - Shard 3: Users M to Z

#### **2. Vertical Scaling**  
- Vertical scaling ka matlab hai ki aap apne existing server ke hardware ko upgrade karte ho (more RAM, CPU, etc.).  
- Iska drawback hai ki ek point ke baad hardware upgrade ki limit hoti hai.  

**Comparison:**  
| **Aspect**           | **Horizontal Scaling**        | **Vertical Scaling**          |
|----------------------|-------------------------------|-------------------------------|
| **Approach**         | Multiple servers (distributed)| Single server (upgrading)     |
| **Cost**             | Relatively cheaper            | Expensive after a limit       |
| **Performance**      | Better for large-scale systems| Limited improvement           |

---

### **MongoDB Data Types (Theory)**

MongoDB me data ko BSON (Binary JSON) format me store kiya jata hai. Yeh kuch common data types support karta hai:

1. **String**  
   - Most commonly used.  
   - Example: `"name": "Amit"`

2. **Number (Int, Double)**  
   - Integer aur floating-point numbers.  
   - Example: `"age": 25`

3. **Boolean**  
   - True ya False value.  
   - Example: `"isActive": true`

4. **Array**  
   - List of values.  
   - Example: `"skills": ["JavaScript", "React"]`

5. **Object**  
   - Nested document ke liye.  
   - Example:  
     ```json
     "address": {
         "city": "Bhopal",
         "state": "MP"
     }
     ```

6. **Null**  
   - Null value ke liye.  
   - Example: `"middleName": null`

7. **ObjectId**  
   - Unique ID jo har document ke liye MongoDB automatically generate karta hai.  

---
