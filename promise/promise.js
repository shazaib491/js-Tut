function sum(a, b) {
  return new Promise((resolve, reject) => {
    let s = a + b;
    setTimeout(()=>{
      if (s) {
        resolve("Sum of two no is" + s);
      } else {
        reject("Promise is reject");
      }
    },10000)
  });
}

sum(10, 20)
.then(success)
.catch(error);

// kam ho gya to
function success(value) {
  console.log("Success", value);
}

function error(value) {
  console.log("Error", value);
}
