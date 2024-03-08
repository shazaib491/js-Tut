// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     let s = a + b; //10+20
//     setTimeout(() => {
//       if (s) {
//         //0 se bari value to ye truthy return krega
//         resolve(s);
//       } else {
//         reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
//       }
//     }, 1000);
//   });
// }

// function square(result) {
//   return new Promise((resolve, reject) => {
//     let s = result * result; //10+20
//     setTimeout(() => {
//       if (s) {
//         //0 se bari value to ye truthy return krega
//         resolve("sum of two no is " + s);
//       } else {
//         reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
//       }
//     }, 1000);
//   });
// }

// function multiply(result) {
//   return new Promise((resolve, reject) => {
//     let s = result * 2; //10+20
//     setTimeout(() => {
//       if (s) {
//         //0 se bari value to ye truthy return krega
//         resolve(s);
//       } else {
//         reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
//       }
//     }, 1000);
//   });
// }

// function divide(result) {
//   return new Promise((resolve, reject) => {
//     let s = result / 2; //10+20
//     setTimeout(() => {
//       if (s) {
//         //0 se bari value to ye truthy return krega
//         resolve(s);
//       } else {
//         reject("Promise is reject"); //ager 0 ya 0 se choti value hogi to falsy return krega
//       }
//     }, 1000);
//   });
// }

// sum(10, 20)
//   .then((sumResult) => {
//     square(sumResult)
//       .then((squareResult) => {
//         multiply(squareResult)
//           .then((multiplyResult) => {
//             divide(multiplyResult)
//               .then((divideResult) => {
//                 console.log(divideResult);
//               })
//               .catch((error) => console.log(error)); //divide
//           })
//           .catch((error) => {
//             //multiple
//             console.log(error);
//           });
//       })
//       .catch((err) => {
//         //sqaure
//         console.log(err);
//       });
//   })
//   .catch((error) => {
//     //sum
//     console.log(error);
//   });

// sum(10, 20)
// .then(success)
// .catch(error);

// // kam ho gya to
// function success(value) {
//   console.log("Success", value);
// }

// function error(value) {
//   console.log("Error", value);
// }

// //
// async function handleOperation() {
//   const sumResult = await sum(10, 20);
//   const sqaureResult = await square(sumResult);
//   const multipleResult = await multiply(sqaureResult);
//   const divideResult = await divide(multipleResult);
//   return divideResult;
// }

// console.log("hello world");
// handleOperation().then((answer) => {
//   console.log(answer);
// });

//
// 4 method
// GET
// POST
// PUT
// DELETE
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function getData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(data);
// }

// getData();

// let obj=new Promise();
let ischeck = true;
function getResponseFromServer() {
  return new Promise((resolve, reject) => {
    if (ischeck) {
      resolve("Promise is resovled");
    } else {
      reject("Promise is reject");
    }
  });
}

getResponseFromServer()
  .then(
    (response) => {
    console.log(response);
  }//recieve 
  
  )
  .catch((error) => {
    console.log(error);
  });
