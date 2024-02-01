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

userdetail.greet();
secondObject.greet();

