/**
 * 
 * Callbacks: Require you to write and pass custom functions for both success and error handling.
Promises: Use a built-in mechanism (resolve and reject) for success and error handling. You attach your own handlers (functions) to these outcomes using .then() and .catch().
 */

// function fetchDataFromSource1(callback) {
//     // Simulating a data fetch
//     setTimeout(() => {
//         callback(null, 'Data from source 1');
//     }, 1000);
// }

// function fetchDataFromSource2(callback) {
//     // Simulating a data fetch
//     setTimeout(() => {
//         callback(null, 'Data from source 2');
//     }, 1000);
// }

// // Nesting callbacks to fetch data from two sources
// fetchDataFromSource1((error1, data1) => {
//     if (error1) {
//         console.error(error1);
//     } else {
//         console.log(data1);
//         fetchDataFromSource2((error2, data2) => {
//             if (error2) {
//                 console.error(error2);
//             } else {
//                 console.log(data2);
//             }
//         });
//     }
// });

// function fetchDataFromSource1() {
//     return new Promise((resolve, reject) => {
//         // Simulating a data fetch
//         setTimeout(() => {
//             resolve('Data from source 1');
//         }, 1000);
//     });
// }

// function fetchDataFromSource2() {
//     return new Promise((resolve, reject) => {
//         // Simulating a data fetch
//         setTimeout(() => {
//             resolve('Data from source 2');
//         }, 1000);
//     });
// }

// // Using Promises to fetch data from two sources
// fetchDataFromSource1()
//     .then(data1 => {
//         console.log(data1);
//         return fetchDataFromSource2();
//     })
//     .then(data2 => {
//         console.log(data2);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// reject;
//promise hell
function prepareStarter() {
  return new Promise((resolve, reject) => {
    console.log("Preparing the starter...");
    setTimeout(() => {
      console.log("Starter is ready!");
      resolve("promise is resolved");
    }, 1000);
  });
}

function prepareMainCourse() {
  return new Promise((resolve, reject) => {
    console.log("Preparing the main course...");
    setTimeout(() => {
      console.log("Main course is ready!");
      resolve();
    }, 5000);
  });
}

function prepareDessert() {
  return new Promise((resolve, reject) => {
    console.log("Preparing the dessert...");
    setTimeout(() => {
      console.log("Dessert is ready!");
      reject("khatte me shakar nhi he ");
    }, 1000);
  });
}

// prepareStarter()
//   .then(() => {
//     prepareMainCourse()
//       .then(() => {
//         prepareDessert()
//           .then(() => {
//             console.log("All courses are ready!");
//           })
//           .catch((error) => console.log(error));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// prepareStarter()
//   .then(() => {
//     return prepareMainCourse();
//   })
//   .then(() => {
//     return prepareDessert();
//   })
//   .then(() => {
//     console.log("All courses are ready!");
//   })
//   .catch((error) => {
//     console.log("Something went wrong");
//   });

// prepareStarter()
//   .then((response) => prepareMainCourse())
//   .then(() => prepareDessert())
//   .then(() => {
//     console.log("All courses are ready!");
//   })
//   .catch((error) => {
//     console.log("Something went wrong");
//   });

async function course() {
  try {
    let starter = await prepareStarter();
    let mainCourse = await prepareMainCourse();
    let dessert = await prepareDessert();
  } catch (error) {
    console.log(error);
  }
}

course().then(() => {
  console.log("All courses are ready!");
});

// prepareStarter()
//     .then(() => prepareMainCourse())
//     .then(() => prepareDessert())
//     .then(() => {
//         console.log("All courses are ready!");
//     })
//     .catch((error) => {
//         console.error("An error occurred:", error);
//     });

// async function toHandleAsyncOperation() {
//   const startReady = await prepareStarter();
//   const mainCourse = await prepareMainCourse();
//   const desertCourse = await prepareDessert();
// }
// toHandleAsyncOperation();
// console.log("handling asyc operations");
