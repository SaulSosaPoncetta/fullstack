

// Algoritmo NumerosDeseados
/*import * as rls from 'readline-sync';

let nroDeseadoArreglo : number[] = new Array (5);
let nro : number, indice : number;
for (indice = 0; indice < 5; indice++) { 
     nro = rls.questionInt(`Indique el numero que desea incorporar en la posición ${indice}: `);
     nroDeseadoArreglo[indice]  = nro;
     
}
console.log(`el arreglo es ${nroDeseadoArreglo}`);
/*for (indice = 0; indice < 5; indice++) { 
     console.log(`El numero en la posicion ${indice} es ${nroDeseadoArreglo[indice]}`);
}*/

// Algoritmo DosArreglos 

import * as rls from "readline-sync";


let arregloNombres : string[]  = new Array (1);
let arregloNumeros : number[]  = new Array (1);
let indice : number;

for (indice = 0; indice < 2; indice++) { 
	arregloNombres[indice] = rls.question(`Ingrese el nombre de la posición ${indice}: `);
    let indice2 : number;
    indice2=3;
}
console.log(indice);

for (indice = 0; indice < 3; indice++) { 
	arregloNumeros[indice] = rls.questionInt(`Ingrese el numero de la posición ${indice}: `);
}
/*for (indice = 0; indice < 2; indice++) {
console.log(`El nombre en la posicion ${indice} es: ${arregloNombres[indice]}`); 
}
for (indice = 0; indice < 3; indice++) { 
console.log(`El numero en la posicion ${indice} es: ${arregloNumeros[indice]}`);
}*/

// Algoritmo SumaElementosArreglo 
/*
import * as rls from 'readline-sync';


let dimensionArreglo : number = rls.questionInt(`Ingrese la dimensión del arreglo: `);
let arreglo : number[] = new Array (dimensionArreglo);
let indice : number; 
let resultado : number = 0;
for (indice = 0; indice < dimensionArreglo; indice++) {
	arreglo[indice] = rls.questionInt(`Indique el nro que va en la posición ${indice}: `);
	resultado += arreglo[indice];
    //resultado=resultado + arreglo[indice];
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`); */