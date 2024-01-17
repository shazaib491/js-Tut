// Control structures programming mein rules hote hain jo batate hain ki program kaise chalega. Socho isko road ke traffic signals ki tarah - woh bhi batate hain gadi kab rukni hai, kab chalni hai. JavaScript mein, ye structures do kaam karte hain:

1. **Faisle Lene Wale Statements (Conditional Statements)**: Ye waise hain jaise agar aapko decision lena ho. Jaise ki:

   - **`if`**: Agar kuch sach hai, to kuch karo. Jaise ki, "Agar baarish ho rahi hai, to chhatri le lo."
     ```javascript
     if (baarishHoRahiHai) {
         leLoChhatri();
     }
     ```
   - **`else if` aur `else`**: Agar `if` ka condition galat hai, to kuch aur karo. Jaise, "Agar baarish nahi ho rahi, to chashma pehno."
     ```javascript
     if (baarishHoRahiHai) {
         leLoChhatri();
     } else {
         pehnoChashma();
     }
     ```
   - **Nested `if` (Andar ki `if`)**: Ye thoda complex hai, jaise "Agar aaj Sunday hai aur dukaan khuli hai, to shopping kar lo."
     ```javascript
     if (aajSundayHai) {
         if (dukaanKhuliHai) {
             karoShopping();
         }
     }
     ```
   - **`else if` Ladder**: Ye ek se jyada conditions check karta hai. Jaise, "Agar tum 18 saal ke ho, to vote do; nahi to school jao."
     ```javascript
     if (umar == 18) {
         doVote();
     } else if (umar < 18) {
         jaoSchool();
     }
     ```

2. **Loops (Baar-Baar Chalne Wale Codes)**: Ye tab use hote hain jab aapko ek hi type ka kaam baar-baar karna ho, jaise ki kisi list ke har item ko check karna. Do tarah ke loops hote hain:

   - **`for` Loop**: Isme aapko pata hota hai ki kitni baar loop chalana hai. Jaise, "10 baar 'Hello' print karo."
   - **`while` Loop**: Isme aap tab tak loop chalate hain jab tak ki koi condition sach hai. Jaise, "Jab tak chay garam hai, tab tak piyo."

Ye control structures aapko madad karte hain ki aapka code sahi time pe sahi kaam kare. Jaise traffic rules se traffic smoothly chalta hai, waise hi ye rules se aapka program smoothly chalta hai.