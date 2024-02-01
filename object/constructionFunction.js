function Dog(breed, age, color) {
    this.bread = breed;
    this.age = age;
    this.color = color;
  
    //private properties
    let price;
  
    //setter function to set price value
    this.setPrice = function (amount) {
      if (typeof amount === "number") {
        if (amount > 100 && amount < 500) {
          price = amount;
        }else{
          console.error("price must be 100 to 500")
        }
      } else {
        console.error("Invalid amount");
      }
    };
  
    //getter function to get price value
    this.getPrice = function () {
      return price;
    };
  }
  
  Dog.prototype.greet = function () {
    console.log("Hello", this.bread);
  };
  
  const firstDog = new Dog("german", 30, "black");
  
  const secondDog = new Dog("blabla", 20, "white");
  
  firstDog.setPrice(450);
  console.log(firstDog.getPrice());
  firstDog.greet();
  secondDog.greet();
  
  