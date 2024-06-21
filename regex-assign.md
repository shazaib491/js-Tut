Let's write the functions in JavaScript and explain the regex patterns used for each.

### 1. Validate Email Address

**Function:**
```javascript
function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}
```

**Regex Explanation:**
- `^`: String ki starting ko indicate karta hai.
- `[a-zA-Z0-9._-]+`: Local part - letters, numbers, dots, hyphens, aur underscores ko allow karta hai.
- `@`: Literal `@` symbol.
- `[a-zA-Z0-9.-]+`: Domain part - letters aur numbers ke saath dots aur hyphens ko allow karta hai.
- `\.`: Literal dot (dot ko escape karna padta hai).
- `[a-zA-Z]{2,}$`: Domain extension - at least 2 letters ke saath end hota hai.

### 2. Validate Phone Number

**Function:**
```javascript
function validatePhoneNumber(phone) {
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    return pattern.test(phone);
}
```

**Regex Explanation:**
- `^`: String ki starting ko indicate karta hai.
- `\d{3}`: 3 digits.
- `-`: Literal hyphen.
- `\d{3}`: 3 digits.
- `-`: Literal hyphen.
- `\d{4}$`: 4 digits aur string ki ending ko indicate karta hai.

### 3. Validate URL

**Function:**
```javascript
function validateURL(url) {
    const pattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(url);
}
```

**Regex Explanation:**
- `^`: String ki starting ko indicate karta hai.
- `(http:\/\/|https:\/\/)`: `http://` ya `https://` ko match karta hai.
- `[a-zA-Z0-9.-]+`: Domain name - letters, numbers, dots aur hyphens ko allow karta hai.
- `\.`: Literal dot.
- `[a-zA-Z]{2,}$`: Domain extension - at least 2 letters ke saath end hota hai.

### 4. Extract Numbers from String

**Function:**
```javascript
function extractNumbers(str) {
    const pattern = /\d+/g;
    return str.match(pattern).map(Number);
}
```

**Regex Explanation:**
- `\d+`: One or more digits ko match karta hai.
- `g`: Global flag - saari matches ko return karta hai.

### 5. Validate Password

**Function:**
```javascript
function validatePassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}
```

**Regex Explanation:**
- `^`: String ki starting ko indicate karta hai.
- `(?=.*[A-Z])`: At least one uppercase letter hona chahiye.
- `(?=.*[a-z])`: At least one lowercase letter hona chahiye.
- `(?=.*\d)`: At least one digit hona chahiye.
- `(?=.*[@$!%*?&])`: At least one special character hona chahiye.
- `[A-Za-z\d@$!%*?&]{8,}$`: Minimum 8 characters hona chahiye aur allowed characters - uppercase, lowercase, digits aur special characters.

### Summary in Hinglish

**Email Validation:**
Email ka format `local@domain` hona chahiye jisme local part letters, numbers, dots, hyphens, aur underscores ko include karta hai aur domain part mein ek dot hona chahiye jo domain name aur top-level domain ko separate karta hai.

**Phone Number Validation:**
Phone number ka format `123-456-7890` hona chahiye.

**URL Validation:**
URL `http://` ya `https://` se start hona chahiye followed by one or more word characters ya dots, phir ek dot, aur ek valid domain extension jaise `.com`, `.net`, etc.

**Extract Numbers from String:**
String se saare numbers ko extract karke ek array mein return karta hai.

**Password Validation:**
Password minimum 8 characters ka hona chahiye aur at least ek uppercase letter, ek lowercase letter, ek digit, aur ek special character hona chahiye.

Isse aapko regex patterns aur functions ko samajhne mein madad milegi. If you need further clarification, feel free to ask!
