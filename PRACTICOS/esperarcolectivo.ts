import * as readlineSync from 'readline-sync';

console.log ("Esperando el colectivo");

let llegadaColectivo : string = readlineSync.question( "Llegó el colectivo? (V o F)");

while (llegadaColectivo == "N" ){
    console.log ("Llegó el colectivo? (S o N)");
    llegadaColectivo = readlineSync.question( "Llegó el colectivo? (S o N)");
}

console.log ("Llegó el colectivo? (S o N)");