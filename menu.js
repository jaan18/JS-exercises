var menu =
  "Seleccione una opción: \n" +
  "1. Añadir un nuevo contacto 1\n" +
  "2. Buscar contacto 2\n" +
  "3. Eliminar contacto 3\n" +
  "4. Modificar contacto 4\n" +
  "5. Salir \n";
var respuesta = 0;
do {
  respuesta = Number(prompt(menu));
  alert(`Tu opción es: ${respuesta}`);
  switch (respuesta) {
    case 1:
      alert("Hola");
      break;
    case 2:
      alert("Hola");
      break;

    default:
      alert("Saliendo del menú");
      break;
  }
} while (respuesta != 5);
