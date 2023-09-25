/*
Retomando las API's...

    -API's internas (API DOM, LocalStorage, Drag and Drop): Son todas aquellas API's que vienen por default en el navegador

    -API's externas (Google Maps, FakeStore API, API Paypal, etc.): son todas aquellas que tenemos que utilizar de proveedores externos.

    Ejemplo de la licuadora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


    Ventajas de utilizar API's

        -Reestructurar y organizar los sistemas de forma que sean más sencillos de usar.
        -Permiten que los sistemas sean más robustos
        -Reducen los costos de mantenimiento
        -Permiten que los sistemas sean escalables

*/



/*
Sincronía

Por defecto, JS se comporta de una forma síncrona (de arriba hacia abajo, de izquierda a derecha), es decirm utilizamos JS de una forma autobloqueable (si hay un error, lo que está después de ese error no se ejecuta).


*/

/*
//Ejemplo de una operación sincrónica
console.log("inicia mi operación síncrona");

function dosSincronico(){
    console.log("dos");
}

function unoSincronico(){
    console.log("uno");
    dosSincronico();
    console.log("tres");
}

unoSincronico();
console.log("Finaliza mi operación síncrona");
*/
//Los casos donde me conviene tener operaciones síncronas, son (Lectura de arrays, uso de algunos métodos de arrays, condicionales, ciclos, ejecución de funciones "normales").

/*
Asincronía

Es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. Esto nos ayuda a ejecutar ciertos bloques de código sin tener que esperara que termine su ejecución, para ejecutar otras lineas de código (dejar la carne en el asador mientras preparo otras cosas en el ejemplo de la carne asada)


*/

//Ejemplo de JavaScript Asíncrono
/*
console.log("Inicia mi operación asíncrona");
function dosAsync(){
    console.log("Uno");
    setTimeout(function(){ //setTime para ejecutar esta función después de 3 segundos        
        console.log("Dos");
        }, 3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operación asíncrona");
*/

/*
Mecanismos para manejar la asincronía

Para controlar la asincronía en JS, podemos usar alguno de estos mecanismos:

    -Callback: La forma más clásica de manejar la asincronía. Se le conoce como llamada de vuelta, básicamente es pasar una función como parámetro de otra función, y se ejecutan una vez que se cumpla la condición esperada.

    //Método .map de los arrays


    -Promesas: Son objetos que van a representar un valor al momento de conectar con el servidor. Como su nombre lo indica, una promesa es algo que no sabemos si se va a cumplir o no, pero al menos necesitamos saber que hacemos si se cumple o si no se cumple. La ventaja que tiene las promesas, es  que no se anidan, en una sola función podemos manejar amboas situaciones.

    Las promesas tienen 3 estados posibles:
        -pending: estado inicial, cuando se crea la promesa. Aquí aún no hay resultados.
        -fullfilled: cuando la operación asíncrona se resuelve con éxito (resolve)
        -rejected: cuando la operación asíncrona falla (reject)

*/
/*
//Función especial para consumir API's y manejar promesas

fetch("https://fakestoreapi.com/products/1")

//Dos escenarios (Obtengo respuesta o no obtengo respuesta)
.then(datos =>{
    console.log(datos);
    return datos.json();
})

.catch(error =>{
    console.log("Error, no encontramos el producto");
    console.log(error.message);
})

*/


/*
Sintaxis del fetch (con promesas)

fetch(url a consumir)
    .then (response=> response.text()) // manejo la respuesta
    .then (datos => console.log(datos)) // manejo el dato

    .catch(error => console.log(error))

*/


//Asigno el fetch a una variable
const conexion = fetch("https://fakestoreapi.com/products/1")

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto promesa: ", conexion);

conexion

    //Usar el método .then para manejar la respuesta
    .then(function (resultado) {
        console.log("Dentro de esta función que maneja la respuesta encontrarás: ", resultado);
        return resultado.json();
    })

    .then(function (producto) {
        console.log("Información del producto: ", producto);
    })


    //Uso el método catch para manejar el error (lo relleno con un error para que la caja no regrese vacía)

    .catch(function (error) {
        console.log("Error", error);
    })

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = { "id": 17, "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "price": 39.99, "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", "category": "women's clothing", "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "rating": { "rate": 3.8, "count": 679 } }


//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679
    }
}

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);

//Objeto JSON que avoy a mandar a un servidor
let paciente = {
    nombre: "Dylan",
    edad: 29,
    estatus: "Registrado"
}

console.log(paciente);

//Necesito convertirlo a una cadena de texto pra que el servidor lo lea
let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = '{"nombre": "Dylan", "Edad": 29, "estatus": "Registrado"}';

let pacienteJSON = JSON.parse(pacienteServidor);
console.log(pacienteJSON);


//Si mando un JSON al servidor, lo Stringifeo
//Si recibo un string del servidor, lo parseo


fetch('https://fakestoreapi.com/products/7', { //endpoint
    method: "PUT",   //especificar el tipo de método
    body: JSON.stringify( //instrucción para serializar el cuerpo de mi solicitud    (para la interpretación del servidor)
        {
            title: 'Sopa maruchan camarón, limón y Habanero',
            price: 15.5,
            description: 'Suculemnta sopita maruchan para que se te pegue a tus lindas tripitas',
            image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/045/878/products/ea19057e-178a-4e99-8c76-f7ffdb9e353b-e68d1574aa92fe22f416463321610565-640-0.png',
            category: 'Sopas instantaneas'
        }
    )
})
    .then(res => res.json()) //metodo para la respuesta (para saber que mi producto llegó con bien al servidor)
    .then(json => console.log(json)) //impresión en consola para revisar la info


    fetch('https://fakestoreapi.com/products',{ //endpoint
            method:"PUT", //especificar el tipo de metodo
            body:JSON.stringify( //instruccion para serializar el cuerpo de mi solicitud (para la interpretacion del servidor)
                {
                    id: 1,
                    title: inputTitulo.value,
                    price: inputPrecio.value,
                    description: inputDescripcion.value,
                    image: inputImagen.value,
                    category: inputCategoria.value
                }
            )
        })
            .then(res=>res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
            .then(json=>console.log(json))//impresion en consola para revisar la info