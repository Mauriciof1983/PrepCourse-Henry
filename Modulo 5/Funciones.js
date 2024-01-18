
function SumaTres(x) {    //Function= Palabra  reservada.-
    console.log(x + 3);  //SumaTres = Nombre de la funcion.-
}                        //(x) = Argumento o Parametro
                         //{} = Cuerpo de la funcion - Aca realiza lo que le pedimos.-
SumaTres(5)

// Formas de escribir una funcion

// Funcion con Return

function SumaTres(x) {
    return x + 3;
}

// Funcion con Variable - se guarda la funcion en una variable

var SumaTres = function(x) {
    return x + 3;
}

// Funcion de Flecha - es una forma de hacer una sintaxis

var SumaTres = (x) => {
    return x + 3;
}

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }