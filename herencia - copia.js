// Lista de asistencia
/* nombre completo, edad , grado , grupo 
definir clases
funcion registrar personas o una clase con un metodo para registrar personas 
preguntar al usuario si quiere registrar otro hasta que diga que no 
imprimir la lista de registro */
var listaAlumnos = [];

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    console.log("Atributos inicializados");
  }

  mostrar() {}
}

class Alumno extends Persona {
  constructor(nombre, edad, grado, grupo) {
    super(nombre, edad);
    this.grado = grado;
    this.grupo = grupo;
  }
}

function registrar(nombre, edad, grado, grupo) {
  let val1 = prompt("Introduce el nombre");
  let val2 = prompt("Introduce la edad");
  let val3 = prompt("Introduce el grado");
  let val4 = prompt("Introduce el grupo");
  nuevo = new Alumno(val1, val2, val3, val4);
  listaAlumnos.push(nuevo);
}

var menu =
  "Seleccione una opción: \n" +
  "1. Añadir un nuevo alumno 1\n" +
  "2. Mostrar alumnos y Salir \n";
var respuesta = 0;
do {
  respuesta = Number(prompt(menu));
  alert(`Tu opción es: ${respuesta}`);
  switch (respuesta) {
    case 1:
      registrar();
      break;
    case 2:
      alert("Mostrando alumnos en consola");
      console.log(listaAlumnos);
      break;

    default:
      alert("Saliendo del menú");
      break;
  }
} while (respuesta != 2);
