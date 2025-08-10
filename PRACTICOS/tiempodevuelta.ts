import * as readlineSync from 'readline-sync';
let vuelta1 : number = readlineSync.questionInt("Ingrese vuelta 1: ");
console.log("el tiempo de la vuelta 1 es: ", vuelta1);

let vuelta2 : number = readlineSync.questionInt("Ingrese vuelta 2: ");
console.log("el tiempo de la vuelta 2 es: ", vuelta2);

let vuelta3 : number = readlineSync.questionInt("Ingrese vuelta 3: ");
console.log("el tiempo de la vuelta 3 es: ", vuelta3);

let vuelta4 : number = readlineSync.questionInt("Ingrese vuelta 4: ");
console.log("el tiempo de la vuelta 4 es: ", vuelta4);

let tiempoTotal : number;

tiempoTotal = (vuelta1 + vuelta2 + vuelta3 + vuelta4);

console.log("Tiempo total: ", + tiempoTotal +".");
console.log("Promedio de vuelta", + tiempoTotal/4 + ".");