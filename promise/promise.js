function sum(a, b) {
  return new Promise((resolve, reject) => {
    s = a + b;
    if (s) {
      resolve("sum of given no is " + s);
    } else {
      reject("negative value");
    }
  });
}

sum(0, 0)
  .then((data) => {
    console.log(data);
  })
  .catch((dta) => {
    console.log(dta);
  })
  .finally(() => {
    console.log("done");
  });
