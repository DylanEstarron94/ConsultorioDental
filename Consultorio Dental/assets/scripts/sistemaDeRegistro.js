/*Sistema para registrar pacientes y mostrarlos con tarjetas*/

//Primer paso: Obtener todos los elementos de nuestro HTML y guardarlos en variables de JS

//Inputs separados, boton, textoConfirmacion

let nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
let edadPaciente = document.getElementById("edadPaciente"); //input edad
let botonRegistro = document.getElementById("btnRegistrarPaciente"); // boton
let textoConfirmacion = document.getElementById("mensajeConfirmacion"); //Container de mensaje de confirmacion


//Array para almacenar a mis pacientes
let pacientes = [];


//Función para registrar un nuevo paciente
function registrarPaciente(){
    //obtengo el atributo value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value


    //Array para guardar la información del paciente
    let paciente = {
        nombre: valorNombrePaciente, //tomo el valor del input, lo asigna a esta variable
        edad: valorEdadPaciente, //tomo el valor del input, y lo asigno a esta variable
        citas: []
    };

    //Cuando tengo la informacion del paciente
    pacientes.push(pacientes); //arreglo.push(valorAAgregar)

    //1 Muestro el mensaje de confirmación
    mostrarInfoPaciente(paciente); //invocaión de otra función para mostrar la info en consola

    //2 Muestr el mensaje de confirmación (textContet)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente";


    //3 Genero la tarjeta
    generarTarjetaPaciente(paciente); //Invocación de una función para generar tarjetas

    return paciente;

}//aquí termina la funcion registrarCitas

//Funcion para mostrar info del paciente en la consola
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}//aquí termina la funcion registrarPacientes

//Función para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){
    //crear
    let tarjetaDiv = document.createElement("div"); //aquí se crea un container para mi tarjeta
    tarjetaDiv.className = "col-sm-12 col-md-6 col-lg-3"; //Especifico que es una columna

    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`

    //poner
    contenedorTarjetas.appendChild(tarjetaDiv);
}//aquí termina la funcion generarTarjetaPaciente

//Evento

botonRegistro.addEventListener("click", registrarPaciente);
