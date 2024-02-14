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

// let userdetail = {
//   name: "adminasdsa",
//   email: "admin@example.com",
//   greet: function () {
//     console.log("Hello ", this.name);
//   },
// };

// let secondObject = {
//   name: "admindssdfsaasd",
//   greet: function () {
//     console.log("Hello ", this.name);
//   },
// };

// console.log(Object.keys(userdetail));
// console.log(Object.values(userdetail));
// console.log(Object.entries(userdetail));

// userdetail.greet();
// secondObject.greet();

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

// let myObject = {
//   name: "admin",
//   email: "Admin@gmail.com",
//   password: "password",
//   user: {
//     name: "admin",
//     email: "admin@gmail.com",
//   },
// };

// let customObject={...myObject};
// customObject.name="yaseen";
// customObject.user.name="shazaib";
// console.log(customObject);
// console.log(myObject)

// let user = {
//   firstName: "salman",
//   lastName: "khan",
//   age: 30,
//   eating: function () {},
//   sleeping: function () {},
//   gym: function () {},
// };

//blue print
// function Car(make, model, amount) {
//   this.model = model;
//   //private
//   let price;

//   this.make = make;

// this.setPrice = function (price) {
//     amount=price;
// };

// this.getPrice = function () {
//   return price;
// };

//   function repairPaint() {
//     console.log("repairPaint")
//   }

//   function startEngine() {}

//   function stopEngine() {}
// }

// let car = new Car("Toyota", "fortuner", 100);
// car.repairPaint();
// car.model = "admn";
// car.repairPaint();

// let secondCar = new Car("", "", 100);

console.log(this);

let username = {
  name: "admin",
  email: "admin@example.com",
  // print: function () {
  //   console.log("First", this.name);
  // },
  // printEmail: function (value) {
  //   // console.log("First", username.email, value);
  //   return this.email;
  // },
};

// console.log(username["email"]);
// username.print();
// console.log(username.printEmail("admin"));
// for(let props in username){
//   console.log(props)
//   console.log(username[props])
// }

// function Party(date, name, price) {
//   this.date = date;//public 
//   this.name = name; //public
//   let prices = price; //public
   

//   // this.cakeCuttingCeremony = function () {
//   //   console.log("Happy Birthday", this.name);
//   // };

//   this.decoration = function (product) {
//     console.log("Decration", product);
//   };

//   this.analyzeAmount = function (amount) {
//     if (amount > 100 && amount < 1000) {
//       console.log("Amount", amount);
//     }else{
//       console.log("Out of the budget kaddu dedo tum to")
//     }
//   };
// }

// Party.prototype.cakeCuttingCeremony=function(){
//     console.log("Happy Birthday", this.name);
// }

// const party = new Party("12.05.2023", "adol", "1000");
// party.decoration("ballon");
// party.analyzeAmount(999)
// party.cakeCuttingCeremony()
// const parties = new Party("14.02.2024", "adola", "1000");
// parties.cakeCuttingCeremony()

// console.log(party.date);
// console.log(party.name);
// console.log(party.prices);
// console.log(party);
// console.log(parties);

let obj={
  name:'admin',
  email:'admin@example.com',
  user:{
    id:1,
    password:'1234'
  }
}

let newObj=structuredClone(obj)
newObj.user.id=2;
newObj.name="adol";
console.log(obj)


