/*   Ejercicio No: 1
  Desarrolle un algoritmo que permita leer dos valores distintos,
  determinar cual de los dos valores es el mayor y escribirlo. */

let a = Number(prompt("Introduce el numero 1"));
let b = Number(prompt("Introduce el numero 2"));

if (a === b) {
  console.log("Valores iguales, vuelve a introducirlos");
  a = Number(prompt("Introduce el numero 1"));
  b = Number(prompt("Introduce el numero 2"));
  if (a === b) {
    console.log("Valores iguales, vuelve a introducirlos");
    a = Number(prompt("Introduce el numero 1"));
    b = Number(prompt("Introduce el numero 2"));
  } else if (a > b) {
    console.log(`${a} es mayor que ${b}`);
  } else {
    console.log(`${b} es el mayor`);
  }
} else if (a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${b} es el mayor`);
}
