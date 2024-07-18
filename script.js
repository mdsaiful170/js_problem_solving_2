/* 1. ES6 Destructuring
Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties. */

let person = {
  usernName: "mdSaifulIslam",
  age: 30,
};
const { userName, age } = person;
console.log(`I am ${userName} and I am ${age}`); //output "I am undefined and I am 30"




/* 2. ES6 Module
Problem: Create a module that exports a function to calculate the area of a circle and import it into another file. */
// got to index.html , import.js and module.js file







/* 3. ES6 Classes
Problem: Create a class Rectangle with properties width and height and a method to calculate the area. */

class recTangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}
let rectangleOne = new recTangle(150, 80);
console.log(rectangleOne.area()); //output is 12000






/* 4. Getter and Setter in ES6
Problem: Create a class Person with a getter and setter for the fullName property */

let personBox = {
  fristName: "md saiful",
  lastName: "islam",
  age: 20,
  get FullName() {
    return this.fristName + " " + this.lastName; // output md Ridoy Ahmed
  },
  set myFristName(editFristName) {
    this.fristName = editFristName;
  },
  set myLastName(editLastName) {
    this.lastName = editLastName;
  },
};

// edit fristName;
personBox.myFristName = "md Ridoy";
//eidt lastName:
personBox.myLastName = "Ahmed";

// getter output fullname
console.log(personBox.FullName); // output md Ridoy Ahmed







/* 5. Class Expressions
Problem: Create a class expression for a Circle with a method to calculate the circumference.*/

class cirCale {
  constructor(radius) {
    this.radius = radius;
  }
  circlaeCalculate() {
    return 2 * Math.PI * this.radius;
  }
}

let circaleOne = new cirCale(5);

console.log(circaleOne.circlaeCalculate());// 31.41592653589793







/* 6. JavaScript Computed Properties
Problem: Create an object with computed property names based on variables.*/

let myNameIs = "md";

let perSon = {
  [myNameIs]: "MD SAIFUL ISLAM",
  emila: "saifulsylhet00@gmail.com",
};

console.log(perSon[myNameIs]); //OutPut MD SAIFUL ISLAM
//       or
console.log(perSon["md"]); //OutPut MD SAIFUL ISLAM







/* 7. Inheritance
Problem: Create a base class Animal and a derived class Dog that inherits from Animal. */

class Animal {
  constructor(dogName) {
    this.dogName = dogName;
  }
  myDog() {
    return `my dog name si ${this.dogName}`;
  }
}
class dog extends Animal {
  constructor(dogName, dogAge) {
    super(dogName);
    this.dogAge = dogAge;
  }
  myDogIfno() {
    return `${this.myDog()} and he ${this.dogAge} years old`;
  }
}
let Dog1 = new dog("Chappie", 9);
console.log(Dog1.myDogIfno()); //output my dog name si Chappie and he 9 years old









/*8. New Target Operators
Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.*/

function shapeBox(shapeNew) {
  if (!new.target) {
    throw "no data available ";
  }
  this.shapeNew = shapeNew;
}
let sahpeOne = new shapeBox("rectangle");
console.log(sahpeOne);



// or another way

let shapeBoxData = class {
  constructor(shape) {
    if (!new.target) {
      throw "Shape that cannot be instantiated directly.";
    }
    this.shape = shape;
  }
};

let recTanGle = class extends shapeBoxData {
  constructor(shape) {
    super(shape);
  }
};

let newShapeOne = new recTanGle("rectangle");
console.log(newShapeOne); // outPut recTanGle { shape: 'rectangle' }

console.log(newShapeOne.shape); //outPut rectangle








/* 
9. Static Methods
Problem: Create a class MathUtil with a static method square to calculate the square of a number. */

let MathUtil = class {
  constructor(number) {
    this.number = number;
  }

  get num() {
    return this.number;
  }

  //static mathod
  static square() {
    return Math.sqrt(625);
  }
};

let numberOne = new MathUtil(625);
let numberTwo = new MathUtil(2000);

//static method output is { 25}
console.log(MathUtil.square());







/* 10. Symbol
Problem: Create an object with a symbol as a property key and demonstrate accessing it.*/

let nameIs = Symbol.for("this code is runing now");

let dataObject = {
  [nameIs]: "sakib",
  roll: 252,
  age: 20,
};

//total ouput
console.log(dataObject);

//symbol as a property key
console.log(Object.keys(dataObject));
