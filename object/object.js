// let username={
//     firstname:"super",
//     lastname:"admin"
// }

// let username={
//     name:"admin",
//     age:18,
//     print:function(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

let userdetail = {
  name: "adminasdsa",
  email: "admin@example.com",
  greet: function () {
    console.log("Hello ", this.name);
  },
};

let secondObject = {
  name: "admindssdfsaasd",
  greet: function () {
    console.log("Hello ", this.name);
  },
};

console.log(Object.keys(userdetail));
console.log(Object.values(userdetail));
console.log(Object.entries(userdetail));

userdetail.greet();
secondObject.greet();

// Object.freeze(myObject);

// console.log(myObject)

// myObject.props="Wordls"

// Object.seal(myObject);

// myObject.props="sjdnjdsnfou"
// myObject.name="admin"

// console.log(myObject)

//  let myObject={
//   props:"hello",
//   name:"Admin",
// }

// let newObject=myObj;

// newObject.name="sadmlkdsamlasmdlsak"
// console.log(myObject)
// console.log(newObject)

let myObject = {
  name: "admin",
  email: "Admin@gmail.com",
  password: "password",
  user: {
    name: "admin",
    email: "admin@gmail.com",
  },
};


let customObject={...myObject};
customObject.name="yaseen";
customObject.user.name="shazaib";
console.log(customObject);
console.log(myObject)
