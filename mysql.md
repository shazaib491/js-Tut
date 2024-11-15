We have the following entities:

1. **IdType**
2. **ProgramEntity**
3. **RoleEntity**
4. **Sponsorship**
5. **UserEntity**



### **1. `IdType` Table**
This table stores the ID types available in the system.

**SQL Query to Create the Table:**
```sql
CREATE TABLE id_type (
    id_type_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_type_name VARCHAR(255) NOT NULL
);
```

**Table Explanation:**

| **Field Name** | **Data Type** | **Description**                                    | **Relation**   |
|----------------|---------------|----------------------------------------------------|----------------|
| `id_type_id`   | BIGINT        | Primary key for the IDType table.                  |                |
| `id_type_name` | VARCHAR(255)  | Name of the ID type (e.g., "Passport", "ID Card"). |                |

---

### **2. `ProgramEntity` Table**
This table stores details about the programs in the system.

**SQL Query to Create the Table:**
```sql
CREATE TABLE program_entity (
    program_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(255) NOT NULL,
    program_description TEXT,
    program_duration VARCHAR(100),
    program_fee DOUBLE,
    participant_count INT DEFAULT 0,
    is_active BOOLEAN,
    CONSTRAINT chk_active CHECK (is_active IN (0, 1))
);
```

**Table Explanation:**

| **Field Name**        | **Data Type**     | **Description**                                 | **Relation**                               |
|-----------------------|-------------------|-------------------------------------------------|--------------------------------------------|
| `program_id`          | BIGINT            | Primary key for the ProgramEntity table.        |                                            |
| `program_name`        | VARCHAR(255)      | Name of the program.                            |                                            |
| `program_description` | TEXT              | Description of the program.                     |                                            |
| `program_duration`    | VARCHAR(100)      | Duration of the program (e.g., "3 months").     |                                            |
| `program_fee`         | DOUBLE            | Fee for the program.                            |                                            |
| `participant_count`   | INT               | Number of participants enrolled in the program. |                                            |
| `is_active`           | BOOLEAN           | Indicates if the program is active (1 or 0).    |                                            |

---

### **3. `RoleEntity` Table**
This table stores the roles assigned to the users in the system (e.g., Admin, User).

**SQL Query to Create the Table:**
```sql
CREATE TABLE role_entity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
```

**Table Explanation:**

| **Field Name** | **Data Type**  | **Description**                                | **Relation**  |
|----------------|----------------|------------------------------------------------|---------------|
| `id`           | INT            | Primary key for the RoleEntity table.          |               |
| `name`         | VARCHAR(20)    | Name of the role (e.g., "Admin", "User").      |               |

---

### **4. `Sponsorship` Table**
This table links the sponsor and the learner. A user can sponsor multiple learners.

**SQL Query to Create the Table:**
```sql
CREATE TABLE sponsorship (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    learners_id BIGINT NOT NULL,
    FOREIGN KEY (learners_id) REFERENCES user_entity(id)
);
```

**Table Explanation:**

| **Field Name**  | **Data Type**  | **Description**                                         | **Relation**                               |
|-----------------|----------------|---------------------------------------------------------|--------------------------------------------|
| `id`            | BIGINT         | Primary key for the Sponsorship table.                  |                                            |
| `learners_id`   | BIGINT         | Foreign key referencing `id` from the `user_entity` table (learners). | Many-to-One with `UserEntity` (learners)   |

---

### **5. `UserEntity` Table**
This table stores user-related information.

**SQL Query to Create the Table:**
```sql
CREATE TABLE user_entity (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(120) NOT NULL,
    username VARCHAR(100),
    user_mobile_no VARCHAR(15),
    user_address TEXT,
    users_gender VARCHAR(10),
    user_image_url VARCHAR(255),
    user_id_type VARCHAR(100),
    user_identity VARCHAR(100),
    updated_by VARCHAR(100),
    qualification VARCHAR(255),
    user_gst VARCHAR(20),
    contact_person_name VARCHAR(100),
    contact_person_mobile_no VARCHAR(15),
    contact_person_email VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN,
    is_project BOOLEAN,
    is_details_filled BOOLEAN DEFAULT FALSE
);
```

**Table Explanation:**

| **Field Name**              | **Data Type**     | **Description**                                        | **Relation**                                   |
|-----------------------------|-------------------|--------------------------------------------------------|------------------------------------------------|
| `id`                        | BIGINT            | Primary key for the `UserEntity` table.                |                                                |
| `email`                     | VARCHAR(50)       | Email of the user (unique).                            | Unique constraint                              |
| `password`                  | VARCHAR(120)      | Password of the user.                                  |                                                |
| `username`                  | VARCHAR(100)      | Username of the user.                                  |                                                |
| `user_mobile_no`            | VARCHAR(15)       | User's mobile number.                                  |                                                |
| `user_address`              | TEXT              | User's physical address.                               |                                                |
| `users_gender`              | VARCHAR(10)       | Gender of the user.                                    |                                                |
| `user_image_url`            | VARCHAR(255)      | URL of the user's profile image.                       |                                                |
| `user_id_type`              | VARCHAR(100)      | Type of ID for the user (e.g., "Passport", "ID Card"). |                                                |
| `user_identity`             | VARCHAR(100)      | Identity number of the user.                           |                                                |
| `updated_by`                | VARCHAR(100)      | The person who last updated the user data.             |                                                |
| `qualification`             | VARCHAR(255)      | Qualification of the user.                             |                                                |
| `user_gst`                  | VARCHAR(20)       | User's GST number (if applicable).                     |                                                |
| `contact_person_name`       | VARCHAR(100)      | Name of the contact person for the user.               |                                                |
| `contact_person_mobile_no` | VARCHAR(15)       | Mobile number of the contact person.                   |                                                |
| `contact_person_email`      | VARCHAR(100)      | Email of the contact person.                           |                                                |
| `is_active`                 | BOOLEAN           | Whether the user account is active.                    |                                                |
| `is_verified`               | BOOLEAN           | Verification status of the user's account.             |                                                |
| `is_project`                | BOOLEAN           | Whether the user is associated with a project.         |                                                |
| `is_details_filled`         | BOOLEAN           | Whether the user has filled all necessary details.     |                                                |

---

### **Relationships Between Tables**

| **Table 1**        | **Relationship**                          | **Table 2**      | **Explanation**                                                                                                                                         |
|--------------------|-------------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `UserEntity`       | One-to-Many (Sponsorship)                 | `Sponsorship`    | A user can sponsor multiple learners (through `Sponsorship` records).                                                                                 |
| `UserEntity`       | Many-to-Many (Programs)                   | `ProgramEntity`  | A user can enroll in multiple programs, and each program can have multiple users. This is achieved through the `program_users` join table.             |
| `UserEntity`       | Many-to-Many (Roles)                      | `RoleEntity`     | A user can have multiple roles, and each role can be assigned to multiple users. This is represented by the `user_roles` join table.                    |
| `ProgramEntity`    | Many-to-Many (Learners)                   | `UserEntity`     | A program can have many learners, and a learner can be part of many programs (through the `program_users` join table).                                 |
| `Sponsorship`      | Many-to-One (Learner)                     | `UserEntity`     | A sponsorship links a learner to a sponsor (one-to-many relationship between `UserEntity` and `Sponsorship`).                                          |

---

### **Final Notes**
1. **`IdType`** is independent and only has a single field that refers to the ID types.
2. **`ProgramEntity`** is related to **`UserEntity`** through a many-to-many relationship (`program_users` join table).
3. **`RoleEntity`** is also related to **`UserEntity`** through a many-to-many relationship (`user_roles` join table).
4. **`Sponsorship`** acts as a bridge between sponsors (users) and sponsored learners (users), indicating a one-to-many relationship.
