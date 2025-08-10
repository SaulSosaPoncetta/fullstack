import * as readlineSync from 'readline-sync';

let numero : number = readlineSync.questionInt("Ingrese el numero: ");
console.log("el numero actual es : ", numero);
    
if (numero=0) {
        console.log( "El " + numero + " no es par ni impar")
} else {
     if (% numero) {
                console.log( "El " + numero + " es par" );
     } else {
                console.log("El " + numero + " es impar")
     }
    }