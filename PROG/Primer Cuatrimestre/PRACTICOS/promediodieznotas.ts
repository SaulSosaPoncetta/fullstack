import * as readlineSync from 'readline-sync';

let suma : number;
let promedio : number; 
let contador : number;
contador = 1
suma = 0
while (contador <= 10) {

    let nota : number = readlineSync.questionFloat("Ingrese la nota: ");
    

    suma = suma + nota

    contador = contador + 1
}

promedio = suma / 10

console.log("el promedio es: ", promedio);