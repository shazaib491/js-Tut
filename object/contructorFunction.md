
# Constructor Function Example in JavaScript

This example demonstrates how to use a constructor function to create objects and add methods to their prototype for shared behavior, focusing on managing a car's properties and actions.

```javascript
// Constructor function for Car
function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.isEngineOn = false;
}

// Adding methods to Car's prototype
Car.prototype.repaint = function(newColor) {
  this.color = newColor;
  console.log(\`Car repainted to \${this.color}.\`);
};

Car.prototype.startEngine = function() {
  this.isEngineOn = true;
  console.log('Engine started.');
};

Car.prototype.stopEngine = function() {
  this.isEngineOn = false;
  console.log('Engine stopped.');
};

Car.prototype.ride = function() {
  if (this.isEngineOn) {
    console.log('Car is moving.');
  } else {
    console.log('Start the engine first.');
  }
};

// Creating and using a Car object
var myCar = new Car('Toyota', 'Corolla', 'red');
myCar.startEngine();
myCar.ride(); // Output: Car is moving.
myCar.stopEngine(); // Output: Engine stopped.
myCar.repaint('blue'); // Output: Car repainted to blue.
```

This approach shows how to encapsulate data and methods related to an object, adhering to the principles of Object-Oriented Programming in JavaScript using constructor functions and prototypes.
