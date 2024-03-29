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

This Markdown format organizes the loop examples and their respective iteration tables in a clear and structured manner, making it easy to understand the flow and output of each loop.