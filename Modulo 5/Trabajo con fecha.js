
function esMayorDeEdad(fechaNacimiento) {
    // Obtenemos la fecha actual
    var fechaActual = new Date();
    
    // Obtenemos el año de nacimiento de la fecha de nacimiento proporcionada
    var añoNacimiento = new Date(fechaNacimiento).getFullYear();
  
    // Calculamos la edad restando el año de nacimiento al año actual
    var edad = fechaActual.getFullYear() - añoNacimiento;
  
    // Comprobamos si la edad es mayor o igual a 18
    console.log(edad)
    return edad >= 18;
  }
  esMayorDeEdad("1983-08-09")
  
  // Ejemplo de uso:
  var fechaNacimientoEjemplo = "1990-01-01"; // Puedes proporcionar la fecha en formato YYYY-MM-DD
  var esMayor = esMayorDeEdad(fechaNacimientoEjemplo);
  console.log(esMayor); // Devolverá true si la persona es mayor de edad, caso contrario, false
  