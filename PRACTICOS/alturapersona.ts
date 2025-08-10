import * as readlineSync from 'readline-sync';

let alturaPersona = readlineSync.questionInt("Ingrese la altura: ");

const alturaPermitida = 120;

console.log("La altura de la persona: " + alturaPersona + "cm.")

if ( alturaPersona < alturaPermitida ){
    console.log("La persona no puede subir al juego");
    }else {
        console.log("La persona puede subir al juego");
 }