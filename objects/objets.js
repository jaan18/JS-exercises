// In JS everything is an object
// Basic Objets info
let mySimbol = Symbol();

let person = {
  name: "Jovani",
  age: 28,
  partTime: false,
  [mySimbol]: "SecretInformation", // IDs for the props of the object
};

console.log(person);
// Object Methods
