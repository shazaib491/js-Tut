let jsonObj = { name: "John Doe", age: 30 };
let jsonString = JSON.stringify(jsonObj);
console.log(jsonString); // '{"name":"John Doe","age":30}'

console.log(JSON.parse(jsonString))