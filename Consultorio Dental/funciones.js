//Funciones
//Programa para hacer limonada
 function exprimirLimones(cantidadDeLimon){
    console.log("Exprimiendo " + cantidadDeLimon + " limones.");
    let jugoExtraido = cantidadDeLimon * 10; //Considerando obtener 10ml de jugo por cada limón
    console.log ("Se obtuvo " + jugoExtraido + " ml de jugo de limón");
    return(jugoExtraido);
 }

 //Funcion para mezclar el jugo de limón con agua y azucar
 function mezclarJugoDeLimon (cantidadDeJugo,CantidadDeAgua,CantidadDeAzucar){
    console.log("Mezclando " + cantidadDeJugo + " ml de jugo de limón con " + CantidadDeAgua + " ml de agua " + " y " + CantidadDeAzucar + " gramos de azucar.");
 }

 //Función para servir la limonada
 function servirLimonada (){
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;    
 }

 //Función principal que prepare limonada
 function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200 , 10); //Cantidades ficticias de jugo de limon, de agua y de azucar
    servirLimonada();
 }

 //Llamar función principal para preparar limonada
 var vasoDeLimonada = false;
 prepararLimonada(5);
