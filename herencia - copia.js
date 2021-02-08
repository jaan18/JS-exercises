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
}

class Alumno extends Persona {
  constructor(nombre, edad, grado, grupo) {
    super(nombre, edad);
    this.grado = grado;
    this.grupo = grupo;
  }
}

function registrar(nombre, edad, grado, grupo) {
  var val1 = prompt("Introduce el nombre");
  var val2 = prompt("Introduce la edad");
  var val3 = prompt("Introduce el grado");
  var val4 = prompt("Introduce el grupo");
  var nuevo = new Alumno(val1, val2, val3, val4);
  listaAlumnos.push(nuevo);
}

function mostrar() {
  alert("Mostrando alumnos en consola");
  listaAlumnos.forEach((index) => {
    let nombre = index.nombre;
    let edad = index.edad;
    let grado = index.grado;
    let grupo = index.grupo;
    console.log(
      `Nombre: ${nombre}. Edad: ${edad}. Grado: ${grado}. Grupo: ${grupo}.`
    );
  });
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
      mostrar();
      break;

    default:
      alert("Saliendo del menú");
      break;
  }
} while (respuesta != 2);
