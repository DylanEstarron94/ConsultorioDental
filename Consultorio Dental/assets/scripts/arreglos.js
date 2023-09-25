/*
Un array es un conjunto de datos que se pueden almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de vaiables (que pueden ser diferentes, pero con un mismo contexto)
 */

//Variables independientes
let nombre = "Dylan";
let edad = 29;
let puesto = "Participante";

//Usar un array (arreglo) para agrupar variables

let personasCH31 = ["Dylan", "Jose", "Alejandro", "Evelyn", "Roberto"];

let cosasRandom = [12, true, "Gato", undefined];

console.log(typeof(cosasRandom));

//Al imprimir el tipod de dato de nuestro arreglo, obtenemos un object porque los arrays son objetos (después veremos que tenemos muchos tipos de objetos)

//Los arreglos, al ser objetos, cuentan con métodos que nos permiten manimpularlos

//Ya que tengo mi arreglo, como podemos acceder a esa información?
//Para mostrar la cantidad de elementos que tengo en un arreglo, usamos un método llamado Length


//Método length para mostrar la cantidad los elementos de un array
console.log(personasCH31.length);

//Declarar un array
[5,4,3,2,1]

//Inicializar un array
let cuentaRegresiva = [5,4,3,2,1]

//Acceder a un elemento en específico utilizando los índices
console.log(personasCH31[0]); //Mostrará Dylan
console.log(personasCH31[12]); //Mostrará undefined porque el elemento aún no existe

//También podemos acceder a un elemento de mi arreglo por medio de una variable

let index =4;

//Paso esta variable como indice del arreglo
console.log(personasCH31[index]);

//Ejemplo de un array para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. simi", "Dr House", "Dr Nosborn", "Dr Shaun Murphy"];
console.log(dentistas);
//Para hacer modificaciones usamos el index para acceder al dato y luego lo asignamos
dentistas[0] = "Similares";
dentistas[6] = "Dr Strange";
console.log(dentistas);
console.log(typeof(dentistas[5]));

function imprimirAsteriscos(){
    console.log("******************************************************************************************");
}

imprimirAsteriscos();

//Métodos de arrays

let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduras"];

//Método para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de ", listaDelSuper.length);

//Método push() para poner elementos al final de mi array
listaDelSuper.push("Tortillas", "Leche");

console.log(listaDelSuper);

imprimirAsteriscos();

//Método pop() para eliminar elementos del final del array
listaDelSuper.pop();
console.log(listaDelSuper);
console.log(listaDelSuper.length);

imprimirAsteriscos();

//Agregar un elemento al principio del array con el método .unshift()
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

//Eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posición de las verduras
console.log(listaDelSuper.indexOf("Verduras"));

//Método .splice() para agregar, eliminar o reemplazar elementos

//NombreArreglo.pslice(inicio, cantidadDeElementosAEliminar, elementoAInsertar1, elementoAInsertar2, ..., elementoAInsertarN)

listaDelSuper.splice(2,0,"Cacahuates", "Peras");
console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "platano");
console.log(listaDelSuper);

//Método .map()
let numeros =[1,2,3,4,5];

//Crear otro arreglo con los números multiplicados x2 [2,4,6,8,10]
let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
})

console.log(numerosPorDos);

/*
Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atención especial.

    Aspectos a considerar
    -2 arreglos (original y el modificado)
    -condicion if
    -funcion para agragar el nuevo dato al elemento
    -método map
 */

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Dylan", 
        Edad: 29,
    },
    {
        nombre: "Fatima",
        Edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 42,
    }
]

console.log(pacientesConsultorio);

//Funcion para agregar el texto: Necesita atención especial
function agregarEstadoSalud(paciente){
    let estado  = "Saludable";

    //Si el paciente tiene más de 40 años
    if(paciente.edad>40){
        estado = "necesita atencion especial";
    }

    return{
        ...paciente, //copia del paciente
        estadoSalud :estado, //Para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//Vamos a aplicar la función en cada elemento del arreglo con el map

let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorioConEstado);
