/*Sistema para registrar pacientes y citas de estos pacientes, utilizando métodos de arrays

Lista de cosas para hacer / Cosas por tomar en cuenta

-Un array para pacientes
-Un array para citas

-Un prompt para registrar los datos
-Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
-Función registrarPacientes
-Función registroCitas
-Métodos para modificar los arrays (push, forEach, splice)
*/


//Crear un array para almacenar mis pacientes

//La variable pacientes está declarada e inicializada (tiene un nombre, y tiene un valor, a pesar de que su arreglo esté vacío)

//Los índices están undefined, porque no hay elementos pero si espacios disponibles
let Pacientes = [];
let Citas = [];

//Funcion para registrar un nuevo paciente
//Paso 1. Ejecución de mi función. Pido dos datos
function registrarPaciente(nombre, edad){
    //Crear un array dentro de otro array
    //paso 2. Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas :[]
    };

    //Agregar paciente al array
    //Paso 3. Ya que tengo el par de datos, le hago un push a mi array para guardad al paciente
    Pacientes.push(paciente);
    return paciente;
}

//Función para registrar citas de un paciente
//Cuando ejecuto mi función necesito un paciente, una fecha y una hora para registrar la cita
function registrarCita(paciente, fecha, hora){

    //Cuando tenga estos datos, buscaré dentro del paciente el apartado para hacerle un push ahí
    paciente.citas.push(
        
        {
            fecha,
            hora
        }
    );
}

//Función para mostrar la información del paciente
//Registrar un paciente desde la invocación de la función registrarPaciente

let paciente1 = registrarPaciente("Dylan", 29);
let paciente2 = registrarPaciente("Carlitos", 5);
let paciente3 = registrarPaciente("Dr. Simi", 50);

//Registrar un paciente desde la invocación de la función registrarCita







/*ForEach

Es un método de arrays, que tiene como objetivo de iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida

Generalmente el for each se utilzia para imprimir la formación del arreglo

Sintaxis ForEach

array.forEach(function(elemento, indice, arreglo))

-elemento: el elemento actual del arreglo que se está procesando
-indice: La posición del elemento actual en el array
-Arreglo: el array se está recorriendo (opcional)

    Ejemplo

-elemento: producto que compré y que está en el carrito
-índice: la posición de ese producto
- arreglo: carrito del super

*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

//Oye JS, para cada elemento del tipo "producto" que tenga una posición dentro del arreglo llamado "carritoSuper", vas a hacer algo
carritoSuper.forEach(function(producto, indice){
    console.log("producto: " + producto + " con la posición: " +  indice);
});