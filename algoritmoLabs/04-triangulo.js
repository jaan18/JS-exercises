/* Ejercicio No: 4
Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes de sus dos catetos.
Desarrolle el algoritmo correspondiente.  */

let catA = Number(prompt("Introduce el primer valor"));
let catB = Number(prompt("Introduce el segundo valor"));

hip(catA, catB);

function hip(cateto1, cateto2) {
  console.log(Math.sqrt(cateto1 + cateto2));
}
