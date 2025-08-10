/*Implemente un método llamado calcularResultado que reciba por parámetros los dos números y la opción 
y retorne el resultado de la operación
*/

import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese un numero: ");
let numero2: number = rls.questionInt("Ingrese el segundo numero: ");
let opcionMenu: number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion: number = 0;

function calcularResultado(nro1: number, nro2: number, opcionMenu: number): number {
    let resultado: number = 0;
    if (opcionMenu == 1) {
        resultado = nro1 + nro2;
    } else if (opcionMenu == 2) {
        resultado = nro1 - nro2;
    }
    return resultado;
}

resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);

dibujarGuionesN(resultadoFuncion);
console.log('El resultado es:  ', resultadoFuncion);
dibujarGuionesN(resultadoFuncion);

function dibujarGuionesN(numeroDeGuiones: number) {
    let i: number;
    let linea: string = "";
    for (i = 0; i <= numeroDeGuiones; i++) {
        linea = linea + "-";
    };
    console.log(linea);
}
