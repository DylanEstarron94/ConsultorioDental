var pacientes = [];  // Creamos un arreglo para almacenar información de los pacientes.
var maxCitasPorPaciente = 3;  // Número máximo de citas permitidas por paciente
var contadorCitas = 0;  // Inicializamos el contador de citas en 0.

do {
    if (contadorPacientes >= maxPacientes) {
        // Si se alcanza el límite de pacientes, salimos del bucle con el break.
        break;
    }

    var nombre = prompt("Ingresa nombre del paciente");

    if (nombre) {
        // Verificamos si el paciente ya ha alcanzado el límite de citas.
        var pacienteExistente = pacientes.find(function (paciente) {
            return paciente.nombre === nombre;
        });

        if (pacienteExistente && pacienteExistente.citas >= maxCitasPorPaciente) {
            alert("Este paciente ya ha alcanzado el límite de citas.");
            continue;  // Continuamos con la próxima iteración del bucle.
        }

        // Registramos la cita para el paciente.
        if (pacienteExistente) {
            pacienteExistente.citas++;
        } else {
            pacientes.push({ nombre: nombre, citas: 1 });
        }

        contadorPacientes++;
        contadorCitas++;
    }
} while (confirm("¿Desea registrar otra cita?") && contadorPacientes < maxPacientes);

console.log("Número total de pacientes: ", contadorPacientes);
console.log("Número total de citas registradas: ", contadorCitas);