/*
DOM (Document Object Model / Modelo de Objetos del Documento)

Cuando creamos páginas que usan HTML + CSS estamos creando páginas estáticas (porque no tienen interactividad), cuando agregamos JS, nuestras páginas se convierten en sitios dinámicos  (tienen interactividad).

El navegdor lee el documento html de arriba a abajo, de izquierda a derecha (renderización).

Para que una página se renderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas u cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas, entendemos que cada una de esas ramas y hojas es un nodo.

¿Que es un nodo?
Representación más básica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, púede ser un texto, incluso un comentario.

    -Document: nodo raíz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    -Element: Son nodos definidos por etiquetas HTML (div, h1, p, img, meta, head, script, etc.), ya sea que se vean o no se vean (Etiquetas que interpreta el navegador)

    -Text: EL texto que hay dentro de un elemento se considera un nodo, con la característica que es un nodo hijo.

    -atribbutes: Los atributos de las etiquetas también se convierten en nodos, son nodos que están asiciados a un elemento y se pueden considerar también nodos hijos.

    -Comment: Los comentarios también son un nodo, porque forman parte de un documento.



    ¿Para que utilizamos JS para un DOM?

        -Agregar elemento html
        -Modificar elementos html
        -Borrar elementos html

*/


//Comenzamos a trabajar con los nodos del documento HTML

//1. Guardar los elementos de HTML en variables de JS (let, var, const)

/*Métodos de selección de elementos: Permiten traer una etiqueta de HTML y guardarla para su uso posterior

    -Métodos tradicionales:
        -getElementByTagID  (Trae un elemento por ID)
        -getElementsByTagName
        -getElementsByClassName


*/

//Aquí obtengo un elemento por id
const nombrePaciente = document.getElementById("nombrePaciente");

console.log(nombrePaciente);

//Aquí obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");

console.log(columnas);

//Aquí obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);


/*
Métodos actuales

La única diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases y # para los id)

-document.querySelector
-document.querySelectorAll

*/

//Aquí obtengo un elemento por el selector "#"
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aquí obtengo varios elementos por el selector "."
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Métodos para modificar elementos en su texto

    -innerHTML: esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)



    -textContent: Cambiar o recuperar el contenido de un elemento. Podemos modificar o eliminar el texto (crear un texto nuevo)

*/


//Modificando el texto de h1 con innerHTML
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Nuevo texto de mi título"

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById ("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de confirmacion</p>";

/*

Crear elementos

    -Crear el elemento
        -CreateElement
        -CreateTextNode
        -CreateComment

    -Poner el elemento
        -append
        -appendChild
*/

//Creando un documento con createElement
let imagen = document.createElement("img");


//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perro feliz";

//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);


