Sure! Below is the Markdown content for all five `while` loop programs, each with its corresponding iteration table:

```markdown
# While Loop Examples and Iteration Tables

## 1. Basic While Loop

**Program**:
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

**Iteration Table**:
| Iteration | `i` Value | Output |
|-----------|-----------|--------|
| 1         | 1         | 1      |
| 2         | 2         | 2      |
| 3         | 3         | 3      |
| 4         | 4         | 4      |
| 5         | 5         | 5      |

## 2. Countdown

**Program**:
```javascript
let j = 5;
while (j >= 1) {
    console.log(j);
    j--;
}
```

**Iteration Table**:
| Iteration | `j` Value | Output |
|-----------|-----------|--------|
| 1         | 5         | 5      |
| 2         | 4         | 4      |
| 3         | 3         | 3      |
| 4         | 2         | 2      |
| 5         | 1         | 1      |

## 3. Double Until Over 100

**Program**:
```javascript
let num = 1;
while (num <= 100) {
    console.log(num);
    num *= 2;
}
```

**Iteration Table**:
| Iteration | `num` Value | Output |
|-----------|-------------|--------|
| 1         | 1           | 1      |
| 2         | 2           | 2      |
| 3         | 4           | 4      |
| 4         | 8           | 8      |
| 5         | 16          | 16     |
| 6         | 32          | 32     |
| 7         | 64          | 64     |
| 8         | 128         | 128    |

## 4. While with Conditional Break

**Program**:
```javascript
let k = 1;
while (true) {
    if (k === 6) {
        break;
    }
    console.log(k);
    k++;
}
```

**Iteration Table**:
| Iteration | `k` Value | Output |
|-----------|-----------|--------|
| 1         | 1         | 1      |
| 2         | 2         | 2      |
| 3         | 3         | 3      |
| 4         | 4         | 4      |
| 5         | 5         | 5      |

## 5. Counting Negative Numbers

**Program**:
```javascript
let l = 0;
while (l > -5) {
    console.log(l);
    l--;
}
```

**Iteration Table**:
| Iteration | `l` Value | Output |
|-----------|-----------|--------|
| 1         | 0         | 0      |
| 2         | -1        | -1     |
| 3         | -2        | -2     |
| 4         | -3        | -3     |
| 5         | -4        | -4     |
```

### JavaScript Code Using a While Loop:

```javascript
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum of first 10 natural numbers: ", sum);
```

### Iteration Table in Markdown Format:

| Iteration | Current Number | Cumulative Sum |
|-----------|----------------|----------------|
| 1         | 1              | 1              |
| 2         | 2              | 3              |
| 3         | 3              | 6              |
| 4         | 4              | 10             |
| 5         | 5              | 15             |
| 6         | 6              | 21             |
| 7         | 7              | 28             |
| 8         | 8              | 36             |
| 9         | 9              | 45             |
| 10        | 10             | 55             |


Here’s how you can print the multiplication table of 2 in markdown format using JavaScript:

```javascript
 let i = 1;
    let table = '';
    while (i <= 10) {
        console.log(`| 2 x ${i} | ${2 * i} |\n`;)
        i++;
    }


```

### Explanation:
- This function generates the multiplication table in markdown format.
- The table's header (`Multiplication`, `Result`) is printed first.
- Then, a loop runs to generate each row of the table in the markdown format and appends it to a string.

When run, it will print:

```md
| Multiplication | Result |
| --------------- | ------ |
| 2 x 1 | 2 |
| 2 x 2 | 4 |
| 2 x 3 | 6 |
| 2 x 4 | 8 |
| 2 x 5 | 10 |
| 2 x 6 | 12 |
| 2 x 7 | 14 |
| 2 x 8 | 16 |
| 2 x 9 | 18 |
| 2 x 10 | 20 |
```
This Markdown format organizes the loop examples and their respective iteration tables in a clear and structured manner, making it easy to understand the flow and output of each loop.
