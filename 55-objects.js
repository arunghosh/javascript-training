// Simple object
const car = new Object();
car.name = "Xenon";

console.log(car.name);
console.log(car["name"]);

const newCar = {
  name: "Xenon"
};

// Dynamic property
const propName = "name";
console.log(newCar[propName]);

// Constructor function
let Car = function(name) {
  this.name = name;
};

let hondaCar = new Car("Honda");
let fordCar = new Car("Ford");
console.log(hondaCar.name)
console.log(fordCar.name)
