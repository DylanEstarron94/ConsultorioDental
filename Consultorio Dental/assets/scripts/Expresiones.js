console.log("Estoy vivo!!!!");


/*
Operador

Un elemento que nos permite realizar una operación entre dos o más elementos.

    -Operadores aritméticos (+, -, *, /)
    -Operadores de asignación (=, ==, === / asignación, igualdad, igualdad estricta)
    -Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
    -Operadores lógicos (&&, ||, ! / and, or, not)
    -Operadores de comparación (<, >, <=, >=, ==, ===)

 */

/*Operadores aritméticos

Son operadores que nos permiten tomar los valores numéricos como sus operandos y retornar un valor único. Corresponden a operaciones matemáticas.

*/


//Suma (+): Se utiliza para sumar dos números

let resultadoSuma = 5+3; //Resultado contendrá el valor 8

//Resta (-): Se utiliza para restar un número de otro.

let resultadoResta = 10-4; //El resultado contendrá el valor de 6

//Mltiplcación (*): Se utiliza para multiplicar dos o más números.

let resultadoMult = 6*3; //El resultado contendrá el valor 18.

//División (/): Se utiliza para dividir un número entre otro. La división por cero produce un valor especial llamado "infinity" (infinito).

let resultadoDiv = 15/3; //El resultado contendrá el valor 5.

//Módulo (%): Se utiliza para obtener el resto de una división entre dos números.

let resultadoModulo = 10 % 3; //El resultado contendrá el valor de 1 (el resto dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.

let numero = 5;
numero++; //Ahora el número contendrá el valor 6

//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.

let numero1 = 8;
numero1--; //Ahora el número contendrá el valor 7.


//Doble igual / igualdad abstracta
5 == "5"; //Es true, ya que JS conierte la cadena "5" a un número antes de la comparación.

//Triple igual / igualdad estricta
5 === "5"; //Es false, porque no son del mismo tipo y los tipos también son difieren.


//(°C × 9/5) + 32 =°F
//(0 °F − 32) × 5/9 = °C


function convertirGradosC (){
    let gradosCelcius = prompt("ingrese los grados celcius que desea convertir");

    console.log(typeof(gradosCelcius));

    gradosCelcius = parseInt(gradosCelcius);

    console.log(typeof(gradosCelcius));

    let gradosFarenheit = (gradosCelcius * (9/5)) + 32; 

    alert(gradosCelcius + "°C es igual a " + gradosFarenheit + "°F");
}

function convertirGradosF (){
    let gradosFarenheit = prompt("ingrese los grados farenheit que desea convertir");

    console.log(typeof(gradosFarenheit));

    gradosFarenheit = parseInt(gradosFarenheit);

    console.log(typeof(gradosFarenheit));

    let gradosCelcius = (gradosFarenheit - 32) * (5/9); 

    alert(gradosFarenheit + "°F es igual a " + gradosCelcius + "°C");
}

let opcion = prompt("Que operacion desea realizar?\n1. Convertir de °F a °C\n2. Convertir de °C a °F");22

switch (opcion) {
    case "1":
        convertirGradosF();
        break;
    
    case "2":
        convertirGradosC();
    break;

    default:
        alert("Opción inválida, intente de nuevo...");
        break;
}
