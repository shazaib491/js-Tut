
# Car Management System: Functional vs. OOP Approach

## English Explanation

### Functional (Procedural) Approach

In a functional approach, we manipulate data directly using functions. This approach is straightforward, suitable for simpler tasks but can become challenging to manage as complexity increases due to the lack of organization in handling related data and behaviors.

In procedural programming, you write instructions that tell the computer what to do step by step, like a recipe. Each step is executed in order, and you manage data and operations separately. While this is great for simple tasks, as your "recipe" gets longer and more complex, it can become harder to keep track of everything.  

Procedural programming mein, aap computer ko step by step instructions dete hain, jaise kisi recipe ko follow karna. Har ek step ko order mein execute kiya jata hai, aur aap data aur operations ko alag manage karte hain. Simple tasks ke liye ye bahut accha hai, lekin jab aapki "recipe" lambi aur complex ho jati hai, toh sab kuch track karna mushkil ho sakta hai.

### Example Code:
```javascript
let car = { make: 'Toyota', model: 'Corolla', color: 'red', isEngineOn: false };

function repaintCar(car, newColor) {
  car.color = newColor;
  console.log(\`Car repainted to \${newColor}.\`);
}

function startEngine(car) {
  car.isEngineOn = true;
  console.log('Engine started.');
}

function stopEngine(car) {
  car.isEngineOn = false;
  console.log('Engine stopped.');
}

repaintCar(car, 'blue');
startEngine(car);
stopEngine(car);
```

### OOP (Class-Based) Approach

The OOP approach encapsulates data and methods within classes, offering better organization, reusability, and scalability. It's particularly beneficial for complex systems.

Object-Oriented Programming (OOP) is like creating a blueprint (class) for a house (object). The blueprint defines what the house should have (properties like color and size) and what it can do (methods like openDoor). You can use the same blueprint to build many houses, and each house can have its own specific features. This makes managing complex systems easier because you group related properties and behaviors into single units (objects).

### Constructors in Classes - Simplified

Think of a constructor in a class as the moment you decide to build a house from your blueprint. It's where you specify the details: the color of the house, how many windows it has, etc. Constructors set up your object's initial state with these details, making sure every object created from the class has everything it needs to function properly.

### Example Code:
```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isEngineOn = false;
  }

  repaint(newColor) {
    this.color = newColor;
    console.log(\`Car repainted to \${newColor}.\`);
  }

  startEngine() {
    this.isEngineOn = true;
    console.log('Engine started.');
  }

  stopEngine() {
    this.isEngineOn = false;
    console.log('Engine stopped.');
  }
}

let myCar = new Car('Toyota', 'Corolla', 'red');
myCar.repaint('blue');
myCar.startEngine();
myCar.stopEngine();
```

## Hinglish Explanation

### Functional (Procedural) Approach

Functional approach mein, hum directly data ko functions ke zariye manipulate karte hain. Ye approach simple tasks ke liye suit karta hai, lekin jab complexity badh jati hai, toh is approach ko manage karna mushkil ho jata hai kyunki related data aur behaviors ko handle karne ki organization ki kami hoti hai.

### OOP (Class-Based) Approach

OOP approach mein, data aur methods ko classes mein encapsulate kiya jata hai, jo behtar organization, reusability, aur scalability provide karta hai. Ye approach khaas taur par complex systems ke liye faydemand hai.
