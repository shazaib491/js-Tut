
```markdown
# Control Statements and Loops in JavaScript

Control statements aur loops JavaScript mein program ko control karne ke liye use kiye jaate hain. Aaiye inhe samajhte hain asaan shabdon mein.

## Control Statements

Control statements decisions lene mein madad karte hain, yeh tay karte hain ki konsa code kab chalega.

1. **`if` Statement**: Kisi condition ko check karta hai, aur agar wo sach hai, to code chalata hai.
   ```javascript
   if (temperature > 30) {
       console.log("Garmi bahut hai!");
   }
   ```

2. **`else` Statement**: Agar `if` ki condition galat hai, to `else` ka code chalega.
   ```javascript
   if (temperature > 30) {
       console.log("Garmi bahut hai!");
   } else {
       console.log("Maamuli garmi hai.");
   }
   ```

3. **`else if` Statement**: Kahi saari conditions ko check karne ke liye use hota hai.
   ```javascript
   if (temperature > 30) {
       console.log("Bahut garmi hai!");
   } else if (temperature > 20) {
       console.log("Thodi garmi hai.");
   } else {
       console.log("Garmi nahi hai.");
   }
   ```

## Loops

Loops ka use tab hota hai jab humein ek hi tarah ka kaam baar-baar karna hota hai.

1. **`for` Loop**: Jab humein pata ho ki loop ko kitni baar chalana hai.
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i); // 0 se 4 tak print hoga
   }
   ```

2. **`while` Loop**: Ye tab tak chalta hai jab tak condition sach hai.
   ```javascript
   let i = 0;
   while (i < 5) {
       console.log(i); // 0 se 4 tak print hoga
       i++;
   }
   ```

3. **`do...while` Loop**: Ye kam se kam ek baar chalega, fir condition check karega.
   ```javascript
   let i = 0;
   do {
       console.log(i); // 0 se 4 tak print hoga
       i++;
   } while (i < 5);
   ```

4. **`for...in` Loop**: Ye object ke properties ko loop karta hai.
   ```javascript
   const obj = {a: 1, b: 2, c: 3};
   for (let prop in obj) {
       console.log(`${prop}: ${obj[prop]}`);
   }
   ```

5. **`for...of` Loop**: Ye iterable objects (like arrays, strings) ke elements ko loop karta hai.
   ```javascript
   const arr = [1, 2, 3, 4, 5];
   for (let value of arr) {
       console.log(value); // 1, 2, 3, 4, 5 print hoga
   }
   ```

Ye thi kuch basic information control statements aur loops ke baare mein, jo aapko JavaScript mein coding karne mein madad karegi.
```

