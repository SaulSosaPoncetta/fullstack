"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var suma;
var promedio;
var contador;
contador = 1;
suma = 0;
while (contador <= 10) {
    var nota = readlineSync.questionFloat("Ingrese la nota: ");
    suma = suma + nota;
    contador = contador + 1;
}
promedio = suma / 10;
console.log("el promedio es: ", promedio);
