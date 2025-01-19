### **3. Basic Operations in MongoDB (Detailed Theory in Hinglish)**

MongoDB me CRUD (Create, Read, Update, Delete) operations kaafi simple aur flexible hote hain. Har operation collections aur documents ke through perform kiya jata hai. Is section me hum MongoDB ke important terminologies aur basic CRUD operations ko examples ke saath samjhenge.

---

### **MongoDB Terminologies**

1. **Database**  
   - MongoDB me ek **database** ka group collections ka hota hai.
   - Har database ke andar alag-alag collections ho sakti hain.  
   - Example: `school` database ke andar `students` aur `teachers` collections ho sakti hain.
   - **Command:**  
     ```bash
     use myDatabase
     ```

2. **Collection**  
   - Collection documents ka group hota hai (SQL me table ke barabar).  
   - Har collection ka naam unique hota hai.
   - **Example:**  
     `users` collection:
     ```json
     {
         "name": "Aman",
         "age": 25,
         "city": "Delhi"
     }
     ```

3. **Document**  
   - MongoDB ka primary data storage unit **document** hota hai, jo JSON-like format me hota hai.  
   - Har document key-value pairs ka set hota hai.
   - **Example:**
     ```json
     {
         "name": "Riya",
         "skills": ["JavaScript", "React"],
         "city": "Mumbai"
     }
     ```

4. **Field**  
   - Document ka ek **field** ek key-value pair hota hai.  
   - Example: `name: "Riya"` ek field hai jisme key `name` aur value `"Riya"` hai.

---

### **CRUD Operations in MongoDB**

#### **1. Create Operation (Data Insert Karna)**  
MongoDB me data insert karne ke liye `insertOne` aur `insertMany` commands ka use hota hai.

- **insertOne**: Ek single document insert karta hai.  
   **Example:**
   ```javascript
   db.users.insertOne({
       "name": "Rahul",
       "age": 30,
       "city": "Bhopal"
   })
   ```
   **Output:**
   ```json
   {
       "acknowledged": true,
       "insertedId": "64a7c9f1f3a1234abcde5678"
   }
   ```

- **insertMany**: Ek baar me multiple documents insert karta hai.  
   **Example:**
   ```javascript
   db.users.insertMany([
       {"name": "Aman", "age": 25},
       {"name": "Riya", "age": 28, "city": "Mumbai"}
   ])
   ```

---

#### **2. Read Operation (Data Fetch Karna)**  
MongoDB me data read karne ke liye `find` aur `findOne` commands ka use hota hai.

- **find**: Saare documents fetch karne ke liye.  
   **Example:**
   ```javascript
   db.users.find()
   ```
   **Output:**
   ```json
   [
       {"_id": "1", "name": "Rahul", "age": 30, "city": "Bhopal"},
       {"_id": "2", "name": "Aman", "age": 25},
       {"_id": "3", "name": "Riya", "age": 28, "city": "Mumbai"}
   ]
   ```

- **findOne**: Sirf ek document fetch karta hai.  
   **Example:**
   ```javascript
   db.users.findOne({"name": "Aman"})
   ```
   **Output:**
   ```json
   {"_id": "2", "name": "Aman", "age": 25}
   ```

---

#### **3. Update Operation (Data Modify Karna)**  
MongoDB me documents update karne ke liye `updateOne` aur `updateMany` commands ka use hota hai. Yeh `$set` aur `$unset` operators ke saath kaam karta hai.

- **updateOne**: Sirf ek document update karta hai.  
   **Example:**
   ```javascript
   db.users.updateOne(
       {"name": "Rahul"},
       {$set: {"city": "Indore"}}
   )
   ```
   **Output:**
   ```json
   { "matchedCount": 1, "modifiedCount": 1 }
   ```

- **updateMany**: Multiple documents update karta hai.  
   **Example:**
   ```javascript
   db.users.updateMany(
       {"age": {$gt: 25}},
       {$set: {"status": "active"}}
   )
   ```

- **$set Operator**: Field ko update karne ke liye use hota hai.  
   - Example: `{$set: {"city": "Delhi"}}`

- **$unset Operator**: Field ko remove karne ke liye use hota hai.  
   **Example:**
   ```javascript
   db.users.updateOne(
       {"name": "Aman"},
       {$unset: {"city": ""}}
   )
   ```

---

#### **4. Delete Operation (Data Remove Karna)**  
MongoDB me data delete karne ke liye `deleteOne` aur `deleteMany` commands ka use hota hai.

- **deleteOne**: Sirf ek document delete karta hai.  
   **Example:**
   ```javascript
   db.users.deleteOne({"name": "Rahul"})
   ```

- **deleteMany**: Multiple documents delete karta hai.  
   **Example:**
   ```javascript
   db.users.deleteMany({"status": "inactive"})
   ```

---
