function House(door, window, room) {
  this.door = door;
  this.window = window;
  this.room = room;
  let housePrice;

  this.setPrice = function (amount) {
    housePrice = amount;
  };

  //pivate
  function getPrice() {
    return housePrice;
  }

  this.calculator = function (a, b, c, d) {
    console.log(sum(a, b, c, d));
  };

  //private 
  function sum(a, b, c, d) {
    return a + b + c + d;
  }

  this.sum=sum;//public


}


House.prototype.printHouseDetail=function(){
    console.log("=============House Details =================")
                    console.log("Doors",this.door);
                    console.log("Windows",this.window);
                    console.log("Rooms",this.room);
    console.log("=============House Details =================")
}




const house = new House("3", "3", 5);
const house1 = new House("3", "3", 5);
const house2 = new House("3", "3", 5);
const house3 = new House("3", "3", 5);
house3.printHouseDetail();


// house.setPrice(100000000);
// // console.log()
// house.calculator(1,2,3,4)
// console.log(house.getPrice());
// console.log(house.housePrice);/
structuredClone