/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/

//Guardando mi primer dato en LocalStorage

//localStorage.setItem(key, value)

localStorage.setItem("nombre", "Dylan");

localStorage.setItem("Edad", "29");

localStorage.setItem("Apellido", "Estarrón");

//Guardando en un carrito de compras
let carritoDeCompras = ["papitas", "Pistaches", "Chelitas", "Fresas con crema"];

localStorage.setItem("carritoCompras", carritoDeCompras);

//Obtener la información almacenada en mi LocalStorage

//LocalStorage.getItem(key);
let apellido = localStorage.getItem("carritoCompras");

console.log(apellido);

//borrar un elemento del localStorage

//localStorage.removeItem(key);

localStorage.removeItem("carritoCompras");


//Conocer el largo o longitud del localStorage
//localStorage.length;

let longitud = localStorage.length;
console.log(longitud);