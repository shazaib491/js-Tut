### **1. `IdType` Model**

```python
from django.db import models

class IdType(models.Model):
    id_type_name = models.CharField(max_length=255)

    def __str__(self):
        return self.id_type_name
```

- **`id_type_name`**: The name of the ID type (e.g., "Passport", "ID Card").
- **Primary Key**: Django automatically uses `id` as the primary key for each model, so there's no need to explicitly define it unless needed.

---

### **2. `ProgramEntity` Model**

```python
class ProgramEntity(models.Model):
    program_name = models.CharField(max_length=255)
    program_description = models.TextField(null=True, blank=True)
    program_duration = models.CharField(max_length=100)
    program_fee = models.DecimalField(max_digits=10, decimal_places=2)
    participant_count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    learners = models.ManyToManyField('UserEntity', related_name='programs')

    def __str__(self):
        return self.program_name
```

- **`learners`**: A many-to-many relationship with `UserEntity` (learners).
- **`is_active`**: Whether the program is active or not (boolean field).
- **`participant_count`**: The number of participants enrolled in the program.

---

### **3. `RoleEntity` Model**

```python
from enum import Enum

class ERole(Enum):
    ADMIN = 'Admin'
    USER = 'User'

class RoleEntity(models.Model):
    name = models.CharField(max_length=20, choices=[(role.name, role.value) for role in ERole])

    def __str__(self):
        return self.name
```

- **`name`**: The role name (admin, user, etc.), which is an enum.
- **Choices**: We use `Enum` for the roles and store them in the database as strings.

---

### **4. `Sponsorship` Model**

```python
class Sponsorship(models.Model):
    learners = models.ForeignKey('UserEntity', on_delete=models.CASCADE, related_name='sponsorships')

    def __str__(self):
        return f"Sponsorship of {self.learners}"
```

- **`learners`**: A foreign key to the `UserEntity` model. It links each sponsorship to a specific learner.
- **`on_delete=models.CASCADE`**: If the associated user is deleted, the sponsorship will also be deleted.

---

### **5. `UserEntity` Model**

```python
from django.db import models
from django.contrib.auth.models import AbstractUser

class UserEntity(AbstractUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=120)
    user_mobile_no = models.CharField(max_length=15, blank=True, null=True)
    user_address = models.TextField(blank=True, null=True)
    users_gender = models.CharField(max_length=10, blank=True, null=True)
    user_image_url = models.URLField(blank=True, null=True)
    user_id_type = models.CharField(max_length=100, blank=True, null=True)
    user_identity = models.CharField(max_length=100, blank=True, null=True)
    updated_by = models.CharField(max_length=100, blank=True, null=True)
    qualification = models.CharField(max_length=255, blank=True, null=True)
    user_gst = models.CharField(max_length=20, blank=True, null=True)
    contact_person_name = models.CharField(max_length=100, blank=True, null=True)
    contact_person_mobile_no = models.CharField(max_length=15, blank=True, null=True)
    contact_person_email = models.EmailField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_project = models.BooleanField(default=False)
    is_details_filled = models.BooleanField(default=False)

    sponsored_learners = models.ManyToManyField('self', related_name='sponsors', symmetrical=False)
    roles = models.ManyToManyField('RoleEntity', related_name='users')
    programs = models.ManyToManyField('ProgramEntity', related_name='users')

    def __str__(self):
        return self.username
```

**Explanation:**
- **`sponsored_learners`**: A many-to-many relationship with `UserEntity`, representing users who are sponsored by the current user. The `symmetrical=False` ensures that the relation is not automatically mirrored.
- **`roles`**: A many-to-many relationship with `RoleEntity`, indicating the roles assigned to the user (e.g., Admin, User).
- **`programs`**: A many-to-many relationship with `ProgramEntity`, indicating the programs the user is enrolled in.
- **Custom User Model**: This extends `AbstractUser` to include additional fields specific to your application, such as `user_mobile_no`, `user_address`, etc.
  
---

### **Django Model Relationships**

Here are the relationships represented in the Django models:

| **Table 1**        | **Relationship**                    | **Table 2**      | **Explanation**                                                                                                                                                        |
|--------------------|-------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `UserEntity`       | One-to-Many (`Sponsorship`)         | `Sponsorship`    | A user can sponsor many learners (through `Sponsorship` records).                                                                                                     |
| `UserEntity`       | Many-to-Many (`ProgramEntity`)      | `ProgramEntity`  | A user can enroll in multiple programs, and a program can have many users. This is achieved through a `programs` many-to-many field.                                   |
| `UserEntity`       | Many-to-Many (`RoleEntity`)         | `RoleEntity`     | A user can have multiple roles, and each role can be assigned to multiple users. This is represented by the `roles` many-to-many field.                               |
| `ProgramEntity`    | Many-to-Many (`UserEntity`)         | `UserEntity`     | A program can have many learners, and a learner can be part of many programs (through the `programs` many-to-many field in `UserEntity`).                             |
| `Sponsorship`      | Many-to-One (`UserEntity`)          | `UserEntity`     | A sponsorship links a sponsor user to a sponsored learner. This is a foreign key in the `Sponsorship` model.                                                           |
| `UserEntity`       | Many-to-Many (Symmetric) (`sponsored_learners`) | `UserEntity`     | A user can sponsor many learners, and a learner can have many sponsors. This is a self-referencing many-to-many relationship.                                          |

---
