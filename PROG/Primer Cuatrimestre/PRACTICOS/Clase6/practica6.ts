import * as readlineSync from 'readline-sync';

// let base: number = readlineSync.questionInt("Ingrese la base: ");
// let exponente: number = readlineSync.questionInt("Ingrese el exponente: ");


// function calcular(base: number, exponente: number){
//     if (exponente >= 0) {

//         if (exponente === 0) {
//             return 1;
//         } else {
//           return calcularPotencia(base,exponente);
//         }
//     }
// }

// function calcularPotencia(base: number, exponente: number):number {
//     let resultado: number = 1;
//     for (let i: number = 0; i < exponente; i++) {
//         resultado *= base;
//     }
//     return resultado;
// }

// let potencia : any = calcular(base,exponente);

// console.log( base + " a la " + exponente + " potencia = " + potencia );


// //--------------------------------------------------------------------------------

// //Es multiplo
let numero : number = readlineSync.questionInt("Ingrese un numero entero: ");
let numeroDos: number = readlineSync.questionInt("Ingrese otro numero para comprobar si es multiplo del anterior: ");

function esMultiplo(num: number, multiploDe: number): boolean {
   let calcular: boolean = num % multiploDe === 0;
    return calcular;
}
let multiplo :boolean = esMultiplo(numero,numeroDos);
console.log(multiplo);


// //------------------------------------------------------------
// //Cantidad de divisores

// function cantidadDeDivisores(numero: number): number {
//     let cantidad = 0;

//     for (let i = 1; i <= numero; i++) {
//         if (esMultiplo(numero, i)) {
//             cantidad++;
//         }
//     }

//     return cantidad;
// }
// console.log(cantidadDeDivisores(10));

// //------------------------------------------------------------
// function imprimirNombre(nombre: string, apellido: string): string {
//     const nombreCompleto = `${nombre} ${apellido}`;
//     console.log(nombreCompleto);
//     return nombreCompleto;
// }

// imprimirNombre("Karen", "Simari");




// function dibujarLinea(): string {
//     let linea: string = "";

//     for (let i: number = 0; i <= 40; i++) {
//         linea = linea + "-";
//     }

//     console.log(linea);
//     return linea;
// }

// // let valor: string = dibujarLinea();

// // console.log(valor);
// // console.log(valor);
// // console.log(valor);
// // console.log(valor);
// // console.log(valor);

// dibujarLinea();
// dibujarLinea();
// dibujarLinea();
// dibujarLinea();



