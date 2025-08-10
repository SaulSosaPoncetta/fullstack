import * as readlineSync from 'readline-sync';

let primerNumero : number = readlineSync.questionInt( "Ingrese el primer numero: ");
console.log("el primer numero es ", primerNumero);

let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo numero: ");
console.log("el segundo numero es ", segundoNumero);