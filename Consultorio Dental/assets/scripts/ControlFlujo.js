console.log("Me oyen, me escuchan me sienten");


/*

Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo izq/der). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.


La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante).


Condicionales

    *Las condicionales son palabras reservadas que nos permiten evaluar si una condición se umple o no bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas siempre partirán de un true o false.

    Condicional "if" ("si")

    if nos sirve para validad si una condición se cumple o no. Si se cumple, entonces ejecutamos un bloque de código que está dentro del if. Si no se cumple, entonces no hacemos nada.
    Nota: Es la condición mas sencilla, pero lo más limitante porque solo nos da una opción.

    if(condicion){
        //bloque de código si se ejecuta si la condición es verdadera
    }
    
*/


//alert("Vamos a jugar");

let dato = prompt("Escribe tu respuesta");

if(dato <= 15){
    console.log("ijole, creo que no se va a poder.");
}
else if(dato > 16){
    console.log("No creo");
}
else{
    console.log("Eres el papu de papus");
}

switch (dato) {
    case "1":
        
        break;
    
        case "1":
        
        break;
    
        case "2":
        
        break;

        case "3":
        
        break;

        case "4":
        
        break;

        case "5":
        
        break;

    default:
        break;
}


//funciones aplicables a un consultorio dental

//Función calcular costo de una consulta (condicionales)

let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;

function calcularCostoDeconsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){

    tipoServicio = "extracción";
    tiempoConsulta = 120;  //tiempo en minutos
    emergencia = true;
    promocion = 0.10;      //porcentaje de la promocion
    clienteFrecuente = true;
    costo = tiempoConsulta *0.5;            //precio en MXN

    if (clienteFrecuente == true){
        let costoTotal = costo + (costo*promocion);
    }

}

