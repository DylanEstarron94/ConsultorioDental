//alert ("Hola mundo");


/* Tipos de datos primitivos y no primitivos

 * string
 * number
 * Boolean
 * Undefined
 * null
 * symbol
 * object (no es primitivo)


 */

//string es una cadena de texto, que siempre debe ir entre comillas simples o comillas dobles
var vaso = "chela";

//number no lleva comillas, y se refiere a un número con el cuál podemos hacer operaciones
var edad = 29;

//boolean solamente tiene dos salidas que es true or fales
var cuentasPremium = true;

//undefined es un tipo de dato que existe pero no está definido o inicializado
var cita = undefined;

//var es un valor que no tenemos pero que declaramos
var asistenciaFiesta = null;


var nombreMedico = "Juanito Espericueta";
var nombrePaciente = "Pancracio Nepomuceno";

var edad = 45;
var cantidadProducto = 150;

var cuponDescuento = false;
var pacienteNuevo = true;

var fechaCita;
var horaCita;

var fechaCita = null;
var nombreMedico = null;

console.log(typeof(edad));
console.log(edad);

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos

//var es una variable con alcance globar (tiene mayor alcance)

//let es una variable con alcance local (solo se utiliza dentro de un bloque de código)

//const es una constante, es decir, que es una variable, no cambia


var edadTexto = edad.toString();
console.log(edad.toString);
console.log(edadTexto);
console.log(typeof(edadTexto));

var edadNumero = parseInt(edadTexto);
console.log(edadNumero);
console.log(typeof(edadNumero));

//Funciones

/**Una función wa un bloque de código que realiza una tarea específica, cuando se le llama
 * Cada función de JavaScript es un objeto función * 
 */

function saludar (){
    console.log("Hola, soy una función");
}

saludar();

/** Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//Declarar funciones
/**La palabra function, que nos indica que estamos definiendo una función.
 * El nombre de la función, dependiendo de la acción a realizar.
 * Un par de paréntesis () después del nombre. Puede contener parámetros. En este caso no tenemos ninguno.
 * Seguido de un par de llaves para cerrar el bloque de código.
 * Dependiendo de las instrucciones dentro del cuerpo de la función y del propósito de la misma, se determina si la función retorna un valor.
 */

//Llamamos una función y le vamos a almacenar un resultado
function suma(a,b){
    return a+b;
}

//var resultado = suma(4,3) //Almacenar funcion en una variable
console.log(suma(4,3)); // mostrar en consola la variable

//Funcion que muestra un mensaje en conosla
function saludar(nombre){
    console.log("Hola, " +nombre + "!!");
}

saludar("Dylan");
/** La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

//Hoisting
/**Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
 * Yo puedo invocar una función antes de siquiera declararla
 */

console.log(miVariable);//No da error, pero imprime undefined
var miVariable = 10;

//Scope = Alcance, hace referencia al alcance de una variable en nuestro código de JS.

/**Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código.
 * var: No es tan recomendado, por el comportamiento de la variable y la poca adaptabilidad.
 * let: es preferible e incluso más segura de utilizar porque a demás de funcionar de manera global, también puede ser utilizada de manera local.
 * const: se refiere, por su nombre tan intuitivo, a la palabla constante, quiere decir que, su valor no puede ser reasignado.
 */
//Variable local
function funcionConVariableLocal(){
    var mensaje = "esta es una variable local";
    console.log(mensaje);
}

//funcionConVariableLocal ();
//var mensaje = "que rollo con el pollo";
//console.log(mensaje);

/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//Variable Global
var mensajeGlobal = "Esta es una variable global";

function funcionConVariableGlobal (){
    console.log(mensajeGlobal);
}

funcionConVariableGlobal();

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */

//Funciones anónimas//

/**Estas funciones pueden ser declaradas sin un nombre y luego ser asignadas a variables o pararse como parámetros en otras funciones.
La diferencia principal de estas funciones es que se declaran sin un nombre.
 */

//function (){
  //  console.log("Hola vida"); //funcion anónima
//}

function saludo() {
    console.log("hola vida");
}

saludo();