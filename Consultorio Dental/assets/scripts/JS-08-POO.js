/*Paradigma
    Estructurado
    Instancia
    Plantilla



Paradigma de programación

Paradigma de programación = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.

Paradigmas de programación (formas de programar)

    - programación imperativa: basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    -Programación basada en eventos: Enfocada en la gestión y respuesta de eventos (JS, C#, Python)

    -Programación declarativa: Explicar lo que necesitamos obtener más de como se hace (HTML, SQL)

    -Programación Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus características (propiedades o atributos) y con base en su comportamiento o acciones (métodos), resolvemos problemas reales.

    let Dylan ={
    nombre: "Dylan",
    apellido: "Estarrón",
    edad: "29",
    email: "dylanestarronm@gmail.com",
    telefono: "1234567890"
    }   



*/

//Creando mi primera clase
class persona{

    //1. Propiedades o atributos de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    //3. Defino un constructor que tomará los atributos como "matrerial" para la instancia o creación de mis objetos
    //El constructor es una función especial, cuya función es la de construir o instanciar objetos
    //Al pasar los atributos como parámetros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //2. Metodos o comportamientos (funciones)
    //Para definir los métodos de mi objeto, ya no utilizo la palabra function
    hablar(){
        console.log("Toy hablanto...");
    }//Cierre de método hablar

    dormir(){
        console.log("zzz");
    }//Cierre de método dormir

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }//Cierre de método mostrarInfo

}//Cierre de mi clase persona


/*Instancia de objetos de tipo persona

Sintaxis básica de una instancia

variable nombreObjeto = palabra reservada new nombreClase (parámetros o atributos)

*/

let persona1 = new persona("Dylan", "Estarrón", 29, "dylanestarronm@gmail.com", "1234567890");
let persona2 = new persona("Naruto", "Uzumaki", 22, "narutouzu@aldeadelahoja.com", "1569745116");
let persona3 = new persona("Buzz", "lightyear", 37, "buzzlightyear144@alinfinito.com", "5669742213");


//imprimir el objeto completo
console.log(persona1.edad, persona1.apellido);

//invocar el método del objeto
persona1.dormir();

persona2.mostrarInfo();


/*
Existen 4 pilares de la POO que nos permiten ampliar las características y dotar de funcionalidades y operaciones a nuestro código

    -Herencia
    -Polimorfismo
    -Encapsulamiento
    -Abstracción


*/

//Creando una nueva clase para aplicar la herencia (extends)
class paciente extends persona{

    //1. Defincion de atributos y propiedades
     doctorAtiende = ""; //Nombre del doctor que atiende
     historialMedico = ""; //Si o no el historial
     alergias = ""; //alergias existentes

     //3. Generacion del constructor
     constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){

        super(nombre, apellido, edad, email, telefono);
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
     }


     //2. Metodos
     mostrarInfo(){
        // console.log("Nombre: ", this.nombre);
        // console.log("Apellido: ", this.apellido);
        // console.log("Edad: ", this.edad);
        // console.log("Email: ", this.email);
        // console.log("Teléfono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
     }


}

let paciente1 = new paciente("Chepe", "Marquez", 48, "elchepemarquez@trujo.com", "555484569512", "Pedro", "No hay, no existe", "Al doctor");

console.log(paciente1);

paciente1.mostrarInfo();


//Diferencias entre un objeto literal (normal), y un objeto tipo JSON


//Todos las claves y los valores van dentro de comillas
//Envio de información a servidores
let objetoJSON = {
    "nombre": "Dylan",
    "apellido": "Estarron",
    "edad": 29,
    "email": "dylanestarronm@gmail.com",
    "telefono": "45469874156",
    "doctorAtiende": "Pepe pecas pica papas",
    "historialMedico": "No tiene",
    "alergias": "Al doctor"
}

//Tratar la información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Dylan",
    apellido: "Estarron",
    edad: 29,
    email: "dylanestarronm@gmail.com",
    telefono: "45469874156",
    doctorAtiende: "Pepe pecas pica papas",
    historialMedico: "No tiene",
    alergias: "Al doctor"
}


/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        -Nombre
        -nota (calificación)

    Métodos:
            -Constructor
            -Método evaluación (si aprueba o no)
            -Método imprimirInfo (nombre y la nota)

    Lógica del negocio:
            -if para evaluar la nota (si la nota es menor a 6, está reprobado)
            -Recumeramos la información por medio de un prompt
            -Generamos 3 instancias para probar mi código (la nota sea igual a 6, menor a 6 y mayor a 6)

*/

//Creación de la clase

class alumno{

    //1. Atributos o propiedades
    nombre;
    nota = 0;


    //3. Constructor
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }
 

    //2. Métodos
    evaluacion(nota){

        //Condicion para saber si está aprobado o reprobado
        if(this.nota < 6){
            console.log("Reprobado");
        }

        else if(this.nota == 6){
        console.log("pasado de panzaso");
        }

        else{
            console.log("Aprobado perrillo");
        }

    }

    imprimirInfo(){
        
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);

    } 

}

nombre = prompt("Ingrese el nombre del alumno: ");
nota = prompt("Ingrese la calificación del alumno: ");
nota = parseInt(nota);

let alumno1 = new alumno(nombre, nota);


alumno1.imprimirInfo();
alumno1.evaluacion();


// let opcion = "si";
// let alumnos = [];
// let notas = [];

// while(opcion == "si"){

//     alumnos = prompt("Ingrese el nombre del alumno: ");
//     nota = prompt("Ingrese la calificación del alumno: ");

// }