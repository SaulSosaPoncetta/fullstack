import * as readlineSync from 'readline-sync';

let dimension : number = 6;
let arregloA : number []= new Array(dimension);
let arregloB : number []= new Array(dimension);
let arregloSuma : number []= new Array(dimension);

for(let i = 0; i < arregloA.length; i++){
    arregloA[i] = readlineSync.questionInt("Ingrese un numero para el arreglo A: posicion: " +i+ ": ");
    arregloB[i] = readlineSync.questionInt("Ingrese un numero para el arreglo B: posicion: " +i+ ": ");
    }

for(let i = 0; i < arregloA.length; i++){
        arregloSuma[i] = arregloA[i]+ arregloB[i];    
    }

for(let i = 0; i < arregloA.length; i++){
    console.log("el resultado es : ", arregloSuma[i]);
}