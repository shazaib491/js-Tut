// else if Ladder: This structure is a series of if statements, where each if statement has an else if clause. It's used to differentiate between multiple conditions.
// marks=100;
// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 70) {
//     console.log("Grade C");
// } else if (marks >= 60) {
//     console.log("Grade D");
// } else {
//     console.log("Grade F");
// }

// if (temperature > 35) {
//     console.log("Extremely hot");
// } else if (temperature > 30) {
//     console.log("Very hot");
// } else if (temperature > 25) {
//     console.log("Moderately hot");
// } else if (temperature > 20) {
//     console.log("Warm");
// } else {
//     console.log("Cool");
// }

// if (day === "Monday") {
//     console.log("Start of the work week.");
// } else if (day === "Wednesday") {
//     console.log("Midweek.");
// } else if (day === "Friday") {
//     console.log("End of the work week.");
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend!");
// } else {
//     console.log("Regular workday.");
// }

// if (animal === 'Dog') {
//     console.log("Pet: Dog");
// } else if (animal === 'Cat') {
//     console.log("Pet: Cat");
// } else if (animal === 'Bird') {
//     console.log("Pet: Bird");
// } else {
//     console.log("Unknown pet");
// }

// if (score < 50) {
//     console.log("Fail");
// } else if (score < 65) {
//     console.log("Pass");
// } else if (score < 75) {
//     console.log("Good");
// } else if (score < 90) {
//     console.log("Very Good");
// } else {
//     console.log("Excellent");
// }

// // // console.log(a);
// // // var a = 10;

// // // //block scope is ke ander jo bhi likha jata he wo bhar access nhi ho skta
// // // {
// // //   var sum = 1 + 2;
// // // }

// // // console.log(sum);

// // // for (var i = 0; i < 10; i++) {
// // //   console.log(i);
// // // }

// // // console.log(i);

// // // //redeclare
// // // var username = "admin";

// // // var username = "username";

// // // console.log(username);

// // // var password = "password";

// // // password = "admin";

// // // console.log(password);

// // // temporal dead zone
// // let a=10;
// // // console.log(a);

// // // {
// // //     let j=100;
// // // }

// // // console.log(j)
// // // console.log(i)

// // for(let i=0; i<10; i++){
// //     console.log(i)
// // }

// // let a=100;

// // let number=10;

// // number=200;

// // console.log(number)

// // const a=10;

// // {
// //     const number=200;
// // }

// // console.log(number);

// // for(const i=0; i<10; i++){
// //     console.log(i);
// // }

// // const open="windows";
// // open="admin"
// // console.log(open);

// let temprature=23;
// if(temprature > 25)
// {
//     console.log("condiiton is true")
// }else{
//     console.log("condiiton is false")
// }

// isLoggedIn = true;
// userRole = "admin";
// department = "administ";

// if (isLoggedIn) {
//   if (userRole === "admin") {
//     if (department === "administ") {
//       console.log("Access to all systems.");
//     } else {
//       console.log("Yopu dont have access");
//     }
//   } else {
//     console.log("only admin is allowed");
//   }
// } else {
//   console.log("wrong credentials");
// }

// marks=40;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 80) {
//     console.log("Grade B");
// } else if (marks >= 70) {
//     console.log("Grade C");
// } else {
//     console.log("Try harder next time.");
// }

// console.log(new Date());
// let days = new Date().getDay()+1;

// switch (days) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("So jao sunday he");
// }

// let day = "Tuesday";

// switch (day) {
//     case "Monday":
//         console.log("It's Monday, the start of the week.");
//         break;
//     case "Tuesday":
//         console.log("It's Tuesday, second day of the week.");
//         break;
//     case "Wednesday":
//         console.log("It's Wednesday, middle of the week.");
//         break;
//     case "Thursday":
//         console.log("It's Thursday, almost the weekend.");
//         break;
//     case "Friday":
//         console.log("It's Friday, weekend starts tomorrow!");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend, time to relax!");
//         break;
//     default:
//         console.log("That's not a valid day!");
// }

let obj = {
  name: "admin",
  email: "AdmiN@gmail.com",
  password: "admin@123",
};

let { email } = obj;

// console.log(email);

let arr = [1, 2, 3, 4, 5];
let [zeroElement, secondElement, thirdElement, , fifth] = arr;
// console.log(zeroElement, secondElement, thirdElement, fifth);

// let username=obj['name'];
// console.log(obj)

// let str = "p";

// if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

// do while loop ek bar to chalega hi chalega
// while loop jab hamko nhi maloom ho final step kaha band hogi ye wha pr chalega
// for loop initial or final value wha pr ham for loop

//wap to print 5 times hello world on the screen
// expected output:
// hello world
// hello world
// hello world
// hello world
// hello world

// let cnt = 6;

// do {
//   console.log("hello world");
//   cnt++;
// } while (cnt <= 5);

// using while loop
// let counter = 1;
// while (counter<=5) {
//     if(counter==2){
//         counter++;
//         continue;
//     }
//   console.log("hello world");
//   counter++;
// }



// for (let counter = 1; counter <= 5; counter++) {
//     if (counter == 2) {
//         continue;
//     }
//     console.log("hello world");
// }


// * * * * 
// * * * * 
// * * * * 
// * * * * 

let rows=4;
let columns=4;

for(let i=0;i<=rows;i++) {
    let row="";
    for(let j=0; j<=i;j++) {
        row+="* ";
    }
    console.log(row);
}