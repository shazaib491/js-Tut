
# Introduction to Regular Expressions in JavaScript

## Definition
Regular expressions are patterns used to match character combinations in strings. They are commonly used for searching, replacing, and validating data.

## Use Cases
1. **Validation**: Checking if an input (like an email or phone number) meets certain criteria.
2. **Searching**: Finding specific patterns within a string.
3. **Replacing**: Replacing parts of a string based on a pattern.

## Basic Syntax
1. **Creating a Regex**:
   - Using literal notation: `/pattern/flags`
   - Using the `RegExp` constructor: `new RegExp('pattern', 'flags')`

2. **Flags**:
   - `g` (global): Search for all matches.
   - `i` (ignore case): Case-insensitive search.
   - `m` (multiline): Multiline search.

## Special Characters
- `.`: Matches any character except newline.
- `\d`: Matches any digit (0-9).
- `\w`: Matches any word character (alphanumeric + underscore).
- `\s`: Matches any whitespace character (space, tab, newline).
- `\D`: Matches any non-digit.
- `\W`: Matches any non-word character.
- `\S`: Matches any non-whitespace character.
- `^`: Matches the beginning of a string.
- `$`: Matches the end of a string.

## Character Classes
- `[abc]`: Matches any one of the characters a, b, or c.
- `[a-z]`: Matches any character from a to z.
- `[^abc]`: Matches any character except a, b, or c.

## Quantifiers
- `*`: Matches 0 or more times.
- `+`: Matches 1 or more times.
- `?`: Matches 0 or 1 time.
- `{n}`: Matches exactly n times.
- `{n,}`: Matches at least n times.
- `{n,m}`: Matches between n and m times.

## Grouping and Alternation
- `(abc)`: Groups characters as a single unit.
- `|`: Alternation (logical OR).

## Escaping Special Characters
- `\`: Used to escape special characters (e.g., `\.`, `\*`, `\`).

## Methods in JavaScript
1. **test()**: Tests if a pattern exists in a string. Returns `true` or `false`.
   ```javascript
   let regex = /hello/;
   console.log(regex.test("hello world")); // true
   ```

2. **exec()**: Executes a search for a match in a string. Returns an array of matched results or `null`.
   ```javascript
   let regex = /hello/;
   let result = regex.exec("hello world");
   console.log(result); // ["hello"]
   ```

3. **match()**: Returns an array of all matches in a string.
   ```javascript
   let str = "hello world hello";
   let result = str.match(/hello/g);
   console.log(result); // ["hello", "hello"]
   ```

4. **search()**: Searches for a match and returns the index of the first match, or `-1` if not found.
   ```javascript
   let str = "hello world";
   let index = str.search(/world/);
   console.log(index); // 6
   ```

5. **replace()**: Replaces matched substrings with a new substring.
   ```javascript
   let str = "hello world";
   let newStr = str.replace(/world/, "everyone");
   console.log(newStr); // "hello everyone"
   ```

6. **split()**: Splits a string into an array of substrings based on a pattern.
   ```javascript
   let str = "apple, banana, cherry";
   let fruits = str.split(/, /);
   console.log(fruits); // ["apple", "banana", "cherry"]
   ```

## Examples

1. **Validating an Email Address**:
   ```javascript
   let email = "test@example.com";
   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   console.log(regex.test(email)); // true
   ```

2. **Extracting Numbers from a String**:
   ```javascript
   let str = "The price is 100 dollars";
   let regex = /\d+/g;
   let numbers = str.match(regex);
   console.log(numbers); // ["100"]
   ```

3. **Replacing Whitespace with Hyphens**:
   ```javascript
   let str = "hello world";
   let newStr = str.replace(/\s/g, "-");
   console.log(newStr); // "hello-world"
   ```

   
regular expression for validating common mobile phone number formats.

 This example assumes a basic 10-digit mobile number, which is common in many countries, without any country code or special characters.

### Basic 10-digit Mobile Number
```javascript
let regex = /^[0-9]{10}$/;
```

### Explanation:
- `^`: Asserts the start of the string.
- `[0-9]`: Matches any digit from 0 to 9.
- `{10}`: Ensures that the previous token (a digit) is repeated exactly 10 times.
- `$`: Asserts the end of the string.

### Example Usage
```javascript
let validNumber = "1234567890";
let invalidNumber = "12345abcde";

console.log(regex.test(validNumber)); // true
console.log(regex.test(invalidNumber)); // false
```

### Including Country Code and Special Characters
If you want a more flexible regex that can handle country codes and special characters like spaces, dashes, or parentheses, you can use the following regex:

```javascript
let regex = /^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
```

### Explanation:
- `^`: Asserts the start of the string.
- `\+?`: Matches an optional '+' character (for country code).
- `(\d{1,3})?`: Matches an optional country code of 1 to 3 digits.
- `[-.\s]?`: Matches an optional separator (dash, dot, or space).
- `(\d{1,4})`: Matches 1 to 4 digits (area code).
- `[-.\s]?`: Matches an optional separator.
- `(\d{1,4})`: Matches 1 to 4 digits (prefix).
- `[-.\s]?`: Matches an optional separator.
- `(\d{1,4})`: Matches 1 to 4 digits (line number).
- `[-.\s]?`: Matches an optional separator.
- `(\d{1,9})`: Matches 1 to 9 digits (extension).
- `$`: Asserts the end of the string.

### Example Usage
```javascript
let validNumber1 = "+1 123-456-7890";
let validNumber2 = "1234567890";
let invalidNumber = "12345abcde";

console.log(regex.test(validNumber1)); // true
console.log(regex.test(validNumber2)); // true
console.log(regex.test(invalidNumber)); // false
```

## Practice Exercises
1. **Validate a Phone Number**: Write a regex to validate phone numbers in the format `(123) 456-7890`.
2. **Extract Words**: Write a regex to extract all words from a string.
3. **Replace Vowels**: Write a regex to replace all vowels in a string with asterisks (`*`).

By understanding these basic concepts and practicing with examples, students will be well-equipped to use regular expressions in their JavaScript projects.
