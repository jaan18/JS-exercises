/* Ejercicio No: 2
Desarrolle un algoritmo que permita leer tres valores y almacenarlos en las variables A, B y C
respectivamente. El algoritmo debe imprimir cual es el mayor y cual es el menor. Recuerde constatar que
los tres valores introducidos por el teclado sean valores distintos. Presente un mensaje de alerta en caso de
que se detecte la introducción de valores iguales. */

let a = Number(prompt("Introduce el primer valor"));
let b = Number(prompt("Introduce el segundo valor"));
let c = Number(prompt("Introduce el tercer valor"));

if (a > b && a > c) {
  console.log(`El primer valor ${a} es el mayor`);
} else if (b > a && b > c) {
  console.log(`El segundo valor ${b} es el mayor`);
} else {
  console.log(`El tercer valor ${c} es el mayor`);
}
