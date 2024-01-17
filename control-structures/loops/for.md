
```markdown
# For Loop Examples and Iteration Tables

## 1. Basic Counting Up
**Program**:
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Number " + i);
}
```

**Iteration Table**:
| Iteration | `i` Value | Output       |
|-----------|-----------|--------------|
| 1         | 1         | "Number 1"   |
| 2         | 2         | "Number 2"   |
| 3         | 3         | "Number 3"   |
| 4         | 4         | "Number 4"   |
| 5         | 5         | "Number 5"   |

## 2. Counting Down
**Program**:
```javascript
for (let i = 5; i >= 1; i--) {
    console.log("Countdown: " + i);
}
```

**Iteration Table**:
| Iteration | `i` Value | Output         |
|-----------|-----------|----------------|
| 1         | 5         | "Countdown: 5" |
| 2         | 4         | "Countdown: 4" |
| 3         | 3         | "Countdown: 3" |
| 4         | 2         | "Countdown: 2" |
| 5         | 1         | "Countdown: 1" |

## 3. Multiplication Table
**Program**:
```javascript
let num = 3;
for (let i = 1; i <= 5; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}
```

**Iteration Table**:
| Iteration | `i` Value | Output         |
|-----------|-----------|----------------|
| 1         | 1         | "3 * 1 = 3"    |
| 2         | 2         | "3 * 2 = 6"    |
| 3         | 3         | "3 * 3 = 9"    |
| 4         | 4         | "3 * 4 = 12"   |
| 5         | 5         | "3 * 5 = 15"   |

## 4. Summation
**Program**:
```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum is: " + sum);
```

**Iteration Table**:
| Iteration | `i` Value | Sum   | Output       |
|-----------|-----------|-------|--------------|
| 1         | 1         | 1     |              |
| 2         | 2         | 3     |              |
| 3         | 3         | 6     |              |
| 4         | 4         | 10    |              |
| 5         | 5         | 15    | "Sum is: 15" |

## 5. Skipping Numbers
**Program**:
```javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
```

**Iteration Table**:
| Iteration | `i` Value | Output |
|-----------|-----------|--------|
| 1         | 0         | 0      |
| 2         | 2         | 2      |
| 3         | 4         | 4      |
| 4         | 6         | 6      |
| 5         | 8         | 8      |
| 6         | 10        | 10     |
```

This Markdown content provides a clear and structured way to present the `for` loop programs alongside iteration tables that show the value of the loop's control variable and the corresponding output for each iteration.